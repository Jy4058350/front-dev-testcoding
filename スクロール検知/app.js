const child = document.querySelector('.child');
const child1 = document.querySelector('.child1');
const child2 = document.querySelector('.child2');

// console.log(child);

const cb = function(entries, observer) {
    //IntersectionObserverは、コールバック関数に対して、
    //IntersectionObserverEntryの配列を引数として渡します。
    //その配列の中には、監視対象の要素が含まれています。
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            //監視対象の要素が画面に入ったときの処理
            console.log('inview');
            // observer.unobserve(entry.target);
            console.log(entry.target)
            entry.target.classList.add('inview');
            
         } else {
                //監視対象の要素が画面から出たときの処理
                console.log('not inview');
                entry.target.classList.remove('inview');
            }});};

const options = {
    root: null,
    rootMargin: "-100px 0px",
    threshold: 0
};


const io = new IntersectionObserver(cb, options);
io.observe(child);
io.observe(child1);
io.observe(child2);
