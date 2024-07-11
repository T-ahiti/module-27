
document.getElementById('btnDeposit').addEventListener('click' , function(){
  const getDeposit = document.getElementById('depositAmount')
  const previousDeposit = depositTotal.innerText
  const currentDeposit = depositAmount.value
  const newDepositTotal =  parseFloat(previousDeposit) + parseFloat(currentDeposit)
  depositTotal.innerText = newDepositTotal

  depositAmount.value = ''

  const getbalance = document.getElementById('balanceTotal')
  const previousBalance = balanceTotal.innerText
  const newBalanceTotal = parseFloat(previousBalance) + parseFloat(newDepositTotal)
  balanceTotal.innerText = newBalanceTotal
})

 document.getElementById('btnWithdraw').addEventListener('click' , function(){
    const newWithdraw = withdrawAmount.value
    const previousWithdraw = withdrawTotal.innerText
    const newWithdrawTotal = parseFloat(newWithdraw) + parseFloat(previousWithdraw)
    withdrawTotal.innerText = newWithdrawTotal

    withdrawAmount.value = ''
 
    const getbalance = document.getElementById('balanceTotal')
    const previousBalance = balanceTotal.innerText
    const newBalanceTotalWithdraw = parseFloat(previousBalance) - parseFloat(newWithdrawTotal)
    balanceTotal.innerText = newBalanceTotalWithdraw
 })
