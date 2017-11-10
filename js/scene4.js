function scene4() {
  console.log('Executing scene 4!')

  // Setup Stage
  stage = document.querySelector('#stage')
  lake = document.querySelector('#kings-landing')
  stageImg = stage.querySelector('#stage-img')
  lakeImgSrc = lake.getAttribute('src')
  stageImg.setAttribute('src', lakeImgSrc)

  // Setup Cast

  // Character 1
  robContainer = document.createElement('div')
  stage.append(robContainer)
  robContainer.style.position = 'absolute'
  robContainer.style.width = '10%'
  robContainer.style.height = '20%'
  robContainer.style.top = '50%'
  robContainer.style.left = '50%'
  rob = document.querySelector("#rob")
  robContainer.append(rob)
  armour = document.querySelector("#armour-sword")
  robContainer.append(armour)
  robContainer.style.height = '45%'
  rob.style.width = '70%'
  rob.style.position = 'absolute'
  rob.style.top = 0
  rob.style.left = '20%'
  armour.style.position = 'absolute'
  armour.style.bottom = 0
  robContainer.style.height = '39%'
  robContainer.style.left = '25%'

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
