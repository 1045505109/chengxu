/**
 * Created by Administrator on 2016/10/28 0028.
 */
(function () {

    var player = document.getElementById("player");
    var btnPlay = document.getElementById("btn-play");
    var btnPause = document.getElementById("btn-pause");
    var btnPlayAt = document.getElementById("btn-play-at");

    btnPlay.onclick = function () {
        player.play()
    };
    btnPause.onclick = function () {
        player.pause();
    };
    btnPlayAt.onclick = function () {
        player.currentTime = 50;
    };


var lrc="[00:29.660]夜上海 夜上海 你是个不夜城[00:38.970]华灯起 车声响 歌舞升平[00:46.680]只见她 笑脸迎 谁知她内心苦闷[00:54.710]夜生活 都为了 衣食住行[01:04.030]酒不醉人人自醉[01:08.850]胡天胡地蹉跎了青春[01:17.060]晓色朦胧 转眼醒 大家归去[01:26.070]心灵儿随着转动的车轮[01:30.720]换一换 新天地 别有一个新环境[01:37.300]回味着 夜生活 如梦初醒"



    var resultArr=lrc.split("[");
var p2=/(\d{2}):(\d{2})(\.\d{2})/;
    var container=document.getElementById("container")

    var arr=[];
    for (var i=1;i<resultArr.length;i++){
        var obj={};
        var result=resultArr[i];
        var kv=result.split("]");
        var LRCTIME=p2.exec(kv[0]);
        var LRCTIMER=LRCTIME[1]*60+LRCTIME[2];
        obj.timer=LRCTIMER;
        obj.LRC=kv[1];
        arr.push(obj)
    }
    console.log(arr)
    setInterval(function () {
        for (var j=0;j<arr.length;j++){
            if (parseInt(player.currentTime)==arr[j].timer){
                container.innerHTML=arr[j].LRC
            }
        }




    }, 1000)




})();