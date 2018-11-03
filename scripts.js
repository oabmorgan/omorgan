runFilter(window.location.search.substring(1));

function runFilter(filter){
    var icons = document.getElementsByClassName("icons");
    for(var i = 0; i < icons.length; i++) {
            var imgs = icons[i].getElementsByTagName('img');
            var hide = filter;
            for(var j=0; j<imgs.length && hide; j++){
                if(imgs[j].id == filter){
                    hide=false;
                }
            }
            if(hide){
                icons[i].parentElement.parentElement.style.display = 'none';
            } else{
                icons[i].parentElement.parentElement.style.display = 'block';
            }
        }
    if(!filter){
        document.getElementById("nofilter").style.color = '#fff';
    } else{
        document.getElementById("nofilter").style.color = '#666';
    }
    if(filter == "art"){
        document.getElementById("artfilter").style.color = '#fff';
    } else{
        document.getElementById("artfilter").style.color = '#666';
    }
    if(filter == "programming"){
        document.getElementById("progfilter").style.color = '#fff';
    } else{
        document.getElementById("progfilter").style.color = '#666';
    }
    if(filter == "game"){
        document.getElementById("gamefilter").style.color = '#fff';
    } else{
        document.getElementById("gamefilter").style.color = '#666';
    }
}