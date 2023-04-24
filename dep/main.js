document.addEventListener("DOMContentLoaded", function () {
  const ia = new PicAnimation(".bg-img");
  ia.animate();
  const ia1 = new PicAnimation(".bg-pic1");
  ia1.animate();
  const ia2 = new PicAnimation(".bg-img2");
  ia2.animate();

  const els = document.querySelectorAll(".animate-title");
  const cb = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const ta2 = new TextAnimation(entry.target);
        ta2.animate();
        observer.unobserve(entry.target);
      } else {
      }
    });
  };

  const io = new IntersectionObserver(cb);
  els.forEach((el) => io.observe(el));
});
