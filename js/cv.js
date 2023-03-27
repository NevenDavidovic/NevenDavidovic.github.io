    // Get the container element
    const container = document.querySelector('.container');
    
  
    // Set the initial opacity and position
    container.style.opacity = 0;
    container.style.transform = 'translateY(50px)';
    
    // Animate the element when the page loads
    window.onload = () => {
      container.style.opacity = 1;
      container.style.transform = 'translateY(0)';
      container.style.transition = 'opacity 1s, transform 1s';
    };

    function downloadCV() {
        if (confirm("Are you sure you want to download CV of this awesome guy?")) {
          window.location.href = "documents/cv.pdf";
        }
      }

