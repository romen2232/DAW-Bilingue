function bigger(event){
    let images = document.getElementsByTagName("img");
    /**Los pongo todos a 200  */
    for(let i = 0; i<images.length; i++){
        if(event.target!== images[i]){
            images[i].style.width="200px";
        }
    }
    /*pongo a 400 el clicado*/
    event.target.style.width="400px";
}
document.getElementsByClassName("gallery-container")[0].addEventListener("click",bigger,false);