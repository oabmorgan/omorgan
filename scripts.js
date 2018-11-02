var filter = window.location.search.substring(1);
var icons = document.getElementsByClassName("icons");

if(filter.length > 0){
    for(var i = 0; i < icons.length; i++) {
        var imgs = icons[i].getElementsByTagName('img');
        var hide = true;
        for(var j=0; j<imgs.length; j++){
            if(imgs[j].id == filter){
                hide=false;
            }
        }
        if(hide){
            icons[i].parentElement.parentElement.style.display = 'none';
        }
    }
}