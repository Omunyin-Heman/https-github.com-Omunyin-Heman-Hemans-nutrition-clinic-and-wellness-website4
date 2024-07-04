document.addEventListener("DOMContentLoaded", function() {
    // Get all buttons with class="collapsible"
    const coll = document.querySelectorAll(".collapsible");
  
    // Loop through the buttons and add the click event listener
    coll.forEach(function(btn) {
      btn.addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
  
        // Toggle the display of content
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  });