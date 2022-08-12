var dataURL = 'data/portfolioList.json'
var request = new XMLHttpRequest()
request.open('GET', dataURL)
request.responseType = 'json'
request.send()

request.onload = function () {
  var data = request.response
  console.log('success')
  jsonLoad(data)
  handles(data)
} // ajax 로드

function handles(handleObj) {
  var thumbs = $('.thumb').children('.modalBtn')
  var contentsView = $('.modal-content')
  var filterHdl = $('.filters').children('a')

  $.each(thumbs, function (i) {
    $(thumbs[i]).click(function () {
      $(contentsView).attr('id', handleObj[i].id).append(modalContents(handleObj[i]))
    })
  })
}

function jsonLoad(linkObj) {
  console.log('load success')

  $.each(linkObj, function (i) {
    const thumbHtml = (identity, title, filter) => {
      return (
        '<a href="javascript:void(0)" class="modalBtn" data-target="#' +
        identity +
        '">' +
        '<div class="thumbContent"><h5>' +
        title +
        '</h5><span>' +
        filter +
        '</span></div>' +
        '</a>'
      )
    }
    $('.thumb').append(thumbHtml(linkObj[i].id, linkObj[i].title, linkObj[i].filter))
    var thumbBtns = $('.thumb').find('.modalBtn')
    $(thumbBtns[i]).css({ 'background-image': 'url(' + linkObj[i].image + ')' })
  })
} // thumbnail

function modalContents(modalObj) {
  var conItems = modalObj['content']
  var header = modalObj['title']
  var imgs = modalObj['image']
  var contents = $('.modal-content')

  console.log('content success')

  $(contents).html('<div class="modal-image"></div>' + '<div class="modal-head"></div>' + '<div class="modal-body"></div>' + '<div class="modal-foot"></div>')
  $('.modal-image').append('<img class="ratioCon" src ="' + imgs + '" alt="' + header + '"/>')
  $('.modal-head').append('<h4>' + header + '</h4>')

  $.each(conItems, function (key, value) {
    if (!value == '') {
      $('.modal-body').append('<dl><dt>' + key + '</dt><dd>' + value + '</dd></dl>')
    }
  })
} // content 내용
