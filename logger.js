const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = $("#toast");
  if (main) {
    const toast = document.createElement("DIV");
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration);
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };
    const icons = {
      success: "checkmark-circle-outline",
      info: "information-outline",
      warning: "warning-outline",
      error: "alert-circle-outline",
    };
    const delay = (duration / 1000).toFixed();
    toast.style.animation = `slideInLeft ease 0.6s, fadeOut linear 1s ${delay}s forwards`;
    const icon = icons[type];
    toast.classList.add("toast", `toast--${type}`);
    toast.innerHTML = `<div class="toast__icon">
                      <ion-icon name="${icon}"></ion-icon>
                    </div>
                    <div class="toast__body">
                      <h3 class="toast__title">${title}</h3>
                      <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                      <ion-icon name="close-outline"></ion-icon>
                    </div>`;
    main.appendChild(toast);
  }
}
function handleEvent() {
  const showSuccess = $(".show-success");
  const showError = $(".show-error");
  showSuccess.onclick = function () {
    toast({
      title: "Thành công",
      message: "Đăng nhập thành công",
      type: "success",
      duration: 5000,
    });
  };

  showError.onclick = function () {
    toast({
      title: "Thất bại",
      message: "Xảy ra lỗi liên hệ quản trị viên",
      type: "error",
      duration: 5000,
    });
  };
}

function start() {
  handleEvent();
}
export default start;
