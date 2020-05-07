$("#enter").on('mouseover',function(){
  $("#enter").attr('src','img/enter_in.png');
  $("#sound_file").get(0).play();
});
$("#enter").on('mouseout',function(){
  $("#enter").attr('src','img/enter.png');
});
$("#save1,#save2,#save3,#save4,#save5,#save6,#save7,#save8,#save9,#save10,#save11").on('click',function(){
  $("#sound_file2").get(0).play();
});
$("#open").on('click',function(){
  $("#sound_file").get(0).play();
});
$("#clear,#clear2").on('click',function(){
  $("#sound_file3").get(0).play();
});


$('.img1').on('click',function(){
  $('.img1'). fadeOut(500);
  setTimeout(function () {$('.img1').remove('.img1')}, 500);
  setTimeout(function () {$('.img2').fadeIn(500)}, 700);
});

$('.img2').on('click',function(){
  $('.img2'). fadeOut(500);
  setTimeout(function () {$('.img2').remove('.img2')}, 500);
  setTimeout(function () {$('.img3').fadeIn(500)}, 700);
  //メモ１
  setTimeout(function () {$('#memo').fadeIn(500)}, 200);
  setTimeout(function () {$('#save1').fadeIn(500)}, 300);
});

$('.img3').on('click',function(){
  $('#memo').fadeOut(500);
  $('#save1').fadeOut(500);
  $('.img3'). fadeOut(500);
  setTimeout(function () {$('.img3').remove('.img3')}, 500);
  setTimeout(function () {$('.img4').fadeIn(500)}, 700);
});

$('.img4').on('click',function(){
  $('.img4'). fadeOut(500);
  setTimeout(function () {$('.img4').remove('.img4')}, 500);
  setTimeout(function () {$('.img5').fadeIn(500)}, 700);
});

$('.img5').on('click',function(){
  $('.img5'). fadeOut(500);
  setTimeout(function () {$('.img5').remove('.img5')}, 500);
  setTimeout(function () {$('.img6').fadeIn(500)}, 700);
   //メモ２
  setTimeout(function () {$('#memo').fadeIn(500)}, 200);
  setTimeout(function () {$('#save2').fadeIn(500)}, 300);
});
$('.img6').on('click',function(){
  $('#memo').fadeOut(500);
  $('#save2').fadeOut(500);
  $('.img6'). fadeOut(500);
  setTimeout(function () {$('.img6').remove('.img6')}, 500);
  setTimeout(function () {$('.img7').fadeIn(500)}, 700);
});

$('.img7').on('click',function(){
  $('.img7'). fadeOut(500);
  setTimeout(function () {$('.img7').remove('.img7')}, 500);
  setTimeout(function () {$('.img8').fadeIn(500)}, 700);
});

$('.img8').on('click',function(){
  $('.img8'). fadeOut(500);
  setTimeout(function () {$('.img8').remove('.img8')}, 500);
  setTimeout(function () {$('.img9').fadeIn(500)}, 700);
  setTimeout(function () {$('#memo').fadeIn(500)}, 200);
  setTimeout(function () {$('#save3').fadeIn(500)}, 300);

});

$('.img9').on('click',function(){
  $('#memo').fadeOut(500);
  $('#save3').fadeOut(500);
  $('.img9'). fadeOut(500);
  setTimeout(function () {$('.img9').remove('.img9')}, 500);
  setTimeout(function () {$('.img10').fadeIn(500)}, 700);
});

$('.img10').on('click',function(){
  $('.img10'). fadeOut(500);
  setTimeout(function () {$('.img10').remove('.img10')}, 500);
  setTimeout(function () {$('.img11').fadeIn(500)}, 700);
  setTimeout(function () {$('#memo').fadeIn(500)}, 200);
  setTimeout(function () {$('#save4').fadeIn(500)}, 300);

});

$('.img11').on('click',function(){
  $('#memo').fadeOut(500);
  $('#save4').fadeOut(500);
  $('.img11'). fadeOut(500);
  setTimeout(function () {$('.img11').remove('.img11')}, 500);
  setTimeout(function () {$('.img12').fadeIn(500)}, 700);
});

$('.img12').on('click',function(){
  $('.img12'). fadeOut(500);
  setTimeout(function () {$('.img12').remove('.img12')}, 500);
  setTimeout(function () {$('.img13').fadeIn(500)}, 700);
  setTimeout(function () {$('#memo').fadeIn(500)}, 200);
  setTimeout(function () {$('#save5').fadeIn(500)}, 300);

});

$('.img13').on('click',function(){
  $('#memo').fadeOut(500);
  $('#save5').fadeOut(500);
  $('.img13'). fadeOut(500);
  setTimeout(function () {$('.img13').remove('.img13')}, 500);
  setTimeout(function () {$('.img14').fadeIn(500)}, 700);
});

$('.img14').on('click',function(){
  $('.img14'). fadeOut(500);
  setTimeout(function () {$('.img14').remove('.img14')}, 500);
  setTimeout(function () {$('.img15').fadeIn(500)}, 700);
  setTimeout(function () {$('#memo').fadeIn(500)}, 200);
  setTimeout(function () {$('#save6').fadeIn(500)}, 300);

});

