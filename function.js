
document.getElementById('btnDeposit').addEventListener('click' , function(){
  const getDeposit = document.getElementById('depositAmount')
  const previousDeposit = depositTotal.innerText
  const currentDeposit = depositAmount.value
  const newDepositTotal =  parseFloat(previousDeposit) + parseFloat(currentDeposit)
  depositTotal.innerText = newDepositTotal

  depositAmount.value = ''
})