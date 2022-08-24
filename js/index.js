$(document).ready(function () {
  console.log('loading')

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
})
$(window).on('load', function () {
  console.log('loding success')
})
