//  FOR Client Section
var Client = 0;
// GetClientImage
var ClientLogo = document.getElementById("custmerlogo");
// Logo 
var logo = [
    'image/logos1.png',
    'image/logos2.png',
    'image/logos3.png',
    'image/logos4.png',
];

function logoNext() {
    if (logo.length - 1 > Client) {
        Client++;
        changelogoImage(Client);
    }
}
function logoPrev() {
    if (Client > 0) {
        Client--;
        changelogoImage(Client);
    }
}

function changelogoImage(Client) {
    ClientLogo.src = logo[Client];
}
