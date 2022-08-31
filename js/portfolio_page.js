var dataURL = 'data/portfolioList.json'
var request = new XMLHttpRequest()
request.open('GET', dataURL)
request.responseType = 'json'
request.send()

request.onload = function () {
  var data = request.response
  jsonLoad(data)
} // ajax 로드

function jsonLoad(dataObj) {
  $.each(dataObj, function (i) {
    var visual = dataObj[i].visual
    var header = dataObj[i].title
    var conItems = dataObj[i].content

    var conTemplate = () => {
      return '<div class="work-item"><div class="work-visual"></div><div class="work-content"><h4 class="work-title"></h4><div class="work-texts"></div></div>'
    }
    $(conTemplate()).appendTo('.work-list')
    var contents = $('.work-list').find('.work-item')

    $(contents[i])
      .find('.work-visual')
      .css({ 'background-image': 'url(' + visual + ')' })

    $(contents[i]).find('.work-title').text(header)

    $.each(conItems, function (key, value) {
      if (!value == '') {
        $(contents[i])
          .find('.work-texts')
          .append('<dl><dt>' + key + '</dt><dd>' + value + '</dd></dl>')
      }
    })
  })

  $('.work-list').slick({
    dots: true,
    infinite: true,
  })
  $('.slick-next').addClass('icon icon_arrow_right hiddenText')
  $('.slick-prev').addClass('icon icon_arrow_left hiddenText')
} // content 내용
