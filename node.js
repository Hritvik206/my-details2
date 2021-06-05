const passport = document.querySelector(".sel-3");
const countries = document.querySelectorAll(".countries");

passport.onchange = () => {
  countries.forEach((item) => {
    if (passport.value === "yes") {
      item.style.display = "";
    }
    if (passport.value === "no" || passport.value === "select") {
      item.style.display = "none";
    }
  });
};

passport.onchange();