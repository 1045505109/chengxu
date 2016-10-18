/**
 * Created by Administrator on 2016/10/17.
 */
(function () {

    var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Q", "W", "E", "R", "T", "Y", "U", "I", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "←"];
    var content = document.getElementById("content");
    for (var i = 0; i < list.length; i++) {
        var div = document.createElement("div");
        div.textContent = list[i];
        content.appendChild(div);
        div.onclick = function () {
            addText(this.textContent);
        }
    }

    function addText(text) {
        if (input.value == "") {
            input.value = text
        } else {
            input.value = input.value + text;
            if (text=="←"){
                var inputText = input.value;
                input.value = inputText.substring(0, inputText.length - 1)
            }
        }



    }

    var input = document.getElementById("put");
    var but = document.getElementById("but");
    but.addEventListener("click", function () {
        if (content.style.display == "block") {
            content.style.display = "none"
        } else {
            content.style.display = "block";
        }
    });


})();