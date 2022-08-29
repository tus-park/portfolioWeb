$(document).ready(function () {
  console.log('loading')
  $('#loading').show()
  $('body').css({ 'overflow': 'hidden' })

  var target = $('.menu a')
  var sections = $('section')

  $(window).scroll(function () {
    let scrTop = $(window).scrollTop()
    for (var i = 0; i < sections.length; i++) {
      var section_H = $(sections[i]).height(),
        section_H = parseInt(section_H)
      var section_Top = $(sections[i]).offset().top,
        section_Top = parseInt(section_Top)

      if (scrTop >= section_Top && scrTop < section_Top + section_H) {
        target.children('.icon').removeClass('icon_ellipse').addClass('icon_circle')
        target.eq(i).children('.icon').removeClass('icon_circle').addClass('icon_ellipse')
      }
    }
  })
  // 스크롤 위치 네비게이션 표시

  $(target).on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault()
      var hash = this.hash
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        400,
        'easeInOutQuad',
        function () {
          window.location.hash = hash
        }
      )
    }
  })
  // navigtion - end

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
      modal: true,

      open: function (event, ui) {
        $('html').attr('data-scrollTop', $(document).scrollTop()).css('overflow', 'hidden')
        $(this).dialog('option', 'position', { my: 'center', at: 'center', of: window })
        // 모달 열렸을 때 스크롤 방지
        $('.ui-widget-overlay').bind('click', function () {
          $('#dialog').dialog('close')
        })
        // 모달 배경 클릭시 닫힘
      },
      close: function (event, ui) {
        var scrollTop = $('html').css('overflow', 'auto').attr('data-scrollTop') || 0
        if (scrollTop) $('html').scrollTop(scrollTop).attr('data-scrollTop', '')
        // 모달 닫혔을 때 스크롤 작동
      },
    })

    $('.ui-button').addClass('icon icon_x hiddenText')
    $('.modalBtn').on('click', function () {
      $('#dialog').dialog('open')
    })
  })
  // modal dialog End

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
})
$(window).on('load', function () {
  console.log('loding success')
  $('body').css({ 'overflow': 'auto' })
  $('#loading').remove()
})
