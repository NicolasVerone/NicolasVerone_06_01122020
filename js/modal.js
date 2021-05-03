
const init = () => {
    const closeModalBtn = document.getElementById("closemodal");
    const launchModalBtn = document.getElementById("launchmodal");
    closeModalBtn.addEventListener("click", () => {
        closeModal();

    });
    launchModalBtn.addEventListener("click", () => {
        launchModal();
    });
}

    const launchModal = () => {
        const modalbg = document.getElementById("modalbg");
        modalbg.style.display = "block";
    };

    const closeModal = () => {
        const modalbg = document.getElementById("modalbg");
        modalbg.style.display = "none";
    };

    init();
















