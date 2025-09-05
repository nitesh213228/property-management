// --------------------------------------------------------------------------------------
// first-part :

document
  .getElementById("first")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("email").value;

    if (emailInput) {
      document.getElementById("fist-message").style.display = "flex";
      this.reset();
    }
  });

document.getElementById("close").addEventListener("click", function () {
  document.getElementById("fist-message").style.display = "none";
});

// --------------------------------------------------------------------------------------
//  five-component :

const option1 = document.getElementById("option1");

for (let i = 1; i <= 20; i++) {
  (function (j) {
    setTimeout(() => {
      option1.innerHTML = j + "k";
    }, j * 100);
  })(i);
}

const six1 = document.getElementById("option2");

for (let i = 1; i <= 14; i++) {
  (function (j) {
    setTimeout(() => {
      option2.innerHTML = j + "k";
    }, j * 140);
  })(i);
}

const six2 = document.getElementById("option3");

for (let i = 0; i <= 2; i++) {
  (function (j) {
    setTimeout(() => {
      option3.innerHTML = j + "m";
    }, j * 1000);
  })(i);
}

// --------------------------------------------------------------------------------------
// sevan-component:

const scrollcontant = document.querySelector(".landing-logo");
const backbtn3 = document.getElementById("backbtn3");
const nextbtn3 = document.getElementById("nextbtn3");

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

nextbtn3.addEventListener("mousedown", () => startScrolling(5));
backbtn3.addEventListener("mousedown", () => startScrolling(-5));
document.addEventListener("mouseup", stopScrolling);

nextbtn3.addEventListener("click", () => {
  scrollcontant.scrollLeft += 900;
});

backbtn3.addEventListener("click", () => {
  scrollcontant.scrollLeft -= 900;
});

scrollcontant.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollcontant.scrollLeft += evt.deltaY;
});

// --------------------------------------------------------------------------------------
// nine-component :

  document.getElementById('last').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const email1 = document.getElementById("username").value;
    const name1 = document.getElementById("email1").value;

    if (email1 && name1){
      document.getElementById("thanks").style.display = "block";
      this.reset();
    }
  });

  document.getElementById("xback1").addEventListener("click", function () {
    document.getElementById("thanks").style.display = "none";
  });

