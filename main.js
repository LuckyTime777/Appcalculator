document.getElementById("calculator").addEventListener("click",function(){
    var num1 =document.getElementById('num1').value;
    var num2 =document.getElementById('num2').value;
    var sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = "เเสดงผลรวม :"+sum;
    myalert(sum);
});
document.getElementById("calculator1").addEventListener("click",function(){
    var num1 =document.getElementById('num1').value;
    var num2 =document.getElementById('num2').value;
    var sum = parseInt(num1)-parseInt(num2);
    document.getElementById("result").innerHTML = "เเสดงผลรวม :"+sum;
    myalert(sum);
});
document.getElementById("calculator2").addEventListener("click",function(){
    var num1 =document.getElementById('num1').value;
    var num2 =document.getElementById('num2').value;
    var sum = parseInt(num1)*parseInt(num2);
    document.getElementById("result").innerHTML = "เเสดงผลรวม :"+sum;
    myalert(sum);
});
document.getElementById("calculator3").addEventListener("click",function(){
    var num1 =document.getElementById('num1').value;
    var num2 =document.getElementById('num2').value;
    var sum = parseInt(num1)/parseInt(num2);
    document.getElementById("result").innerHTML = "เเสดงผลรวม :"+sum;
    myalert(sum);
});


function myalert(sum){
  alert("เเสดงผล : "+sum)  
};



const img =document.createElement("img")
img.src="img/6439010010.jpg";
img.style.width="200px";
document.getElementById("mydiv").appendChild(img);