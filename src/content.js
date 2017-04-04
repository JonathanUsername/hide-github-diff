
const hide = (...selectors) => {
  selectors
    .reduce((sum, i) => sum.concat(Array.from(document.querySelectorAll(`div[data-path*="${i}"]`))), [])
	.map(i => { console.log(i); return i; })
    .forEach(i => i.parentNode.style.display = 'none');
}

window.addEventListener('load', evt => {
    chrome.runtime.onMessage.addListener(msg => {
        hide(msg)
    });
})
