console.log("Email Writer Extension - Content Script Loaded");

function getEmailContent() {
    const selectors = [
        '.h7',
        '.a3s.aiL',
        '.gmail_quote',
        '[role="presentation"]'
    ];
    for (const selector of selectors) {
        const content = document.querySelector(selector);
        if (content) {
            return content.innerText.trim();
        }
    }
    return '';
}

function createAIButton() {
    const button = document.createElement('button');
    button.className = 'ai-reply-button';
    button.innerHTML = 'AI Reply';
    button.setAttribute('type', 'button');
    return button;
}

function createToneDropdown() {
    const dropdown = document.createElement('div');
    dropdown.className = 'ai-reply-dropdown';

    const button = createAIButton();
    
    const dropdownToggle = document.createElement('button');
    dropdownToggle.className = 'ai-reply-dropdown-toggle';
    dropdownToggle.setAttribute('type', 'button');
    //dropdownToggle.innerHTML = '▼';  // The dropdown arrow is only here
    
    const dropdownMenu = document.createElement('ul');
    dropdownMenu.className = 'ai-reply-dropdown-menu';
    
    const tones = ['None','Professional', 'Casual', 'Friendly', 'Formal', 'Witty'];
    tones.forEach(tone => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'dropdown-item';
        link.textContent = tone;
        link.dataset.value = (tone=='None')?'':tone.toLowerCase();
        item.appendChild(link);
        dropdownMenu.appendChild(item);
    });

    dropdown.appendChild(button);
    dropdown.appendChild(dropdownToggle);
    dropdown.appendChild(dropdownMenu);
    
    return { dropdown, dropdownMenu, dropdownToggle };
}

function findComposeToolbar() {
    const selectors = [
        '.btC',
        '.aDh',
        '[role="toolbar"]',
        '.gU.Up'
    ];
    for (const selector of selectors) {
        const toolbar = document.querySelector(selector);
        if (toolbar) {
            return toolbar;
        }
    }
    return null;
}

function injectButton() {
    const existingContainer = document.querySelector('.ai-reply-dropdown');
    if (existingContainer) existingContainer.remove();

    const toolbar = findComposeToolbar();
    if (!toolbar) {
        console.log("Toolbar not found");
        return;
    }

    console.log("Toolbar found, creating AI button and dropdown");

    const { dropdown, dropdownMenu, dropdownToggle } = createToneDropdown();
    let selectedTone = 'professional';
    const button = dropdown.querySelector('.ai-reply-button');
    const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            selectedTone = e.target.dataset.value;
            console.log("Tone selected:", selectedTone);
            button.innerText = 'AI Reply: ' + e.target.textContent;
            dropdownMenu.style.display = 'none'; // Hide dropdown after selecting an item
        });
    });

    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        // Toggle dropdown visibility
        if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
            dropdownMenu.style.display = 'block';
        } else {
            dropdownMenu.style.display = 'none';
        }
    });

    button.addEventListener('click', async () => {
        try {
            button.innerHTML = 'Generating...';
            button.disabled = true;

            const emailContent = getEmailContent();

            const response = await fetch('http://localhost:8080/api/email/generate', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "emailContent": emailContent,
                    "tone": selectedTone
                })
            });

            if (!response.ok) throw new Error("API request failed");

            const generatedReply = await response.text();
            const composeBox = document.querySelector('[role="textbox"][g_editable="true"]');

            if (composeBox) {
                composeBox.focus();
                document.execCommand('insertText', false, generatedReply);
            } else {
                console.error("Compose Box was not found");
            }
        } catch (error) {
            console.log(error);
            alert("Failed to generate reply");
        } finally {
            button.innerHTML = 'AI Reply';
            button.disabled = false;
        }
    });

    // Add dropdown and button to the toolbar
    toolbar.insertBefore(dropdown, toolbar.firstChild);
}

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComposeElements = addedNodes.some(node =>
            (node.nodeType === Node.ELEMENT_NODE) &&
            (node.matches('.aDh, .btC, [role="dialog"]') || node.querySelector('.aDh, .btC, [role="dialog"]'))
        );
        if (hasComposeElements) {
            console.log("Compose Window Detected");
            setTimeout(injectButton, 500);
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
