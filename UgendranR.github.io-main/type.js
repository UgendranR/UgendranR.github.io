var x;
 



function playautoscroll(){
  var elem = document.getElementById("about");
  elem .scrollIntoView({behavior: "smooth"});

}




function dlay(){
  setTimeout(function(){playautoscroll() }, 10000);

}
window.onload=dlay();


