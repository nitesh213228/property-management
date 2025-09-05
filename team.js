// -------------------------------------------------------------------------------
// team-1:

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("team-1")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const emailValue = document.getElementById("team-email").value;

      if (emailValue) {
        document.getElementById("team-message").style.display = "flex";
        this.reset();
      }
    });

  document.getElementById("team-back").addEventListener("click", function () {
    document.getElementById("team-message").style.display = "none";
  });
});