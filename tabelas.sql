USE api_crud;

-- Tabela de usuários/ONG (mantida, sem alteração de tema)
CREATE TABLE ongAmbientalAna (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(20),
    cidade VARCHAR(50)
);

-- Tabela de Filmes e Séries
CREATE TABLE midias (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(150),
    genero VARCHAR(100),
    classificacao VARCHAR(50),
    data_lancamento DATE
);
