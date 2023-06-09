/*build*/

const tl = gsap.timeline(),
  mySplitText = new SplitText("#quote", { type: "words,chars" }),
  chars = mySplitText.chars; //an array of all the divs that wrap each character


// console.log(chars);

tl.from(chars, {
  duration: 0.8,
  opacity: 0,
  scale: 0,
  y: 10,
  rotationX: 180,
  transformOrigin: "0% 50% -50",
  ease: "back",
  stagger: 0.01
});

document.getElementById("animate").onclick = function () {
  tl.restart();
};

