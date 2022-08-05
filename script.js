$('#testButton').click(function () {
  const selector = '.sl-flex.sl-overflow-y-auto.sl-flex-col.sl-sticky.sl-inset-y-0.sl-pt-8.sl-bg-canvas-100.sl-border-r'
  if ($(selector).is(':visible')) {
    $(selector).css('display', 'none');
  }
  else {
    $(selector).css('display', 'unset');
  }
})