function changeData(){
    if(window.location.search.indexOf("?slug") != -1){
        var tmp = window.location.search;
        tmp = tmp.replace("?slug=","");
        var json = '[{"slug":"slope","title":"Slope","cat":"Skill","domain":1,"img":"slope"},{"slug":"tunnel-rush","title":"Tunnel Rush","cat":"Skill","domain":1,"img":"tunnel-rush"},{"slug":"eggy-car","title":"Eggy car","cat":"Car","domain":1,"img":"eggy-car"},{"slug":"among-us","title":"Among us","cat":"Action","domain":1,"img":"among-us"},{"slug":"drive-mad","title":"Drive Mad","cat":"Car","domain":3},{"slug":"getting-over-it","title":"Getting over it","cat":"Skill","domain":4},{"slug":"gd","title":"Geometry Dash","cat":"Running","domain":4},{"slug":"retro-bowl","title":"Retro Bowl","cat":"Sport","domain":1},{"slug":"1v1-lol","title":"1v1.LOL","cat":"Shooting","domain":1,"img":"1v1-lol"},{"slug":"crazy-cars","title":"Crazy Cars","domain":1,"img":"crazy-cars"},{"slug":"moto-x3m-5-pool-party","title":"Moto x3m Pool Party","cat":"Racing","domain":1,"img":"moto-x3m-5-pool-party"},{"slug":"eggy-car","title":"Eggy car","cat":"Car","domain":1,"img":"eggy-car"},{"slug":"idle-breakout","title":"Idle breakout","cat":"Idle","domain":-1,"img":"idle-breakout"},{"slug":"grindcraft","title":"GrindCraft","cat":"Idle","domain":-1,"img":"grindcraft"},{"slug":"idle-startup-tycoon","title":"Idle startup tycoon","cat":"Idle","domain":3,"img":"idle-startup-tycoon"},{"slug":"cookie-clicker","title":"Cookie Clicker","cat":"Idle","domain":1,"img":"cookie-clicker"},{"slug":"idle-mining-empire","title":"Idle Mining Empire","cat":"Idle","domain":4},{"slug":"idle-dice","title":"Idle Dice","cat":"Idle","domain":3},{"slug":"idle-miner","title":"Idle Miner","cat":"Idle","domain":3},{"slug":"merge-cyber-racers","title":"Merge Cyber Racers","cat":"Car, Idle","domain":2},{"slug":"merge-round-racers","title":"Merge Round Racers","cat":"Car, Idle","domain":2},{"slug":"stick-merge-halloween","title":"Stick Merge Halloween","cat":"Idle, Stickman","domain":2},{"slug":"stickmerge","title":"Stick Merge","cat":"Idle, Stickman","domain":1},{"slug":"merge-cakes","title":"Merge Cakes","cat":"Idle","domain":1},{"slug":"smash-karts","title":"Smash Karts","cat":"Car","domain":1,"img":"smash-karts"},{"slug":"basket-ball","title":"Basket and Ball","cat":"Sport","domain":1,"img":"basket-ball"}]';
        json = JSON.parse(json);
        for (let index = 0; index < json.length; index++) {
            
            const element = json[index];
            if(element.slug == tmp){
                document.getElementById("avatar").setAttribute("src",`/images/${element.slug}.png`);
                var tmp_url = `/more/${element.slug}/index.html`;
                var slug = element.slug;
                if(element.domain == 1){
                    tmp_url = 'https://webglmath.github.io/'+slug+"/";
                } else if(element.domain == 2){
                    tmp_url = 'https://ubg77.github.io/edit/'+slug+"/";
                }  else if(element.domain == 3){
                    tmp_url = 'https://ubg77.github.io/game131022/'+slug+"/";
                    
                }  else if(element.domain == 4){
                    tmp_url = 'https://ubg77.github.io/fix/'+slug+"/";
                    if(slug.indexOf("fnaf2") != -1){
                        tmp_url = 'https://ubg77.github.io/fix/'+slug;
                    }
                }
                document.getElementById("game-content").dataset.src = tmp_url;
                document.getElementById("title-game").innerText = element.title;
            }
            
        }
    }
}
window.addEventListener('load', function() {

    changeData();
});