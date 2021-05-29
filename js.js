var displayedValue="";
var displayedValue1="";
var operator;
var opPos;
var done=false;
var out;
var out1;
var opDone=false;
var stor1;
var stor2;
var stor3;
var stor4;
var type=false;
var prev1;
var equal=false;
var num2;
var firstNum;
var check=false;
var disp1="";
var prevent=false;
function doOutput(val){
    if(displayedValue1.substring(displayedValue1.length-1,displayedValue1.length)=='='){
        if(val==1||val=='2'||val=='3'||val=='4'||val=='5'||val=='6'||val=='7'||val=='8'||val=='9'||val=='0') {
            displayedValue = "";
            displayedValue1="";
        }
    }
    displayedValue=displayedValue+val;
    document.getElementById("output").innerHTML=(displayedValue);

    opDone=false;
}
function prev() {
    prev1=out1;
    if(prev1<0){
        num2=prev1;
        prevent=true;
    }
    if (displayedValue==prev1){
        displayedValue="";
    }
    doOutput(prev1);
}

function answer(){
    var pos1=0;
    var pos2=displayedValue.indexOf(operator);
    /*alert(pos2);*/
    var num1=displayedValue.substring(pos1,pos2);
    /*alert(num1);*/
    var pos3=displayedValue.indexOf(operator)+1;
    /*alert(pos3);*/
    var pos4=displayedValue.length;
    var num2=displayedValue.substring(pos3,pos4);
    /*alert(num2);*/
    num1=parseInt(num1);
    num2=parseInt(num2);
    if (operator=="+"){
        var out=num1+num2;

    }
    else if (operator=="-"){
        out=num1-num2;
    }
    else if (operator=="*"){
        out=num1*num2;
    }
    else if (operator=="/"){
        out=num1/num2;
    }
    else if(operator=="^"){
        out=Math.pow(num1,num2);
    }
    final(out);
}
function divert() {
    if (displayedValue.charAt(0)=='-'){
        answer2();
    }
    else{
        answer();
    }
}
function doOperator(val){
    if (opDone==false) {
        doOutput(val);
        opPos = displayedValue.length - 1;
        /*alert(opPos);*/
        operator = displayedValue.charAt(opPos);
        /*alert(operator);*/
        opDone=true;
        done=true;
        check=true;
        if(parseInt(displayedValue.substring(0,displayedValue.length-2))<0){
            num2=parseInt(displayedValue);
            disp1="";
            disp1=disp1+num2;
            prevent=true;
            done=true;
        }


    }
    else if(opDone==true){
        alert("Please enter a value after the operation");
    }
    done=true;
    displayedValue1="";
    equal=true;
}

function back(){
    num3=displayedValue.length-1;
    val=displayedValue.substring(0,num3);
    /*alert(val);*/
    displayedValue="";
    doOutput(val);
}

function square(op) {
    out=displayedValue;
    out=parseInt(out);
    if(op==2) {
        out = Math.pow(out,2);
    }
    else if (op==3) {
        out=Math.pow(out,3);
    }
    else if (op==1/2) {
        out=Math.sqrt(out);
    }
    else if (op==1/3) {
        out=Math.cbrt(out);
    }
    doOutput("^"+op);
    /*alert(out);*/
    final(out);
}
function trigType(type1) {
    if (type1=='rad'){
        type=false;
    }
    else if(type1=='deg'){
        type=true;
    }
}
function trig(op){
    out=displayedValue;
    out=parseInt(displayedValue);
    if (type == true) {
        var pi = Math.PI;
        out = (out * 2 * pi) / 360;
    }
    if (op == "sine") {
        out = Math.sin(out);
        doOutput("sine");
    }
    else if (op == "cos") {
        out=Math.cos(out);
        doOutput("cos");
    }
    else if (op == "tan") {
        out = Math.tan(out);
        doOutput("tan");
    }
    out=out*100;
    out=Math.round(out);
    out=out/100;
    final(out);
}
function clearScreen(){
    displayedValue="";
    document.getElementById("output").innerHTML=(displayedValue);
    check=false;
    done=false;

}
function memStor(num) {
    if (num == 1) {
        stor1 = document.getElementById("output1").innerHTML;
    }
    else if (num == 2) {
        stor2 = document.getElementById("output1").innerHTML;
    }
    else if (num == 3) {
        stor3 = document.getElementById("output1").innerHTML;
    }
    else if (num == 4) {
        stor4 = document.getElementById("output1").innerHTML;
    }
}
function useMem(num) {
    var prevent1=displayedValue1.substring(displayedValue1.length-1,displayedValue1.length);
    if(prevent1=='='){
        displayedValue="";
    }
    if(num==1){
        doOutput(stor1);
    }
    else if(num==2){
        doOutput(stor2);
    }
    else if(num==3){
        doOutput(stor3);
    }
    else if(num==4){
        doOutput(stor4);
    }
}
function answer2() {
    if (check==false){
        var pos1=displayedValue.indexOf('-');
        pos1=parseInt(pos1);
        pos1=pos1+disp1.length+1;
        var pos2=displayedValue.length;
        firstNum=parseInt(displayedValue.substring(pos1,pos2));
        check=false;
    }
    if (check==true){
        var position=displayedValue.indexOf('-');
        position=parseInt(position);
        position=position+disp1.length+1;
        var position2=displayedValue.length;
        var secNum=parseInt(displayedValue.substring(position,position2));
        if(secNum>=0) {

            firstNum = secNum;
        }

    }
    if (prevent==true){
        var disp3="";
        disp3=disp3+num2;
        var pos3=displayedValue.indexOf('-');
        pos3=pos3+disp3.length+1;
        firstNum=parseInt(displayedValue.substring(pos3,pos2));
        prevent=false;
    }
    if (operator=="+"){
        var out=firstNum+num2;

    }
    else if (operator=="-"){
        out=num2-firstNum;
    }
    else if (operator=="*"){
        out=num2*firstNum;
    }
    else if (operator=="/"){
        out=num2/firstNum;
    }
    else if(operator=="^"){
        out=Math.pow(num2,firstNum);
    }
    final(out);
}
function  switch1(){
    if (done==false){
        num2 = displayedValue.substring(0, displayedValue.length);
        displayedValue="";
        disp1="";
        num2=-1*num2;
        doOutput(num2);
        disp1=disp1+num2;
        check=false;
    }
    else if(done==true) {
        var disp="";
        disp=disp+num2;
        var pos3=displayedValue.indexOf(operator)+1;
        if(displayedValue.charAt(disp.length)=='-'){
            pos3=pos3+disp.length;
        }
        var pos4=displayedValue.length;
        firstNum = displayedValue.substring(pos3, pos4);
        displayedValue=displayedValue.substring(0,pos3);
        firstNum=-1*firstNum;
        doOutput(firstNum);
        check=true;
    }
    disp="";
}

function log1(op){
    out= displayedValue;
    out = parseInt(out);
    if (op == 10) {
        out = Math.log10(out);
        doOutput("log10");
    }
    else if (op == 2) {
        out=Math.log2(out);
        doOutput("log2");
    }
    final(out);
}
function factorial() {
    var out=parseInt(displayedValue);
    var count=out;
    for (i=out; i>1; i--){
        count=count*(i-1);
    }
    doOutput("!");
    final(count);
}
function final(out) {
    out1=out;
    displayedValue1=displayedValue;
    displayedValue1=displayedValue1+"=";
    displayedValue="";
    displayedValue=out1;
    done=false;
    document.getElementById("output1").innerHTML=displayedValue;
    document.getElementById("output").innerHTML=displayedValue1;
    opDone=false;
    disp1="";

}


