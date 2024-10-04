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
            var tabId = tab.getAttribute('data-tab')

            // Remove 'is-active' class from all tabs
            for (var j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('is-active')
            }

            // Add 'is-active' class to the clicked tab
            tab.classList.add('is-active')

            // Remove 'is-active' class from all tab contents
            var tabContents = document.querySelectorAll(
                '#all-tabs-content .tab-content'
            )
            for (var k = 0; k < tabContents.length; k++) {
                tabContents[k].classList.remove('is-active')
            }

            // Add 'is-active' class to the tab content with matching data-content attribute
            var activeTabContent = document.querySelector(
                'div.tab-content[data-content="' + tabId + '"]'
            )

            activeTabContent?.classList.add('is-active')
        })
    }
})