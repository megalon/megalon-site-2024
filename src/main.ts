import './style.css'
import './tabs.css'
import './video.css'
import { delay } from './utils'

const rightDiv = document.querySelector<HTMLDivElement>('#right') as HTMLDivElement
const contentDiv = document.querySelector<HTMLDivElement>('#content') as HTMLDivElement
const homeButtonDiv = document.querySelector<HTMLDivElement>(".home-button")

window.addEventListener("hashchange", loadContentFromHash)
window.addEventListener("load", loadContentFromHash)

async function loadContentFromHash() {
  contentDiv.style.opacity = "0"
  await delay(500)

  const text = await loadContent(window.location.hash.substring(1))
  if (text) {
    setContent(text)
  }
}

export async function loadContent(htmlFile: string | undefined) {
  if (!htmlFile) {
    console.log("No page selected")
    htmlFile = 'about'
  }

  try {
    const response = await fetch(`/${htmlFile}.html`)
    if (response.ok) {
      const text = await response.text()
      return text
    } else {
      console.log(response.status)
      return "Work in progress! Please select another project"
    }
  } catch (error) {
    console.log(error)
  }
}

function setContent(text:string) {
  contentDiv.innerHTML = text
  rightDiv.scrollTo(0, 0)
  contentDiv.style.opacity = "1"
}

homeButtonDiv?.addEventListener("click", async () => {
  window.location.hash = ""
})