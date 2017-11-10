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
  jonContainer = document.createElement('div')
  stage.append(jonContainer)
  jonContainer.style.position = 'absolute'
  jonContainer.style.width = '10%'
  jonContainer.style.height = '20%'
  jonContainer.style.top = '50%'
  jonContainer.style.left = '50%'
  jon = document.querySelector('#jon')
  jonContainer.append(jon)
  furs = document.querySelector("#furs")
  jonContainer.append(furs)
  jonContainer.style.height = '45%'
  jon.style.width = '60%'
  jon.style.position = 'absolute'
  jon.style.top = 0;
  jon.style.left = '20%'

  furs.style.position = 'absolute'
  furs.style.bottom = 0;
  jonContainer.style.height = '37%'
  jonContainer.style.top = '45%'
  jonContainer.style.left = '60%'

  // Setup Props
  wolf = document.querySelector('#map-marker')
  // Prop 1
  stage.append(wolf)
  wolf.style.position = 'absolute'
  wolf.style.top = '50%'
  wolf.style.height = '15%'
  wolf.style.left = '85%'

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
