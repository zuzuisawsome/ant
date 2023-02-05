/*

Custom script

This file will not be overwritten by the updater

*/
function loadSimilar(){
    if($('#similar')){

        fetch("/json/similar.json",{
            headers: {
                'Content-Type': 'application/json',
                },
            }).then(response => response.json())
        .then(data => {
            listGame = data;
            var html = "";
            for (var j=0; j<listGame.length; j++) {
                var item = listGame[j];
                var tmp  = `<div class="col-4 list-grid">
                <a href="/detail/${item.slug}.html" title="${item.title}">
                <div class="list-game">
                    <div class="list-thumbnail">
                    <img src="/images/${item.slug}.png" class="small-thumb img-rounded" alt="${item.title}" title="${item.title}">
                    </div>
                </div>
                </a>
            </div>`;
            html += tmp;
            }
            $('#similar').html(html);
        });
    }
}function loadHot(){
    if($('#hotgames')){
    fetch("/json/hot.json",{
        headers: {
            'Content-Type': 'application/json',
            },
        }).then(response => response.json())
    .then(data => {
        listGame = data;
        var html = "";
        for (var j=0; j<listGame.length; j++) {
            var item = listGame[j];
            var tmp  = `<div class="col-4 list-grid">
            <a href="/detail/${item.slug}.html" title="${item.title}">
              <div class="list-game">
                <div class="list-thumbnail">
                  <img src="/images/${item.slug}.png" class="small-thumb img-rounded" alt="${item.title}" title="${item.title}">
                </div>
              </div>
            </a>
          </div>`;
          html += tmp;
        }
        $('#hotgames').html(html);
    });
    }
}
function loadAll(){
    if($('#allgames')){
        fetch("/json/all.json",{
            headers: {
                'Content-Type': 'application/json',
                },
            }).then(response => response.json())
        .then(data => {
            listGame = data;
            var html = "";
            for (var j=0; j<listGame.length; j++) {
                var tmp = "";
                var item = listGame[j];
                if((j+1)%5!=0){
                   
                    tmp  = `<div class="col-lg-2 col-md-4 col-6 grid-3">
                    <a href="/detail/${item.slug}.html" title="${item.title}">
                    <div class="game-item">
                        <div class="list-game">
                        <div class="list-thumbnail">
                            <img src="/images/${item.slug}.png" alt="${item.title}">
                        </div>
                        <div class="list-info">
                            <div class="list-title">${item.title}</div>
                        </div>
                        </div>
                    </div>
                    </a>
                </div>`;
               
            } else {
                if(window.location.href.indexOf("/detail/") != -1){
                tmp = `<div class="col-lg-2 col-md-4 col-6 grid-3"><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7889675448259925"
                crossorigin="anonymous"></script>
           <!-- antart list -->
           <ins class="adsbygoogle"
                style="display:inline-block;width:196px;height:243px"
                data-ad-client="ca-pub-7889675448259925"
                data-ad-slot="6243338511"></ins>
           <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
           </script></div>`;
                }
            }
            html += tmp;
            }
            $('#allgames').html(html);
        });
        }
}
$( document ).ready(function() {
    loadSimilar();
    loadHot();
    loadAll();
});