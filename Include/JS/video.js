//  FOR vedio Section
var vedio = 0;
// get vedio 
var vedioLogo = document.getElementById("vedioslider");
// Vedio
var Vedio = [
    'https://player.vimeo.com/video/469174861',
    'https://player.vimeo.com/video/469183308',
];

function VedioNext() {
    if (Vedio.length - 1 > vedio) {
        vedio++;
        changeVedio(vedio);
    }
}
function VedioPrev() {
    if (vedio > 0) {
        vedio--;
        changeVedio(vedio);
    }
}

function changeVedio(vedio) {
    vedioLogo.src = Vedio[vedio];
}
