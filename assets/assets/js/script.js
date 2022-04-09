// Curson Hover 

 $(".design_titleSection").hover( function(){
     $(".cb-cursor").addClass("designed-titleSec").css({"z-index":"1"});
     $(".cb-cursor").removeClass("cb_balck").css({"z-index":"2"});
 });
 $(".feature_section").hover( function(){
    $(".cb-cursor").addClass("cb_balck").css({"z-index":"2"});
    $(".cb-cursor").removeClass("designed-titleSec").css({"z-index":"1"});
 });

 $(".feature_section").hover( function(){
    $(".feature_left_heading h2").addClass("animate__fadeInDown");
    $(".sub-heading p").addClass("animate__fadeInUp");
 });

// Faq
let toggles = document.getElementsByClassName('toggleFaq'),
 contentDiv = document.getElementsByClassName('contentFaq'),
 icons = document.getElementsByClassName('icon'),
 faq_wrapper = document.getElementsByClassName("faq_wrapper");

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#000";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
            faq_wrapper[i].classList.add("active");
        }
        else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
            faq_wrapper[i].classList.remove("active");
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#111130";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
                faq_wrapper[j].classList.remove("active");
            }

            
        }
    });
}




jQuery(function ($) {

    $(".accordion-content").css("display", "none");
  
  
    $(".accordion-title").click(function () {
  
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
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
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

  // D_title_Sec 

    let span1 = document.querySelector(".f_span"),
    span2 = document.querySelector(".s_span"),
    span3 = document.querySelector(".t_span"),
    span4 = document.querySelector(".fn_span"),
    span5 = document.querySelector(".sn_span"),
    span6 = document.querySelector(".tn_span"),
    caseImages = document.querySelector(".caseImages"),
    designedTitleSect = document.querySelector(".design_titleSection");

    //// conetnet started  /////

    // transition content

    span1.style.transition = "transform .4s,-webkit-transform .4s,-moz-transform .4s,-o-transform .4s;"
    span2.style.transition = "transform .4s,-webkit-transform .4s,-moz-transform .4s,-o-transform .4s;"
    span3.style.transition = "transform .4s,-webkit-transform .4s,-moz-transform .4s,-o-transform .4s;"
    span4.style.transition = "transform .4s,-webkit-transform .4s,-moz-transform .4s,-o-transform .4s;"
    span5.style.transition = "transform .4s,-webkit-transform .4s,-moz-transform .4s,-o-transform .4s;"
    span6.style.transition = "transform .4s,-webkit-transform .4s,-moz-transform .4s,-o-transform .4s;"
    
    // content 
    
    span1.addEventListener("mouseover", ()=>{
      span1.style.color = "#ffff";  
      span1.style.transition = "transform .4s,-webkit-transform .4s,-moz-transform .4s,-o-transform .4s;"
      span2.style.color = "#3a3f41"; 
      span3.style.color = "#3a3f41"; 
      span4.style.color = "#3a3f41"; 
      span5.style.color = "#3a3f41"; 
      span6.style.color = "#3a3f41"; 
      caseImages.classList.add("on");

    });
    span2.addEventListener("mouseover", ()=>{
      span2.style.color = "#ffff"; 
      span2.style.transition = "transform .4s,-webkit-transform .4s,-moz-transform .4s,-o-transform .4s;"
      span1.style.color = "#3a3f41";  
      span3.style.color = "#3a3f41"; 
      span4.style.color = "#3a3f41"; 
      span5.style.color = "#3a3f41"; 
      span6.style.color = "#3a3f41";
      caseImages.classList.add("on");
    });

    span3.addEventListener("mouseover", ()=>{
      span3.style.color = "#ffff"; 
      span3.style.transition = "transform .4s,-webkit-transform .4s,-moz-transform .4s,-o-transform .4s;"
      span1.style.color = "#3a3f41";  
      span2.style.color = "#3a3f41"; 
      span4.style.color = "#3a3f41"; 
      span5.style.color = "#3a3f41"; 
      span6.style.color = "#3a3f41";
      caseImages.classList.add("on");
    });

    span4.addEventListener("mouseover", ()=>{
      span4.style.color = "#ffff";
      span4.style.transition = "transform .4s,-webkit-transform .4s,-moz-transform .4s,-o-transform .4s;"
      span1.style.color = "#3a3f41";  
      span2.style.color = "#3a3f41"; 
      span3.style.color = "#3a3f41";  
      span5.style.color = "#3a3f41"; 
      span6.style.color = "#3a3f41";
      caseImages.classList.add("on");
    });
    span5.addEventListener("mouseover", ()=>{
      span5.style.color = "#ffff"; 
      span5.style.transition = "transform .4s,-webkit-transform .4s,-moz-transform .4s,-o-transform .4s;"
      span1.style.color = "#3a3f41";  
      span2.style.color = "#3a3f41"; 
      span3.style.color = "#3a3f41"; 
      span4.style.color = "#3a3f41"; 
      span6.style.color = "#3a3f41";
      caseImages.classList.add("on");
    });

    span6.addEventListener("mouseover", ()=>{
      span6.style.color = "#ffff";
      span6.style.transition = "transform .4s,-webkit-transform .4s,-moz-transform .4s,-o-transform .4s;"
      span1.style.color = "#3a3f41";  
      span2.style.color = "#3a3f41"; 
      span3.style.color = "#3a3f41"; 
      span4.style.color = "#3a3f41"; 
      span5.style.color = "#3a3f41"; 
      caseImages.classList.add("on");
    });

    // if all span is mouse lieave then

    span1.addEventListener("mouseleave", ()=>{
      span1.style.color = "#ffff";  
      span2.style.color = "#ffff"; 
      span3.style.color = "#ffff"; 
      span4.style.color = "#ffff"; 
      span5.style.color = "#ffff"; 
      span6.style.color = "#ffff"; 
      caseImages.classList.remove("on");
    });

    span2.addEventListener("mouseleave", ()=>{
      span1.style.color = "#ffff";  
      span2.style.color = "#ffff"; 
      span3.style.color = "#ffff"; 
      span4.style.color = "#ffff"; 
      span5.style.color = "#ffff"; 
      span6.style.color = "#ffff"; 
      caseImages.classList.remove("on");
    });

    span3.addEventListener("mouseleave", ()=>{
      span1.style.color = "#ffff";  
      span2.style.color = "#ffff"; 
      span3.style.color = "#ffff"; 
      span4.style.color = "#ffff"; 
      span5.style.color = "#ffff"; 
      span6.style.color = "#ffff"; 
      caseImages.classList.remove("on");
    });

    span4.addEventListener("mouseleave", ()=>{
      span1.style.color = "#ffff";  
      span2.style.color = "#ffff"; 
      span3.style.color = "#ffff"; 
      span4.style.color = "#ffff"; 
      span5.style.color = "#ffff"; 
      span6.style.color = "#ffff"; 
      caseImages.classList.remove("on");
    });

    span5.addEventListener("mouseleave", ()=>{
      span1.style.color = "#ffff";  
      span2.style.color = "#ffff"; 
      span3.style.color = "#ffff"; 
      span4.style.color = "#ffff"; 
      span5.style.color = "#ffff"; 
      span6.style.color = "#ffff"; 
      caseImages.classList.remove("on");
    });

    span6.addEventListener("mouseleave", ()=>{
      span1.style.color = "#ffff";  
      span2.style.color = "#ffff"; 
      span3.style.color = "#ffff"; 
      span4.style.color = "#ffff"; 
      span5.style.color = "#ffff"; 
      span6.style.color = "#ffff"; 
      caseImages.classList.remove("on");
    });

    // Section is mouseleave
    designedTitleSect.addEventListener("mouseleave", ()=>{
      span1.style.color = "#fff";  
      span2.style.color = "#fff"; 
      span3.style.color = "#fff"; 
      span4.style.color = "#fff"; 
      span5.style.color = "#fff"; 
      span6.style.color = "#fff"; 
      caseImages.classList.remove("on");
    });
    
    window.addEventListener("scroll", ()=>{
        let currentP = window.scrollY;
        console.log(currentP);
    });
