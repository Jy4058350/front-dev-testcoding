class PicAnimation {
  constructor(pic) {
    this.pics = document.querySelector(".pic");
  }

  animate() {
    this.pics.classList.add("inview");
  }
}
