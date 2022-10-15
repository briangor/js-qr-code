let weblink;
let btn = document.getElementById("genQrBtn");

btn.addEventListener("click", generateQR);

function generateQR() {
    weblink = document.getElementById('weblink').value;

    if (!weblink) {
        weblink = 'The link is empty!';
        return;
    }

    new QRious({
        element: document.getElementById("qrcode"),
        background: '#ffffff',
        backgroundAlpha: 1,
        foreground: '#5868bf',
        foregroundAlpha: 1,
        level: 'H',
        padding: 3,
        size: 256,
        value: weblink
      });

    console.log(weblink);
    console.log('generate QR');
}