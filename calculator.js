//First patient
function CalcFunction() {
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
    /*if (n_t < 400)
    displayObj.style.color = 'yellow'
    if (n_t < 400){
        = "#fff00";
    }*/
}
//second patient
function CalcFunction1(){
    var UserInput = document.getElementById('first1').value;
    var UserInput1 = document.getElementById('dose1').value;
    var likutis = UserInput - UserInput1;
    document.getElementById('likutis1').innerHTML =  likutis;
}
function decay1() {
    var t1_2 = 109.77;
    var e = 2.71828;
    var c = -0.693;
    var t = document.getElementById('time1').value;
    var n = document.getElementById('likutis1').value;
    var z = c * t;
    var p = z / t1_2;
    var ex = e ** p;
    var n_t = n * ex;
    var nf = n_t.toFixed(2);
    
    
    document.getElementById('first2').value = nf;
}
//third patient
function CalcFunction2(){
    var UserInput = document.getElementById('first2').value;
    var UserInput1 = document.getElementById('dose2').value;
    var likutis = UserInput - UserInput1;
    document.getElementById('likutis2').innerHTML =  likutis;
}
function decay2() {
    var t1_2 = 109.77;
    var e = 2.71828;
    var c = -0.693;
    var t = document.getElementById('time2').value;
    var n = document.getElementById('likutis2').value;
    var z = c * t;
    var p = z / t1_2;
    var ex = e ** p;
    var n_t = n * ex;
    var nf = n_t.toFixed(2);
    
    
    document.getElementById('first3').value = nf;
}
//fourth patient
function CalcFunction3(){
    var UserInput = document.getElementById('first3').value;
    var UserInput1 = document.getElementById('dose3').value;
    var likutis = UserInput - UserInput1;
    document.getElementById('likutis3').innerHTML =  likutis;
}
function decay3() {
    var t1_2 = 109.77;
    var e = 2.71828;
    var c = -0.693;
    var t = document.getElementById('time3').value;
    var n = document.getElementById('likutis3').value;
    var z = c * t;
    var p = z / t1_2;
    var ex = e ** p;
    var n_t = n * ex;
    var nf = n_t.toFixed(2);
    
    
    document.getElementById('first4').value = nf;
}
//fifth patient
function CalcFunction4(){
    var UserInput = document.getElementById('first4').value;
    var UserInput1 = document.getElementById('dose4').value;
    var likutis = UserInput - UserInput1;
    document.getElementById('likutis4').innerHTML =  likutis;
}
function decay4() {
    var t1_2 = 109.77;
    var e = 2.71828;
    var c = -0.693;
    var t = document.getElementById('time4').value;
    var n = document.getElementById('likutis4').value;
    var z = c * t;
    var p = z / t1_2;
    var ex = e ** p;
    var n_t = n * ex;
    var nf = n_t.toFixed(2);
    
    
    document.getElementById('first5').value = nf;
}
//sixth patient
function CalcFunction5(){
    var UserInput = document.getElementById('first5').value;
    var UserInput1 = document.getElementById('dose5').value;
    var likutis = UserInput - UserInput1;
    document.getElementById('likutis5').innerHTML =  likutis;
}
function decay5() {
    var t1_2 = 109.77;
    var e = 2.71828;
    var c = -0.693;
    var t = document.getElementById('time5').value;
    var n = document.getElementById('likutis5').value;
    var z = c * t;
    var p = z / t1_2;
    var ex = e ** p;
    var n_t = n * ex;
    var nf = n_t.toFixed(2);
    
    
    document.getElementById('first6').value = nf;
}
//seventh patient
function CalcFunction6(){
    var UserInput = document.getElementById('first6').value;
    var UserInput1 = document.getElementById('dose6').value;
    var likutis = UserInput - UserInput1;
    document.getElementById('likutis6').innerHTML =  likutis;
}
function decay6() {
    var t1_2 = 109.77;
    var e = 2.71828;
    var c = -0.693;
    var t = document.getElementById('time6').value;
    var n = document.getElementById('likutis6').value;
    var z = c * t;
    var p = z / t1_2;
    var ex = e ** p;
    var n_t = n * ex;
    var nf = n_t.toFixed(2);
    
    
    document.getElementById('first7').value = nf;
}
//eighth patient
function CalcFunction7(){
    var UserInput = document.getElementById('first7').value;
    var UserInput1 = document.getElementById('dose7').value;
    var likutis = UserInput - UserInput1;
    document.getElementById('likutis7').innerHTML =  likutis;
}
function decay7() {
    var t1_2 = 109.77;
    var e = 2.71828;
    var c = -0.693;
    var t = document.getElementById('time7').value;
    var n = document.getElementById('likutis7').value;
    var z = c * t;
    var p = z / t1_2;
    var ex = e ** p;
    var n_t = n * ex;
    var nf = n_t.toFixed(2);
    
    
    document.getElementById('first8').value = nf;
}
//ninth patient
function CalcFunction8(){
    var UserInput = document.getElementById('first8').value;
    var UserInput1 = document.getElementById('dose8').value;
    var likutis = UserInput - UserInput1;
    document.getElementById('likutis8').innerHTML =  likutis;
}
function decay8() {
    var t1_2 = 109.77;
    var e = 2.71828;
    var c = -0.693;
    var t = document.getElementById('time8').value;
    var n = document.getElementById('likutis8').value;
    var z = c * t;
    var p = z / t1_2;
    var ex = e ** p;
    var n_t = n * ex;
    var nf = n_t.toFixed(2);
    
    
    document.getElementById('first9').value = nf;
}
//tenth
function CalcFunction9(){
    var UserInput = document.getElementById('first9').value;
    var UserInput1 = document.getElementById('dose9').value;
    var likutis = UserInput - UserInput1;
    document.getElementById('likutis9').innerHTML =  likutis;
}
/*function decay9() {
    var t1_2 = 109.77;
    var e = 2.71828;
    var c = -0.693;
    var t = document.getElementById('time9').value;
    var n = document.getElementById('likutis9').value;
    var z = c * t;
    var p = z / t1_2;
    var ex = e ** p;
    var n_t = n * ex;
    var nf = n_t.toFixed(2);
    
    
    //document.getElementById('first1').value = nf;
}
function negative(nf){
    if (nf < 350)
    {
        document.getElementsByName('nf').style.color= "yellow";
    }
}*/
console.log("hello")
