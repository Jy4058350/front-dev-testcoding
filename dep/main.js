document.addEventListener("DOMContentLoaded", function () {
  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TextAnimation(el);
      ta.animate();
      const ia = new PicAnimation(el);
      ia.animate();
    }
  };
  const sot = new ScrollObserver(".animate-title", cb);
  const soi = new ScrollObserverImg(".pic", cb);
});

class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    this._init();
    const defaultoptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    this.cb = cb;
    this.optins = Object.assign(defaultoptions, options);
  }
  _init() {
    const callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true);
          observer.unobserve(entry.target);
        } else {
          console.log(this.cb);
          this.cb(entry.target, false);
        }
      });
    };
    this.io = new IntersectionObserver(callback.bind(this), this.options);
    this.els.forEach((el) => this.io.observe(el));
  }
}
class ScrollObserverImg {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    this._init();
    const defaultoptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    this.cb = cb;
  }
  _init() {
    const callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true);

        } else {
          this.cb(entry.target, false);
        }
      });
    };
    this.io = new IntersectionObserver(callback.bind(this), this.options);
    this.els.forEach((el) => this.io.observe(el));
  }
}
// pics.forEach((pic) => this.io.observe(pic));

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
