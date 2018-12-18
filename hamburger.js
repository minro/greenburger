const hamburger = document.querySelector(".hamburger");
const lineOne = hamburger.querySelector(".line-1");
const lineTwo = hamburger.querySelector(".line-2");
const lineThree = hamburger.querySelector(".line-3");

const lines = [lineThree, lineTwo, lineOne];

const tml = new TimelineMax({});

hamburger.addEventListener("mouseenter", () => {
  if (hamburger.classList.contains("js-x")) {
    return;
  } else {
    tml.staggerTo(
      lines,
      0.1,
      {
        scaleX: 1.2,
        repeat: 1,
        yoyo: true,
        ease: Power2.easeInOut
        // svgOrigin: "50 50"
      },
      0.1
    );
  }
});

const toggleMenu = new TimelineMax({ paused: true, reversed: true });

toggleMenu
  .to(
    lineTwo,
    0.1,
    {
      scaleX: 0
    },
    0
  )
  .to(
    lineOne,
    0.125,
    {
      //   rotation: 45,
      transformOrigin: "50% 50%",
      y: 25,
      ease: Power2.easeInOut
    },
    "slide"
  )
  .to(
    lineThree,
    0.125,
    {
      //   rotation: -45,
      transformOrigin: "50% 50%",
      y: -25,
      ease: Power2.easeInOut
    },
    "slide"
  )
  .to(hamburger, 0.25, { rotation: 1080, ease: Power4.easeInOut })
  .to(
    lineOne,
    0.125,
    {
      rotation: 45,
      ease: Power2.easeInOut
    },
    "cross"
  )
  .to(
    lineThree,
    0.125,
    {
      rotation: -45,
      ease: Power2.easeInOut
    },
    "cross"
  );

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("js-x");
  toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
});
