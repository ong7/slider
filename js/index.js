
                $(document).ready(function(){
                    let positionZero = 1;
                    const imgObjt = [ {name:"bryan-minear", path: "img\/bryan-minear-VmMHIRRgQpY-unsplash.jpg"}, 
                                            {name:"eva-blue", path: "img\/eva-blue-SfPOkp6-2eA-unsplash.jpg"},
                                            {name:"finding-dan-dan-grinwis", path: "img\/finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg"},
                                            {name:"harshil-gudka", path: "img\/harshil-gudka-ORcQipPJAy4-unsplash.jpg"},
                                            {name:"max-bender", path: "img\/max-bender-VmX3vmBecFE-unsplash.jpg"},
                                            {name:"paul-fiedler", path: "img\/paul-fiedler-q1QPK60bv1g-unsplash.jpg"},
                                            {name:"pawel-nolbert", path: "img\/pawel-nolbert-4u2U8EO9OzY-unsplash.jpg"},
                                            {name:"sutirta-budiman", path: "img\/sutirta-budiman-kjOBqwMUnWw-unsplash.jpg"}]
                   
                   $("#mainContainer").append($("<h1>").append("slide with Jquery").attr({"class":"title"}));
                function createImg(listeImg){
                    let mainContainer = $("#mainContainer");
                    for(let i = 0; i < listeImg.length; i++){
                        var containerImg =  $("<div>").attr({"class":"containerImg"});
                        mainContainer.append(containerImg);  
                        let imgTag = $("<img/>").attr({
                            "src":listeImg[i].path,
                            "alt":listeImg[i].name
                        });
                        containerImg.append(imgTag); 
                    }
            }

            function addImg(imgObject){

                if(typeof imgObject === 'object'){
                    createImg(imgObject);
                }
                else if(typeof imgObject === 'string'){
                    let imgParse = JSON.parse(imgObject);
                    createImg(imgParse);
                }

            }

            let showSlides = function(n) {
                let i = null;
                const slides = document.getElementsByClassName("containerImg");

                 console.log($(".containerImg"));
                if (n > slides.length) {
                    positionZero = 1;
                
                }
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
            addImg(imgObjt);

            showSlides(positionZero);


            const next = function () {
                showSlides(positionZero += 1);
            }

            const previous = function(){
                showSlides(positionZero = - 1);
            }

            $(".right").click(next); 

            $(".left").click(previous); 
            
    });