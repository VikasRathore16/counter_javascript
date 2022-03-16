function min(){
     val= document.getElementById('inp').value;
     
     if(val>0){
        val--;
     }
     document.getElementById('inp').value =val ;
    console.log(val);
}

function plus(){
    val= document.getElementById('inp').value;
    val++;
    document.getElementById('inp').value =val ;
    console.log(val);
}