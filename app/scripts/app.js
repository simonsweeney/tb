var $cards = $('.menu');

var highestZ = $cards.length;

function bringToFront(i){
  //$cards.removeClass('front');
  //$cards.eq(i).addClass('front');
  $cards.eq(i).css('z-index', ++highestZ);
  console.log(1);
}

$cards.each(function(i){
  $(this).on('mouseenter', function(){
    bringToFront(i);
  })
});

$('.name').each(function(i){
  $(this).on('click', function(){
    bringToFront(i);
  })
});


function bgPink() {
	$("#bg").css('background', '#F5E0F2');
}

function bgBlue() {
	$("#bg").css('background', '#DDEAF4');
}

$('#bgBlue').click(function() {bgBlue();});
$('#bgPink').click(function() {bgPink();});

$('#menuOne').on('mouseenter', function(){bgBlue();});
$('#menuTwo').on('mouseenter', function(){bgBlue();});
$('#menuThree').on('mouseenter', function(){bgPink();});
$('#menuFour').on('mouseenter', function(){bgPink();});
