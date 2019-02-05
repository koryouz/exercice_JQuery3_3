$(document).ready(function(){
var n = Math.floor(Math.random() * 101);
var tryNumber = 0;
  $('#button').click(function(){
    var n1 = $('#number').val();
    tryNumber=tryNumber+1;
    if(n1 > n){
      alert('Moins');
    }else if(n1 < n){
      alert('Plus');
    }else{
      alert('Correct, nombre de try : '+ tryNumber);
    }
  });
});
