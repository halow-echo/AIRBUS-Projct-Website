const htext = document.getElementById('appear');
const favi = document.getElementById('helloworld');

function myFunction() {
    return htext.textContent = "Hello World!";
}
favi.addEventListener('click', myFunction);