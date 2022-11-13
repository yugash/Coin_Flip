
document.querySelector("button").addEventListener("click",flip);
function flip(){
  var n=Math.floor((Math.random()*4)+1);
  if(n%2==0){
    document.querySelector(".main_image").setAttribute("src","coin_images/Head.jpg");
  }
  else{
    document.querySelector(".main_image").setAttribute("src","coin_images/Tail.jpg");
  }
}
