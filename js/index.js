window.onload = function () {


    // 1. 准备一套位置的配置数据，然后进行加载
    var config = [
        {
            "width": 200,
            height: 80,
            "top": 20,
            "left": -50,
            "opacity": 0.2,
            "zIndex": 2
        },
        {
            "width": 280,
            height: 112,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },
        {
            "width": 360,
            height: 144,
            "top": 100,
            "left": 150,
            "opacity": 1,
            "zIndex": 4
        },
        {
            width: 280,
            height: 112,
            top: 70,
            left: 390,
            opacity: 0.8,
            zIndex: 3
        },
        {
            "width": 200,
            height: 80,
            "top": 20,
            "left": 520,
            "opacity": 0.2,
            "zIndex": 2
        }
    ];

    // 需求1：通过遍历的方式，动态给元素加载样式
    render();
    function render() {
        var ulLis = document.querySelectorAll('ul li');
        config.forEach(function (item, index) {
            // item 是样式对象
            $(ulLis[index]).animate(item, function () {
                flag = true;
            });
        })
    }

    // 需求2：鼠标经过，显示左右按钮
    var container = document.querySelector('.container');
    var leftBtn = document.querySelector('.arrow a:first-child');
    var rightBtn = document.querySelector('.arrow a:last-child');
    container.onmouseenter = function () {
        rightBtn.style.display = 'block';
        leftBtn.style.display = 'block';
    }
    container.onmouseleave = function () {
        rightBtn.style.display = 'none';
        leftBtn.style.display = 'none';
    }

    // 需求3：左右按钮的点击
    var flag = true;
    rightBtn.onclick = function () {
        if (flag) {
            flag = false;
            // 数组的头部删除，添加到数组的末尾
            config.push(config.shift())
            render();
        }
    }
    leftBtn.onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());
            render();
        }
    }
}