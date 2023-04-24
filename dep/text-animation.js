document.addEventListener("DOMContentLoaded", function () {
    const ia = new ImgAnimation(".bg-img");
    const ta2 = new GsapAnimation(".animate-title");
    ia.animate();
    ta2.animate();
  });
  
  class TextAnimation {
    constructor(el) {
      this.DOM = {};
      this.DOM.el = document.querySelector(el);
      this.chars = this.DOM.el.innerHTML.trim().split("");
      this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
      return this.chars.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, "&nbsp;");
        return `${acc}<span class="char">${curr}</span>`;
      }, "");
    }
    animate() {
      this.el.classList.toggle("inview");
    }
  }
  
  class GsapAnimation extends TextAnimation {
    constructor(el) {
      super(el);
      this.DOM.chars = this.DOM.el.querySelectorAll(".char");
    }
  
    animate() {
      this.DOM.el.classList.add("inview");
      this.DOM.chars.forEach((c, i) => {
        gsap.to(c, 0.6, {
          transformOrigin: "0%  50% -50",
          y: -80,
          duration: 0.8,
          rotationX: -360,
          ease: Back.easeOut,
          delay: i * 0.05,
          startAt: { y: "-50%", opacity: 0, rotation: 0 },
          y: "0%",
          opacity: 1,
        });
      });
      console.log("fdsafdsa");
    }
  }
  
  class ImgAnimation {
    constructor(el) {
      this.el = document.querySelector(el);
      this.img = this.el.innerHTML;
    }
    animate() {
      this.el.classList.toggle("inview");
    }
  }