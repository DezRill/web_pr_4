let header = document.querySelector('h1');
let browserName = document.querySelectorAll('.browser-name');
let manifesto = document.getElementById('manifesto-url');
// header.textContent = 'Hello World!';

console.log(browserName);

init();

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('img').addEventListener('click', function () {
        let src = this.getAttribute('src');
        let headerText;

        if (src == 'images/firefox-icon.png') {
            this.setAttribute('src', 'images/chrome-icon.png');
            headerText = "Chrome is cool";
        } else {
            this.setAttribute('src', 'images/firefox-icon.png');
            headerText = "Mozilla is cool";
        }

        let name = localStorage.getItem('name');

        if (name) {
            headerText += ', ' + name;
        }

        header.innerHTML = headerText;
        changeBrowserName();
    });

    document.querySelector('#change-user').addEventListener('click', function () {
        setUserName();
    })
});

function setUserName() {
    let name = prompt('Please enter your name');

    if (!name) {
        setUserName();
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

function changeBrowserName(isMozilla) {
    browserName.forEach(element => {
        element.textContent = isMozilla ? 'Mozilla' : 'Chrome';
    });
}