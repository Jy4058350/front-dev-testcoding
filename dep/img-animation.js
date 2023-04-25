class PicAnimation {
  constructor(pic) {
    this.pics = document.querySelector(".pic");
    console.log(this.pics);
  }

  animate() {
    this.pics.classList.add("inview");
  }
}
