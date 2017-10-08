$(init);

function init()
{
    $("#resizeMe").resizable();

    $(".mainImage").addClass("ui-widget")
            .addClass("ui-widget-content")
            .addClass("ui-corner-all");
}
