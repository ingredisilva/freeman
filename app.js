const Modal = {
  open() {
    // abrir modal
    // adicionar a class active ao modal
    document
    .querySelector(".modal-overlay")
    .classList.add("active");
  },
  close() {
    // fechar o modal
    // remover a class active do modal
    document
    .querySelector(".modal-overlay")
    .classList.remove("active");
  },
};

const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "23/2/2021",
  },

  {
    id: 2,
    description: "Luz",
    amount: -50000,
    date: "23/2/2021",
  },

  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "23/2/2021",
  },
];

const Transaction = {
  incomes() {
    let income = 0;
    // pegar todas as transações
    transaction.forEach(transaction => {
      if( transaction.amount > 0) {
        income += transaction.amount;
      }
    })
    // para cada transação, se é maior que zero
    // somar a uma variavel e retornar a variavel
    return income;
    // somar as entradas
  },
  expenses() {
    let expense = 0;
     transaction.forEach(transaction => {
      if( transaction.amount < 0) {
        income += transaction.amount;
      }
      return expense;
  },
  total() {
    return Transaction.income() + Transaction.expenses();
    // entradas - saídas
  }
}

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'), 

  addTransaction(transaction, index) {
    const tr = document.createElement("tr")
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);

    DOM.transactionsContainer.appendChild('tr')

},
    innerHTMLTransaction(transaction) {
const CSSclass = transaction.amount > 0 ? "income" :
      "expense"

      const amount = Utils.formatCurrency(transaction.amount)

      const html = `
          <tr>
                <td class="description">${transaction.description}</td>
                <td class=${CSSclass}>${amont}</td>
                <td class="date">${transaction.date}</td>
                <td>
                  <img src="assets/minus.svg" alt="Remover transação">
                </td>
              </tr>`

              return html
  },

  updateBalance(){
    document
    .getElementById('incomeDisplay')
    .innerHTML = Transaction.incomes()
    document
    .getElementById('expenseDisplay')
    .innerHTML = Transaction.expenses()
    document
    .getElementById('totalDisplay')
    .innerHTML = Transaction.total 
  }
},

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : ""

    value = String(value).replace(/\D/g, "")

    value = Number(value) / 100

    value = value.toLocaleString("pt-BR" {
      style: "currency",
      currency: "BRL"
    })

    return signal + value
  }
}

transactions.forEach(function(transaction) {

})

//DOM.updateBalance