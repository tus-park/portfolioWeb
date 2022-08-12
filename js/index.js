var target = $('.menu a')
var sections = $('section')
var section_H = sections.height()

var targetAct = function ($this) {
  $($this).removeClass('icon_circle').addClass('icon_ellipse')
  target.not($this).removeClass('icon_ellipse').addClass('icon_circle')
}

$(window).scroll(function () {
  let scrTop = $(window).scrollTop()

  for (var i = 0; i < sections.length; i++) {
    if (scrTop >= section_H * i && scrTop < section_H * (i + 1)) {
      target.removeClass('icon_ellipse').addClass('icon_circle')
      target.eq(i).removeClass('icon_circle').addClass('icon_ellipse')
    }
  }
})

// $('section').mousewheel(function (event, delta) {
//   if (delta > 0) {
//     // mouswheel up
//     $('html, body')
//       .stop()
//       .animate({ scrollTop: $(this).prev().offset().top }, 600, 'easeInOutQuad')
//   } else if (delta < 0) {
//     // mouswheel down
//     $('html, body')
//       .stop()
//       .animate({ scrollTop: $(this).next().offset().top }, 600, 'easeInOutQuad')
//   }
//   event.preventDefault()
// })
// slide scroll section End

$(target).on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault()
    var hash = this.hash
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      600,
      'easeInOutQuad',
      function () {
        window.location.hash = hash
      }
    )
  }
})

// navigtion - end

LottieInteractivity.create({
  mode: 'scroll',
  player: '#codingSvg',
  actions: [
    {
      visibility: [0.3, 1],
      type: 'loop',
      frames: [1, 80],
    },
  ],
}),
  LottieInteractivity.create({
    mode: 'scroll',
    player: '#designSvg',
    actions: [
      {
        visibility: [0.3, 1],
        type: 'loop',
        frames: [1, 80],
      },
    ],
  })
//lottie svg animation

$(function () {
  $('#dialog').dialog({
    autoOpen: false,
    show: {
      effect: 'fade',
      duration: 400,
    },
    hide: {
      effect: 'fade',
      duration: 400,
    },
    height: 'auto',
    width: '100%',
    modal: true,
    position: {
      my: 'center',
      at: 'left top',
      of: window,
    },
    open: function (event, ui) {
      $('html').attr('data-scrollTop', $(document).scrollTop()).css('overflow', 'hidden')
      $(this).dialog('option', 'position', { my: 'center', at: 'center', of: window })
    },
    close: function (event, ui) {
      var scrollTop = $('html').css('overflow', 'auto').attr('data-scrollTop') || 0
      if (scrollTop) $('html').scrollTop(scrollTop).attr('data-scrollTop', '')
    },
  })
  $('.ui-button').addClass('icon icon_x hiddenText')
  $('.modalBtn').on('click', function () {
    $('#dialog').dialog('open')
  })
})
// modal dialog End
