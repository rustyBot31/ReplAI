# 📬ReplAI – AI-Powered Email Reply Assistant

ReplAI is a full-stack AI email assistant designed to generate context-aware email replies based on the content and desired tone (e.g., professional, casual). It comprises:
<ul>
 <li>A web application built with Spring Boot (backend) and React with Vite (frontend), styled using Material UI.</li>
 <li>A Gmail browser extension that integrates directly into the Gmail interface, adding an "AI Reply" button to the compose toolbox.</li>
 <li>Integration with Gemini as the AI agent for generating intelligent responses.</li>
</ul>

 <h2>🚀Features</h2>
 <ul>
 <li>✉️ Generate AI-powered replies to emails.</li>
 <li>🎯 Select the tone of the reply: Professional, Casual, etc.</li>
 <li>🧩 Gmail extension for seamless integration.</li>
 <li>⚡ Fast and responsive UI with Vite and Material UI.</li>
</ul>

<h2>🧠 Tech Stack</h2>
<ul>
 <li><b>Frontend</b>	- React, Vite, Material UI</li>
 <li><b>Backend</b>	- Spring Boot(Java)</li>
 <li><b>AI Agent</b>	- Gemini</li>
 <li><b>Extension</b>	- Manifest V3</li>
 <li><b>Deployment</b>	- GitHub Pages/Any Server</li>
</ul>

<h2>🖥️ Web Application</h2>
The ReplAI web application allows users to:
<ul>
<li>Input the original email content.</li>
<li>Select the desired tone for the reply.</li>
<li>Generate and copy the AI-generated reply.</li>
</ul>

<h2>📎 Gmail Browser Extension</h2>
Enhance your Gmail experience with the ReplAI browser extension:
<ul>
<li>🔘 Adds an "AI Reply" button to the Gmail compose box.</li>
<li>📥 Automatically fetches the email content.</li>
<li>🤖 Generates contextual replies instantly based on tone set by user</li>
</ul>

<h2>📂 Project Structure</h2>
ReplAI/<br>
├── email-writer-sb/      // Spring Boot API for AI reply generation <br>            
├── email-writer-react/       //  React + Vite app <br>            
├── email-writer-extension/         // Chrome extension for Gmail integration <br>          
├── README.md <br>

<h2>🛠️ Setup Instructions</h2>
<p>Follow the instructions below and execute the commands to get ReplAI on your system!(-> implies its a command you have to run)</p>
<ol>
<li><b>Clone the repository</b><br>
 -> git clone https://github.com/rustyBot31/ReplAI.git<br>
 -> cd ReplAI
</li>
<li><b>Backend</b><br>
<ol>
 <li>Open the folder email-writer-sb on your code editor</li>
<li>Move to the folder .vscode (if you are using vscode) and in the launch.json file, add your gemini api key next to the "GEMINI_API_KEY" field as a string
(If you are using some other ide, make sure to add "GEMINI_API_KEY" and "GEMINI_API_URL" as environment variables alongwith the values. You can refer to the launch.json file I have provided, and yeah remove the .vscode folder if on some other ide).</li>
<li>Move to the class EmailWriterSbApplication and click 'Run'. </li>
</ol>
</li>
<li><b>Frontend</b><br>
Open the folder email-writer-react on your code editor and run the commands on tthe terminal<br>
-> npm install<br>
-> npm run dev
</li>
<li><b>Browser Extension</b><br>
<ol>
 <li>Navigate to chrome://extensions in your browser.</li>
 <li>Enable Developer Mode.</li>
 <li>Click Load Unpacked</li>
 <li>Select the folder ReplAI and select the email-writer-extension folder</li>
 <li>Pin the extension.</li>
</ol>
</li>
</ol>

<h2>🙌 Contributing</h2>
Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or feature suggestions.
