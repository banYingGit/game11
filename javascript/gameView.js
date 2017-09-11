/**
 * Created by banYing on 2017/8/24 0024.
 */


/* 全局变量
 * sourceSmall：初级资源
 * sourceMiddle: 中级资源
 * sourceBig：高级资源
 * curOrder：当前答题题目  顺序为：[['1s', '1m', '1b'], ['2m', '2b', '2s'], ['3b', '3s', '3m']]
 * isPar: 是否为练习
 * curCheck：当前检出值
 * setPartTime: 循环设置数字
 * autoTime：倒计时
 * isChoose ：当前点击按钮选择是否正确
 * curChoose：当前点击过数组
 * curObj：当前轮次对象
 * chooseData：返回总数据
 */
var sourceSmall = {
        "leave1": {"check": "1", "arr": [0, 1, 8, 9, 3, 6, 0, 1, 6, 3, 1, 1, 2, 7, 5, 8, 1, 7, 1, 4]},
        "leave2": {"check": "6", "arr": [3, 6, 1, 3, 1, 4, 6, 2, 4, 6, 5, 5, 2, 6, 7, 6, 6, 9, 0, 8]},
        "leave3": {"check": "2", "arr": [2, 2, 3, 9, 4, 7, 8, 2, 0, 2, 9, 4, 6, 1, 5, 5, 2, 0, 6, 2]}
    },
    sourceMiddle = {
        "leave1": {"check": "3", "arr": [3, 1, 1, 8, 5, 0, 4, 7, 7, 5, 6, 6, 6, 3, 2, 2, 4, 8, 9, 9]},
        "leave2": {"check": "3", "arr": [2, 4, 4, 6, 6, 9, 9, 5, 3, 1, 0, 0, 2, 3, 7, 7, 1, 8, 8, 5]},
        "leave3": {"check": "3", "arr": [9, 7, 7, 3, 3, 6, 8, 1, 0, 0, 4, 4, 9, 2, 2, 6, 1, 8, 5, 5]}
    },
    sourceBig = {
        "leave1": {"check": "0", "arr": [0, 1, 2, 1, 4, 5, 4, 7, 8, 7, 0, 3, 2, 3, 6, 5, 6, 9, 8, 9]},
        "leave2": {"check": "0", "arr": [6, 0, 6, 7, 9, 7, 0, 7, 9, 2, 5, 2, 5, 1, 3, 8, 9, 8, 4, 5]},
        "leave3": {"check": "0", "arr": [1, 5, 8, 5, 8, 0, 0, 1, 7, 9, 7, 6, 3, 4, 3, 4, 2, 6, 2, 9]}
    },
    curOrder = '',
    isPar = '',
    curCheck = '',
    setPartTime,
    autoTime,
    isChoose,
    curChoose = [],
    curObj = {},
    chooseData = {"level1": {}, "level2": {}, "level3": {}};

_event();


