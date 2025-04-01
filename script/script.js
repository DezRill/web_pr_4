let header = document.querySelector('h1');
let browserName = document.querySelectorAll('.browser-name');
let manifesto = document.getElementById('manifesto-url');
let body = document.querySelector('body');
let html = document.querySelector('html');
// header.textContent = 'Hello World!';

init();

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('img').addEventListener('click', function () {
        let src = this.getAttribute('src');
        let headerText;
        let isMozilla;

        if (src == 'images/firefox-icon.png') {
            this.setAttribute('src', 'images/chrome-icon.png');
            headerText = "Chrome is cool";
            isMozilla = false;
        } else {
            this.setAttribute('src', 'images/firefox-icon.png');
            headerText = "Mozilla is cool";
            isMozilla = true;
        }

        let name = localStorage.getItem('name');

        if (name) {
            headerText += ', ' + name;
        }

        header.innerHTML = headerText;
        changeBrowser(isMozilla);
    });

    document.querySelector('#change-user').addEventListener('click', function () {
        setUserName();
    })
});

function setUserName() {
    let name = prompt('Please enter your name');

    if (!name) {
        return;
    }

    localStorage.setItem('name', name);

    let isMozilla = document.querySelector('img').getAttribute('src') == 'images/firefox-icon.png';
    let headerText = isMozilla ? 'Mozilla is cool' : 'Chrome is cool';

    header.innerHTML = headerText + ', ' + name;
}

function init() {
    let name = localStorage.getItem('name');
    let headerText = 'Mozilla is cool';

    if (name) {
        headerText += ', ' + name;
    }

    header.innerHTML = headerText;
}

function changeBrowser(isMozilla) {
    browserName.forEach(element => {
        element.textContent = isMozilla ? 'Mozilla' : 'Chrome';
    });

    manifesto.textContent = isMozilla ? 'Mozilla Manifesto' : 'Chrome Manifesto';
    manifesto.setAttribute('href', isMozilla ? 'https://www.mozilla.org/en-US/about/manifesto' : 'https://support.google.com/chrome');

    html.style.backgroundColor = isMozilla ? '#00539F' : '#34a853';
    body.style.borderColor = isMozilla ? 'black' : '#ea4335';
    header.style.color = isMozilla ? '#00539F' : '#4285f4';
}