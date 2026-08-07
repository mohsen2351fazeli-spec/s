const btns = document.querySelectorAll(".new-nav-btn");
const articels = document.querySelectorAll(".new");
const btnsHale = document.querySelector(".new-nav-hale");
let i = 0;
let sa;

const observer = new IntersectionObserver(
  (ens) => {
    ens.forEach((en) => {
      if (en.isIntersecting) {
        const elem = en.target;
        ``;
        articels.forEach((a, i) => {
          if (a === elem) {
            btnsHale.className = `new-nav-hale a${i + 1}`;
            // clearInterval(sa);
            // sa = setInterval(() => {
            //   i = (i + 1) % articels.length;
            //   articels[i].scrollIntoView({
            //     behavior: "smooth",
            //     block: "nearest",
            //     inline: "start",
            //   });
            // }, 5000);
          }
        });
      }
    });
  },
  {
    threshold: 0.8,
    root: document.querySelector(".container"),
    rootMargin: "0px",
  },
);

articels.forEach((a) => {
  observer.observe(a);
});
// sa = setInterval(() => {
//   i = (i + 1) % articels.length;
//   articels[i].scrollIntoView({
//     behavior: "smooth",
//     block: "nearest",
//     inline: "start",
//   });
// }, 5000);

const rightbtn = document.querySelector(".right-btn");
const leftbtn = document.querySelector(".left-btn");

leftbtn.addEventListener("click", () => {
  i = (i + 1) % articels.length;
  articels[i].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start",
  });
});

rightbtn.addEventListener("click", () => {
  i = (i - 1) % articels.length;
  i < 0 ? (i = articels.length - 1) : true;
  articels[i].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start",
  });
});
