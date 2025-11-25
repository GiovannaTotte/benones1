USE api_crud;

-- Tabela de Filmes e Séries
CREATE TABLE midia (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(150),
    genero VARCHAR(100),
    classificacao VARCHAR(50),
    lancamento DATE
);