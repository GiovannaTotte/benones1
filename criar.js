function criar() {
    const titulo = document.getElementById("titulo").value;
    const genero = document.getElementById("genero").value;
    const classificacao = document.getElementById("classificacao").value;
    const lancamento = document.getElementById("lancamento").value;

    const dados = {
        titulo,
        genero,
        classificacao,
        lancamento
    };

    fetch("http://localhost:3000/midia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(msg => alert(msg.message))
    .catch(err => alert("Erro ao cadastrar"));
}