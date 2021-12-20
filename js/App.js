// selectors
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const triggers = document.querySelectorAll(".modal-trigger");
const modal = document.querySelector(".modal");
const navItems = document.querySelectorAll(".sidebar a");
const overlay = document.querySelector(".overlay");

document.addEventListener("DOMContentLoaded", startAnime);

const tl = gsap.timeline();

function slickAnimation(){
  const tl3 = gsap.timeline();
  tl3
}
slickAnimation();


function startAnime() {
  tl.pause();
  tl.to(".overlay2", {
    duration: 1,
    clipPath: "circle(100%)",
    ease: "power2.out",
  })
    .to(
      ".sidebar",
      {
        duration: 1,
        visibility: "visible",
        opacity: 1,
        background: "#FFF",
      },
      "-=1"
    )

    .fromTo(
      ".sidebar a",
      {
        color: "#FFF",
        opacity: 0,
        scale: 1.5,
        y: "random(200, 200)",
      },
      {
        opacity: 1,
        stagger: 0.5,
        y: 0,
        scale: 1.0,
        color: "#777",
      }
    )
    .to(
      ".menu2 .bar1",
      {
        rotate: "45deg",
        top: "45%",
        opacity: 1,
        x: 0,
      },
      "-=3"
    )
    .to(
      ".menu2 .bar2",
      {
        rotate: "-45deg",
        top: "45%",
      },
      "-=3"
    );
  let menu = document.querySelector(".menu");

  menu.addEventListener("click", () => {
    console.log("clicked");
    tl.play();
    navItems.forEach((a) => {
      a.addEventListener("click", () => {
        tl.reverse(0.7);
      });
    });
    const closeBtn = document.querySelector(".menu2");
    closeBtn.onclick = () => {
      tl.reverse(0.7);
      while (menu) {
        tl.exit();
        menu = false;
      }
    };
  });
}

triggers.forEach((modalTrigger) => {
  modalTrigger.addEventListener("click", () => {
    const tl2 = gsap.timeline();
    tl2.fromTo(
      ".modal",
      { scale: 1.2, duration: 1 },
      {
        visibility: "visible",
        opacity: 1,
        duration: 1,
        ease: "bounce",
        scale: 1.0,
      }
    );
    tl2.to(
      ".overlay",
      {
        visibility: "visible",
        opacity: 1,
        duration: 1,
        clipPath: "circle(100%)",
        ease: "power2.out",
      },
      "*=-1"
    );
    overlay.addEventListener("click", () => {
      tl2.reverse(0.7);
    });
  });
});
