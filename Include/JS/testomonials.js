//  FOR theClient Section
var Testomonailindex = 0;
//  Get Text
var TestomonialMainText = document.getElementById("TestimoniaMainText");
//  Get Name 
var TestimonialsText = document.getElementById("TestimonialsText");
// TetomonialName
var TetomonialName = [
    [
        'Swim Jordan',
        'Working with Convert has had a lot of positive impacts on our business by turning ideas into reality by their creativity in creating content and their highly effective ads that got us lots of leads and engagements Beside to that, the brainstorming session that is done on monthly basis, and the easy communication with Convert, both had their fine share of growing the business I have.',

    ],

];
function TestomonialNext() {
    if (TetomonialName.length - 1 > Testomonailindex) {
        Testomonailindex++;
        changeTitelandTestomonial(Testomonailindex);
    }
}
function TestomonialPrev() {
    if (Testomonailindex > 0) {
        Testomonailindex--;
        changeTitelandTestomonial(Testomonailindex);
    }
}

function changeTitelandTestomonial(Testomonailindex) {
    TestimonialsText.innerHTML = TetomonialName[Testomonailindex][0];
    TestomonialMainText.innerHTML = TetomonialName[Testomonailindex][1];
}

