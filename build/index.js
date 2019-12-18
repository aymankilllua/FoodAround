$(function(){

 
  var radius = 250; // radius of the circle
var fields = $('.flagimg'),
    container = $('.home'),
    width = container.width(),
    height = container.height(),
    angle = 0,
    step = (2*Math.PI) / fields.length;
fields.each(function() {
    var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2),
        y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
    $(this).css({
        left: x + 'px',
        top: y + 'px',
    });
    angle += step;
});  



anime({
  targets: '.flag',
  rotate: 360,
  direction: 'normal',
  loop: true,
  easing: 'linear',
  duration:15000,
  autoplay: true,
});
anime({
  targets: '.flagimg',
  rotate: -360,
  direction: 'normal',
  loop: true,
  easing: 'linear',
  duration:15000,
  autoplay: true,
});


 anime({
  targets: ".dish .dishs",
  opacity:anime.stagger(1,{duration:100000,easing:"linear",from:"last"}),
  loop: true,
  easing: 'linear',
  duration:30000,
  delay:anime.stagger(5000,{duration:100000})
  
  
})



$(".icon").click(function(){
  anime({
    targets:".menu",
    translateX:"0",
    duration:300,
    easing:"easeInCubic",
  
  })
})

$(".close").click(function(){
  anime({
    targets:".menu",
    translateX:"-600px",
    duration:300,
    easing:"easeInCubic",
  
  })
})

$(".list").click(function(){
  anime({
    targets:".menu",
    translateX:"-600px",
    duration:300,
    easing:"easeInCubic"
  })

  var tl = anime.timeline();
  tl  
  .add({
    targets: '.countryname h1',
    opacity:[0 , 1],
    easing: 'easeOutBack',
 duration:10
  })
  tl  
  .add({
    targets: '.countryname h1',
    translateX:[-100 , 0],
    duration:1000,
    easing: 'easeOutBack',
  })

  var tl1 = anime.timeline({
    delay:100
  });
  tl1  
  .add({
    targets: '.countryname p',
    opacity:[0 , 1],
    easing: 'easeOutBack',
 duration:10
  })
  tl1 
  .add({
    targets: '.countryname p',
    translateY:[200 , 0],
    duration:1000,
    easing: 'easeOutBack',
  })


  var tl2 = anime.timeline();
  tl2  
  .add({
    targets: '.listoffood .text',
    translateY:[500,0],
    easing: 'easeOutBack',
    delay:anime.stagger(100),
     duration:100
  })



 
})

$("#home").click(function(){
  anime({
    targets:".page2",
    translateX:"3000px",
    duration:1000,
    easing: 'easeInOutQuad'
  })
})
$("#food").click(function(){
  anime({
    targets:".page2",
    translateX:0,
    duration:1000,
    easing: 'easeInOutQuad',
    delay:100,
  })

  

})

$('.owl-carousel').owlCarousel({})


})

