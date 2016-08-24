
(function () {
    function shit(width,height) {
        var div=document.createElement("div");
        var x=(Math.random()*800);
        var y=(Math.random()*500)

        div.style.width=width+"px"
        div.style.height=height+"px"
        div.style.borderRadius="50%";
        div.style.border="solid";
        div.style.position="absolute";
        div.style.margin="20px";


        var XXX=Math.round(Math.random())
        var YYY=Math.round(Math.random())

        function position() {

            div.style.left=x+"px";
            div.style.top=y+"px";

        }
        var container=document.querySelector("#container");
        container.appendChild(div);

        var shijian=setInterval(function () {
            if (XXX==0){
                x++
            }else {
                x--
            }
            if (YYY==0){
                y++
            }else {
                y--
            }
            position()
        },50)
    }
    window.shit=shit;
})();