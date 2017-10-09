$(init);
$(document).ready(function () {
    
        $("#tabs").tabs();
    
    });
function init() {
  $("#tabs").tabs();
  $("#resizeMe").resizable();

  $(".mainImage").addClass("ui-widget")
    .addClass("ui-widget-content")
    .addClass("ui-corner-all");

  $(".dragMe").draggable();
  $("#target").droppable();

  $("#target").bind("drop", highlightTarget);
  $("#target").bind("dropout", resetTarget);
  $("#datePicker").datepicker();
  $("#dialog").dialog();
  $("#dialog").dialog("close");
}
$( function() {
    $( "#tabs" ).tabs({
      beforeLoad: function( event, ui ) {
        ui.jqXHR.fail(function() {
          ui.panel.html(
            "Couldn't load this tab. We'll try to fix this as soon as possible. " +
            "If this wouldn't be a demo." );
        });
      }
    });
  } );

function highlightTarget(event, ui)
{
    $("#target").addClass("ui-state-highlight")
                .html("Dropped ")
                .append(ui.draggable.text());
}

function resetTarget(event, ui)
{
    $("#target").removeClass("ui-state-highlight")
                .html("Drop on me");
}

function openDialog()
{
    $("#dialog").dialog("open");
}

function closeDialog()
{
    $("#dialog").dialog("close");
}
