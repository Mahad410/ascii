const button = document.getElementById('btn');
const input = document.getElementById('text');
const para = document.getElementById('code');
const eAlert = document.getElementById('e_alert');
const cAlert = document.getElementById('c_alert');

input.addEventListener('focus', () => {
    para.innerHTML = "ASCII:";
    btn.disabled = false;
    eAlert.style.display = "none";
    cAlert.style.display = "none";
});
btn.addEventListener('click', () => {
    if (input.value !== '') {
        let index = input.value.length - 1;
        para.innerHTML += " " + input.value.charCodeAt(index);
        btn.disabled = true;
        cAlert.style.display = "flex";
    } else {
        eAlert.style.display = "flex";
    }
})