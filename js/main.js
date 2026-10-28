const isSearchPage = window.location.pathname.startsWith('/search');

/*
function search() {
  url = "../search.html?search=" + document.getElementById('searchBox').value;
  if (url !== undefined) {
    document.body.style.opacity = 0;
    setTimeout(function() {
      window.location.href = url;
    }, 250);
  }
}

function search2(key) {
  if (event.key === "Enter") {
    search("page2");
  }
}
*/

if (!isSearchPage) {
  window.search = (query) => {
    query = encodeURIComponent(query.trim());
    
    const pageUrl = new URL(window.location.href);
    pageUrl.pathname = 'search';
    pageUrl.searchParams.set('query', query);
    window.location.replace(pageUrl.href);
  }

  const searchBoxElement = document.getElementById('searchBox');
  if (searchBoxElement) searchBoxElement.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      window.search(searchBoxElement.value);
    }
  });
}

function addCard(title, description, image, url, parent) {
  if (!parent) parent = 'items';

  const parentElement = document.getElementById(parent);
  if (!parentElement) {
    console.error('Attempted to create card with non-existent parent:', parent);
    return;
  }

  const cardElement = document.createElement('a');
  cardElement.classList.add('item');
  cardElement.href = url;
  
  const imageElement = document.createElement('img');
  imageElement.setAttribute('loading', 'lazy');
  imageElement.setAttribute('src', image.replace('../', '/'));
  cardElement.append(imageElement);

  const titleElement = document.createElement('h3');
  titleElement.innerText = title;
  cardElement.append(titleElement);

  const descriptionElement = document.createElement('p');
  descriptionElement.innerText = description.slice(0, 64);
  cardElement.append(descriptionElement);

  parentElement.append(cardElement);
}