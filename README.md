# QR-Code-Generator
<div align="center">
  <h1> 📲 Instant QR Generator </h1>
  <p><i>A sleek, functional web tool to transform any text or URL into a scan-ready QR code.</i></p>
</div>

<hr />

## 📖 Project Overview
This application provides a seamless user experience for generating QR codes. It features a dedicated welcome landing page and a robust generation interface that handles empty states with custom notifications.

### ✨ Key Features
* **Two-Stage Interface:** Includes a "Welcome" entry screen before entering the generator.
* **Real-time API Integration:** Uses the QRServer API to generate high-quality codes instantly.
* **Smart Loading:** The UI ensures the image box remains hidden until the QR code has fully finished downloading to prevent "flickering".
* **Validation Alerts:** Built-in custom modal notification if a user tries to generate a code with an empty input field.

---

## 🚀 How to Use
1. **Launch:** Click "Start" on the welcome screen to enter the generator.
2. **Input:** Enter any URL or text into the input field.
3. **Generate:** Click the "Generate QR Code" button.
4. **Scan:** Your custom QR code will appear instantly, ready to be scanned by any mobile device.

---

## 🛠️ Technical Stack
* **HTML5:** Structured with hidden states for a single-page application (SPA) feel.
* **CSS3:** Styled with a professional deep-blue theme, custom transitions, and box-shadow effects.
* **JavaScript (ES6):** Manages DOM manipulation, API requests, and event listeners.

---

## 📂 File Structure
```text
├── QR.html   # Page structure and modals
├── QR.css    # Professional blue-theme styling
├── QR.js     # Logic for API calls and UI state management
└── README.md # Documentation
