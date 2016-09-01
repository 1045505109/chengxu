/**
 * Created by liuyujing on 16/9/1.
 */
$(function () {

    var rubbishNames = ["liftRubbish","recycleRubbish","rubbish"];

    for (var i=0;i<rubbishNames.length;i++){
        $("#"+rubbishNames[i]).draggable({
            opacity:0.5,
            snap:"true",
            revert:true,
            scope:rubbishNames[i]
        });
    }
    var rubbishBoxNames = ["liftBox","recycleBox","rubbishBox"];
    for (var j=0;j<rubbishBoxNames.length;j++){
        $("#"+rubbishBoxNames[j]).droppable({
            scope:rubbishNames[j],
            drop:function (event,ui) {
                alert("ok");
                window.console.log(ui);
                ui.draggable.remove();
            }
        });
    }

});
