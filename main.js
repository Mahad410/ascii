const button = document.getElementById('btn');
const input = document.getElementById('text');
const para = document.getElementById('code');
const alert = document.getElementById('alert');

input.addEventListener('focus', () => {
    para.innerHTML = "ASCII:";
    btn.disabled = false;
    alert.style.display = "none";
});
btn.addEventListener('click', () => {
    if (input.value !== '') {
        let index = input.value.length - 1;
        para.innerHTML += " " + input.value.charCodeAt(index);
        btn.disabled = true;
    } else {
        alert.style.display = "flex";
    }
})