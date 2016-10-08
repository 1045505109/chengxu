/**
 * Created by Administrator on 2016/9/19 0019.
 */
(function () {
    var but=document.getElementById("but");

    var changContent = ["按钮1","按钮2","按钮3"];
    var i=0;
    but.onclick=function () {
        but.textContent=changContent[i];
        i++;
        if (i===changContent.length){
            i=0;
        }
    }
})();