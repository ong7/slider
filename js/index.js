$(function() {

    let positionZero = 1;
    const imgObjt = [ {name:"bryan-minear", path: "\/img\/bryan-minear-VmMHIRRgQpY-unsplash.jpg"}, 
                                    {name:"eva-blue", path: "\/img\/eva-blue-SfPOkp6-2eA-unsplash.jpg"},
                                    {name:"finding-dan-dan-grinwis", path: "\/img\/finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg"},
                                    {name:"harshil-gudka", path: "\/img\/harshil-gudka-ORcQipPJAy4-unsplash.jpg"},
                                    {name:"max-bender", path: "\/img\/max-bender-VmX3vmBecFE-unsplash.jpg"},
                                    {name:"paul-fiedler", path: "\/img\/paul-fiedler-q1QPK60bv1g-unsplash.jpg"},
                                    {name:"pawel-nolbert", path: "\/img\/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg"},
                                    {name:"sutirta-budiman", path: "\/img\/sutirta-budiman-kjOBqwMUnWw-unsplash.jpg"}]
           
       
        function createImg(listeImg){
            let mainContainer = $(".slider");
            var containerImg =  $("<ul>").attr({"class":"containerImg"});
                mainContainer.append(containerImg);
            for(let i = 0; i < listeImg.length; i++){
                let liste = $("<li>").attr("class","listImg");
                containerImg.append(liste);
                 let imgTag = $("<img/>").attr({
                     "src":listeImg[i].path,
                     "alt":listeImg[i].name
                 });
                
                liste.append(imgTag); 
            }
    }

    createImg(imgObjt);
     
            
         

            
            let showSlides = function(n) {
                    let i = null;
                    const slides =  $(".listImg");
                    
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
            function moveLeft() {
                showSlides(positionZero = - 1);
            }
            
            function moveRight() {
                showSlides(positionZero += 1);  
            }
            
            
            $(".next").on("click",function(){
                moveRight();
            });
            
            $(".prev").on("click",function(){
                moveLeft();
            });
            
            
            });