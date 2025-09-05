// -------------------------------------------------------------------------------
// contact-1:

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const emailValue = document.getElementById("email").value;

      if (emailValue) {
        document.getElementById("contact-Message").style.display = "flex";
        this.reset();
      }
    });

    document.getElementById("contact-btn").addEventListener("click", function () {
    document.getElementById("contact-Message").style.display = "none";
  });
});

// -------------------------------------------------------------------------------
// contact-2:

 document.getElementById('contact-container').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const galleryname = document.getElementById("username").value;
    const galleryemail = document.getElementById("email1").value;
    const gallerymessage = document.getElementById("message").value;

    if (galleryname && galleryemail && gallerymessage){
      document.getElementById("contact-thaksMessage").style.display = "block";
      this.reset();
    }
  });

  document.getElementById("contact-back").addEventListener("click", function () {
  document.getElementById("contact-thaksMessage").style.display = "none";
  });
  