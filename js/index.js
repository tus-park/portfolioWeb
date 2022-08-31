$(document).ready(function () {
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
  $('body').css({ 'overflow': 'auto' })
  $('#loading').remove()
})
