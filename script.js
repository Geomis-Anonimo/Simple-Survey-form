var tabState = 0;

document.addEventListener("DOMContentLoaded", function(event) {
  showTab(tabState);
});


function showTab(index) {

    var prev = document.getElementById("previouBtn");
    var next = document.getElementById("nextBtn");
    var currentIndex = document.getElementsByClassName("tab");

    currentIndex[index].style.display = "block";

    if (index == 0) {
      prev.setAttribute("style", "display: none");
    } else {
      prev.setAttribute("style", "display: inline");
    }
    if ( index == (currentIndex.length - 1)) {
      next.innerHTML = '<i class="fa fa-angle-double-right"></i>';
    } else {
      next.innerHTML = '<i class="fa fa-angle-double-right"></i>';
    }
  fixStepIndicator(index)
}

function nextPrev(index) {
  var currentIndex = document.getElementsByClassName("tab");
  if ( index == 1 && !validateForm()) return false;
  currentIndex[tabState].setAttribute("style", "display: none")
  tabState = tabState + index;

  if ( tabState >= currentIndex.length) {
    document.getElementById("nextprevious").setAttribute("style", "display: none");
  document.getElementById("all-steps").setAttribute("style", "display: none");
  document.getElementById("register").setAttribute("style", "display: none");
  document.getElementById("text-message").setAttribute("style", "display: block");
  }
  showTab(tabState);
}


function validateForm () {
  var currentIndex, inputRef, i, valid = true;
  var currentIndex = document.getElementsByClassName("tab");
  inputRef = currentIndex[tabState].getElementsByTagName("input");
  
  for (i = 0; i < inputRef.length; i++) {
    if (inputRef[i].value == "") {
      inputRef[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[tabState].className += " finish";
  }
  return valid;
}

function fixStepIndicator(index) {
  var i, currentIndex = document.getElementsByClassName("step");

  for (i = 0; i < currentIndex.length; i++) {
    currentIndex[i].className = currentIndex[i].className.replace(" active", "");
  }
  currentIndex[index].className += " active";
}