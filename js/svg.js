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

var lvBar = $('.levelBar')
let colors = ['#70D3C1', '#7AC7C6', '#84BACB', '#8EAED0', '#98A2D6']
let num = 0
$(lvBar).load('../images/level.svg', function () {
  num++
  var lv_data = $(this).data('level')
  $(this)
    .find('mask')
    .attr({ 'id': 'mask' + num, 'width': lv_data + '%' })
  $(this)
    .find('g')
    .attr('mask', 'url(#mask' + num + ')')
  $(this)
    .find('ellipse')
    .attr({ 'cx': lv_data + '%' })
})
