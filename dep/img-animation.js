class PicAnimation {
  constructor(pic) {
    this.pics = document.querySelector(".pic");
    // this.pics = document.querySelectorAll(".pic");
    console.log(this.pics);
  }

  animate() {
    this.pics.classList.toggle("inview");
    };
  
  // animate() {
  //   this.pics.forEach((key) => {
  //     const keys = key.classList.toggle("inview");
  //     console.log(keys);
  //   });
  // }
  }
