
let addBtn = document.querySelector('.addBtn');
let popUp = document.querySelector('.popup');
let darkBg = document.querySelector('.pageDark');
addBtn.addEventListener('click',e => {
  console.log("Popup Clicked")
  if(popUp.style.display === "none") {
    popUp.style.display = "block";
      // darkBg.style.display = "rgba(0,0,0,0)";
    darkBg.style.display = "none";
  }else {
    popUp.style.display = "none";

  }
})
let close = document.querySelector('.closePopUp');
close.addEventListener('click',e => {
  popUp.style.display = "none";
      darkBg.style.display = "none";
})
