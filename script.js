let qrcode = document.querySelector("img"),
    qrtext = document.querySelector("textarea"),
    qrbtn = document
        .querySelector("button")
        .addEventListener("click", generateQR);

function generateQR() {
    let size = "300x300";
    let data = qrtext.value;

    // there are two api's to implement this
    // with qrserver
    //let baseURL = "https://api.qrserver.com/v1/create-qr-code/?";
    //let url = `${baseURL}size=${size}&data=${data}`;

    // with google , i prefer this one
    let baseURL = "https://chart.googleapis.com/chart?cht=qr";
    let url = `${baseURL}&chs=${size}&chl=${data}`;

    qrcode.src = url;
}
