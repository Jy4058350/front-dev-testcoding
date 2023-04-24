document.addEventListener("DOMContentLoaded", function () {
  const pics = document.querySelectorAll(".pic");
  const els = document.querySelectorAll(".animate-title");

  const cb = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const ta = new TextAnimation(entry.target);
        ta.animate();

        const ia = new PicAnimation(".pic");
        ia.animate();

        observer.unobserve(entry.target);
      } else {
      }
    });
  };

  const io = new IntersectionObserver(cb);

  els.forEach((el) => io.observe(el));
  pics.forEach((pic) => io.observe(pic));

  /*表紙のアニメーション*/

  const tl = gsap.timeline(),
    mySplitText = new SplitText(".index", { type: "words,chars" }),
    chars = mySplitText.chars; //an array of all the divs that wrap each character

  console.log(chars);

  tl.from(chars, {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    y: 10,
    rotationX: 180,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01,
  });

  // document.getElementById("animate").onclick = function () {
  //   tl.restart();
  // };
});
