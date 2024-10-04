import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

load_page('graffiti-game.html',"Multiplayer Graffiti Game", "2024")

function load_page(page_url: string, title: string, date: string) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
          document.querySelector<HTMLDivElement>('#content')!.innerHTML = xmlHttp.responseText;
          document.querySelector<HTMLDivElement>("#right .heading .project-name")!.innerHTML = title
          document.querySelector<HTMLDivElement>("#right .heading .project-date")!.innerHTML = date
        }
    };

    xmlHttp.open("GET", page_url, true); // true for asynchronous
    xmlHttp.send(null);
  }
