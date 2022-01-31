// identifierId

var i = 1;                  //  set your counter to 1
function myLoop(judul) {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    // console.log('hello');   //  your code here
    $('input[id="identifierId"]').sendkeys(judul[(i-1)]);
    i++;                    //  increment the counter
    if (i <= judul.length) {           //  if the counter < 10, call the loop function
      myLoop(judul);             //  ..  again which will trigger another 
    }
    // if (i > judul.length) {
    //     $('#search-form').submit();
    // }                       //  ..  setTimeout()
  }, 100)
}


function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm('input[id="identifierId"]').then((elm) => {
    
    // elm.value = "ok";
    // console.log(document.location.href);
    $('#identifierId').focus();
    $('#identifierId').attr('data-initial-value',"ok");
    // $('input[id="identifierId"]').val = "ok";
        
    // let judul = "burton"
    
    // myLoop(judul);
});
