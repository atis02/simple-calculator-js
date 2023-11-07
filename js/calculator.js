console.log('javaSript calculator made by Atamyrat Ikramov');
let all = document.getElementById('main3')
all.onkeydown = function (event) {
    if (event.keyCode === 13) {
        let x = document.getElementById('result').value;
        solve();
    }
}
let focus = document.getElementById('result').focus()
const clear2 = () => {
    document.getElementById('result').value = '';
}
const dis = (val) => {
    document.getElementById('result').value += val;
}
const solve = () => {
    let x = document.getElementById('result').value;
    let y = math.evaluate(x);
    document.getElementById('result').value = y;

}