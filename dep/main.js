document.addEventListener("DOMContentLoaded", function () {
  
  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      // const ta = new TextAnimation(el);
      // ta.animate();
      // アニメーションの実行
      // .cover-slideのアニメーション
      el.classList.add('inview');
      
    }
    
  };
  const sot = new ScrollObserver(".animate-title", cb);
  const soi = new ScrollObserver(".pic", cb);
  const so = new ScrollObserver(".cover-slide", cb);

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

});

/*表紙のアニメーション*/

// const tl = gsap.timeline(),
//   mySplitText = new SplitText(".index", { type: "words,chars" }),
//   chars = mySplitText.chars; //an array of all the divs that wrap each character

// console.log(chars);

// tl.from(chars, {
//   duration: 0.8,
//   opacity: 0,
//   scale: 0,
//   y: 10,
//   rotationX: 180,
//   transformOrigin: "0% 50% -50",
//   ease: "back",
//   stagger: 0.01,
// });

// document.getElementById("animate").onclick = function () {
//   tl.restart();
// };
