`use strict`;
class Options {
  constructor(animationTime, pixelsFromBottom = 0, reverseFade = false) {
    this.pixelsFromBottom = -pixelsFromBottom;
    this.animationTime = animationTime;
    this.reverseFade = reverseFade;
  }
}


const fadeOptions = new Options(1, 100, false);



let fadeIn = document.querySelectorAll('.fadeIn'),
  fadeRight = document.querySelectorAll('.fadeRight'),
  fadeLeft = document.querySelectorAll('.fadeLeft'),
  fadeTop = document.querySelectorAll('.fadeTop'),
  fadeBottom = document.querySelectorAll('.fadeBottom'),
  scrolled = window.pageYOffset,
  windowHeight = window.innerHeight;

function rectObj(el) {
  let rect = el.getBoundingClientRect();
  return rect.top - windowHeight;
  
}


function transition(e) {
  if (fadeOptions.animationTime != null && fadeOptions.animationTime != '' && fadeOptions.animationTime != undefined) {
    e.style.transitionDuration = fadeOptions.animationTime + 's';
  }
}


window.onscroll = function() {
  
  

  fadeIn.forEach(function(e) {
    transition(e);

    if ((rectObj(e) > 0) && (fadeOptions.reverseFade == true)) {
      e.classList.remove('AnimateFade');
    } else if (rectObj(e) < fadeOptions.pixelsFromBottom) {
      e.classList.add('AnimateFade');
    }
  })

  fadeRight.forEach(function(e) {
    transition(e);
    if ((rectObj(e) > 0) && (fadeOptions.reverseFade == true)) {
      e.classList.remove('AnimateFade');
    } else if (rectObj(e) < fadeOptions.pixelsFromBottom) {
      e.classList.add('AnimateFade');
    }
  })

  fadeLeft.forEach(function(e) {
    transition(e);
    if ((rectObj(e) > 0) && (fadeOptions.reverseFade == true)) {
      e.classList.remove('AnimateFade');
    } else if (rectObj(e) < fadeOptions.pixelsFromBottom) {
      e.classList.add('AnimateFade');
    }
  })

  fadeTop.forEach(function(e) {
    transition(e);
    if ((rectObj(e) > 0) && (fadeOptions.reverseFade == true)) {
      e.classList.remove('AnimateFade');
    } else if (rectObj(e) < fadeOptions.pixelsFromBottom) {
      e.classList.add('AnimateFade');
    }
  })

  fadeBottom.forEach(function(e) {
    transition(e);
    if ((rectObj(e) > 0) && (fadeOptions.reverseFade == true)) {
      e.classList.remove('AnimateFade');
    } else if (rectObj(e) < fadeOptions.pixelsFromBottom) {
      e.classList.add('AnimateFade');

    }
  })
};