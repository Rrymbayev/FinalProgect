// Доставка
function order(){
      document.querySelector(".order").style.display = "flex"
}
function success(){
      document.querySelector(".order").style.display = "none"
      Swal.fire(
  'Good luck!',
  'Your order is accepted!',
  
)

}
function closed(){
      document.querySelector(".order").style.display = "none"
}

      

      // Меню
$('.menu-btn').click(function(){
        $('.navbar .nav-links').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



function link(element) {
      window.location.href = "https://en.wikipedia.org/wiki/IPhone#:~:text=The%20iPhone%20is%20a%20line,Jobs%20on%20January%209%2C%202007.&text=The%20iPhone's%20user%20interface%20is,screen%20with%20a%20virtual%20keyboard.";
}
function load() {
      $(".container").animate({opacity: '1'}, 1000);
}

// Mobile adaption
$(function() {
      menu = $('nav ul');

      $('#toggle-btn').on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
      });

      $(window).resize(function() {
            var w = $(this).width();
            if(w > 580 && menu.is(':hidden')) {
                  menu.removeAttr('style');
            }
      });

      $('nav li').on('click', function(e) {
            var w = $(window).width();
            if(w < 580) {
                  menu.slideToggle();
            }
      });
      $('.open-menu').height($(window).height());
});

// smooth scroll
$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
      .click(function(event) {
            if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
      ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                  event.preventDefault();
                  $('html, body').animate({
                        scrollTop: target.offset().top
                  }, 1500, function() {
                        var $target = $(target);
                        $target.focus();
                        if($target.is(":focus")) {
                              return false;
                        } else {
                              $target.attr('tabindex', '-1');
                              $target.focus();
                        };
                  });
            }
      }
      });


// first Popup
function popup(){
      document.querySelector(".popup").style.display = "flex";
      $(".popup").animate({opacity: "1"}, "fast");
      document.body.style.overflow = "hidden";
      window.scrollTo({top: 0, behavior:'smooth'});
      
}

function close_popup(){
      document.querySelector(".popup").style.display = "none";
      document.querySelector(".popup").style.opacity = "0";
      document.body.style.overflow = "scroll";
      document.getElementById("gallery").src="";
      document.getElementById("price").innerHTML="";
      document.getElementById("model").value="Choose your model";
      document.querySelector(".color12Pro").style.display="none";
      document.querySelector(".color12").style.display="none";
      document.querySelector(".color11").style.display="none";
      document.querySelector(".storage12Pro").style.display="none";
      document.querySelector(".storage12").style.display="none";
      document.querySelector(".storage11").style.display="none";
      document.getElementById("fname").value="";
      document.getElementById("lname").value="";
      document.getElementById("mail").value="";
      document.getElementById("city").value="";
      document.getElementById("tel").value="";

}

function continue_btn(){
      document.querySelector(".popup").style.display = "none";
      document.querySelector(".popup").style.opacity = "0";
      document.body.style.overflow = "scroll";
      document.querySelector(".pop").style.display = "flex";
      $(".pop").animate({opacity: "1"}, "slow");
      document.body.style.overflow = "hidden";
}

// Second Popup
function back() {
      document.querySelector(".pop").style.display = "none";
      document.querySelector(".pop").style.opacity = "0";
      document.body.style.overflow = "scroll";
      popup();
      
}
function compare(fname,lname,mail,city,tel){
      
     if(fname.localeCompare("")!=0 && lname.localeCompare("")!=0 && mail.localeCompare("")!=0 && city.localeCompare("")!=0 && tel.localeCompare("")!=0){
            document.querySelector(".confirm").disabled=false;
      }            
}

function confirm(fname,lname,mail,city,tel) {  
      document.querySelector(".pop").style.display = "none";
      document.querySelector(".pop").style.opacity = "0";
      document.body.style.overflow = "scroll";
      document.getElementById("ordered").style.display = "inline-block";
      document.getElementById("info1").innerHTML=fname;
      document.getElementById("info2").innerHTML=lname;
      document.getElementById("info3").innerHTML=mail;
      document.getElementById("info4").innerHTML=city;
      document.getElementById("info5").innerHTML=tel;
      document.querySelector(".confirm").disabled=true;      
      document.getElementById("fname").value="";
      document.getElementById("lname").value="";
      document.getElementById("mail").value="";
      document.getElementById("city").value="";
      document.getElementById("tel").value="";
      close_popup();
}




// Third Popup
function order_info(){
      document.querySelector(".order_info").style.display = "flex";
      $(".order_info").animate({opacity: "1"}, "slow");
      document.body.style.overflow = "hidden";
      window.scrollTo({top: 0, behavior:'smooth'});
}
function exit(){
      document.querySelector(".order_info").style.display = "none";
      document.querySelector(".order_info").style.opacity = "0";
      document.body.style.overflow = "scroll";
}
function cancel(){      
      document.getElementById("ordered").style.display = "none";
      document.querySelector(".order_info").style.display = "none";
      document.querySelector(".order_info").style.opacity = "0";
      document.body.style.overflow = "scroll";

      
}

