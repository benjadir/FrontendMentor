console.log("hello js calculator");

var mybtn=document.getElementsByClassName('child');
var mycalcInput=document.getElementById('calcInput');
console.log("mybtn.length :"+mybtn.length);
var mybuffer=0;
for(let i=0;i<mybtn.length;i++){
    mybtn[i].onclick=function(){
        console.log(mybtn[i].innerHTML);
        mycalcInput.value+=mybtn[i].innerHTML;     
    }
}
var mystr="Hamberger..";
var count=mystr.length;
mybtn[3].onclick=function(){
    count=mystr.length;
    mystr=mycalcInput.value;
    if(count>0){count--;}
    mycalcInput.value=mystr.substring(0,count);
    console.log(mystr.substring(0,count));
}