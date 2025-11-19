function buscarMidias() {
    fetch("http://localhost:3000/midias")
        .then(res => res.json())
        .then(midias => {
            const tabela = document.getElementById("tabelaAnimais");
            tabela.innerHTML = "";

            midias.forEach(midia => {
                tabela.innerHTML += `
                    <tr>
                        <td>${midia.ID}</td>
                        <td>${midia.titulo}</td>
                        <td>${midia.genero}</td>
                        <td>${midia.classificacao}</td>
                        <td>${midia.data_lancamento}</td>
                    </tr>
                `;
            });
        })
        .catch(() => alert("Erro ao buscar mídias."));
}

buscarMidias();
