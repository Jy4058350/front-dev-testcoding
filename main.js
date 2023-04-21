document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn");
  const ia = new ImgAnimation(".bg-img");
  const ta = new TextAnimation(".animate-title");
  const ta2 = new TextAnimation(".animate-title2");
  ia.animate();
  ta.animate();
  ta2.animate();
  btn.addEventListener("click", ia.animate.bind(ia));
  btn.addEventListener("click", ta.animate.bind(ta));
  btn.addEventListener("click", ta2.animate.bind(ta2));
});

class TextAnimation {
  constructor(el) {
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
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

class ImgAnimation {
  constructor(el) {
    this.el = document.querySelector(el);
    this.img = this.el.innerHTML;
  }
  animate() {
    this.el.classList.toggle("inview");
  }
}