// 游戏内事件处理
function _event() {

    $('#goScreen2').click(function () {

        $('#screen1').remove()

        $('#screen2').show()

    })

    /********   第一轮 开始  顺序：['1s', '1m', '1b']   *****/
    //初级练习 ——> 一轮
    $('#go1sPra').click(function () {

        $('#screen2').remove()
        $('#part').show()
        $('#partText1').show()

        $('#hideNum').text(0)

        curOrder = '1s';

        isPar = 'yes';

        curCheck = sourceSmall.leave1.check

        //初级练习截取4个元素
        var $arr = sourceSmall.leave1.arr

        _setPart($arr.slice(0, 4), 0, function () {
            //初级练习4个数字显示完
            $('#screen2T').show()
            $('#part').hide()
            $('#partText1').hide()
        })


    })

    //初级正式答题 ——> 一轮
    $('#go1sTest').click(function () {

        $('#screen2T').remove()
        $('#part').show()
        $('#partText1').show()
        $('#hideNum').text(0)
        curOrder = '1s';

        isPar = 'no';

        curCheck = sourceSmall.leave1.check

        //初级正式答题20个元素
        var $arr = sourceSmall.leave1.arr

        _setPart($arr, 0, function () {
            //初级正式答题20个数字显示完
            $('#screen3').show()
            $('#part').hide()
            $('#partText1').hide()

            //第一轮结束赋返回值
            curObj[curOrder] = curChoose
            console.log('第一轮结束赋返回值--初级', curObj)

        })


    })

    //中级练习 ——> 一轮
    $('#go1mPra').click(function () {

        $('#screen3').remove()
        $('#part').show()
        $('#partText2').show()
        $('#hideNum').text(0)
        curOrder = '1m';

        isPar = 'yes';

        curCheck = sourceMiddle.leave1.check

        //中级练习截取4个元素
        var $arr = sourceMiddle.leave1.arr

        _setPart($arr.slice(0, 4), 0, function () {
            //中级练习4个数字显示完
            $('#screen3T').show()
            $('#part').hide()
            $('#partText2').hide()
        })


    })

    //中级正式答题 ——> 一轮
    $('#go1mTest').click(function () {

        $('#screen3T').remove()
        $('#part').show()
        $('#partText2').show()
        $('#hideNum').text(0)
        curChoose = []
        curOrder = '1m';

        isPar = 'no';

        curCheck = sourceMiddle.leave1.check

        //中级正式答题20个元素
        var $arr = sourceMiddle.leave1.arr

        _setPart($arr, 0, function () {
            //中级正式答题20个数字显示完
            $('#screen4').show()
            $('#part').hide()
            $('#partText2').hide()

            //第一轮结束赋返回值
            curObj[curOrder] = curChoose
            console.log('第一轮结束赋返回值--中级', curObj)

        })
    })

    //高级练习 ——> 一轮
    $('#go1bPra').click(function () {

        $('#screen4').remove()
        $('#part').show()
        $('#partText3').show()
        $('#hideNum').text(0)

        curOrder = '1b';

        isPar = 'yes';

        curCheck = sourceBig.leave1.check

        //高级练习截取4个元素
        var $arr = sourceBig.leave1.arr

        _setPart($arr.slice(0, 4), 0, function () {
            //高级练习4个数字显示完
            $('#screen4T').show()
            $('#part').hide()
            $('#partText3').hide()
        })


    })

    //高级正式答题 ——> 一轮
    $('#go1bTest').click(function () {

        $('#screen4T').remove()
        $('#part').show()
        $('#partText3').show()
        $('#hideNum').text(0)
        curChoose = []
        curOrder = '1b';

        isPar = 'no';

        curCheck = sourceBig.leave1.check

        //高级正式答题20个元素
        var $arr = sourceBig.leave1.arr

        _setPart($arr, 0, function () {
            //高级正式答题20个数字显示完
            $('#part').hide()
            $('#partText3').hide()

            //第一轮结束赋返回值
            curObj[curOrder] = curChoose
            console.log('第一轮结束赋返回值--高级', curObj)

            chooseData.level1 = curObj

            //第一轮结束
            $('#overRound1').show()

        })


    })


    //第一轮过渡第二轮
    $('#go2').click(function () {

        $('#screen5').show()
        $('#overRound1').remove()
        // 将第一轮 对象清空
        curObj = {}

    })

    /********   第二轮 开始  顺序：['2m', '2b', '2s']   *****/

    //中级正式答题 ——> 第二轮
    $('#go2m').click(function () {

        $('#screen5').remove()

        $('#part').show()
        $('#partText2').show()
        $('#hideNum').text(0)
        curChoose = []
        curOrder = '2m';
        isPar = 'no';

        curCheck = sourceMiddle.leave2.check

        //中级正式答题20个元素
        var $arr = sourceMiddle.leave2.arr

        _setPart($arr, 0, function () {

            //中级正式答题20个数字显示完
            $('#screen6').show()
            $('#part').hide()
            $('#partText2').hide()

            //第二轮结束赋返回值
            curObj[curOrder] = curChoose
            console.log('第二轮结束赋返回值--中级', curObj)

        })


    })

    //高级正式答题 ——> 第二轮
    $('#go2b').click(function () {

        $('#screen6').remove()

        $('#part').show()
        $('#partText3').show()
        $('#hideNum').text(0)
        curChoose = []
        curOrder = '2b';
        isPar = 'no';

        curCheck = sourceBig.leave2.check

        //高级正式答题20个元素
        var $arr = sourceBig.leave2.arr

        _setPart($arr, 0, function () {

            //高级正式答题20个数字显示完
            $('#screen7').show()
            $('#part').hide()
            $('#partText3').hide()

            //第二轮结束赋返回值
            curObj[curOrder] = curChoose
            console.log('第二轮结束赋返回值--高级', curObj)

        })


    })

    //初级正式答题 ——> 第二轮
    $('#go2s').click(function () {

        $('#screen7').remove()

        $('#part').show()
        $('#partText1').show()
        $('#hideNum').text(0)
        curChoose = []

        curOrder = '2s';
        isPar = 'no';

        curCheck = sourceSmall.leave2.check

        //初级设置检出值 这里是 6
        $('span[data-role="check"]').text(curCheck)
        //初级正式答题20个元素
        var $arr = sourceSmall.leave2.arr

        _setPart($arr, 0, function () {

            //初级正式答题20个数字显示完
            $('#part').hide()
            $('#partText1').hide()

            //第二轮结束赋返回值
            curObj[curOrder] = curChoose
            console.log('第二轮结束赋返回值--初级', curObj)

            chooseData.level2 = curObj
            //第二轮结束
            $('#overRound2').show()

        })


    })


    //第二轮过渡第三轮
    $('#go3').click(function () {

        $('#screen8').show()
        $('#overRound2').remove()

        // 将第二轮 对象清空
        curObj = {}

    })

    /********   第三轮 开始  顺序：['3b', '3s', '3m']  *****/
    //高级正式答题 ——> 第三轮
    $('#go3b').click(function () {

        $('#screen8').remove()

        $('#part').show()
        $('#partText3').show()
        $('#hideNum').text(0)
        curChoose = []
        curOrder = '3b';
        isPar = 'no';

        curCheck = sourceBig.leave3.check

        //高级正式答题20个元素
        var $arr = sourceBig.leave3.arr

        _setPart($arr, 0, function () {

            //高级正式答题20个数字显示完
            $('#screen9').show()
            $('#part').hide()
            $('#partText3').hide()

            //第三轮结束赋返回值
            curObj[curOrder] = curChoose
            console.log('第二轮结束赋返回值--高级', curObj)

        })


    })

    //初级正式答题 ——> 第三轮
    $('#go3s').click(function () {

        $('#screen9').remove()

        $('#part').show()
        $('#partText1').show()
        $('#hideNum').text(0)

        curChoose = []
        curOrder = '3s';
        isPar = 'no';

        curCheck = sourceSmall.leave3.check
        console.log('curCheck', curCheck)
        //初级设置检出值 这里是 2
        $('span[data-role="check"]').text(curCheck)
        //初级正式答题20个元素
        var $arr = sourceSmall.leave3.arr

        _setPart($arr, 0, function () {

            $('#screen10').show()

            //初级正式答题20个数字显示完
            $('#part').hide()
            $('#partText1').hide()

            //第三轮结束赋返回值
            curObj[curOrder] = curChoose
            console.log('第三轮结束赋返回值--初级', curObj)

        })


    })

    //中级正式答题 ——> 第三轮
    $('#go3m').click(function () {

        $('#screen10').remove()

        $('#part').show()
        $('#partText2').show()
        $('#hideNum').text(0)
        curChoose = []
        curOrder = '3m';
        isPar = 'no';

        curCheck = sourceMiddle.leave3.check

        //中级正式答题20个元素
        var $arr = sourceMiddle.leave3.arr

        _setPart($arr, 0, function () {

            //中级正式答题20个数字显示完
            $('#part').hide()
            $('#partText2').hide()

            //第三轮结束赋返回值
            curObj[curOrder] = curChoose
            console.log('第三轮结束赋返回值--中级', curObj)
            chooseData.level3 = curObj
            //第三轮结束  全部结束

            _over()

        })


    })


    //暂停
    $('#stop').click(function () {

        clearInterval(setPartTime)
        $('#part').hide()
        $('#stopBox').show()

    })

    //继续
    $('#continue').click(function () {

        $('#stopBox').hide()
        $('#part').show()

        var $i = +( $('#hideNum').text() ) + 1

        $('#hideNum').text($i)

        if (curOrder == "1s") {

            if (isPar == 'yes') {

                //第一轮初级练习

                var $arr = sourceSmall.leave1.arr

                _setPart($arr.slice(0, 4), $i, function () {
                    //初级练习4个数字显示完
                    $('#screen2T').show()
                    $('#part').hide()
                    $('#partText1').hide()
                })
            }

            else if (isPar == 'no') {

                //第一轮初级正式
                var $arr = sourceSmall.leave1.arr

                _setPart($arr, $i, function () {
                    //初级正式答题20个数字显示完
                    $('#screen3').show()
                    $('#part').hide()
                    $('#partText1').hide()

                    //第一轮结束赋返回值
                    curObj[curOrder] = curChoose
                    console.log('第一轮结束赋返回值--初级', curObj)

                })

            }

        }

        else if (curOrder == "1m") {

            if (isPar == 'yes') {

                //第一轮中级练习

                var $arr = sourceMiddle.leave1.arr

                _setPart($arr.slice(0, 4), $i, function () {
                    //中级练习4个数字显示完
                    $('#screen3T').show()
                    $('#part').hide()
                    $('#partText2').hide()
                })
            }

            else if (isPar == 'no') {

                //第一轮中级正式
                var $arr = sourceMiddle.leave1.arr

                _setPart($arr, $i, function () {
                    //中级正式答题20个数字显示完
                    $('#screen4').show()
                    $('#part').hide()
                    $('#partText2').hide()
                    //第一轮结束赋返回值
                    curObj[curOrder] = curChoose
                    console.log('第一轮结束赋返回值--中级', curObj)

                })

            }

        }

        else if (curOrder == "1b") {

            if (isPar == 'yes') {

                //第一轮高级练习

                var $arr = sourceBig.leave1.arr

                _setPart($arr.slice(0, 4), $i, function () {
                    //高级练习4个数字显示完
                    $('#screen4T').show()
                    $('#part').hide()
                    $('#partText3').hide()
                })
            }

            else if (isPar == 'no') {

                //第一轮高级正式
                var $arr = sourceBig.leave1.arr

                _setPart($arr, $i, function () {
                    //高级正式答题20个数字显示完
                    $('#part').hide()
                    $('#partText3').hide()

                    //第一轮结束赋返回值
                    curObj[curOrder] = curChoose
                    console.log('第一轮结束赋返回值--高级', curObj)
                    chooseData.level1 = curObj
                    //第一轮结束
                    $('#overRound1').show()

                })

            }

        }

        else if (curOrder == "2m") {

            var $arr = sourceMiddle.leave2.arr

            _setPart($arr, $i, function () {

                //中级正式答题20个数字显示完
                $('#screen6').show()
                $('#part').hide()
                $('#partText2').hide()
                //第二轮结束赋返回值
                curObj[curOrder] = curChoose
                console.log('第二轮结束赋返回值--中级', curObj)

            })

        }

        else if (curOrder == "2b") {

            var $arr = sourceBig.leave2.arr

            _setPart($arr, $i, function () {

                //高级正式答题20个数字显示完
                $('#screen7').show()
                $('#part').hide()
                $('#partText3').hide()
                //第二轮结束赋返回值
                curObj[curOrder] = curChoose
                console.log('第二轮结束赋返回值--高级', curObj)

            })

        }

        else if (curOrder == "2s") {

            var $arr = sourceSmall.leave2.arr

            _setPart($arr, $i, function () {

                //初级正式答题20个数字显示完
                $('#part').hide()
                $('#partText1').hide()

                //第二轮结束赋返回值
                curObj[curOrder] = curChoose
                console.log('第二轮结束赋返回值--初级', curObj)
                chooseData.level2 = curObj
                //第二轮结束
                $('#overRound1').show()

            })

        }

        else if (curOrder == "3b") {

            var $arr = sourceBig.leave3.arr

            _setPart($arr, $i, function () {

                //高级正式答题20个数字显示完
                $('#screen9').show()
                $('#part').hide()
                $('#partText3').hide()
                //第三轮结束赋返回值
                curObj[curOrder] = curChoose
                console.log('第二轮结束赋返回值--高级', curObj)

            })

        }

        else if (curOrder == "3s") {

            var $arr = sourceSmall.leave3.arr

            _setPart($arr, $i, function () {

                $('#screen10').show()

                //初级正式答题20个数字显示完
                $('#part').hide()
                $('#partText1').hide()
                //第三轮结束赋返回值
                curObj[curOrder] = curChoose
                console.log('第三轮结束赋返回值--初级', curObj)


            })

        }

        else if (curOrder == "3m") {

            var $arr = sourceMiddle.leave3.arr

            _setPart($arr, $i, function () {

                //中级正式答题20个数字显示完
                $('#part').hide()
                $('#partText2').hide()

                //第三轮结束赋返回值
                curObj[curOrder] = curChoose
                console.log('第三轮结束赋返回值--中级', curObj)
                chooseData.level3 = curObj
                //第三轮结束  全部结束

                _over()

            })

        }

    })

    $('.button[data-role="out"]').click(function () {

        _out()
    })


}


