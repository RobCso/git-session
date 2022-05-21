var earnings, expenses, total_earnings, total_expenses, balance;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('add-earnings').addEventListener('click', (event) => {
  let element_list_earnings = document.getElementById('list-earnings');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('earnings').value);

  element_list_earnings.appendChild(new_li);
  earnings = getNumberOrString(document.getElementById('earnings').value);
  total_earnings.unshift(earnings);
  let element_display_earnings = document.getElementById('display-earnings');
  element_display_earnings.innerText = total_earnings.reduce((a,b) => a+b, 0);
  balance.unshift(total_earnings[0]);
  let element_balance = document.getElementById('balance');
  element_balance.innerText = balance.reduce((a,b) => a+b, 0);

});

document.getElementById('add-expenses').addEventListener('click', (event) => {
  let element_list_expenses = document.getElementById('list-expenses');
  let new_li2 = document.createElement('li');
  new_li2.innerText = getNumberOrString(document.getElementById('expenses').value);

  element_list_expenses.appendChild(new_li2);
  expenses = getNumberOrString(document.getElementById('expenses').value);
  total_expenses.unshift(expenses);
  let element_display_expenses = document.getElementById('display-expenses');
  element_display_expenses.innerText = total_expenses.reduce((a,b) => a+b, 0);
  balance.push(total_expenses[0]);
  let element_balance2 = document.getElementById('balance');
  element_balance2.innerText = balance.reduce((a,b) => a+b, 0);

});
earnings = [];
expenses = [];
total_earnings = [];
total_expenses = [];
balance = [];
