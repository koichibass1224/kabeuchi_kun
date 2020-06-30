$("#clear").on('click', function () {localStorage.clear();
});
$("#clear2").on('click', function () {localStorage.clear();
  $("#key").val("");
  $("#memo").val(""); 
  $("#list").empty();
  });

/*$(function(){
  if(localStorage.getItem('name')){
  $('#memo').val(localStorage.getItem('name'));
  $("#servise").append('name');}
});*/

$('#save1').on('click',function(){
  $('#memo'). fadeOut(500);
  $('#save1'). fadeOut(500);
  setTimeout(function () {
  $('#memo').attr('placeholder','ひとことでいうと')}, 500);
  setTimeout(function () {$('textarea').val("");}, 500);

  const key = 'name'
  const value = $("#memo").val();
  localStorage.setItem(key,value);
  console.log(key);
  console.log(value);
   $("#servise").append(value);
   $("#servise2").append(value);
   $("#servise3").append(value);
   $("#servise4").append(value);
   $("#servise5").append(value);
   $("#servise6").append(value);
   $("#servise7").append(value);
   $("#servise8").append(value);
   $("#servise9").append(value);
   $("#servise10").append(value);
   $("#servise11").append(value);
   $("#servise12").append(value);
   $("#servise13").append(value);
});

$('#save2').on('click',function(){
  $('#memo'). fadeOut(500);
  $('#save2'). fadeOut(500);
  setTimeout(function () {
  $('#memo').attr('placeholder','ニュースや記事の内容は')}, 500);
  setTimeout(function () {$('textarea').val("");}, 500);
  const key = 'ひとことでいうと'
  const value = $("#memo").val();
  localStorage.setItem(key,value);
  console.log(key);
  console.log(value);
});

$('#save3').on('click',function(){
  $('#memo'). fadeOut(500);
  $('#save3'). fadeOut(500);
  setTimeout(function () {
  $('#memo').attr('placeholder','どんな人たちの課題解決')}, 500);
  setTimeout(function () {$('textarea').val("");}, 500);
  const key = 'ニュースや記事の内容は'
  const value = $("#memo").val();
  localStorage.setItem(key,value);
  console.log(key);
  console.log(value);
});

$('#save4').on('click',function(){
  $('#memo'). fadeOut(500);
  $('#save4'). fadeOut(500);
  setTimeout(function () {
  $('#memo').attr('placeholder','どんな悩みを解決？')}, 500);
  setTimeout(function () {$('textarea').val("");}, 500);
  const key = 'どんな人たちの課題解決？'
  const value = $("#memo").val();
  localStorage.setItem(key,value);
  console.log(key);
  console.log(value);
});

$('#save5').on('click',function(){
  $('#memo'). fadeOut(500);
  $('#save5'). fadeOut(500);
  setTimeout(function () {
  $('#memo').attr('placeholder','競合はなんといっている？')}, 500);
  setTimeout(function () {$('textarea').val("");}, 500);
  const key = 'どんな悩みを解決？'
  const value = $("#memo").val();
  localStorage.setItem(key,value);
  console.log(key);
  console.log(value);
});

$('#save6').on('click',function(){
  $('#memo'). fadeOut(500);
  $('#save6'). fadeOut(500);
  setTimeout(function () {
  $('#memo').attr('placeholder','孫正義に紹介するなら/すでにやっていたら')}, 500);
  setTimeout(function () {$('textarea').val("");}, 500);
  const key = '競合はなんといっている？'
  const value = $("#memo").val();
  localStorage.setItem(key,value);
  console.log(key);
  console.log(value);
});

$('#save8').on('click',function(){
  $('#memo'). fadeOut(500);
  $('#save8'). fadeOut(500);
  setTimeout(function () {
  $('#memo').attr('placeholder','差別化のポイントは？')}, 500);
  setTimeout(function () {$('textarea').val("");}, 500);
  const key = '似たサービスはどんなもの？'
  const value = $("#memo").val();
  localStorage.setItem(key,value);
  console.log(key);
  console.log(value);
});

$('#save9').on('click',function(){
  $('#memo'). fadeOut(500);
  $('#save9'). fadeOut(500);
  setTimeout(function () {
  $('#memo').attr('placeholder','どんな国からどんな始まり方をしている？')}, 500);
  setTimeout(function () {$('textarea').val("");}, 500);
  const key = '差別化のポイントは？'
  const value = $("#memo").val();
  localStorage.setItem(key,value);
  console.log(key);
  console.log(value);
});

$('#save11').on('click',function(){
  $('#memo'). fadeOut(500);
  $('#save11'). fadeOut(500);
  setTimeout(function () {$('textarea').val("");}, 500);
  const key = '一番届けたいのは誰'
  const value = $("#memo").val();
  localStorage.setItem(key,value);
  console.log(key);
  console.log(value);
});

//出力
$('#open').on('click',function(){
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  // getItemのKeyを使って保存されたデータを全部取得
  var value = localStorage.getItem(key);
  value = value.replace(/\r?\n/g, '<br>'); 
  const html = 
  `<li>
    <span>${key}</span>
    <span>${value}</span>
  </li>`
  $("#list").append(html);

}
});
