document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".animate-title");
  const el2 = document.querySelector(".animate-title2");
  console.log(el);
  const str = el.innerHTML.trim().split("");
  const str2 = el2.innerHTML.trim().split("");
  console.log(str);
  let concatStr = "";

  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, "&nbsp;");
    return `${acc}<span class="char">${curr}</span>`;
  }, "");
  el2.innerHTML = str2.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, "&nbsp;");
    return `${acc}<span class="char">${curr}</span>`;
  }, "");
});
