function buscar() {
    fetch("http://localhost:3000/midia")
        .then(res => res.json())
        .then(midia => {
            const tabela = document.getElementById("midia");
            tabela.innerHTML = "";

            midia.forEach(midia => {
                tabela.innerHTML += `
                    <tr>
                        <td>${midia.id}</td>
                        <td>${midia.titulo}</td>
                        <td>${midia.genero}</td>
                        <td>${midia.classificacao}</td>
                        <td>${midia.lancamento}</td>
                    </tr>
                `;
            });
        })
        .catch(() => alert("Erro ao buscar mídias."));
}

buscar();