$('.img15').on('click',function(){
  $('#memo').fadeOut(500);
  $('#save6').fadeOut(500);
  $('.img15'). fadeOut(500);
  setTimeout(function () {$('.img15').remove('.img15')}, 500);
  setTimeout(function () {$('.img16').fadeIn(500)}, 700);
});

$('.img16').on('click',function(){
  $('.img16'). fadeOut(500);
  setTimeout(function () {$('.img16').remove('.img16')}, 500);
  setTimeout(function () {$('.img17').fadeIn(500)}, 700);
  setTimeout(function () {$('#memo').fadeIn(500)}, 200);
  setTimeout(function () {$('#save7').fadeIn(500)}, 300);

});

$('.img17').on('click',function(){
  $('#memo').fadeOut(500);
  $('#save7').fadeOut(500);
  $('.img17'). fadeOut(500);
  setTimeout(function () {$('.img17').remove('.img17')}, 500);
  setTimeout(function () {$('.img18').fadeIn(500)}, 700);
});

$('.img18').on('click',function(){
  $('.img18'). fadeOut(500);
  setTimeout(function () {$('.img18').remove('.img18')}, 500);
  setTimeout(function () {$('.img19').fadeIn(500)}, 700);
  setTimeout(function () {$('#memo').fadeIn(500)}, 200);
  setTimeout(function () {$('#save8').fadeIn(500)}, 300);

});

$('.img19').on('click',function(){
  $('#memo').fadeOut(500);
  $('#save8').fadeOut(500);
  $('.img19'). fadeOut(500);
  setTimeout(function () {$('.img19').remove('.img19')}, 500);
  setTimeout(function () {$('.img20').fadeIn(500)}, 700);
});

$('.img20').on('click',function(){
  $('.img20'). fadeOut(500);
  setTimeout(function () {$('.img20').remove('.img20')}, 500);
  setTimeout(function () {$('.img21').fadeIn(500)}, 700);
  setTimeout(function () {$('#memo').fadeIn(500)}, 200);
  setTimeout(function () {$('#save9').fadeIn(500)}, 300);
});

$('.img21').on('click',function(){
  $('#memo').fadeOut(500);
  $('#save9').fadeOut(500);
  $('.img21'). fadeOut(500);
  setTimeout(function () {$('.img21').remove('.img21')}, 500);
  setTimeout(function () {$('.img22').fadeIn(500)}, 700);
});

$('.img22').on('click',function(){
  $('.img22'). fadeOut(500);
  setTimeout(function () {$('.img22').remove('.img22')}, 500);
  setTimeout(function () {$('.img23').fadeIn(500)}, 700);
  setTimeout(function () {$('#memo').fadeIn(500)}, 200);
  setTimeout(function () {$('#save10').fadeIn(500)}, 300);

});

$('.img23').on('click',function(){
  $('#memo').fadeOut(500);
  $('#save10').fadeOut(500);
  $('.img23'). fadeOut(500);
  setTimeout(function () {$('.img23').remove('.img23')}, 500);
  setTimeout(function () {$('.img24').fadeIn(500)}, 700);
});

$('.img24').on('click',function(){
  $('.img24'). fadeOut(500);
  setTimeout(function () {$('.img24').remove('.img24')}, 500);
  setTimeout(function () {$('.img25').fadeIn(500)}, 700);
  setTimeout(function () {$('#memo').fadeIn(500)}, 200);
  setTimeout(function () {$('#save11').fadeIn(500)}, 300);

});

$('.img25').on('click',function(){
  $('#memo').fadeOut(500);
  $('#save11').fadeOut(500);
  $('.img25'). fadeOut(500);
  setTimeout(function () {$('.img25').remove('.img25')}, 500);
  setTimeout(function () {$('.img26').fadeIn(500)}, 700);
});

$('.img26').on('click',function(){
  $('.img26'). fadeOut(500);
  setTimeout(function () {$('.img26').remove('.img26')}, 500);
  setTimeout(function () {$('.img27').fadeIn(500)}, 700);
  setTimeout(function () {$('.result').fadeIn(500)}, 1000);
//まとめ
});

$('.img27').on('click',function(){
  $('.result').fadeOut(500);
  $('.img27'). fadeOut(500);
  setTimeout(function () {$('.img27').remove('.img27')}, 500);
  setTimeout(function () {$('.img28').fadeIn(500)}, 700);
});

$('.img28').on('click',function(){
  $('.img28'). fadeOut(500);
  setTimeout(function () {$('.img28').remove('.img28')}, 500);
  setTimeout(function () {$('.img29').fadeIn(500)}, 700);
});

$('.img29').on('click',function(){
  $('.img29'). fadeOut(500);
  setTimeout(function () {$('.img29').remove('.img29')}, 500);
  setTimeout(function () {$('.img30').fadeIn(500)}, 700);
});