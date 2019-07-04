function onHover(link){
  if(link == 'about'){
    document.getElementById("home-page-img").src = "img/placeholder-home.png";
  }
  if(link == 'projects'){
    document.getElementById("home-page-img").src = "img/placeholder-home-1.png";
  }
  if(link == 'contact'){
    document.getElementById("home-page-img").src = "img/placeholder-home.png";
  }
  if(link == 'style-guide'){
    document.getElementById("home-page-img").src = "img/placeholder-home-1.png";
  }
  if(link == 'gitHub1'){
    document.getElementById("about-github").src = "img/GitHub-normal.png";
  }
  if(link == 'gitHub2'){
    document.getElementById("about-github").src = "img/GitHub-hover.png";
  }
}
