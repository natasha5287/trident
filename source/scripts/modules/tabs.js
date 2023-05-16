const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const titleBlock = document.getElementById('title-tab');

function clearTabs() {
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active');
    });
    tabs.forEach(tab => {
        tab.classList.remove('button-tab-active')
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        clearTabs();
        tab.classList.add('button-tab-active');
        target.classList.add('active');
        if (titleBlock) {
            titleBlock.textContent = tab.textContent;
        }
    })
})