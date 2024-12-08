CREATE TABLE Marca (
    IdMarca INT AUTO_INCREMENT PRIMARY KEY,
    Marca VARCHAR(50) NOT NULL
);
CREATE TABLE Tipos (
    IdTIPO INT AUTO_INCREMENT PRIMARY KEY,
    Tipo VARCHAR(20) NOT NULL
);
CREATE TABLE Productos (
    IdProducto INT AUTO_INCREMENT PRIMARY KEY, 
    IdTIPO INT NOT NULL,
    IdMarca INT NOT NULL,
    Nombre VARCHAR(100) NOT NULL,
    Precio INT NOT NULL,
    Descripcion VARCHAR(500),
    Foto VARCHAR(2048),
    CONSTRAINT FK_Tipo FOREIGN KEY (IdTIPO) REFERENCES Tipos(IdTIPO),
    CONSTRAINT FK_Marca FOREIGN KEY (IdMarca) REFERENCES Marca(IdMarca)
);