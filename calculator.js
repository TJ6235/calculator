 function dispResult(number){
    calc_inp.value += number
 }

 function clearAll(){
    calc_inp.value = ""
 }

 function back(){
    calc_inp.value = calc_inp.value.slice(0,-1)
 }

 function eualKey(){
    try{
        calc_inp.value = eval(calc_inp.value)
        
    }catch{
        calc_inp.value = 'error'
        setTimeout(()=>{
            calc_inp.value = ""
        },1000)
    }
 } 