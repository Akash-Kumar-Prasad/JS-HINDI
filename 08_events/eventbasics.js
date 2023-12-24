  //javascript is a sequentially run language
  //exceptions are there, like asynchronous programming
  //where we deviate from a place to another then return back
  // document.getElementById('owl').onclick = function(){
  //   alert('owl clicked')
  // }
  //attachEvent()
  //jQuery - .on
  //type, timeStamp, defaultPrevented
  //target, toElement, srcElement, currentTarget,
  //clientX, clientY, screenX, screenY
  //altkey, ctrlkey, shift, keyCode, 
  // document.getElementById('images').addEventListener('click', function(e){
  // console.log("clicked inside the ul");
  // }, false)
  // document.getElementById('owl').addEventListener('click', function(e){
  // console.log("owl clicked");
  // e.stopPropagation()
  // }, false)
  //event propagation is of two types
  //eventBubbling, eventCapture
  //eventBubbling is the default behaviour of the addEventListener function where false is written and it goes from the inner tag to the upper tag
  //otoh eventCapture has the value true which moves from top most tag to the inner most tag
  //it depends on the use true

  // document.getElementById('google').addEventListener('click', function(e){
  //   e.preventDefault()
  //   e.stopPropagation()
  //   console.log("google clicked");
  // }, false)

  document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.parentNode);
    if(e.target.tagName ==='IMG'){
      console.log(e.target.id);
      let removeIt = e.target.parentNode
      removeIt.remove()
      //removeIt.parentNode.removeChild(removeIt)
    }
    
  }, false)
  