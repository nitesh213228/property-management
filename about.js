// ----------------------------------------------------------------------------
// first-component:

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("first-component")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const emailValue = document.getElementById("email").value;

      if (emailValue) {
        document.getElementById("first-component-message").style.display = "flex";
        this.reset();
      }
    });

  document.getElementById("about-back").addEventListener("click", function () {
    document.getElementById("first-component-message").style.display = "none";
  });
});

// ----------------------------------------------------------------------------
// fourth-component:

for (let i = 1; i <= 20; i++) {
  (function (j) {
    setTimeout(() => {
      for1.innerHTML = j + "k";
    }, j * 100);
  })(i);
}

for (let i = 1; i <= 14; i++) {
  (function (j) {
    setTimeout(() => {
      for2.innerHTML = j + "k";
    }, j * 140);
  })(i);
}

for (let i = 0; i <= 2; i++) {
  (function (j) {
    setTimeout(() => {
      for3.innerHTML = j + "m";
    }, j * 1000);
  })(i);
}

// ----------------------------------------------------------------------------
// sevan-component:

const scrollcontant = document.querySelector(".sevan-logo");
const backbtn2 = document.getElementById("backbtn2");
const nextbtn2 = document.getElementById("nextbtn2");

let scrollinten;

function startScrolling(direction) {
  stopScrolling();
  scrollinten = setInterval(() => {
    scrollcontant.scrollLeft += direction;
  }, 10);
}

function stopScrolling() {
  clearInterval(scrollinten);
}

nextbtn2.addEventListener("mousedown", () => startScrolling(5));
backbtn2.addEventListener("mousedown", () => startScrolling(-5));
document.addEventListener("mouseup", stopScrolling);

nextbtn2.addEventListener("click", () => {
  scrollcontant.scrollLeft += 900;
});

backbtn2.addEventListener("click", () => {
  scrollcontant.scrollLeft -= 900;
});

scrollcontant.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollcontant.scrollLeft += evt.deltaY;
});
