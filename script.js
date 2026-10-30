
const produtos = [
    { nome: "Café Cremoso", preco: 8 },
    { nome: "Brownie", preco: 10 },
    { nome: "Bolo de Morango", preco: 12 },
    { nome: "Cappuccino", preco: 14 }
];

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function simularCompra() {
    let total = 0;
    let quantidadeTotal = 0;
    let resumo = "DOCE ENCANTO CAFÉ\n";
    resumo += "RESUMO DA SUA COMPRA\n\n";

    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];

        const resposta = prompt(
            "DOCE ENCANTO CAFÉ\n\n" +
            "Produto: " + produto.nome + "\n" +
            "Preço: " + formatarMoeda(produto.preco) + "\n\n" +
            "Informe a quantidade desejada:\n" +
            "Digite 0 caso não queira este produto."
        );

        if (resposta === null) {
            alert("Compra cancelada.");
            return;
        }

        const quantidade = Number(resposta);

        if (!Number.isInteger(quantidade) || quantidade < 0) {
            alert("Quantidade inválida. Informe um número inteiro igual ou maior que zero.");
            return;
        }

        const subtotal = produto.preco * quantidade;

        total += subtotal;
        quantidadeTotal += quantidade;

        if (quantidade > 0) {
            resumo += produto.nome + "\n";
            resumo += "Quantidade: " + quantidade + "\n";
            resumo += "Subtotal: " + formatarMoeda(subtotal) + "\n\n";
        }
    }

    if (quantidadeTotal === 0) {
        alert("Nenhum produto foi selecionado.");
        return;
    }

    let desconto = 0;

    if (total >= 50) {
        desconto = total * 0.10;
    }

    const totalFinal = total - desconto;

    resumo += "--------------------------\n";
    resumo += "Subtotal: " + formatarMoeda(total) + "\n";
    resumo += "Desconto: " + formatarMoeda(desconto) + "\n";
    resumo += "TOTAL: " + formatarMoeda(totalFinal) + "\n\n";
    resumo += "Agradecemos pela preferência!";

    alert(resumo);
}
