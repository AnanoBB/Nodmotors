
function show_hide1(){
  let book = document.getElementById("showB");
  let click = document.getElementById("overlay");
  if(click.style.display=="none"){
    click.style.display = "block";
  }
  else{
    click.style.display = 'none';
  }
  if (book.textContent === "Book") {
    book.textContent = "X";
  } else {
    book.textContent = "Book";
  }
}

document.getElementById('submit').addEventListener('click',function(){
  document.querySelector(".overlay_div").style.display ='flex';
  document.querySelector('.overlay_form').style.display='none';
  

})


function show_hide(){
  let click = document.getElementById("drop-content");
  if(click.style.display=="none"){
    click.style.display = "block";
  }
  else{
    click.style.display = 'none';
  }
}

document.querySelector( "#activeB" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
});  


