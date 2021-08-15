




function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
const makeWhite = document.getElementById('janina')
makeWhite.onclick = function () {
    document.body.style.backgroundColor = '#dddd';
}

const makeGoldenRod = document.getElementById('kijani')
makeGoldenRod.addEventListener('click', makerod)


function makerod() {
    document.body.style.backgroundColor = 'DarkCyan';
}

const makeanother = document.getElementById('DarkOrchid')
makeanother.addEventListener('click', makeOrchid)

function makeOrchid() {
    document.body.style.backgroundColor = 'DarkOrchid';
}

document.getElementById('darkOliveGreen').addEventListener('click',
    function () {
        document.body.style.backgroundColor = 'DarkOliveGreen';
    })






