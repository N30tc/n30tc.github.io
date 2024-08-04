let picture = document.querySelectorAll("#listOfPictures img");

let countPictures = picture.length;

for (let i = 0; i < countPictures; i++) {
    let image = picture[i];
    image.addEventListener('click', resize, false);
}

function resize(event) {
    let element = event.target;
    // console.log(element);
    let pictInFigure = document.getElementById("bigPicture");
    let imgInFigure = pictInFigure.querySelector("img")
    imgInFigure.src = element.src;
    pictInFigure.classList.toggle("visible");
    pictInFigure.addEventListener('click', closingPicture, false);
}

function closingPicture(event) {
    let pictInFigure = document.getElementById("bigPicture");
    pictInFigure.classList.toggle("visible");
}