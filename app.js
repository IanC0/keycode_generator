const keyCode = document.getElementById('code');
const key = document.getElementById('key');
const which = document.getElementById('which');
const wasEntered = document.getElementById('wasEntered');

document.addEventListener("keydown", (param) => {
    wasEntered.innerHTML = `${param.key} was entered!`;
    keyCode.textContent = param.code;
    key.textContent = param.key;
    which.textContent = param.which; 
})
