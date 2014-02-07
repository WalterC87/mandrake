var place = new google.maps.LatLng(14.598794, -90.508612);

function initialize (e){
	e.preventDefault();
	var mapProp = {
		center : place,
		zoom: 17,
		mapTypeId:google.maps.MapTypeId.SATELLITE
	};

	var info = 'Peliculas Mandrake';
	var map = new google.maps.Map(document.getElementById("map_contact"), mapProp);

	var marker = new google.maps.Marker({
		position : place,
		map: map,
		title: 'Peliculas Mandrake',
	});

	var infomap = new google.maps.InfoWindow({
		position : place,
		map : map
	})

	google.maps.event.addListener(marker,'click', function(){
		infomap.setContent(info);
		infomap.open(map,marker);
	})
}

google.maps.event.addDomListener(window,'load',initialize);

$(function(){
	$("a.mn").on("click",function(){
		if(this.hash){
			//console.log($(this).attr('href'));
			$("html body").animate({"scrollTop":$($(this).attr('href')).offset().top-75},1400);
			return false;
		}
	});

	$(".to-top").on("click",function(){
		$("html, body").animate({scrollTop:0},"slow");
	});

});

var sticky = document.querySelector('nav');
//var origOffsetY = sticky.offsetTop;
var origOffsetY = 240;

function onScroll(e) {
  window.scrollY >= origOffsetY ? sticky.classList.add('fixed') :
                                  sticky.classList.remove('fixed');
}

document.addEventListener('scroll', onScroll);
