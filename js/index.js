var swiper = new Swiper(".swiper-container", {
    pagination: ".swiper-pagination",
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    freeMode: true,
});

// 获取四个小牛
let cycling = document.querySelector(".cycling");
let peo_num = document.querySelector(".peo_num");
let carbon = document.querySelector(".carbon");
let tree = document.querySelector(".tree");
// console.log(cycling);
let n = 0;
let s = 0;

let timer = setInterval(() => {
    n += 1;
    if (n >= 999) {
        s++;
        n = 0;
    }
    if (s < 10) {
        cycling.innerHTML = "16," + "00" + s + "," + n;
        peo_num.innerHTML = "2" + "00" + s + "," + n;
        carbon.innerHTML = "4,032," + "00" + s + "," + n;
        tree.innerHTML = "201," + "00" + s + "," + n;
    } else if (s >= 10 && s < 100) {
        cycling.innerHTML = "16," + "0" + s + "," + n;
        peo_num.innerHTML = "2" + "0" + s + "," + n;
        carbon.innerHTML = "4,032," + "0" + s + "," + n;
        tree.innerHTML = "201," + "0" + s + "," + n;
    } else {
        cycling.innerHTML = "16," + s + "," + n;
        peo_num.innerHTML = "2" + s + "," + n;
        carbon.innerHTML = "4,032," + s + "," + n;
        tree.innerHTML = "201," + s + "," + n;
    }
}, 50);

// 节点轮播
// 获取图片盒子
var picList = document.querySelector(".picList");
// 获取左右按钮
var l_btn = document.querySelector(".l_btn");
var r_btn = document.querySelector(".r_btn");
r_btn.onclick = function () {
    // 截取第一张图片放到最后去
    let first = picList.firstElementChild;
    picList.appendChild(first);
};
l_btn.onclick = function () {
    // 截取第一张和最后一张，然后把最后一张图片放到第一张前面
    let first = picList.firstElementChild;
    let last = picList.lastElementChild;
    picList.insertBefore(last, first);
};

// banner
let bannerBox = document.querySelector(".bannerBox");
// 获取轮播图片
var bannerList = document.querySelectorAll(".bannerList>li");
// 声明一个初始值
let index = 0;
// 声明一个当前的下标
let curran = 0;
// 获取大盒子的宽度
let width = bannerBox.offsetWidth;
console.log(width);
// 进度条轮播
// var bar = document.querySelector(".bar");
var bar = document.querySelectorAll(".bar");
// 声明一个初始值
var i = 0;
var barIndex = 0;
var bar_timer = setInterval(barFun, 50);

function barFun() {
    if (i < 50) {
        i += 1;
        bar[index].style.width = i * 1 + "px";
    } else if (i >= 50) {
        // 因为定时器会一直调，所以index会一直加加
        index++;
        if (index > bannerList.length) {
            index = 0;
            // 遍历进度条
            bar.forEach((item) => {
                item.style.width = 0;
            });
        }
        bannerList[index].style.left = "100%";
        animate(bannerList[curran], {left: -width});
        animate(bannerList[index], {left: 0});
        curran = index;
        i = 0;
    }
}

// function barFun() {
//   if (i < 50) {
//     i += 1;
//     bar.style.width = i * 1 + "px";
//   } else if (i >= 50) {
//     clearInterval(bar_timer);
//     index++;
//     if (index > bannerList.length) {
//       index = 0;
//     }
//     bannerList[index].style.left = "100%";

//     animate(bannerList[curran], { left: -width });
//     animate(bannerList[index], { left: 0 });
//     curran = index;
//     i = 0;
//     bar.style.width = 0;

//     // setInterval(barFun, 50);
//     clearInterval(bar_timer);
//   }
// }
