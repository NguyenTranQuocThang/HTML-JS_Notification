function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
    const main = document.getElementById("toast");
    const icons = {
        success: "fas fa-check-circle",
        info: "fas fa-info-circle",
        warning: "fas fa-exclamation-circle",
        error: "fas fa-exclamation-circle"
    };
    const icon = icons[type]
    const toast = document.createElement("div")
    const delay = duration / 1000

    const autoRemove = setTimeout(function (e) {
        main.removeChild(toast)
    }, duration + 1000)

    toast.onclick = function (e) {
        if (e.target.closest('.toast__close')) {
            main.removeChild(toast)
            clearInterval(autoRemove)
        }
    }
    toast.classList.add("toast", `toast--${type}`)
    toast.style.animation = `sideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`
    toast.innerHTML =
        ` <div class="toast__icon"><i class="${icon}"></i></div>
        <div class="toast__body">
        <h3 class="toast__title">${title}</h3>
        <p class="toast__message">${message}</p>
        </div>
        <div class="toast__close"><i class="fa-solid fa-xmark"></i></i></div>`;
    main.appendChild(toast)
}