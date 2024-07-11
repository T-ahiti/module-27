
function getInput(inputfieldId){
    const inputField = document.getElementById(inputfieldId)
    const inputFieldValueString = inputField.value
    const inputFieldValue = parseFloat(inputFieldValueString)
    inputField.value = ''
    return inputFieldValue
}
    
function getElement(ElementId){
    const Element= document.getElementById(ElementId)
    const ElementValueString = Element.innerText
    const ElementValue = parseFloat(ElementValueString)
    return ElementValue
}
    
    
document.getElementById('btnDeposit').addEventListener('click' , function(){
    /* steps
    1. get the element by id
    2. get the value from the element 
    3. covert string value to a number
    */ 
   const newDepositAmount = getInput('depositAmount')
})