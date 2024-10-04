import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

const contentDiv = document.querySelector<HTMLDivElement>('#content')

load_page('graffiti-game')
load_page('color-beluga')

function load_page(page_url: string) {
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      {
        contentDiv!.innerHTML = xmlHttp.responseText;
      }
  };

  xmlHttp.open("GET", page_url + ".html", true); // true for asynchronous
  xmlHttp.send(null);
}
