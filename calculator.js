function CalcFunction(){
    var UserInput = document.getElementById('first').value;
    var UserInput1 = document.getElementById('dose').value;
    var likutis = UserInput - UserInput1;
    document.getElementById('likutis').innerHTML =  likutis;
}
function decay() {
    var t1_2 = 109.77;
    var e = 2.71828;
    var c = -0.693;
    var t = document.getElementById('time').value;
    var n = document.getElementById('likutis').value;
    var z = c * t;
    var p = z / t1_2;
    var ex = e ** p;
    var n_t = n * ex;
    var nf = n_t.toFixed(2);
    document.getElementById('first1').value = nf;
}


console.log("hello")
