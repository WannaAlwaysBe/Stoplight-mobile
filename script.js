function highlighterAction() {
  const selector = '.sl-flex.sl-overflow-y-auto.sl-flex-col.sl-sticky.sl-inset-y-0.sl-pt-8.sl-bg-canvas-100.sl-border-r'
  console.log($(selector));
  $($(selector).detach()).appendTo("#attachMenu");
}

function highlighter() {
  /*
    The short pause allows any required callback functions
    to execute before actually highlighting, and allows
    the JQuery $(document).ready wrapper to finish.
   */
  setTimeout(function() {
    highlighterAction();
  }, 200);
}

/*
  Only trigger the highlighter after document fully loaded.  This is
  necessary for cases where page load takes a significant length
  of time to fully load.
*/
if (document.readyState == 'complete') {
  highlighter();
} else {
  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      highlighter();
    }
  }
}

$('#testButton').click(function () {
  const selector = '.sl-flex.sl-overflow-y-auto.sl-flex-col.sl-sticky.sl-inset-y-0.sl-pt-8.sl-bg-canvas-100.sl-border-r'
  if ($(selector).is(':visible')) {
    $(selector).css('display', 'none');
  }
  else {
    $(selector).css('display', 'unset');
  }
})