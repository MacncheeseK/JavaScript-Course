function isToggled(selector){
  const buttonElement = document.querySelector(selector)
  oneTime()
  if(buttonElement.classList.contains('is-toggled')){
    buttonElement.classList.remove('is-toggled');
  }else{
    buttonElement.classList.add('is-toggled')
  }
}
  function oneTime(){
    const toggledElement=document.querySelector('.is-toggled');
    if(toggledElement)toggledElement.classList.remove('is-toggled')


    /*  Samething but more code 
    const gamingElemnt = document.querySelector('.js-gaming-button');
    const musicElement = document.querySelector('.js-music-button');
    const techElement = document.querySelector('.js-tech-button');
    console.log(gamingElemnt)
    if(selector ==='js-gaming-button'){
      if(musicElement.classList.contains('is-toggled')){
        musicElement.classList.remove('is-toggled')
      }else if(techElement.classList.contains('is-toggled')){
        techElement.classList.remove('is-toggled')
      }
    }else if(selector ==='js-music-button'){
      if(gamingElemnt.classList.contains('is-toggled')){
        gamingElemnt.classList.remove('is-toggled')
      }else if(techElement.classList.contains('is-toggled')){
        techElement.classList.remove('is-toggled')
      }
    }else if(selector ==='js-tech-button'){
      if(musicElement.classList.contains('is-toggled')){
        musicElement.classList.remove('is-toggled')
      }else if(gamingElemnt.classList.contains('is-toggled')){
        gamingElemnt.classList.remove('is-toggled')
      }
    }
    */
  }
