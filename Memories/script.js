function openTab(evt, tabName) {
    let i, tabContent, tabButtons;
    tabContent = document.getElementsByClassName("tab-content");
    tabButtons = document.getElementsByClassName("tab-button");

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }

    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
