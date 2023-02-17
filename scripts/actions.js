/*
step-1 add event handler
step-2 get input values and store in variables
step-3 calculate and set InnerText to Total Expense
*/

document.getElementById('calculate').addEventListener('click',function(){

    //Income Amount Captured
    const incomeInputField = document.getElementById('income');
    const incomeAmount = parseInt(incomeInputField.value);
    incomeInputField.value = '';
    console.log(incomeAmount);

    // Food Amount Captured
    const foodInputField = document.getElementById('food');
    const foodExpenseAmount = parseInt(foodInputField.value);
    foodInputField.value = '';
    console.log(foodExpenseAmount);

    // Rent Amount Captured
    const rentInputField = document.getElementById('rent');
    const rentExpenseAmount = parseInt(rentInputField.value);
    rentInputField.value = '';
    console.log(rentExpenseAmount);

    // Clothing Amount Captured
    const clothInputField = document.getElementById('cloth');
    const clothExpenseAmount = parseInt(clothInputField.value);
    clothInputField.value = '';
    console.log(clothExpenseAmount);

    const totalExpenseAmount = foodExpenseAmount + rentExpenseAmount + clothExpenseAmount;
    console.log(totalExpenseAmount);

    /* 
    
    *Here We can add a condition that
    *> Expense Should'nt be greater than income
    *> It will show an alert if expense amount > income amount
    *> If it happens than the browser should show an alert
    
    */
   if(totalExpenseAmount > incomeAmount){
    alert("Please Cut Your Coat According To Your Cloth");
   }

    // showing value in total expense element
    const totalExpenseElement = document.getElementById('total-expense');
    totalExpenseElement.innerText = totalExpenseAmount;

    // showing remaing balance to balance element
    const balanceElement = document.getElementById('balance');
    const balanceAmount = incomeAmount - totalExpenseAmount;
    balanceElement.innerText = balanceAmount;

    // savings
     
    const savingAmountElement = document.getElementById('saving-amount');
    const remainingBalance = document.getElementById('rem-balance');
    // look and think the above code carefully
    document.getElementById('btn-save').addEventListener('click',function(){
        const savingsPercentInputField = document.getElementById('savings');
        const savingsPercent = savingsPercentInputField.value;
        const savingAmount = (savingsPercent / 100)* balanceAmount;
        savingAmountElement.innerText = savingAmount;
        savingsPercentInputField.value = '';
        console.log(savingAmount);
        const remBalance = balanceAmount - savingAmount;
        remainingBalance.innerText = remBalance;

    })
    

    
})

    




