// ----------------------------------------------------------------
// second component :

document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = document.getElementById("email").value;

    if (emailInput) {
      document.getElementById("thankYouMessage").style.display = "flex";
      this.reset();
    }
  });

document.getElementById("back").addEventListener("click", function () {
  document.getElementById("thankYouMessage").style.display = "none";
});

// ----------------------------------------------------------------
// third component :

const scrollcontainer = document.querySelector(".gallery");
const backbtn = document.getElementById("backbtn");
const nextbtn = document.getElementById("nextbtn");

let scrollInterval;

function startScrolling(direction) {
  stopScrolling();
  scrollInterval = setInterval(() => {
    scrollcontainer.scrollLeft += direction;
  }, 10);
}

function stopScrolling() {
  clearInterval(scrollInterval);
}

nextbtn.addEventListener("mousedown", () => startScrolling(5));
backbtn.addEventListener("mousedown", () => startScrolling(-5));
document.addEventListener("mouseup", stopScrolling);

nextbtn.addEventListener("click", () => {
  scrollcontainer.scrollLeft += 900;
});

backbtn.addEventListener("click", () => {
  scrollcontainer.scrollLeft -= 900;
});

scrollcontainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollcontainer.scrollLeft += evt.deltaY;
});

// ----------------------------------------------------------------
// six-part :
  let hasAnimated = false;

  function startCounting() {
    const six = document.getElementById("six");
    for (let i = 1; i <= 20; i++) {
      setTimeout(() => {
        six.innerHTML = i + "k";
      }, i * 100);
    }

    const six1 = document.getElementById("six1");
    for (let i = 1; i <= 14; i++) {
      setTimeout(() => {
        six1.innerHTML = i + "k";
      }, i * 140);
    }

    const six2 = document.getElementById("six2");
    for (let i = 0; i <= 2; i++) {
      setTimeout(() => {
        six2.innerHTML = i + "m";
      }, i * 1000);
    }
  }

  window.addEventListener("scroll", () => {
    const section = document.getElementById("counter-section");
    const position = section.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 200) {
      if (!hasAnimated) {
        startCounting();
        hasAnimated = true;
      }
    }
  });

// ----------------------------------------------------------------
// logo patr:

const scrollcontainere = document.querySelector(".logo-part");
const backbtn1 = document.getElementById("backbtn1");
const nextbtn1 = document.getElementById("nextbtn1");

let scrollIntervale;

function startScrolling(direction) {
  stopScrolling();
  scrollIntervale = setInterval(() => {
    scrollcontainere.scrollLeft += direction;
  }, 10);
}

function stopScrolling() {
  clearInterval(scrollIntervale);
}

nextbtn1.addEventListener("mousedown", () => startScrolling(5));
backbtn1.addEventListener("mousedown", () => startScrolling(-5));
document.addEventListener("mouseup", stopScrolling);

nextbtn1.addEventListener("click", () => {
  scrollcontainere.scrollLeft += 900;
});

backbtn1.addEventListener("click", () => {
  scrollcontainere.scrollLeft -= 900;
});

scrollcontainere.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollcontainere.scrollLeft += evt.deltaY;
});

// ----------------------------------------------------------------
// last part :

document.getElementById("email-Form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("Email").value;
  const name = document.getElementById("name").value;

  if (email && name) {
    document.getElementById("thankMessage").style.display = "block";
    this.reset();
  }
});

document.getElementById("xback").addEventListener("click", function () {
  document.getElementById("thankMessage").style.display = "none";
});
