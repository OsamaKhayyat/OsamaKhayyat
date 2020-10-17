//  FOR web Section
var web = 0;
// get vedio 
var webimage = document.getElementById("web");
// Vedio
var Web = [
    'image/Landing Page2.png',
    'image/landingpage3.png',
];

function webNext() {
    if (Web.length - 1 > web) {
        web++;
        changeWeb(web);
    }
}
function WebPrev() {
    if (web > 0) {
        web--;
        changeWeb(web);
    }
}

function changeWeb(web) {
    webimage.src = Web[web];
}