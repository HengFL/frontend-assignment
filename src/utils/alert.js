/* libs */
import Swal from 'sweetalert2';
/* storage */
import userInfoStorage from "storage/userInfoStorage";
/* utils */
import common from "./common";

/* mixin */
const SwalWithBootstrap = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-primary btn-sm min-w-90px mx-1',
        cancelButton: 'btn btn-secondary btn-sm min-w-90px mx-1',
        denyButton: 'btn btn-success btn-sm min-w-90px mx-1'
    },
    buttonsStyling: false,
    showCloseButton: true,
})

const success = (msg, callback = () => { }) => {
    SwalWithBootstrap.fire({
        icon: 'success',
        title: 'สำเร็จ',
        html: msg,
        allowOutsideClick: false,
        focusConfirm: false,
        confirmButtonText: 'ตกลง',
    }).then((result) => {
        if (result.isConfirmed) {
            callback();
        }
    })
}

const warning = (msg, callback = () => { }) => {
    SwalWithBootstrap.fire({
        icon: 'warning',
        title: 'แจ้งเตือน',
        html: msg,
        allowOutsideClick: false,
        focusConfirm: false,
        confirmButtonText: 'ตกลง',
    }).then((result) => {
        if (result.isConfirmed) {
            callback();
        }
    })
}

const info = (msg) => {
    SwalWithBootstrap.fire({
        icon: 'info',
        // title: 'สำเร็จ',
        html: msg,
        allowOutsideClick: false,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: 'ตกลง',
    })
}

const error = (msg, code, callback = () => { }) => {
    if (msg && msg.includes('401')) {
        sessionExpired()
    }
    else {
        let message = '';
        if (code) message += `<p class="mb-1">Error Code: ${code}</p>`;
        if (msg) message += `<p class="mb-0">${msg}</p>`;
        SwalWithBootstrap.fire({
            icon: 'error',
            title: 'พบข้อผิดพลาดของระบบ',
            html: message,
            allowOutsideClick: false,
            focusConfirm: false,
            confirmButtonText: 'ตกลง',
        }).then((result) => {
            if (result.isConfirmed) {
                callback();
            }
        })
    }
}

const successAutoClose = (msg, callback = () => { }) => {
    SwalWithBootstrap.fire({
        icon: 'success',
        title: 'สำเร็จ',
        html: msg,
        allowOutsideClick: false,
        focusConfirm: false,
        showConfirmButton: false,
        showCloseButton: false,
        timer: 1000,
    }).then(() => {
        callback();
    })
}

const sessionExpired = () => {
    let checkSession = common.checkSession();
    if (checkSession === false) {
        userInfoStorage.remove();
        window.location.href = "/auth/login";
    }
    else {
        let userInfo = userInfoStorage.get();
        SwalWithBootstrap.fire({
            icon: "error",
            title: userInfo?.token ? "เซสชั่นหมดอายุ" : "ไม่พบการเข้าสู่ระบบ",
            html: 'กรุณาเข้าสู่ระบบอีกครั้ง',
            showCloseButton: true,
            allowOutsideClick: false,
            focusConfirm: false,
            confirmButtonText: "เข้าสู่ระบบ",
        }).then(() => {
            userInfoStorage.remove();
            window.location.href = "/auth/login";
        });
    }
}

const getMessage = (response) => {
    let message = "";
    if (response?.payload?.message) {
        message = response?.payload?.message;
        if (response?.payload?.errors?.length > 0) {
            message = response?.payload?.errors?.join(" ");
        }
    }
    else {
        message = response?.error?.message;
    }
    return message || "";
};

const alert = {
    custom: SwalWithBootstrap,
    success: success,
    warning: warning,
    info: info,
    error: error,
    successAutoClose: successAutoClose,
    getMessage: getMessage
}

export default alert;