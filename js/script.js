$(init);

function init() {
  $("#resizeMe").resizable();

  $(".mainImage").addClass("ui-widget")
    .addClass("ui-widget-content")
    .addClass("ui-corner-all");

  $(".dragMe").draggable();
  $("#target").droppable();

  $("#target").bind("drop", highlightTarget);
  $("#target").bind("dropout", resetTarget);

  function highlightTarget(event, ui) {
    $("#target").addClass("ui-state-highlight")
      .html("Dropped ")
      .append(ui.draggable.text());
  }

  function resetTarget(event, ui) {
    $("#target").removeClass("ui-state-highlight")
      .html("Drop on me");
  }
}
