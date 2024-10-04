import './style.css'
import './tabs.css'
import './video.css'
import { delay } from './utils'

const contentDiv = document.querySelector<HTMLDivElement>('#content') as HTMLDivElement
const projectsListItems = document.querySelectorAll<HTMLElement>("#projects-list ul")
const homeButtonDiv = document.querySelector<HTMLDivElement>(".home-button")

window.addEventListener("hashchange", loadContentFromHash)
window.addEventListener("load", loadContent)

async function loadContentFromHash() {
  contentDiv.style.opacity = "0"
  await delay(500)

  loadContent()
}

async function loadContent() {
  const page = window.location.hash.substring(1)

  if (!page) {
    console.log("No page selected")
    contentDiv.innerHTML = "hello, please select a project on the left"
    contentDiv.style.opacity = "1"
    return
  }

  try {
    const response = await fetch(`/${page}.html`)
    if (response.ok) {
      const text = await response.text()
      contentDiv.innerHTML = text
      contentDiv.style.opacity = "1"
    } else {
      console.log(response.status)
      contentDiv.innerHTML = "Work in progress! Please select another project"
    }
  } catch (error) {
    console.log(error)
  }
}

// Setup listeners for projects in list
projectsListItems.forEach(item => {
  item.addEventListener("click", async (event) => {
    event.preventDefault();

    const hash = item.getAttribute("href")

    if (hash) {
      window.location.hash = hash
    }
  });
  item.addEventListener("mouseover", async (event) => {
    item.classList.add("hover")
  })
  item.addEventListener("mouseleave", async (event) => {
    item.classList.remove("hover")
  })
})

homeButtonDiv?.addEventListener("click", async (event) => {
  window.location.hash = ""
})