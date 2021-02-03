const Modal = {
    open() {
        // Abrir modal
        // Adicionar a class active no modal
        document
            .querySelector(".modal-overlay")
            .classList
            .add("active")
    },
    close() {
        // Fechar o modal
        // Remover a class active do modal
        document
            .querySelector(".modal-overlay")
            .classList
            .remove("active")
    }
}

const transactions = [
    {
        id: 1,
        description: "Luz",
        amount: -50000,
        date: "23/01/2021"
    },
    {
        id: 2,
        description: "Criação website",
        amount: 500000,
        date: "23/01/2021"
    },
    {
        id: 3,
        description: "Internet",
        amount: -20000,
        date: "23/01/2021"
    }
]

const Transaction = {
    incomes() {
        // Somar as entradas
    },
    expenses() {
        // Somar as saídas
    },
    total() {
        // Entradas - saídas
    }
}

