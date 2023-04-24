class PicAnimation {
  constructor(pic) {
    this.pics = document.querySelectorAll(".pic");
    console.log(this.pics);
  }

  animate() {
    
    this.pics.forEach((key) => {
      const keys = key.classList.add("inview");
      console.log(keys);
    });
  }
}
