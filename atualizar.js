function atualizar() {
    const id = document.getElementById("id").value;

    const dados = {
        titulo: document.getElementById("titulo").value,
        genero: document.getElementById("genero").value,
        classificacao: document.getElementById("classificacao").value,
        lancamento: document.getElementById("lancamento").value,
    };

    fetch(`http://localhost:3000/midia/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(msg => alert(msg.message))
    .catch(() => alert("Erro ao atualizar o filme ou série."));
}