var filter = window.location.search.substring(1);
var images = document.getElementsByTagName('img');
for(var i = 0; i < images.length; i++) {
    if(images[i].id == filter){
        images[i].parentElement.parentElement.parentElement.style.display = 'none';
    }
}