// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

 function firstPageAnim(){
  var tl =gsap.timeline();
  tl.from('#nav',{
    y: '-10',
    opacity:0,
    duration:1.5,
    ease: Expo.easeInout
  })

  .to('.boundingelem',{
    y: 0,
    duration:1.5,
    ease: Expo.easeInout,
    delay:-1,
    stagger:.2
  })
  .from('#herofooter',{
    y: '-10',
    opacity:0,
    duration:1.5,
    delay:-1,
    ease: Expo.easeInout
  })
  

 }
 // 

  
 function circleFlatType(){
  // scale value default
  var xscale= 1;
  var yscale =1;

   var xprev =0;
   var yprev =0;

   
  window.addEventListener('mousemove' , function(dets){
    //  var xdiff= dets.clientX - xprev;
    //   var ydiff= dets.clientY - yprev;
   

     xscale= gsap.utils.clamp(.8,1.2, dets.clientX - xprev)
      yscale=gsap.utils.clamp(.8,1.2, dets.clientY - yprev)

    xprev = dets.clientX
     yprev = dets.clientY

      circleMouseFollwer(xscale,yscale);

      let timeout=  setTimeout(function (){
         document.querySelector("#minicircle").style.transform =`translate(${dets.clientX}px ,${dets.clientY}px)  scale(1,1)`

      },100);
      
       clearTimeout(timeout);

  });
 }
 circleFlatType()

function circleMouseFollwer(xscale,yscale){
  window.addEventListener("mousemove",function (dets){
    // console.log(dets.clientX , dets.clientY);
  document.querySelector("#minicircle").style.transform =`translate(${dets.clientX}px ,${dets.clientY}px)  scale(${xscale},${yscale})`
    
  })

}
circleMouseFollwer();

firstPageAnim();

// sablo select kro mouse move lgao or photo show krwani hai
document.querySelectorAll(".elem").forEach( function (elem){

  var rotate =0;
  var diffrot =0;

   elem.addEventListener("mouseleave" , function(details){
         gsap.to(elem.querySelector("img"),{
            opacity:0,
       ease: Power3,
       duration:.5,
  });
        });

        elem.addEventListener("mousemove" , function(details){
          var diff= details.clientY - elem.getBoundingClientRect().top;
           diffrot = details.clientX - rotate;
           rotate = details.clientY;
          
          gsap.to(elem.querySelector("img"),{
            opacity:1,
       ease: Power3,
      top: diff,
        left:details.clientX,
        rotate: gsap.utils.clamp(-10,10,diffrot * .4),
  });
        });
});