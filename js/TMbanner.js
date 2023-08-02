function LunBo(bannerBox, list, dian, zuo, you) {
  // 获取轮播大盒子
  let banner = document.querySelector(`${bannerBox}`);
  // 获取轮播图片列表
  let list_pic = document.querySelectorAll(`${list}>li`);
  // 获取轮播点
  let dian_list = document.querySelectorAll(`${dian}>li`);
  // 获取左右两个按钮
  let left_one = document.querySelector(`${zuo}`);
  let right_one = document.querySelector(`${you}`);
  // console.log(left_one, right_one);
  // console.log(list_pic);

  // 声明一个初始值
  let index = 0;
  // 声明一个定时器
  let timer = null;
  // 再写一个函数，然后定时器调用这个函数把参数传过去(这样就实现了定时器轮播的传参)
  // timer = setInterval(chuan("r", list_pic, dian_list), 2000);

  // banner.onmouseover = function () {
  //   clearInterval(timer);
  // };
  // banner.onmouseout = function () {
  //   timer = setInterval(chuan("r", list_pic, dian_list), 2000);
  // };

  right_one.onclick = function () {
    moveR("r", list_pic, dian_list);
  };
  left_one.onclick = function () {
    moveR("l", list_pic, dian_list);
  };
  // 然后chuan函数接着这三个参数，最后传给我们的moveR函数，最后moveR函数执行后的结果就返回给了chuan函数
  function chuan(type, list, dian) {
    return function () {
      moveR(type, list, dian);
    };
  }
  // 包装一个轮播图(默认type=='r')
  function moveR(type, list, dian) {
    if (type == "r") {
      index++;
      // console.log(xb);
      //   要大于等于的时候让初始值重新变为0
      if (index >= list.length) {
        index = 0;
      }

      //  遍历轮播图
      list.forEach((value) => {
        value.classList.remove("active");
      });
      list[index].classList.add("active");

      // 遍历轮播点
      dian.forEach((value) => {
        value.classList.remove("active");
      });
      dian[index].classList.add("active");
    } else if (type == "l") {
      index--;
      if (index < 0) {
        index = list.length - 1;
      }

      //  遍历轮播图
      list.forEach((value) => {
        value.classList.remove("active");
      });
      list[index].classList.add("active");

      // 遍历轮播点
      dian.forEach((value) => {
        value.classList.remove("active");
      });
      dian[index].classList.add("active");
    }
  }
}
