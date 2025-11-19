function criarMidia() {
    const titulo = document.getElementById("especie").value;
    const genero = document.getElementById("local_resgate").value;
    const classificacao = document.getElementById("estado_saude").value;
    const data_lancamento = document.getElementById("data_resgate").value;

    const dados = {
        titulo,
        genero,
        classificacao,
        data_lancamento
    };

    fetch("http://localhost:3000/midias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(msg => alert(msg.message))
    .catch(err => alert("Erro ao cadastrar"));
}
