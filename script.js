const inputF = document.querySelector('#fahrenheit')
const inputR = document.querySelector('#rankine')
const inputK = document.querySelector('#kelvin')
const inputC = document.querySelector('#celsius')

const subC = document.querySelector('#subC')
const subF = document.querySelector('#subF')
const subK = document.querySelector('#subK')
const subR = document.querySelector('#subR')

function c2K(tempC){
    return tempC+273.15
}

function c2F(tempC){
    return ((tempC*(9/5)) + 32).toFixed(2)
}

function c2R(tempC){
    return ((tempC*(9/5)) + 491.67).toFixed(2)
}

function k2C(tempK){
    return (tempK-273.15).toFixed(2)
}

function k2F(tempK){
    return (tempK*(9/5)-459.67).toFixed(2)
}

function r2C(tempR){
    return  ((tempR - 491.67) * 5/9).toFixed(2)
}

function r2K(tempR){
    return (tempR*(5/9)).toFixed(2)
}

function r2F(tempR){
    return (tempR - 459.67).toFixed(2)
}

function f2C(tempF){
    return ((tempF - 32) * 5/9).toFixed(2)
}

function f2K(tempF){
    return ((tempF + 459.67)* 5/9).toFixed(2)
}

function f2R(tempF){
    return (tempF + 459.67).toFixed(2)
}

subC.addEventListener('click', ()=>{
    inputF.value = `${c2F(parseFloat(inputC.value))}`
    inputR.value = `${c2R(parseFloat(inputC.value))}`
    inputK.value = `${c2K(parseFloat(inputC.value))}`
})

subK.addEventListener('click', ()=>{
    inputC.value = `${k2C(parseFloat(inputK.value))}`
    inputR.value = `${(parseFloat(inputK.value*(9/5)))}`
    inputF.value = `${k2F(parseFloat(inputK.value))}`
})

subR.addEventListener('click', ()=>{
    inputC.value = `${r2C(parseFloat(inputR.value))}`
    inputF.value = `${r2F(parseFloat(inputR.value))}`
    inputK.value = `${r2K(parseFloat(inputR.value))}`
})

subF.addEventListener('click', ()=>{
    inputC.value = `${f2C(parseFloat(inputF.value))}`
    inputR.value = `${f2R(parseFloat(inputF.value))}`
    inputK.value = `${f2K(parseFloat(inputF.value))}`
})

const reset = document.querySelector('#reset')

reset.addEventListener('click', ()=>{
    inputC.value = ''
    inputF.value = ''
    inputR.value = ''
    inputK.value = ''
})
