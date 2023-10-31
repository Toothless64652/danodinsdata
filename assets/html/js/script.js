const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      mainToggle = body.querySelector(".main-toggle"),
      change = body.querySelector(".change");
      // sidebar 


      
        toggle.addEventListener("click", ()=>{
          sidebar.classList.toggle("close");
          if(sidebar.classList.contains("close")){
            change.innerHTML = "&#9776;"
          }else{
            change.innerHTML = "&#10006;"
          }
        });
      
      mainToggle.addEventListener("click", () =>{
        sidebar.classList.toggle("nav");
        if (sidebar.classList.contains("nav")) {
          sidebar.style.display = "block";
          sidebar.classList.remove("close");
          change.style.display = "none";
          mainToggle.innerHTML = "&#10006;"
        } else {
          sidebar.style.display = "none";
          mainToggle.innerHTML = "&#9776;"
        } 
      })
      
let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
   let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
   arrowParent.classList.toggle("showMenu");
    });
  }
  

  // automated funding 
const wemaBtn = document.querySelector(".wema-btn"),
      wema = document.querySelector(".wema"),
      rolezBtn = document.querySelector(".rolez-btn"),
      rolez = document.querySelector(".rolez");

rolezBtn.addEventListener("click", () =>{
  wema.style.display = "none";
  rolez.style.display = "block";
  rolezBtn.classList.add("active-btn")
  
  if (rolezBtn.classList.contains('active-btn')) {
    wemaBtn.classList.remove("active-btn")
  }
});


wemaBtn.addEventListener("click", () =>{
  wema.style.display = "block";
  rolez.style.display = "none";
  wemaBtn.classList.add("active-btn")
  
  if (wemaBtn.classList.contains('active-btn')) {
    rolezBtn.classList.remove("active-btn")
  }
});

//  FAQs

function myFunction(evt, displayName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("p");
  signBtn = document.getElementsByClassName("faqplus");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("drop-onclick");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
      }

  document.getElementById(displayName).style.display = "block";
  evt.currentTarget.className += "active";
}
      
