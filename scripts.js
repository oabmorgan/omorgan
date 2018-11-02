var filter = window.location.search.substring(1);
var allImages = document.getElementsByTagName('img');

runfilter()

function runfilter(){
    if(filter.length > 0){
        for(var i = 0; i < allImages.length ; i++) {
            if(filter == allImages[i].id){
                allImages[i].parentNode.parentNode.parentNode.style.display = 'none';
            }
        }
    }
    document.getElementById('filter').innerHTML = "-"+filter;
}