function sample() {
  event.preventDefault();
  var background = document.getElementById('example').style.background;
      
  html2canvas(document.getElementById('example'), {
    
      useCORS: true, // 다른사이트의리소스가있을때활성화(그러나...Access-Control-Allow-Origin 필요)
      onrendered: function(canvas) {
          canvas.toBlob(function(blob) {
              saveAs(blob, 'download.png');
          });
          
          // $("#test").html('<img src=' + canvas.toDataURL("image/png") + '>');
      }
  });
}
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("src", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var src = document.getElementById(ev.dataTransfer.getData("src"));
  var srcParent = src.parentNode;
  var tgt = ev.currentTarget.firstElementChild;

  ev.currentTarget.replaceChild(src, tgt);
  srcParent.appendChild(tgt);
}


//캐러셀 구현

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  // dots[slideIndex-1].className += " active";
}

//modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}