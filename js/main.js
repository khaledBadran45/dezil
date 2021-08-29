
$(window).scroll(function(){
    let scrollingTop  = $(window).scrollTop()
    let about = $('#about').offset().top
    if(scrollingTop >= about){
        $('.navbar').addClass('navbar-light , bg-white , boxShadow')
        $('.zid').addClass('line')
        $('.darkImg').removeClass('d-none')
        $('.fab').css('color','#000')
        $('.lightImg').addClass('d-none')
        $('.navbar-collapse ul').removeClass('bg-secondary')
    }else{
        $('.darkImg').addClass('d-none')
        $('.lightImg').removeClass('d-none')
        $('.navbar').removeClass('navbar-light , bg-white , boxShadow')
        $('.zid').removeClass('line')
        $('.navbar').removeClass('boxShadow')
        $('.fab').css('color','#fff')
        $('.zid').addClass('d-none') 
        $('.navbar-collapse ul').removeClass('bg-secondary')

    }
})
$('.navbar-toggler').click(function(){
    $('.navbar-collapse ul').addClass('bg-secondary')
    $('.zid').addClass('d-none')
    $('.navbar').removeClass('navbar-light , bg-white , boxShadow')
    $('.navbar').css('backgroundColor','transparent')
})
$('.nav-link').click(function(){
    theHref= $(this).attr('href')
    let hrefOffset = $(theHref).offset().top
        $('body , html').animate({
            scrollTop:hrefOffset
        },1000)
})


$('.cog').click(function(){
   let containWidth = $('.contain').innerWidth()
   let leftBox = $('.box-option').css('left')


   if(leftBox == '0px'){
    $('.box-option').animate({
        //left == 0
         left:`-${containWidth}`
          //left == ${containWidth}
     },500)    
   }else{
    $('.box-option').animate({
        left:`0`
        //left == 0
    },500)
   }
})


$('.contain ul li') .click(function(){
   let liBg = $(this).css('backgroundColor')

   $('h2,h3,h4,h5,h6,i').css('color', liBg)
})
$('.contain img').click(function(){
    let imgSrc = $(this).attr('src')
    let carouselbg = $('.carousel .carousel-item')
    carouselbg.css({
     'backgroundImage':`url(${imgSrc})`,
     'transition' : 'all 0.5s'
    });
    // 
})