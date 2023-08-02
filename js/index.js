// 大轮播
let b_left = document.querySelector(".b_left");
// 获取下面所有的图片
let lis = document.querySelectorAll(".lunbo li");
// console.log(b_left, lis);
// 获取两个按钮
let left = document.querySelector("#left");
let right = document.querySelector("#right");
// 获取轮播图的点
let dian_lis = document.querySelectorAll(".dian_list li");
// 定义一个定时器，作为接下来的自动轮播
let index = 0;
let timer = setInterval(moveR, 2000);
// console.log(1);
// 声明一个初始值
function moveR() {
    index++;
    if (index >= $('.lunbo').children('li').length) {
        index = 0;
    }
    // 轮播图片
    $('.lunbo').children('li').eq(index).addClass('active').siblings().removeClass()
    $('.dian_list').children('li').eq(index).addClass('active').siblings().removeClass()
}

// 给右按钮绑定事件
right.onclick = function () {
    moveR();
};

// 绑定左按钮
left.onclick = function () {
    index--;
    if (index < 0) {
        index = lis.length - 1;
    }
    // 轮播图片
    $('.lunbo').children('li').eq(index).addClass('active').siblings().removeClass()
    $('.dian_list').children('li').eq(index).addClass('active').siblings().removeClass()
};

// 大盒子移入关闭定时器，移出重新开启定时器
b_left.onmouseover = function () {
    clearInterval(timer);
};
b_left.onmouseout = function () {
    setInterval(timer);
};

// 小轮播
let b_right = document.querySelector(".b_right");
// 获取下面所有的图片
let s_lis = document.querySelectorAll(".pic_list .zzz");
// console.log(s_lis);
// 获取两个按钮
let s_left = document.querySelector("#s_left");
let s_right = document.querySelector("#s_right");
// 定义一个定时器，作为接下来的自动轮播
let s_index = 0;
let s_timer = setInterval(SMoveR, 4000);

function SMoveR() {
    s_index++;
    if (s_index >= $('.pic_list').children('.zzz').length) {
        s_index = 0;
    }
    // 轮播图片
    $('.pic_list').children('.zzz').eq(s_index).addClass('active').siblings('.zzz').removeClass('active')

}

s_right.onclick = function () {
    SMoveR();
};

s_left.onclick = function () {
    s_index--;
    if (s_index < 0) {
        s_index = s_lis.length - 1;
    }
    // 轮播图片
    $('.pic_list').children('.zzz').eq(s_index).addClass('active').siblings('.zzz').removeClass('active')
};

// 京东秒杀
// 获取所需要的节点
let desc = document.querySelector(".desc");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
time();

function time() {
    // 获取当前时间
    var nowdate = new Date();
    // 获取当前小时
    var h = nowdate.getHours();
    // console.log(h);
    // 判断小时是否是偶数，如果是偶数，那就减一
    if (h % 2 != 0) {
        h--;
    }

    // 设置当前的场数;

    if ((desc.innerHTML = h + 2 + ":00" == "24:00")) {
        desc.innerHTML = "00:00";
    } else {
        desc.innerHTML = h + 2 + ":00";
    }

    // 计算设置时分秒的倒计时
    // 设置结束的时间
    var endTime = new Date();
    endTime.setHours(h + 2);
    endTime.setMinutes(0);
    endTime.setSeconds(0);

    // 计算当前时间和结束的时间差
    var diff = (endTime - nowdate) / 1000;
    // console.log(diff);

    // 计算剩余的时分秒
    var tmpH = parseInt(diff / 60 / 60);
    var tmpM = parseInt((diff / 60) % 60);
    var tmpS = parseInt(diff % 60);

    // 将时分秒放到页面中去
    hour.innerHTML = "0" + tmpH;
    minute.innerHTML = tmpM < 10 ? "0" + tmpM : tmpM;
    second.innerHTML = tmpS < 10 ? "0" + tmpS : tmpS;
}

// 最后调用定时器
setInterval(time, 1000);

// 获取头部大盒子
let showHeader = document.querySelector("#showHeader");
// 获取固定侧边栏
let RightSidebar = document.querySelector(".RightSidebar");
// 获取回到顶部按钮
let dingbu = document.querySelector("#dingbu");
// 京东秒杀文字
let miao = document.querySelector("#miao");

// 浏览器滚动事件
window.onscroll = function () {
    var h = document.documentElement.scrollTop;
    // console.log(h);
    if (h >= 700) {
        showHeader.style.height = "70px";
        showHeader.style.borderBottom = "2px solid red";
        RightSidebar.style.position = "fixed";
        RightSidebar.style.height = "360px";
        RightSidebar.style.marginTop = "0";
        RightSidebar.style.top = "12%";
        RightSidebar.style.right = "10%";
        RightSidebar.style.transition = "top 1s";
        dingbu.style.display = "block";
        miao.style.color = "#e33333";
    } else {
        showHeader.style.height = "0";
        showHeader.style.border = "none";
        RightSidebar.style.height = "300px";
        RightSidebar.style.position = "absolute";
        RightSidebar.style.marginTop = "0";
        RightSidebar.style.top = "0";
        RightSidebar.style.right = "-80px";
        dingbu.style.display = "none";
        miao.style.color = "black";
    }
};

// 回到顶部
dingbu.onclick = function () {
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    window.scrollTo({
        top: 0,
        // 参数，瞬间滚动的意思
        behavior: "smooth",
    });
};

// 京东秒杀（节点轮播）
let list_jd = document.querySelector("#list_jd");
console.log(list_jd);
// 定义一个定时器
// let list_timer = null;
// 获取每个li的宽度
let width = parseInt(getComputedStyle(list_jd, null).width) / 8;
// 定义一个开关
// let flag = true;
// 设定一次几个
let n = 4;
// 获取两个按钮
let left_two = document.querySelector("#left_two");
let right_two = document.querySelector("#right_two");
// console.log(left_two, right_two);
left_two.onclick = function () {
    moveR_jd("a");
};
right_two.onclick = function () {
    moveR_jd("b");
};

function moveR_jd(a) {
    if (true) {
        // flag = false;
        if (a == "b") {
            console.log("我是右边");
            animate(list_jd, {left: -width * n}, 1000, function () {
                for (var i = 0; i < n; i++) {
                    var first = list_jd.firstElementChild;
                    list_jd.appendChild(first);
                }
                list_jd.style.left = "0";
                // 执行完之后把开关打开
                // flag = true;
            });
        } else if (a == "a") {
            console.log("我是左边");
            for (var i = 0; i < n; i++) {
                var first = list_jd.firstElementChild;
                var last = list_jd.lastElementChild;

                // 拿到第一个和最后一个节点后，要把最后一个节点放到第一个节点前面
                list_jd.insertBefore(last, first);
                // 代码里面的x和y轴跟数学里面的是相反的
                list_jd.style.left = -width * n + "px";
                animate(list_jd, {left: 0}, 1000, function () {
                    // flag = true;
                });
            }
        }
    }
}
