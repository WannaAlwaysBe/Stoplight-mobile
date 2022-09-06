document.addEventListener('DOMContentLoaded', function() {
  var $stoplight = $('elements-api');
  var $menu = $('.sl-flex.sl-overflow-y-auto.sl-flex-col.sl-sticky.sl-inset-y-0.sl-pt-8.sl-bg-canvas-100.sl-border-r');
  const config = {
    childList: true,
    subtree: true,
  };
  console.log($stoplight);

  var observer = new MutationObserver(() => {
    extractMenu();
    observer.disconnect();
  });

  observer.observe($stoplight[0], config);
})

function extractMenu() {
  const menu_selector = '.sl-flex.sl-overflow-y-auto.sl-flex-col.sl-sticky.sl-inset-y-0.sl-pt-8.sl-bg-canvas-100.sl-border-r'
  const items_selector = '.sl-my-3';
  $($(items_selector).detach()).appendTo("#attachMenu");
  $(menu_selector).detach();
}

// function highlighterAction() {
//   const menu_selector = '.sl-flex.sl-overflow-y-auto.sl-flex-col.sl-sticky.sl-inset-y-0.sl-pt-8.sl-bg-canvas-100.sl-border-r'
//   const items_selector = '.sl-my-3';
//   $($(items_selector).detach()).appendTo("#attachMenu");
//   $(menu_selector).detach();
//   $(items_selector).children().each(function () {
//     console.log(this);
//   });


  // const headings = $('.sl-my-3')
  //     .children('div')
  //     .filter(function() {return !$(this).attr('title')});
  //
  // const accordions = [];
  //
  // headings.each(function(i, heading) {
  //   if (i === headings.length - 1) {
  //     accordions.push({
  //       heading: heading,
  //       links: $(heading).nextAll(),
  //     });
  //   } else {
  //     accordions.push({
  //       heading: heading,
  //       links: $(heading).nextAll($(headings[i + 1])),
  //     });
  //   }
  // });
  // console.log(accordions);
  //
  // let a = $(accordions[0].heading).clone();
  // a.append(accordions[0].links.clone());
  // $('#testAccordion').append(a);
// }

// function highlighter() {
//   /*
//     The short pause allows any required callback functions
//     to execute before actually highlighting, and allows
//     the JQuery $(document).ready wrapper to finish.
//    */
//   setTimeout(function() {
//     highlighterAction();
//   }, 400);
// }

// /*
//   Only trigger the highlighter after document fully loaded.  This is
//   necessary for cases where page load takes a significant length
//   of time to fully load.
// */
// if (document.readyState == 'complete') {
//   highlighter();
// } else {
//   document.onreadystatechange = function () {
//     if (document.readyState === "complete") {
//       highlighter();
//     }
//   }
// }

// $('#testButton').click(function () {
//   const selector = '#accordionExample'
//   if ($(selector).is(':visible')) {
//     $(selector).removeClass('unset-hidden');
//   }
//   else {
//     $(selector).addClass('unset-hidden');
//   }
// })
