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


<
<p>Follow the instructions below and execute the commands to get ReplAI on your system!(-> implies its a command you have to run)</p>
<h2>🧰 System Prerequisites</h2>
<ul>
 <li>
  <b>Backend</b>
 <ul>
  <li>Java Development Kit (JDK): Ensure Java 21+ is installed.</li>
  <li>Maven: Required for building the project.</li>
  <li>Set the following environment variables with your Gemini API credentials:
  <ul>
   <li>GEMINI_API_URL: https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=</li>
   <li>GEMINI_API_KEY: Your actual API key.</li>
  </ul>
  </li>
 </ul>
 </li>
 <li>
  <b>Frontend (React with Vite)</b>
  <ul>
   <li>Node.js: Ensure Node.js (preferably version 18 or above) is installed.
  </ul>
 </li>
</ul>
<h2>🛠️ Setup Instructions</h2>
<ol>
<li><b>Clone the repository</b><br>
 -> git clone https://github.com/rustyBot31/ReplAI.git<br>
 -> cd ReplAI
</li>
<li><b>Backend</b><br>
<ol>
 <li>Open the folder email-writer-sb on your code editor</li>
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
