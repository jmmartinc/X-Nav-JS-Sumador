
function adder(){
        var vari = document.getElementById("op").innerHTML;
        var num = vari.split("+");
        var a = parseInt(num[0]);
        var b = parseInt(num[1]);
        var c = a + b;
        var res = document.getElementById("res");
        res.innerHTML = " = " + c.toString();
    };

function random_adder(){
        var vari = document.getElementById("op");
        vari.innerHTML = (Math.floor(Math.random()*1000) + "+" + Math.floor(Math.random()*1000));
}
