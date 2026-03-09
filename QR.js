const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const imgBox = document.getElementById("imgBox");

const notification = document.getElementById("notification");
const welcomePage = document.getElementById("welcomePage");
const generatorPage = document.getElementById("generatorPage");

const startBtn = document.getElementById("startBtn");
const generateBtn = document.getElementById("generateBtn");
const okBtn = document.getElementById("okBtn");

//Show welcome page, hide generator and notification
startBtn.addEventListener("click", () => {
    welcomePage.classList.add("hidden");
    generatorPage.classList.remove("hidden");
});

// QR Generation Logic
generateBtn.addEventListener("click", () => {
    const userInput = qrText.value.trim();
    if (userInput.length > 0) {
        // 1. Immediately hide the box so the OLD image or 'alt' text disappears
        imgBox.classList.add("hidden");
        // 2. Set the new image source
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(userInput)}`;
        // 3. ONLY show the box when the new image is 100% finished downloading
        qrImage.onload = () => {
            imgBox.classList.remove("hidden");
        };
    } else {
        // If empty, hide the box and show the alert
        imgBox.classList.add("hidden");
        notification.classList.remove("hidden");
    }
});

// Hide the notification when "OK" is clicked
okBtn.addEventListener("click", () => {
    notification.classList.add("hidden");
});