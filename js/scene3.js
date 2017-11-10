function scene3() {
  console.log('Executing scene 3!')

  // Setup Stage
  mySrc = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)
  stage = document.querySelector('#stage')


  // Setup Cast

  // Character 1
  danyContainer = document.createElement('div')
  stage.append(danyContainer)
  danyContainer.style.position = 'absolute'
  danyContainer.style.width = '10%'
  danyContainer.style.height = '20%'
  danyContainer.style.top = '50%'
  danyContainer.style.left = '50%'
  dany = document.querySelector('#danerys')
  danyContainer.append(dany)
  dress = document.querySelector('#blue-dress')
  danyContainer.append(dress)
  danyContainer.style.height = '45%'
  dany.style.width = '65%'
  dany.style.position = 'absolute'
  dany.style.top = 0
  dress.style.position = 'absolute'
  dress.style.bottom = 0
  danyContainer.style.height = '36%'
  danyContainer.style.top = '50%'
danyContainer.style.left = '25%'
  // Character 2

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
