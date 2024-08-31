

document.getElementById("slider").addEventListener("click", function() {
  this.classList.toggle("on");
  
  // slider label
  const label = document.getElementById("sliderLabel");
  if (this.classList.contains("on")) {
      label.textContent = "On";
      console.log("Switched On");
  } else {
      label.textContent = "Off";
      console.log("Switched Off");
  }
});