
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
    
function setTheElementValueById(ElementId, newValue){
    const textElement = document.getElementById(ElementId)
    textElement.innerText = newValue
}
    
document.getElementById('btnDeposit').addEventListener('click' , function(){
    /* steps
    1. get the element by id
    2. get the value from the element 
    3. covert string value to a number
    */ 
   const newDepositAmount = getInput('depositAmount')
   //    get previous deposit by id
   const previousTotalDeposit = getElement('depositTotal')
   //    +
   const newDeposit = previousTotalDeposit + newDepositAmount
   setTheElementValueById('depositTotal', newDeposit)

   const previousBalanceTotal =  getElement('balanceTotal')
   const newBalanceTotal = previousBalanceTotal + newDeposit
   setTheElementValueById('balanceTotal', newBalanceTotal)
})

document.getElementById('btnWithdraw').addEventListener('click' , function(){
    const newWithdrawAmount = getInput('withdrawAmount')
    const previousTotalWithdraw = getElement('withdrawTotal')
    const newWithdrawTotal = previousTotalWithdraw + newWithdrawAmount
    setTheElementValueById('withdrawTotal', newWithdrawTotal)
    const previousBalanceTotal =  getElement('balanceTotal')
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal
    setTheElementValueById('balanceTotal', newBalanceTotal)
})

