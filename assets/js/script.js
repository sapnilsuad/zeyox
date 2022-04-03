// Curson Hover 

 $(".design_titleSection").hover( function(){
     $(".cb-cursor").addClass("designed-titleSec").css({"z-index":"1"});
     $(".cb-cursor").removeClass("cb_balck").css({"z-index":"2"});
 });
 $(".feature_section").hover( function(){
    $(".cb-cursor").addClass("cb_balck").css({"z-index":"2"});
    $(".cb-cursor").removeClass("designed-titleSec").css({"z-index":"1"});
 });


 // Animate
 $(".design_titleSection").hover( function(){
    $(".design_headingTitle h1").addClass("animate__fadeInUp");
 });

 $(".feature_section").hover( function(){
    $(".feature_left_heading h2").addClass("animate__fadeInDown");
    $(".sub-heading p").addClass("animate__fadeInUp");
 });
 // Pointer 

let afterClass = document.querySelector(".desing_animHover"),
boxAfter = window.getComputedStyle(afterClass, "::after");

$(".dts_hover").hover( function(){
afterClass.style.setProperty('--boxAfterWidth','28%');
});
$(".design_headingTitle").hover( function(){
afterClass.style.setProperty('--boxAfterWidth','61%');
});
$(".dts_hover2").hover( function(){
afterClass.style.setProperty('--boxAfterWidth','100%');
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

//  #box::after{
//  content: 'this is after';
//  background-color: var(--boxAfterBackColor,red);
//  position: absolute;
//  top: -20px;
//  right: 0px;
//  font-size: var(--boxAfterFontSize,20px);
// }

// // all items
// .dts_hover // item 1st
// .design_headingTitle h1 // middle item
// .dts_hover2 // item 3rd



// console.log(boxAfter.backgroundColor); 




// getting the background color
// $(".dts_hover").hover( function(){
//     $(".design_headingTitle h1").css({"color":"green"});
// });






/* $(".design_headingTitle").hover( function(){

});

// $('.desing_animHover .activeone:after').css(
//         {
//             'border-top-width': '22px',
//              'background-color':'red',
//             'border-right-width': '22px'
//         }
//     )

    // hover hole add hobe
$(".design_animContent").hover( function(){

}); */

//  ::after


// I'd like to change the border-width of the top, left, and bottom border using jQuery. What selector to I use to access this element? I tried the following but it doesn't seem to be working.
