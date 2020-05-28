function changeColorInput() {
var arregloInputs = document.querySelectorAll('#Modulept2 input');
for(i = 0; i < arregloInputs.length; i++){
    $(arregloInputs[i]).click(function(e){
        if (e.target == inputName) {
          
        }
        if(e.target == inputEmail){

        }
        if (e.target == inputTel) {
            
        }
    })
}
}
window.addEventListener('load', changeColorInput);