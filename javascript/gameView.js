/**
 * Created by banYing on 2017/8/24 0024.
 */


/* 全局变量
 * sourceSmall：初级资源
 * sourceSMiddle: 中级资源
 * sourceBig：高级资源
 * order：答题顺序
 * curOrder：当前答题顺序
 *
 * atuoTime：倒计时
 *
 */
var sourceSmall = {
        "leave1": {"check": "1", "arr": [0, 1, 8, 9, 3, 6, 0, 1, 6, 3, 1, 1, 2, 7, 5, 8, 1, 7, 1, 4]},
        "leave2": {"check": "6", "arr": [3, 6, 1, 3, 1, 4, 6, 2, 4, 6, 5, 5, 2, 6, 7, 6, 6, 9, 0, 8]},
        "leave3": {"check": "2", "arr": [2, 2, 3, 9, 4, 7, 8, 2, 0, 2, 9, 4, 6, 1, 5, 5, 2, 0, 6, 2]}
    },
    sourceSMiddle = {
        "leave1": {"check": "3", "arr": [3, 1, 1, 8, 5, 0, 4, 7, 7, 5, 6, 6, 6, 3, 2, 2, 4, 8, 9, 9]},
        "leave2": {"check": "3", "arr": [2, 4, 4, 6, 6, 9, 9, 5, 3, 1, 0, 0, 2, 3, 7, 7, 1, 8, 8, 5]},
        "leave3": {"check": "3", "arr": [9, 7, 7, 3, 3, 6, 8, 1, 0, 0, 4, 4, 9, 2, 2, 6, 1, 8, 5, 5]}
    },
    sourceBig = {
        "leave1": {"check": "0", "arr": [0, 1, 2, 1, 4, 5, 4, 7, 8, 7, 0, 3, 2, 3, 6, 5, 6, 9, 8, 9]},
        "leave2": {"check": "0", "arr": [6, 0, 6, 7, 9, 7, 0, 7, 9, 2, 5, 2, 5, 1, 3, 8, 9, 8, 4, 5]},
        "leave3": {"check": "0", "arr": [1, 5, 8, 5, 8, 0, 0, 1, 7, 9, 7, 6, 3, 4, 3, 4, 2, 6, 2, 9]}
    },
    order = [['1s', '1m', '1b'], ['2m', '2b', '2s'], ['3b', '3s', '3m']],
    atuoTime;

_event();


// 游戏内事件处理
function _event() {

    $('#goScreen2').click(function () {

        $('#screen1').remove()

        $('#screen2').show()

    })

    $('#goPractice').click(function () {

        $('#screen2').remove()


    })

    $('#goTest').click(function () {


    })

    $('#stop').click(function () {

        $('#stopBox').show()

    })

    $('#continue').click(function () {

        $('#stopBox').hide()

    })

    $('.button[data-role="out"]').click(function () {

        _out()
    })


}


// 点击按钮事件处理
function _clickBtn(e) {


}


/*** 倒计时
 * i：时间
 * fn：倒计时结束回调
 ***/
function _time(i, fn) {

    $('#hideTime').text(i)

    var timeFn = function () {

        i = i - 1

        $('#hideTime').text(i)

        if (i == 0) {

            clearInterval(atuoTime)

            fn && fn.call(this)

        }

    }

    atuoTime = setInterval(timeFn, 1000);

}


/*** 数组随机
 * arr：数组
 * num：随机个数
 ***/
function _getArrayItems(arr, num) {

    var array = [];

    for (var index in arr) {

        array.push(arr[index]);
    }

    var return_array = [];

    for (var i = 0; i < num; i++) {

        if (array.length > 0) {

            var arrIndex = Math.floor(Math.random() * array.length);

            return_array[i] = array[arrIndex];

            array.splice(arrIndex, 1);

        } else {
            break;
        }
    }
    return return_array;
}

/*** 数组去重
 * sumArr：大数组
 * subArr：去重元素数组
 ***/
function _repeat(sumArr, subArr) {

    var repArr = [];

    for (var i = 0; i < sumArr.length; i++) {

        for (var n = 0; n < subArr.length; n++) {

            if (sumArr[i] == subArr[n]) {

                sumArr.splice(i, 1);

                repArr = sumArr

            }

        }

    }
    return repArr;
}

//游戏结束
function _over() {

    $('#list').remove()
    $('#over').show()
    /* ajax 请求接口路径，返回json 数据
     * levelData: 每个的等级三次答题情况
     *
     * */


    var param = {

        levelData: levelData

    }

    console.log('当前返回参数', JSON.stringify(param))

}

//游戏退出
function _out() {

    console.log('游戏退出')

}
