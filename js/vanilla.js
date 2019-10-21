'use strict';

let mainContainer = document.getElementById("mainContainer");
mainContainer.classList.add('clearfix');
let positionZero = 1;


const imgObjt = [ {name:"bryan-minear", path: "img\/bryan-minear-VmMHIRRgQpY-unsplash.jpg"}, 
                {name:"eva-blue", path: "img\/eva-blue-SfPOkp6-2eA-unsplash.jpg"},
                {name:"finding-dan-dan-grinwis", path: "img\/finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg"},
                {name:"harshil-gudka", path: "img\/harshil-gudka-ORcQipPJAy4-unsplash.jpg"},
                {name:"max-bender", path: "img\/max-bender-VmX3vmBecFE-unsplash.jpg"},
                {name:"paul-fiedler", path: "img\/paul-fiedler-q1QPK60bv1g-unsplash.jpg"},
                {name:"pawel-nolbert", path: "img\/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg"},
                {name:"sutirta-budiman", path: "img\/sutirta-budiman-kjOBqwMUnWw-unsplash.jpg"}]
const imgString = '[{"name":"bryan-minear","path":"img\/bryan-minear-VmMHIRRgQpY-unsplash.jpg"},{"name":"eva-blue","path":"img\/eva-blue-SfPOkp6-2eA-unsplash.jpg"},{"name":"finding-dan-dan-grinwis","path":"img\/finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg"},{"name":"harshil-gudka","path":"img\/harshil-gudka-ORcQipPJAy4-unsplash.jpg"},{"name":"max-bender","path":"img\/max-bender-VmX3vmBecFE-unsplash.jpg"},{"name":"paul-fiedler","path":"img\/paul-fiedler-q1QPK60bv1g-unsplash.jpg"},{"name":"pawel-nolbert","path":"img\/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg"},{"name":"sutirta-budiman","path":"img\/sutirta-budiman-kjOBqwMUnWw-unsplash.jpg"}]'
    



    
function addImg(imgObject){

    if(typeof imgObject === 'object'){
        createImg(imgObject);
    }
    else if(typeof imgObject === 'string'){
        let imgParse = JSON.parse(imgObject);
        createImg(imgParse);
    }
    
}

function createImg(listeImg){
    for(let i = 0; i < listeImg.length; i++){
        let containerImg =  document.createElement("div");
        containerImg.classList = "containerImg";
        mainContainer.appendChild(containerImg);
        let imgTag = document.createElement('img');
        imgTag.setAttribute("src", listeImg[i].path);
        imgTag.setAttribute("alt", listeImg[i].name);
        imgTag.setAttribute("class", "clearfix");
        containerImg.appendChild(imgTag); 
    }
}

function addImgObj(imObj){
    let tabImgObj = [];
    tabImgObj.push(imgObjt);
}

addImg(imgObjt);

let right = document.querySelector(".right");
let left = document.querySelector(".left");

let showSlides = function(n) {
    let i = null;
    const slides = document.getElementsByClassName("containerImg");
    
    if (n > slides.length) {
        positionZero = 1;
       
    }
    else if (n < 1) {
        positionZero = slides.length;
       
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    slides[positionZero-1].style.display = "block";
    
    
  } 

showSlides(positionZero);


const next = function () {
  showSlides(positionZero += 1);
}

const previous = function(){
    showSlides(positionZero -= 1);
}

right.addEventListener('click', next);
left.addEventListener('click', previous);