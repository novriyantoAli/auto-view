var i = 1;                  
function myLoop(judul) {        
  setTimeout(function() {  
    $('input[name="search_query"]').sendkeys(judul[(i-1)]);
    i++;
    if (i <= judul.length) {
      myLoop(judul);
    }
    if (i > judul.length) {
        $('#search-form').submit();
    }
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

waitForElm('input[name="search_query"]').then((elm) => {
    
    console.log(document.location.href);

    if(document.location.href === "https://www.youtube.com/") {
        $("#search-input #search").focus();
        
        let judul = "mohamad novriyanto"
        
        myLoop(judul);
    }
});

waitForElm('a[id="main-link"]').then((elm) => {
    console.log(document.location.href);

    if(document.location.href === "https://www.youtube.com/results?search_query=mohamad+novriyanto") {
        let randomInt = Math.floor(Math.random() * 5000) + 1000;

        console.log("timeout after: " + randomInt);

        setTimeout(() => {  $('a[id="main-link"]')[0].click(); }, randomInt);
    }
});

waitForElm('tp-yt-paper-tab').then((elm) => {
    console.log(document.location.href);

    if(document.location.href === "https://www.youtube.com/channel/UC6xyoCWM7dsN8b42-RYgWng") {
        var filteredDivs = $("div.tab-content.style-scope.tp-yt-paper-tab").filter(function () {
            var reg = new RegExp("playlist", "ig");
            return reg.test($(this).text())
        });

        if(filteredDivs.length === 1) {
            let randomInt = Math.floor(Math.random() * 5000) + 1000;
            
            console.log("timeout after: " + randomInt);

            setTimeout(() => { filteredDivs.click(); }, randomInt);
        }
        // var div = $( "div:contains('playlist')" );
        // $("tp-yt-paper-tab.ytd-c4-tabbed-header-renderer").find(div).css( "color", "red" );
    }
});

waitForElm('a[title="Teaching"]').then((elm) => {
    console.log(document.location.href);

    if(document.location.href === "https://www.youtube.com/channel/UC6xyoCWM7dsN8b42-RYgWng/playlists") {
        let randomInt = Math.floor(Math.random() * 5000) + 1000;

        console.log("timeout after: " + randomInt);

        setTimeout(() => { $('a[title="Teaching"]')[0].click(); }, randomInt);
    }
})

