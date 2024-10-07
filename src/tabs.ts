import { loadContent } from './main'

document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.tabs .tab') as NodeListOf<HTMLElement>

    for (var i = 0; i < tabs.length; i++) {
        const tab = tabs[i]

        tab.addEventListener("mouseover", () => {
            tab.classList.add('hover')
        })

        tab.addEventListener("mouseleave", () => {
            tab.classList.remove('hover')
        })

        tab.addEventListener('click', function () {
            const tabId = tab.getAttribute('data-tab') as string

            // Remove 'is-active' class from all tabs
            for (var j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('is-active')
            }

            // Add 'is-active' class to the clicked tab
            tab.classList.add('is-active')

            loadProjectsList(tabId)
        })
    }
})

const projectListDiv = document.querySelector<HTMLDivElement>("#projects-list") as HTMLDivElement

window.addEventListener("load", async () => {
    loadProjectsList("software")
})

async function loadProjectsList(fileName: string) {
    const text = await loadContent(`lists/${fileName}`)
    if (!text) {
        return;
    }

    setProjectsList(text)

}

function setProjectsList(text: string) {
    projectListDiv.innerHTML = text
    projectListDiv.scrollTo(0, 0)
    projectListDiv.style.opacity = "1"

    var listItems = document.querySelectorAll('#projects-list ul') as NodeListOf<HTMLElement>

    for (var i = 0; i < listItems.length; i++) {
        const item = listItems[i]

        item.addEventListener("mouseover", () => {
            item.classList.add('hover')
        })

        item.addEventListener("mouseleave", () => {
            item.classList.remove('hover')
        })

        item.addEventListener("click", async (event) => {
            event.preventDefault();

            const hash = item.getAttribute("href")

            if (hash) {
                window.location.hash = hash
            }
        });
    }
}