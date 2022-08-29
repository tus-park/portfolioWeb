var dataURL = 'data/portfolioList.json'
var request = new XMLHttpRequest()
request.open('GET', dataURL)
request.responseType = 'json'
request.send()

request.onload = function () {
  var data = request.response
  jsonLoad(data)
} // ajax 로드

function jsonLoad(linkObj) {
  $.each(linkObj, function (i) {
    const thumbHtml = (identity, title, filter) => {
      return (
        '<a href="javascript:void(0)" class="modalBtn" data-target="#' + identity + '">' + '<div class="thumbContent"><h5>' + title + '</h5></div>' + '</a>'
      )
    }
    $('.thumb').append(thumbHtml(linkObj[i].id, linkObj[i].title))
    var thumbBtns = $('.thumb').find('.modalBtn')
    $(thumbBtns[i]).css({ 'background-image': 'url(' + linkObj[i].visual + ')' })
    // thumbnail

    var thumbs = $('.thumb').children('.modalBtn')
    var contentsView = $('.modal-content')
    $.each(thumbs, function (j) {
      $(thumbs[j]).click(function () {
        $(contentsView).attr('id', linkObj[j].id).append(modalContents(linkObj[j]))
      })
    })
    // thumbnail target - contents 연결
  })
}

function modalContents(modalObj) {
  var conItems = modalObj['content']
  var header = modalObj['title']
  var visual = modalObj['visual']
  var contents = $('.modal-content')

  $(contents).html('<div class="modal-visual"></div>' + '<div class="modal-head"></div>' + '<div class="modal-body"></div>' + '<div class="modal-foot"></div>')
  $('.modal-head').append('<h4>' + header + '</h4>')

  var imageItem = '<img src="' + visual + '" alt="' + header + '"/>'

  $('.modal-visual').append('<div class="visualItem ratioCon"></div>')
  $('.visualItem').append(imageItem)

  $.each(conItems, function (key, value) {
    if (!value == '') {
      $('.modal-body').append('<dl><dt>' + key + '</dt><dd>' + value + '</dd></dl>')
    }
  })
} // content 내용
