let weblink;
let btn = document.getElementById("genQrBtn");
let input_box = document.getElementById('weblink');

let generateQR = () => {
  weblink = document.getElementById('weblink').value;

  if (!weblink) {
    
    input_box.classList.add('empty-input');

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
  input_box.classList.remove('empty-input');

  new QRious({
    element: document.getElementById("qrcode"),
    background: '#fff',
    backgroundAlpha: 1,
    foreground: '#5868bf', // #5868bf, #7851a9
    foregroundAlpha: 1,
    level: 'H',
    padding: 0,
    size: 300,
    mime: 'image/png',
    value: weblink
  });

  //console.log(QRious.prototype);
}

btn.addEventListener("click", generateQR);