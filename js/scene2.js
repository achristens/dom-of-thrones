function scene2() {
  console.log('Executing scene 2!')

  // Setup Stage
  stage = document.querySelector('#stage')
  document.querySelector('#sets')
  castle = document.querySelector('#castle')
  stageImg = stage.querySelector('#stage-img')
  castleImgSrc = castle.getAttribute('src')
  stageImg.setAttribute('src', castleImgSrc)

  // Setup Cast

  // Character 1
  nedContainer = document.createElement('div')
  stage.append(nedContainer)
  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '10%'
  nedContainer.style.height = '20%'
  nedContainer.style.top = '50%'
  nedContainer.style.left = '50%'
  // Just for setup:
  // nedContainer.style.border = '2px solid red'
  // nedContainer.style.background = 'yellow'
  ned = document.querySelector('#ned')
  nedContainer.append(ned)
  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)
  // Just for setup:
  // ned.style.border = '2px solid blue'
  // leather.style.border = '2px solid green'
  nedContainer.style.height = '44%'
  ned.style.width = '70%'
  ned.style.position = 'absolute'
  ned.style.top = 0
  leather.style.position = 'absolute'
  leather.style.bottom = 0
  nedContainer.style.height = '37%'
  nedContainer.style.top = '55%'
  nedContainer.style.left = '25%'

  // remove borders:
  //   ned.style.border = 'none'
  // leather.style.border = 'none'
  // nedContainer.style.border = 'none'
  // nedContainer.style.background = 'none'

  // Character 2
  joffCOntainer = document.createElement('div')
  stage.append(joffCOntainer)
  joffCOntainer.style.position = 'absolute'
  joffCOntainer.style.width = '10%'
  joffCOntainer.style.height = '20%'
  joffCOntainer.style.top = '50%'
  joffCOntainer.style.left = '50%'
  joffrey = document.querySelector('#joffrey')
  joffCOntainer.append(joffrey)
  king = document.querySelector('#king')
  joffCOntainer.append(king)
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
