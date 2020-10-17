//  FOR Client Section
var Client = 0;
// GetClientImage
var ClientLogo = document.getElementById("custmerlogo");
// Logo 
var logo = [
    'image/logos5.png',
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


// Auto Change Image
function changeworkimageClient() {
    if ((logo.length) - 1 > (Client)) {
        Client++;
    } else {
        Client = 0;
    }
    ClientLogo.src = logo[Client];
    // Auto Slide 
    setTimeout(changeworkimageClient, 2200);
}
changeworkimageClient();
