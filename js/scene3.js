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
  danyContainer.style.height = '38%'
  danyContainer.style.top = '50%'
  danyContainer.style.left = '25%'

  // Character 2
  drogoContainer = document.createElement('div')
  stage.append(drogoContainer)
  drogoContainer.style.position = 'absolute'
  drogoContainer.style.width = '10%'
  drogoContainer.style.height = '20%'
  drogoContainer.style.top = '50%'
  drogoContainer.style.left = '50%'
  drogo = document.querySelector('#drogo')
  drogoContainer.append(drogo)
  khal = document.querySelector('#bulky-man')
  drogoContainer.append(khal)
  drogoContainer.style.height = '45%'
  drogo.style.width = '67%'
  drogo.style.position = 'absolute'
  drogo.style.top = 0
  drogo.style.left = '13%'
  khal.style.position = 'absolute'
  khal.style.bottom = 0
  drogoContainer.style.height = '37%'
  drogoContainer.style.top = '45%'
  drogoContainer.style.left = '65%'

  // Setup Props
  egg = document.querySelector('#egg')

  // Prop 1
  stage.append(egg)
  egg.style.position = 'absolute'
  egg.style.height = '15%'
  egg.style.top = '65%'
  egg.style.left = '30%'

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    egg.style.top = '60%'
    egg.style.left = '32%'
    egg.style.transform ='rotateZ(220deg)'
  })

  frame(function() {
    egg.style.top = '55%'
    egg.style.left = '40%'
    egg.style.transform ='rotateZ(140deg)'
  })

  frame(function() {
    egg.style.top = '50%'
    egg.style.left = '50%'
    egg.style.transform ='rotateZ(140deg)'
  })

  frame(function() {
    egg.style.top = '55%'
    egg.style.left = '60%'
    egg.style.transform ='rotateZ(180deg)'
  })

  // Stage direction 2

  frame(function() {
    egg.style.top = '60%'
    egg.style.left = '70%'
    egg.style.transform ='rotateZ(0deg)'
  })

}
