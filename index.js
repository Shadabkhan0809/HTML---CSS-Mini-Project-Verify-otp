 

function moveToNext(current,nextFeild){
  if(current.value.length=current.maxLength){
    document.getElementById(nextFeild).focus();
  }
}