smoothScroll.init();
// hide and show triggers for literacy
var inTriggerLit = document.querySelector('.inTriggerLit');
var outTriggerLit = document.querySelector('.outTriggerLit');
var fadeTargetLit = document.querySelector('.fadeTargetLit');
inTriggerLit.addEventListener('click', function(e){
  if (document.querySelector('.outTriggerEnc')){document.querySelector('.outTriggerEnc').click()}
  if (fadeTargetLit.classList.contains('fadeIn')){
    fadeTargetLit.classList.remove('hide');
    fadeTargetLit.classList.remove('is-paused');
    setTimeout(function(){
      fadeTargetLit.classList.add('is-paused', 'fadeOut')
      fadeTargetLit.classList.remove('fadeIn');
    }, 600)
  }
});
outTriggerLit.addEventListener('click', function(e){
  fadeTargetLit.classList.remove('is-paused');
  setTimeout(function(){
    fadeTargetLit.classList.add('hide', 'fadeIn');
    fadeTargetLit.classList.remove('fadeOut');
  }, 600)
})
// hide and show triggers for encrypted life
var inTriggerEnc = document.querySelector('.inTriggerEnc');
var outTriggerEnc = document.querySelector('.outTriggerEnc');
var fadeTargetEnc = document.querySelector('.fadeTargetEnc');
inTriggerEnc.addEventListener('click', function(e){
  if (document.querySelector('.outTriggerLit')){document.querySelector('.outTriggerLit').click()}
  if (fadeTargetEnc.classList.contains('fadeIn')){
    fadeTargetEnc.classList.remove('hide');
    fadeTargetEnc.classList.remove('is-paused');
    setTimeout(function(){
      fadeTargetEnc.classList.add('is-paused', 'fadeOut')
      fadeTargetEnc.classList.remove('fadeIn');
    }, 600)
  }
});
outTriggerEnc.addEventListener('click', function(e){
  fadeTargetEnc.classList.remove('is-paused');
  setTimeout(function(){
    fadeTargetEnc.classList.add('hide', 'fadeIn');
    fadeTargetEnc.classList.remove('fadeOut');
  }, 600)
})
