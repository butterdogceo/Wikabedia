const articleText = document.getElementById('articleText');

if (document.getElementById('pageName')) {
  const articleName = document.getElementById('pageName').innerHTML; // get the article name
  const pageName = articleName + " - wikabedia"; // create a page name
  document.title = pageName; // change the page name
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function site(url) {
  document.body.style.opacity = 0;
  setTimeout(function() {
    window.location.href = url;
  },250);
}

function createTopButtons() {
  const container = document.createElement('div');
  container.classList.add("topButtons");
  
  const searchDiv = document.createElement('div');
  searchDiv.classList.add("search");
  searchDiv.id = 'searchDiv';
  
  const searchImg = document.createElement('img');
  searchImg.setAttribute('src', '../img/search.png');
  searchImg.setAttribute('onclick', 'search("page2");'); // wtf
  
  const searchInp = document.createElement('input');
  searchInp.setAttribute('type', 'text');
  searchInp.setAttribute('placeholder', 'search for something');
  searchInp.id = 'searchBox';
  searchInp.addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
      search("page2");
    }
  });
  
  searchDiv.appendChild(searchImg);
  searchDiv.appendChild(searchInp);
  container.appendChild(searchDiv);

  document.body.appendChild(container);
}

createTopButtons();

function search2(key) {
  if (event.key === "Enter") {
    window.search("page2");
  }
}