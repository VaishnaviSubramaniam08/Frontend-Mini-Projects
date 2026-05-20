const form=document.getElementById("input");
const text=document.getElementById("text");
const amount=document.getElementById("amount");
const type=document.getElementById("type");
const balance=document.getElementById("balance");
const incomeEl=document.getElementById("income");
const expenseEl=document.getElementById("expense");
const transactionList=document.getElementById("transactionlist");

let transactions=JSON.parse(localStorage.getItem("transactions"))||[];

function saveLocalStorage(){
    localStorage.setItem("transactions",JSON.stringify(transactions));
}

function displayTransactions(){
    transactionList.innerHTML="";
    transactions.forEach((item,index)=>{
        const div=document.createElement("div");
        div.classList.add("transaction");
        if(item.type==="income"){
            div.classList.add("plus");
        }else{
            div.classList.add("minus");
        }
        div.innerHTML=`
        <div>
        <h4>${item.text}</h4>
        <p>${item.amount}</p>
        </div>
        <button class="delete-btn" onclick="deleteTransaction(${index})"> X </button>
        `;
        transactionList.appendChild(div);
    });
}


function deleteTransaction(index){
    transactions.splice(index,1);
    displayTransactions();
    saveLocalStorage();
    updateValues();
}

function addTransaction(e){
    e.preventDefault();
    const transaction={
        text:text.value,
        amount:Number(amount.value),
        type:type.value
    }
    transactions.push(transaction);
    saveLocalStorage();
    displayTransactions();
    updateValues();
    form.reset();

}

function updateValues(){
    let income=0;
    let expense=0;
    transactions.forEach((item)=>{
        if(item.type==="income"){
            income+=item.amount;
        }else{
            expense+=item.amount;
        }
    });
    let total=income-expense;
    balance.innerText=`$${total}`;
    incomeEl.innerText=`$${income}`;
    expenseEl.innerText=`$${expense}`;
    updateChart(income,expense);
}
let chart;

function updateChart(income,expense){
    const ctx=document.getElementById("myChart");
    if(chart){
        chart.destroy();
    }
    chart=new Chart(ctx,{
        type:"pie",
        data:{
            labels:["Income","Expense"],
            datasets:[{
                data:[income,expense],
                backgroundColor:["green","red"]
            }]
        }
    });
}


form.addEventListener("submit",addTransaction);


displayTransactions();
updateValues();