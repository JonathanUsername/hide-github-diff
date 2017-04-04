// When the popup HTML has loaded


window.addEventListener('load', () => {
    document.getElementById('selector').addEventListener('keypress', evt => {
        if (evt.keyCode === 13) {
            const sel = document.querySelector('#selector');
            const selectors = sel.value.split(' ');
            chrome.runtime.getBackgroundPage(eventPage => {
                eventPage.hide(selectors);
                window.close();
            });
        }
    });
});
