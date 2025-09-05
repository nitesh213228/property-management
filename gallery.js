// -------------------------------------------------------------------------------
// gallary-1:

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("gallery-1")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const emailValue = document.getElementById("gallery-email").value;

      if (emailValue) {
        document.getElementById("gallery-message").style.display = "flex";
        this.reset();
      }
    });

    document.getElementById("galkery-back").addEventListener("click", function () {
    document.getElementById("gallery-message").style.display = "none";
  });
});

// -------------------------------------------------------------------------------
// gallery-6 :

 document.getElementById('gallery-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const galleryname = document.getElementById("gallery-name").value;
    const galleryEmail = document.getElementById("dream-email").value;

    console.log('data', galleryEmail, galleryname);
    if (galleryname && galleryEmail){
      document.getElementById("gallery-message1").style.display = "block";
      this.reset();
    }
  });

  document.getElementById("gallery-back").addEventListener("click", function () {
  document.getElementById("gallery-message1").style.display = "none";
  });