// Map

function initMap(){
      var options = {
            center: {lat: 37.3320578591146,  lng: -122.02968848715742},
            zoom: 13,
            disableDefaultUI: true,
      }
      
      var map = new google.maps.Map(document.getElementById("map"), options);
      
      var marker = new google.maps.Marker({
            position: {lat:37.3320578591146, lng:-122.02968848715742},
            map: map,
            title:"Apple Headquarter",
      });    
      var window = new google.maps.InfoWindow({
            content: "Apple Head Office",
      });
      marker.addListener("click", () => {
            window.open(map, marker);
      });
      var marker1 = new google.maps.Marker({
            position: {lat:37.33551750655122, lng:-122.01465850250315},
            map: map,
            title:"Apple Headquarter",
      });    
      var window1 = new google.maps.InfoWindow({
            content: "Apple Park",
      });
      marker1.addListener("click", () => {
            window1.open(map, marker1);
      });
}

// Choose
function choose() {
      var x = document.getElementById("model").value;
      if(x == "i12Pro") {
            document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero-all?wid=417&hei=500&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1601866258000";
            document.getElementById("price").innerHTML = "$999";
            document.querySelector(".color12Pro").style.display="inline-flex";
            document.querySelector(".color12").style.display="none";
            document.querySelector(".color11").style.display="none";
            document.querySelector(".storage12Pro").style.display="inline-flex";
            document.querySelector(".storage11").style.display="none";
            document.querySelector(".storage12").style.display="none";
            document.getElementById("info6").innerHTML="iPhone 12 Pro";
      } else if(x == "i12") {
            document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-select-2020?wid=441&hei=529&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1601830911000";
            document.getElementById("price").innerHTML = "$799";
            document.querySelector(".color12").style.display="inline-flex";
            document.querySelector(".color12Pro").style.display="none";
            document.querySelector(".color11").style.display="none";
            document.querySelector(".storage12").style.display="inline-flex";
            document.querySelector(".storage12Pro").style.display="none";
            document.querySelector(".storage11").style.display="none";
            document.getElementById("info6").innerHTML="iPhone 12";
      } else if(x == "i11") {
            document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=441&amp;hei=529&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1567022175704";
            document.getElementById("price").innerHTML = "$599";
            document.querySelector(".color11").style.display="inline-flex";
            document.querySelector(".color12Pro").style.display="none";
            document.querySelector(".color12").style.display="none";
            document.querySelector(".storage11").style.display="inline-flex";
            document.querySelector(".storage12Pro").style.display="none";
            document.querySelector(".storage12").style.display="none";
            document.getElementById("info6").innerHTML="iPhone 11";
      }
}

// Changing photo iPhone 12

function blue(){
      document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1601830934000";
      document.getElementById("ordrd_img").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1601830934000";
}
function green(){
      document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-green-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1601830929000";
      document.getElementById("ordrd_img").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-green-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1601830929000";
}
function red(){
      document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1601830933000";
      document.getElementById("ordrd_img").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1601830933000";
}
function white(){
      document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-white-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1601830934000";
      document.getElementById("ordrd_img").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-white-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1601830934000";
}
function black(){
      document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1601684204000";
      document.getElementById("ordrd_img").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1601684204000";
}
// Changing photo iPhone 12 Pro

function pacific_blue(){
      document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=470&hei=556&fmt=png-alpha&.v=1601620623000";
      document.getElementById("ordrd_img").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=470&hei=556&fmt=png-alpha&.v=1601620623000";
}
function graphite(){
      document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1601620625000";
      document.getElementById("ordrd_img").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1601620625000";
}
function gold(){
      document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-gold-hero?wid=470&hei=556&fmt=png-alpha&.v=1601620621000";
      document.getElementById("ordrd_img").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-gold-hero?wid=470&hei=556&fmt=png-alpha&.v=1601620621000";
}
function silver(){
      document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-silver-hero?wid=470&hei=556&fmt=png-alpha&.v=1601620625000";
      document.getElementById("ordrd_img").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-silver-hero?wid=470&hei=556&fmt=png-alpha&.v=1601620625000";
}
// Changing photo iPhone 11

function purple11(){
      document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566960958082";
      document.getElementById("ordrd_img").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566960958082";
}
function green11(){
      document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144838";
      document.getElementById("ordrd_img").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144838";
}
function red11(){
      document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144763";
      document.getElementById("ordrd_img").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144763";
}
function white11(){
      document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-white-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956148115";
      document.getElementById("ordrd_img").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-white-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956148115";
}
function black11(){
      document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144418";
      document.getElementById("ordrd_img").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144418";
}
function yellow11(){
      document.getElementById("gallery").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-yellow-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1568141245782";
      document.getElementById("ordrd_img").src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-yellow-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1568141245782";
}