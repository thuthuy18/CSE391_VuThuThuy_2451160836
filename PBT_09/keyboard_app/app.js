// =========================
// IMAGES
// =========================

const images = [
    "https://placehold.co/900x500?text=Image+1",
    "https://placehold.co/900x500?text=Image+2",
    "https://placehold.co/900x500?text=Image+3",
    "https://placehold.co/900x500?text=Image+4",
    "https://placehold.co/900x500?text=Image+5"
];

// =========================
// ELEMENTS
// =========================

const galleryImage = document.getElementById("galleryImage");

const modal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

const playBtn = document.getElementById("playBtn");

const palette = document.getElementById("palette");

const commandInput = document.getElementById("commandInput");

const commandList = document.getElementById("commandList");

// =========================
// STATE
// =========================

let currentIndex = 0;

let playing = false;

let interval = null;

// =========================
// COMMANDS
// =========================

const commands = [
    "Open Gallery",
    "Play Slideshow",
    "Stop Slideshow",
    "Next Image",
    "Previous Image",
    "Dark Mode"
];

// =========================
// UPDATE IMAGE
// =========================

function updateImage() {
    galleryImage.src = images[currentIndex];
}

// =========================
// NEXT / PREV
// =========================

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex =
        (currentIndex - 1 + images.length) %
        images.length;

    updateImage();
}

// =========================
// SLIDESHOW
// =========================

function toggleSlideshow() {

    if (playing) {

        playing = false;

        clearInterval(interval);

        playBtn.textContent = "▶ Play";

    } else {

        playing = true;

        playBtn.textContent = "⏸ Pause";

        interval = setInterval(() => {
            nextImage();
        }, 2000);
    }
}

// =========================
// BUTTON EVENTS
// =========================

nextBtn.addEventListener("click", nextImage);

prevBtn.addEventListener("click", prevImage);

playBtn.addEventListener("click", toggleSlideshow);

// =========================
// OPEN MODAL
// =========================

galleryImage.addEventListener("click", () => {

    modal.classList.remove("hidden");

    modalImage.src = images[currentIndex];
});

// =========================
// RENDER COMMANDS
// =========================

function renderCommands(list) {

    commandList.innerHTML = "";

    list.forEach(cmd => {

        const li = document.createElement("li");

        li.textContent = cmd;

        li.addEventListener("click", () => {
            alert("Selected: " + cmd);
            palette.classList.add("hidden");
        });

        commandList.appendChild(li);
    });
}

// =========================
// KEYBOARD EVENTS (FIXED)
// =========================

document.addEventListener("keydown", (e) => {

    const isTyping =
        document.activeElement.tagName === "INPUT" ||
        document.activeElement.tagName === "TEXTAREA";

    // ESC always works
    if (e.key === "Escape") {

        modal.classList.add("hidden");

        palette.classList.add("hidden");

        return;
    }

    // CTRL + K (OPEN PALETTE)
    if (e.ctrlKey && e.key.toLowerCase() === "k") {

        e.preventDefault();

        palette.classList.remove("hidden");

        commandInput.value = "";

        renderCommands(commands);

        commandInput.focus();

        return;
    }

    // ignore other shortcuts when typing
    if (isTyping) return;

    // LEFT / RIGHT
    if (e.key === "ArrowLeft") prevImage();

    if (e.key === "ArrowRight") nextImage();

    // NUMBER KEYS 1-9
    if (e.key >= "1" && e.key <= "9") {

        const index = Number(e.key) - 1;

        if (images[index]) {

            currentIndex = index;

            updateImage();
        }
    }

    // SPACE
    if (e.code === "Space") {

        e.preventDefault();

        toggleSlideshow();
    }
});

// =========================
// COMMAND SEARCH
// =========================

commandInput.addEventListener("input", () => {

    const keyword = commandInput.value.toLowerCase();

    const filtered = commands.filter(cmd =>
        cmd.toLowerCase().includes(keyword)
    );

    renderCommands(filtered);
});

// =========================
// INIT
// =========================

renderCommands(commands);

updateImage();