'use strict';

let mainContainer = document.getElementById("mainContainer");
mainContainer.classList.add('clearfix');
let containerImg =  document.createElement("div");
containerImg.id = "containerImg";
containerImg.classList.add("clearfix");
mainContainer.appendChild(containerImg);


let imgObjt = [ {name:"bryan-minear", path: "img\/bryan-minear-VmMHIRRgQpY-unsplash.jpg"}, 
                {name:"eva-blue", path: "img\/eva-blue-SfPOkp6-2eA-unsplash.jpg"},
                {name:"finding-dan-dan-grinwis", path: "img\/finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg"},
                {name:"harshil-gudka", path: "img\/harshil-gudka-ORcQipPJAy4-unsplash.jpg"},
                {name:"max-bender", path: "img\/max-bender-VmX3vmBecFE-unsplash.jpg"},
                {name:"paul-fiedler", path: "img\/paul-fiedler-q1QPK60bv1g-unsplash.jpg"},
                {name:"pawel-nolbert", path: "img\/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg"},
                {name:"sutirta-budiman", path: "img\/sutirta-budiman-kjOBqwMUnWw-unsplash.jpg"}]
let imgString = '[{"name":"bryan-minear","path":"img\/bryan-minear-VmMHIRRgQpY-unsplash.jpg"},{"name":"eva-blue","path":"img\/eva-blue-SfPOkp6-2eA-unsplash.jpg"},{"name":"finding-dan-dan-grinwis","path":"img\/finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg"},{"name":"harshil-gudka","path":"img\/harshil-gudka-ORcQipPJAy4-unsplash.jpg"},{"name":"max-bender","path":"img\/max-bender-VmX3vmBecFE-unsplash.jpg"},{"name":"paul-fiedler","path":"img\/paul-fiedler-q1QPK60bv1g-unsplash.jpg"},{"name":"pawel-nolbert","path":"img\/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg"},{"name":"sutirta-budiman","path":"img\/sutirta-budiman-kjOBqwMUnWw-unsplash.jpg"}]'
    



    
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