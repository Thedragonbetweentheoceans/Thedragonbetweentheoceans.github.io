function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("content").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}




for(var i = 1; i<=6;i++)
{
  
    var modal = document.getElementById("myModal"+i);


    var img = document.getElementById("myImg"+i);
    var modalImg = document.getElementById("img0"+i);
    var captionText = document.getElementById("caption"+i);
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }


    var span = document.getElementsByClassName("close")[i];


    span.onclick = function() {
      modal.style.display = "none";
    }
}