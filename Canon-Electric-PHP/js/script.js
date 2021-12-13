const menuBtn = document.getElementById("menu");
const menuList = document.getElementById("menu-list");
menuBtn.addEventListener("click", () => menuList.classList.toggle("navToggle"));

const coll = document.getElementsByClassName("question");


for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}