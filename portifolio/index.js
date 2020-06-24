window.onload = function () {
  document.querySelector('#home').classList.add('start');
  let offset = 0;
  let page = 1;
  
  let url = `https://api.tumblr.com/v2/blog/amandadeluca.tumblr.com/posts?api_key=CfNqRVPtVGx2Gy2j3z3nkaLA4Li5orMkjhAd6HEJKV5LAwPtPB&offset=${offset}&page_number=${page}`;
  
  var xhr = new XMLHttpRequest();
  
  xhr.onload = function () {
    console.log(xhr);
  };
  
  xhr.open("GET", url);
  xhr.send();
  
  document.querySelector(".hamburger").addEventListener("click", (e) => {
    if (document.querySelector(".hamburger").classList.contains("active")) {
      document.querySelector(".hamburger").classList.add("closed");
      document.querySelector(".hamburger").classList.remove("active");
    } else {
      document.querySelector(".hamburger").classList.add("active");
      document.querySelector(".hamburger").classList.remove("closed");
    }
  
    if (document.querySelector(".hamburger").classList.contains("active")) {
      document.querySelector(".nav-mobile").classList.add("active");
      document.querySelector(".nav-mobile").classList.remove("closed");
    } else {
      document.querySelector(".nav-mobile").classList.remove("active");
      document.querySelector(".nav-mobile").classList.add("closed");
    }
  });
}

