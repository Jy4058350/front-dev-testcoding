document.addEventListener("DOMContentLoaded", function () {
  const els = document.querySelectorAll(".animation-title");
  els.forEach((el) => {
    io.observe(el);
  });
});

const cb = function (entries, observer) {
  //IntersectionObserverは、コールバック関数に対して、
  //IntersectionObserverEntryの配列を引数として渡します。
  //その配列の中には、監視対象の要素が含まれています。
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      //監視対象の要素が画面に入ったときの処理
      const ta = new TextAnimation(entry.target);
      ta.animate();
      observer.unobserve(entry.target);
    } else {
      //監視対象の要素が画面から出たときの処理
    }
  });
};

const options = {
  root: null,
  rootMargin: "-100px 0px",
  threshold: 0,
};

const io = new IntersectionObserver(cb, options);
