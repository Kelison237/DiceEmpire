
let addBtn = document.querySelector('.addBtn');
let popUp = document.querySelector('.popup');
addBtn.addEventListener('click',e => {
  console.log("Popup Clicked")
  if(popUp.style.display === "none") {
    popUp.style.display = "block";
  }else {
    popUp.style.display = "none";
  }
})
let close = document.querySelector('.closePopUp');
close.addEventListener('click',e => {
  popUp.style.display = "none";
})