// 点击按钮事件处理
function _clickBtn(e) {

    $('#partBtn').removeAttr('onclick')

    $(e.target).addClass('visited')

    var $num = $('#partNum').text(),

        $index = $('#hideNum').text(),

        $obj = {}


    if ($num == curCheck) {


        isChoose = 'yes'


    } else {

        isChoose = 'no'

    }

    $obj[$index] = isChoose

    // console.log('$obj[$index]', $index, $obj[$index])
    curChoose.push($obj)


}


/*** 设置part
 * data：数组
 * i：当前第几位
 ***/
function _setPart(data, i, fn) {

    $('#time').text(2)

    $('#partNum').text(data[i])

    $('#partBtn').attr('onclick', '_clickBtn(event)').removeClass('visited')

    _second()

    var timeFn = function () {

        i = +(i) + 1

        $('#time').text(2)

        $('#partNum').text(data[i])

        $('#partBtn').attr('onclick', '_clickBtn(event)').removeClass('visited')

        $('#hideNum').text(i)

        // console.log('i>>>>>>,data.length', i, data.length, data[i])

        _second()

        if (i == data.length - 1) {


            $('#stopBntBox').addClass('noEvent')

            clearInterval(setPartTime)

            setTimeout(function () {

                fn && fn.call(this)

            }, 2000)
        } else {

            $('#stopBntBox').removeClass('noEvent')

        }


        if (i >= 5) {
            $('div[data-role="partText"]').hide()
        }
    }

    setPartTime = setInterval(timeFn, 3000);


}

function _second() {

    setTimeout(function () {
        $('#time').text(1)

    }, 1000)

    setTimeout(function () {
        $('#time').text(0)
        $('#partNum').text('+')
        $('#partBtn').removeAttr('onclick').removeClass('visited')

    }, 2000)

}

/*** 倒计时
 * i：时间
 * fn：倒计时结束回调
 ***/
function _time(i, fn) {

    $('#time').text(i)

    var timeFn = function () {

        i = i - 1

        $('#time').text(i)

        if (i == 0) {

            clearInterval(autoTime)

            fn && fn.call(this)

        }

    }

    autoTime = setInterval(timeFn, 1000);

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


    $('#over').show()
    /* ajax 请求接口路径，返回json 数据
     * chooseData: 每个的等级的答题情况
     *
     * */


    var param = {

        chooseData: chooseData

    }

    console.log('当前返回参数', JSON.stringify(param))

}

//游戏退出
function _out() {

    console.log('游戏退出')

}
