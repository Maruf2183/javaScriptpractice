




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

document.getElementById('btn').addEventListener('click', function () {
    const commentBox = document.getElementById('comment-box');
    const commentReciever = document.getElementById('comment-reciever');
    commentReciever.innerText = commentBox.value;
    commentBox.value = '';



})

document.getElementById('post-button').addEventListener('click', function () {
    const opinionField = document.getElementById('opinion-field');
    const p = document.createElement('p');
    p.innerText = opinionField.value;
    const parentDiv = document.getElementById('opinion-list');
    parentDiv.appendChild(p);
    opinionField.value = '';




})