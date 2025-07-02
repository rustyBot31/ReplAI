# 📬 ReplAI – AI-Powered Email Reply Assistant

ReplAI is a full-stack AI email assistant designed to generate context-aware email replies based on the content and desired tone (e.g., professional, casual). It includes:

- 🌐 A **web application** built with **Spring Boot (backend)** and **React with Vite (frontend)**, styled using **Material UI**.
- 🧩 A **Gmail browser extension** that integrates directly into the Gmail interface, adding an "AI Reply" button to the compose toolbox.
- 🤖 Integration with **Gemini** as the AI agent for generating intelligent responses.

---

## 🚀 Features

- ✉️ Generate AI-powered replies to emails.
- 🎯 Choose the tone of the reply: Professional, Casual, etc.
- 🧩 Gmail extension for seamless Gmail integration.
- ⚡ Fast and responsive UI with **Vite** and **Material UI**.

---

## 🧠 Tech Stack

- **Frontend**: React, Vite, Material UI  
- **Backend**: Spring Boot (Java)  
- **AI Agent**: Gemini  
- **Extension**: Chrome Extension (Manifest V3)  
- **Deployment**: GitHub Pages / Any Server  

---

## 🖥️ Web Application

The ReplAI web application allows users to:
- Input the original email content.
- Select the desired tone for the reply.
- Generate and copy the AI-generated reply.

---

## 📎 Gmail Browser Extension

Enhance your Gmail experience with the ReplAI browser extension:
- 🔘 Adds an "AI Reply" button to the Gmail compose box.
- 📥 Automatically fetches the email content.
- 🤖 Generates contextual replies instantly based on tone selected by the user.

---

## 📂 Project Structure

```bash
ReplAI/
├── email-writer-sb/ // Spring Boot API for AI reply generation
├── email-writer-react/ // React + Vite app
├── email-writer-extension/ // Chrome extension for Gmail integration
├── README.md
```

---

## 🧰 System Prerequisites

### Backend
- Java Development Kit (JDK) 21+
- Maven
- Environment Variables:
  - `GEMINI_API_URL`: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=`
  - `GEMINI_API_KEY`: *Your actual API key*

### Frontend
- Node.js (version 18 or above)

---

### 1. Clone the Repository
```bash
git clone https://github.com/rustyBot31/ReplAI.git
cd ReplAI
```

### 2. Backend Setup
- Open the folder `email-writer-sb` in your code editor.
- Navigate to the class `EmailWriterSbApplication` and click Run from the file.

### 3. Frontend Setup
- Open the folder `email-writer-react` in your code editor.
- Run the following commands in the terminal:
  ```bash
  npm install
  npm run dev
  ```

### 4. Gmail Extension Setup
- Navigate to `chrome://extensions` in your browser.
- Enable #### Developer Mode.
- Click #### Load Unpacked.
- Select the `email-writer-extension` folder inside the ReplAI directory.
- Pin the extension to your browser.

---

## 🙌 Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or feature suggestions.
