$(document).ready(function(){

	const imgObjt = [ {name:"bryan-minear", path: "\/img\/1-Swimming-spot-1920x640.jpg"}, 
					{name:"eva-blue", path: "\/img\/attivita-in-quota-con-gli-impianti-di-risalita-1920x640.jpg"},
					{name:"finding-dan-dan-grinwis", path: "\/img\/Big7Travel-Destinations-1920x640.jpg"},
					{name:"harshil-gudka", path: "\/img\/header-blog-1920x640.jpg"},
					{name:"max-bender", path: "\/img\/4.jpg"},
					{name:"paul-fiedler", path: "\/img\/3.jpg"},
					{name:"pawel-nolbert", path: "\/img\/2.jpg"},
					{name:"sutirta-budiman", path: "\/img\/1.jpg"}];
	
	const imgJSON = [ {"name":"bryan-minear", "path": "\/img\/1-Swimming-spot-1920x640.jpg"}, 
	{"name":"eva-blue", "path": "\/img\/attivita-in-quota-con-gli-impianti-di-risalita-1920x640.jpg"},
	{"name":"finding-dan-dan-grinwis", "path": "\/img\/Big7Travel-Destinations-1920x640.jpg"},
	{"name":"harshil-gudka", "path": "\/img\/header-blog-1920x640.jpg"},
	{"name":"max-bender", "path": "\/img\/4.jpg"},
	{"name":"paul-fiedler", "path": "\/img\/3.jpg"},
	{"name":"pawel-nolbert", "path": "\/img\/2.jpg"},
	{"name":"sutirta-budiman", "path": "\/img\/1.jpg"}];


	const imgItems = imgObjt.length;
	let positionZero = 1;

	
	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 
	createImg(imgObjt);

	$('.slider li').hide(); 
	$('.slider li:first').show(); 
	$('.pagination li:first').css({'color': '#CD6E2E'});

	
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 4000);

	

	function createImg(listeImg){
		let mainContainer = $(".slideshow");
		let containerImg =  $("<ul>").attr({"class":"slider"});
			mainContainer.append(containerImg);
			let j = 1;
		for(let i = 0; i < listeImg.length; i++){
			let liste = $("<li>").attr("class","listImg");
			let section = $("<section>").attr("class","caption");
			liste.append(section);
			let h1 = $("<h1>").attr("class","titleListe");
			h1.text("Lorem ipsum " + (j+i));
			section.append(h1);
			let para = $("<p>").attr("class","paraSection");
			para.html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quis ipsa, id quidem quisquam unde.");
			section.append(para);
			containerImg.append(liste);
			 let imgTag = $("<img/>").attr({
				 "src":listeImg[i].path,
				 "alt":listeImg[i].name
			 });
			
			liste.append(imgTag); 
		}
		
	}


	function pagination(){
		var paginationImg = $(this).index() + 1; 

		$('.slider li').hide();
		$('.slider li:nth-child('+ paginationImg +')').fadeIn();

		
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		positionZero = paginationImg;

	}

	function nextSlider(){
		if( positionZero >= imgItems){positionZero = 1;} 
		else {positionZero++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + positionZero +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); 
		$('.slider li:nth-child('+ positionZero +')').fadeIn(); 

	}

	function prevSlider(){
		if( positionZero <= 1){
			positionZero = imgItems;
		} 
		else {
			positionZero--;
		}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + positionZero +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); 
		$('.slider li:nth-child('+ positionZero +')').fadeIn(); 
	}

});