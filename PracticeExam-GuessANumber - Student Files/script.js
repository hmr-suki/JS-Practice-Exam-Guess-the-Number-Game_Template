guessSentence = document.querySelector(".guess");
imag1 = document.querySelector(".Img1");
imag2 = document.querySelector(".Img2");
imag3 = document.querySelector(".Img3");
imag4 = document.querySelector(".Img4");
imag5 = document.querySelector(".Img5");
showImage = document.querySelector(".WWW");
counter = 0;

randomNumber = getRandomIntInclusive(1, 5);

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // maximum and minimum are inclusive
}

function changeSentence() {
    guessSentence.textContent = "You have guessed " + counter + " times.";

}
function showimage() {
    showImage.src = "imgs/YouWin.png";
}
function image1() {
        if (randomNumber === 1){
        showimage();
        blockAll();

    }else {
    imag1.style.visibility = "hidden";
    counter++;
    changeSentence();}
    
}
function image2() {
        if (randomNumber === 2){
        showimage();
        blockAll();

    }else {
    imag2.style.visibility = "hidden";
    counter++;
    changeSentence();}
}
function image3() {
       if (randomNumber === 3){
        showimage();
        blockAll();

    }else {
    imag3.style.visibility = "hidden";
    counter++;
    changeSentence();}
}        
function image4() {
        if (randomNumber === 4){
        showimage();
        blockAll();

    }else {
    imag4.style.visibility = "hidden";
    counter++;
    changeSentence();}
}
function image5() {
        if (randomNumber === 5){
        showimage();
        blockAll();

    }else {
    imag5.style.visibility = "hidden";
    counter++;
    changeSentence();}
}

function blockAll() {
    document.querySelector(".Img1").removeEventListener("click", image1);
    document.querySelector(".Img2").removeEventListener("click", image2);
    document.querySelector(".Img3").removeEventListener("click", image3);
    document.querySelector(".Img4").removeEventListener("click", image4);
    document.querySelector(".Img5").removeEventListener("click", image5);
}
function reset() {
    randomNumber = getRandomIntInclusive(1, 5);
    counter = 0;
    imag1.style.visibility = "visible";
    imag2.style.visibility = "visible";
    imag3.style.visibility = "visible";
    imag4.style.visibility = "visible";
    imag5.style.visibility = "visible";
    document.querySelector(".Img1").addEventListener("click", image1);
    document.querySelector(".Img2").addEventListener("click", image2);
    document.querySelector(".Img3").addEventListener("click", image3);
    document.querySelector(".Img4").addEventListener("click", image4);
    document.querySelector(".Img5").addEventListener("click", image5);
    guessSentence.textContent = "You have guessed " + counter + " times.";
    showImage.src = "imgs/GuessTheNumber.png";


}


document.querySelector(".Img1").addEventListener("click", image1);
document.querySelector(".Img2").addEventListener("click", image2);
document.querySelector(".Img3").addEventListener("click", image3);
document.querySelector(".Img4").addEventListener("click", image4);
document.querySelector(".Img5").addEventListener("click", image5);
document.querySelector(".reset").addEventListener("click", reset); 