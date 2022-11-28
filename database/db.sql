-- Creando BD
CREATE DATABASE tiendaserviciosti2022; 

-- Usando BD creada
USE tiendaserviciosti2022;

-- Creando tablas
CREATE TABLE Proveedores(id_proveedor INT PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(50), direccion VARCHAR(50), telefono VARCHAR(50));
CREATE TABLE Categorias(id_categoria INT PRIMARY KEY AUTO_INCREMENT, categoria VARCHAR(50));
CREATE TABLE Productos(id_producto INT PRIMARY KEY  AUTO_INCREMENT, nombre VARCHAR(50), precio INT, id_proveedor INT NULL, FOREIGN KEY (id_proveedor) REFERENCES Proveedores(id_proveedor), id_categoria INT NULL, FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria));
CREATE TABLE Carrito(id_carrito INT PRIMARY KEY AUTO_INCREMENT,  id_vendedor INT, FOREIGN KEY (id_vendedor) REFERENCES Vendedores(id_vendedor), id_cliente INT, FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente), id_producto INT, FOREIGN KEY (id_producto) REFERENCES Productos(id_producto));
CREATE TABLE Vendedores(id_vendedor INT PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(50), apellido VARCHAR(50), comuna_local VARCHAR(50));
CREATE TABLE Clientes(id_cliente INT PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(50), apellido VARCHAR(50));

-- Llenado tabla Carrito
INSERT INTO Carrito VALUES(1, 1, 1, 1);
INSERT INTO Carrito VALUES(2, 1, 1, 2);
INSERT INTO Carrito VALUES(3, 1, 3, 13);
INSERT INTO Carrito VALUES(4, 3, 5, 4);
INSERT INTO Carrito VALUES(5, 3, 5, 5);
INSERT INTO Carrito VALUES(6, 2, 2, 3);
INSERT INTO Carrito VALUES(7, 2, 2, 8);

-- Llenado de Vendedores
INSERT INTO Vendedores VALUES(1, 'John', 'Doe', 'La Florida');
INSERT INTO Vendedores VALUES(2, 'Alejandra', 'Arellano', 'Providencia');
INSERT INTO Vendedores VALUES(3, 'Jose', 'Lopez', 'Lo Barnechea');
INSERT INTO Vendedores VALUES(4, 'Roberto', 'Neira', 'Quilicura');


-- Llenado tabla proveedores
INSERT INTO Proveedores VALUES(1, 'Proveedor01', 'Av. Deportiva 444', '65478456');
INSERT INTO Proveedores VALUES(2, 'Proveedor02', 'Calle Futbol 5234', '12397633');
INSERT INTO Proveedores VALUES(3, 'Proveedor03', 'Av. del deporte 5', '98163103');
INSERT INTO Proveedores VALUES(4, 'Proveedor04', 'Psj. pelota 41233', '13618893');
INSERT INTO Proveedores VALUES(5, 'Proveedor05', 'Psj. Primero1234', '45682151');
INSERT INTO Proveedores VALUES(6, 'Proveedor06', 'Psj. Segundo6432', '45983216');
INSERT INTO Proveedores VALUES(7, 'Proveedor07', 'Psj. Quinto0797', '85294561');
INSERT INTO Proveedores VALUES(8, 'Proveedor08', 'Psj. Sueño3793', '78533335');

-- Llenado tabla Categorias 
INSERT INTO Categorias VALUES(1, 'Calzado');
INSERT INTO Categorias VALUES(2, 'Ropa');
INSERT INTO Categorias VALUES(3, 'Accesorios');

-- Llenado tabla Cliente
INSERT INTO Clientes VALUES(1, 'Daniel', 'Gonzalez');
INSERT INTO Clientes VALUES(2, 'Gabriel', 'Riquelme');
INSERT INTO Clientes VALUES(3, 'Felipe', 'Oyarzo');
INSERT INTO Clientes VALUES(4, 'Paola', 'Soriano');
INSERT INTO Clientes VALUES(5, 'Javiera', 'Gallardo');

-- Llenado tabla Productos
INSERT INTO Productos VALUE(1, 'Zapatilla para correr', 80000, 6, 1);
INSERT INTO Productos VALUE(2, 'Balon de futbol', 50000, 4, 3);
INSERT INTO Productos VALUE(3, 'Barrera entrenamiento inflable', 40000, 1, 3);
INSERT INTO Productos VALUE(4, 'Short futbol', 40000, 7, 2);
INSERT INTO Productos VALUE(5, 'Zapatilla Gimnasia Ritmica', 8000, 2, 1);
INSERT INTO Productos VALUE(6, 'Pelota Gimnasia', 5000, 2, 3);
INSERT INTO Productos VALUE(7, 'Camiseta de futbol', 60000, 2, 2);
INSERT INTO Productos VALUE(8, 'Hula Hula', 2000, 3, 3);
INSERT INTO Productos VALUE(9, 'Guante arquero', 40000, 1, 3);
INSERT INTO Productos VALUE(10, 'Zapatilla futbol', 180000, 1, 1);
INSERT INTO Productos VALUE(12, 'Raqueta tennis', 80000, 8, 3);
INSERT INTO Productos VALUE(13, 'Traje deportivo/tennis', 35000, 8, 2);


-- Mostrando tablas 
SHOW TABLES; 

-- Mostrando tabla en especifico
describe proveedores;