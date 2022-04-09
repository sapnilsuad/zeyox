// FAQ - SEC
let toggles = document.getElementsByClassName('toggleFaq'),
    contentDiv = document.getElementsByClassName('contentFaq'),
    icons = document.getElementsByClassName('icon'),
    faq_wrapper = document.getElementsByClassName("faq_wrapper");

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#000";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
            faq_wrapper[i].classList.add("active");
        } else {
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
            faq_wrapper[i].classList.remove("active");
        }

        for (let j = 0; j < contentDiv.length; j++) {
            if (j !== i) {
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#111130";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
                faq_wrapper[j].classList.remove("active");
            }


        }
    });
}

jQuery(function($) {

    $(".accordion-content").css("display", "none");


    $(".accordion-title").click(function() {

        $(".accordion-title").not(this).removeClass("open");

        $(".accordion-title").not(this).next().slideUp(300);

        $(this).toggleClass("open");

        $(this).next().slideToggle(300);
    });
});
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
try {
    fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
        return true;
    }).catch(function(e) {
        var carbonScript = document.createElement("script");
        carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CK7DKKQU&placement=wwwjqueryscriptnet";
        carbonScript.id = "_carbonads_js";
        document.getElementById("carbon-block").appendChild(carbonScript);
    });
} catch (error) {
    console.log(error);
}


// Curso/Pointer Effect

// if mouse is hover
$(".innova-portfolio-container").hover(function() {
    $(".cursor__follower").text("Drag").addClass("active").css({
        "border": "0px"
    });
    $(".cursor__wrapper").addClass("active").css({
        "border": "0px"
    });
});
// if mouse is out
$(".innova-portfolio-container").mouseout(function() {
    $(".cursor__follower").text("").removeClass("active").css({
        "position": "relative",
        "width": "10px",
        "height": "10px",
        "border-radisus": "50%",
        "background": "#0a0a0a"
    });
    $(".cursor__wrapper").removeClass("active");

});

// /// Cstm Card/ Carosel


// let containerRW = document.querySelector(".rw_container");
// let cardsRW = document.querySelector(".rw_cards");
// let cardRw = document.querySelectorAll(".rc_card");


// /// keep track of cursor from inner container
//   	let isPressedDown = false;
// // x horizantally
// let cursorXSpace;

// containerRW.addEventListener("mousedown", (e)=>{
//   isPressedDown = true;
// cursorXSpace = e.offsetX - cardsRW.offsetLeft;
// mouseupF();
// });

// window.addEventListener("mouseup", ()=>{
//   isPressedDown = false;	
// });	 	


// containerRW.addEventListener("mousemove", (e)=>{

// if(!isPressedDown) return;
// e.preventDefault();
// cardsRW.style.left = `${e.offsetX - cursorXSpace}px`;
// boundCards();

// });	


// function boundCards(){

// let container_rect = containerRW.getBoundingClientRect();
// let cards_rect = cardsRW.getBoundingClientRect();

// // console.log(cards_rect);

// if( parseInt (cardsRW.style.left) > 0){

//   cardsRW.style.left = 0;

// }else if(cards_rect.right < container_rect.right){

//   cardsRW.style.left = `-${cards_rect.width - container_rect.width}px`;

// }

// }
// boundCards();


// Video Section Scroll Anim

let hvrImg = document.querySelector(".video_container .video_content img");
let video_content = document.querySelector(".video_content");
// Feature Sec Scroll Anim
let fh2Left = document.querySelector(".feature_left_heading h2"),
    fpLeft = document.querySelector(".sub-heading p"),
    fimgRight = document.querySelector(".feature_right_img img");

// Defautl Behebar
fh2Left.innerHTML = "Creative agency </br> Website design ";
fpLeft.innerHTML = "Zeyox is a digital agency that offers a wide scale of creative services. ";
fimgRight.src = "assets/img/fetureimg.png";

hvrImg.style.width = "80%";
video_content.style.overflow = "hidden";
hvrImg.style.margin = "auto";

window.addEventListener("scroll", () => {
    let scrollP = window.scrollY;
    console.log(scrollP);

    if (scrollP > 500) {
        // item one
        hvrImg.style.width = "100%";
        hvrImg.style.transition = "0.4s";
        hvrImg.style.transitionDelay = "0.4s";

    }
    if (scrollP < 500) {
        // item one
        hvrImg.style.width = "90%";
        hvrImg.style.transition = "0.4s";
        hvrImg.style.transitionDelay = "0.4s";

    }
    // if (scrollP > 1200) {
    //     // item one
    //     hvrImg.style.width = "100%";
    //     hvrImg.style.transition = "0.4s";
    //     hvrImg.style.transitionDelay = "0.4s";
    // }
    // if (scrollP > 1650) {
    //     // item one
    //     hvrImg.style.width = "90%";
    //     hvrImg.style.transition = "0.4s";
    //     hvrImg.style.transitionDelay = "0.4s";
    // }
    // if (scrollP > 1850) {
    //     // item one
    //     hvrImg.style.width = "80%";
    //     hvrImg.style.transition = "0.4s";
    //     hvrImg.style.transitionDelay = "0.4s";
    // }

    if (scrollP < 6399) {
        fh2Left.innerHTML = "Creative agency </br> Website design ";
        fpLeft.innerHTML = "Zeyox is a digital agency that offers a wide scale of creative services. ";
        fimgRight.src = "assets/img/fetureimg.png";
    }

    if (scrollP > 6400) {
        fh2Left.innerHTML = "I am heading  secound</br> item  okay ";
        fpLeft.innerHTML = "I am paragraph second </br> item okay ";
        fimgRight.src = "wp-content/uploads/sites/4/2013/11/img_15-500x500_t.jpg";
        // anim
        fimgRight.classList.add("animate__zoomIn");
        $(".feature_left_heading h2").addClass("animate__bounceInLeft");
        $(".sub-heading p").addClass("animate__bounceInRight")

    }
    if (scrollP > 6750) {
        fh2Left.innerHTML = "I am heading  Third</br> item  okay ";
        fpLeft.innerHTML = "I am paragraph Third </br> item okay ";
        fimgRight.src = "wp-content/uploads/sites/4/2013/11/img_17-700x600_t.jpg";
        // anim  
        fimgRight.classList.add("animate__zoomIn");
        $(".feature_left_heading h2").addClass("animate__bounceInLeft");
        $(".sub-heading p").addClass("animate__bounceInRight")

    }
    if (scrollP > 6950) {
        fh2Left.innerHTML = "Creative agency </br> Website design ";
        fpLeft.innerHTML = "Zeyox is a digital agency that offers a wide scale of creative services. ";
        fimgRight.src = "assets/img/fetureimg.png";
    }
});



// Feature Sec Hover anim

$(".design_titleSection").hover(function() {
    $(".cb-cursor").addClass("designed-titleSec").css({ "z-index": "1" });
    $(".cb-cursor").removeClass("cb_balck").css({ "z-index": "2" });
});
$(".feature_section").hover(function() {
    $(".cb-cursor").addClass("cb_balck").css({ "z-index": "2" });
    $(".cb-cursor").removeClass("designed-titleSec").css({ "z-index": "1" });
});

$(".feature_section").hover(function() {
    $(".feature_left_heading h2").addClass("animate__fadeInDown");
    $(".sub-heading p").addClass("animate__fadeInUp");
});