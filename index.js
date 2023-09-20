document.getElementById('dropdown').style.display="none";
var dropper = false;

function dropdown(){
  if(dropper === true){
 dropper =false;
 close()
  } else{
    dropper = true;
    open()
  }
}

function open(){
document.getElementById('dropdown').style.display='block';
}
function close() {
document.getElementById('dropdown').style.display='none';
}

function get(value){
  event.preventDefault();
  var firstnum = document.getElementById('num1').value;
  var secondnum = document.getElementById('num2').value;
 

if (value === 1){

document.getElementById('screen').innerHTML= parseInt(firstnum) + parseInt(secondnum);
};
if(value === 2){
  document.getElementById('screen').innerHTML= firstnum - secondnum;
};
if(value === 3){
  document.getElementById('screen').innerHTML= firstnum / secondnum;
};
if(value === 4){
  document.getElementById('screen').innerHTML= firstnum * secondnum;
};

}
