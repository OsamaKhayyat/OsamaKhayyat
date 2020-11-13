//  FOR vedio Section
var vedio = 0;
// get vedio 
var vedioLogo = document.getElementById("vedioslider");
// Vedio
var Vedio = [
    "https://www.youtube.com/embed/PYx29BZWDrs",
    "https://www.youtube.com/embed/Z8zAQhMgWZY",
    
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
