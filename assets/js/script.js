
function show_hide(){
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