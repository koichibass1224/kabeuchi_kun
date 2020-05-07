//ランダム質問

var random = Math.floor(Math.random() * 3); 

$(".img15").on("click", function () {
  //一つ前のアクション
  var value = localStorage.getItem('name');
if (random == 0) {
  $(".img16").html('あなたの'+value+'を'+'</br>'+'孫正義に紹介してください。'+'</br>'+'彼がすでに考えていたら'+'</br>'+'どのようなサービスでしょうか。'); 
  $('#memo').attr('placeholder','孫正義がやっていたら');
} else if (random == 1) {
  $(".img16").html('あなたの'+value+'を'+'</br>'+'イーロン・マスクに紹介してください。'+'</br>'+'彼がすでに考えていたら'+'</br>'+'どのようなサービスでしょうか。'); 
  $('#memo').attr('placeholder','イーロン・マスクがやっていたら');
} else {
  $(".img16").html('あなたの'+value+'を'+'</br>'+'ティム・クックに紹介してください。'+'</br>'+'彼がすでに考えていたら'+'</br>'+'どのようなサービスでしょうか。'); 
  $('#memo').attr('placeholder','ティム・クックがやっていたら');
}
$('#save7').on('click',function(){
  $('#memo'). fadeOut(500);
  $('#save7'). fadeOut(500);
  setTimeout(function () {
  $('#memo').attr('placeholder','似たサービスはどんなもの？')}, 500);
  setTimeout(function () {$('textarea').val("");}, 500);

  const value = $("#memo").val();
var key1 = '孫正義がやっていたら'
var key2 = 'イーロン・マスクがやっていたら'
var key3 = 'ティム・クックがやっていたら'
if (random == 0) {
  localStorage.setItem(key1,value);
} else if  (random == 1){
  localStorage.setItem(key2,value);
  } else {
    localStorage.setItem(key3,value);
  }
});
});


var random2 = Math.floor(Math.random() * 3); 

$(".img21").on("click", function () {
  //一つ前のアクション
  var value = localStorage.getItem('name');
if (random2 == 0) {
  $(".img22").html('あなたが一番くやしいと感じたのはいつですか？'+value+'はその悩みと少しでもつながるでしょうか。'); 
  $('#memo').attr('placeholder','一番くやしかったこと');
} else if (random2 == 1) {
  $(".img22").html('あなたの'+value+'を批判している人がいます。'+'</br>'+'それは誰が、何と言っているでしょう。'); 
  $('#memo').attr('placeholder','誰が何と批判していますか');
} else {
  $(".img22").html('あなたの'+value+'をつかって、ありがとうと言った人がいます。'+'</br>'+'誰が、どうして言っているのでしょうか。'); 
  $('#memo').attr('placeholder','誰がどうしてありがとうを言っている？');
}
$('#save10').on('click',function(){
  $('#memo'). fadeOut(500);
  $('#save10'). fadeOut(500);
  setTimeout(function () {
  $('#memo').attr('placeholder','一番届けたいのは誰')}, 500);
  setTimeout(function () {$('textarea').val("");}, 500);

  const value = $("#memo").val();
var key4 = '一番くやしかったこと'
var key5 = '誰が何と批判していますか'
var key6 = '誰がどうしてありがとうを言っている？'
if (random2 == 0) {
  localStorage.setItem(key4,value);
} else if  (random2 == 1){
  localStorage.setItem(key5,value);
  } else {
    localStorage.setItem(key6,value);
  }
});
});
