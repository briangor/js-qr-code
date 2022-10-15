let weblink;
let btn = document.getElementById("genQrBtn");

let generateQR = () => {
    weblink = document.getElementById('weblink').value;

    if (!weblink) {

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          });
          
          Toast.fire({
            icon: 'warning',
            title: 'The link is empty!'
          });

        return;
    }

    new QRious({
        element: document.getElementById("qrcode"),
        background: '#fff',
        backgroundAlpha: 1,
        foreground: '#5868bf',
        foregroundAlpha: 1,
        level: 'H',
        padding: 0,
        size: 300,
        value: weblink
      });

    console.log('generate QR');
}

btn.addEventListener("click", generateQR);