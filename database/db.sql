-- Creando BD
CREATE DATABASE tiendaserviciosti2022; 

-- Usando BD creada
USE tiendaserviciosti2022;

-- Creando tablas
CREATE TABLE Proveedores(id_proveedor INT PRIMARY KEY AUTO_INCREMENT, nombre VARCHAR(50), direccion VARCHAR(50), telefono VARCHAR(50));
CREATE TABLE Categorias(id_categoria INT PRIMARY KEY AUTO_INCREMENT, categoria VARCHAR(50));
-- CREATE TABLE Clientes(id_cliente INT PRIMARY KEY, nombre VARCHAR(50), direccion VARCHAR(50), comuna VARCHAR(50));
-- CREATE TABLE Facturas(id_factura INT PRIMARY KEY, fecha VARCHAR(10), id_cliente INT, FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente));
CREATE TABLE Productos(id_producto INT PRIMARY KEY  AUTO_INCREMENT, nombre VARCHAR(50), precio INT, id_proveedor INT NULL, FOREIGN KEY (id_proveedor) REFERENCES Proveedores(id_proveedor), id_categoria INT NULL, FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria));
-- CREATE TABLE VENTAS(id_venta INT PRIMARY KEY, cantidad INT, id_producto INT, FOREIGN KEY (id_producto) REFERENCES Productos(id_producto));
CREATE TABLE Carrito(id_carrito INT PRIMARY KEY AUTO_INCREMENT, id_producto INT, FOREIGN KEY (id_producto) REFERENCES Productos(id_producto));

-- Llenado tabla Carrito
INSERT INTO Carrito VALUES(1, 1);



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
INSERT INTO Clientes VALUES(1, 'Daniel', 'Psj. Real 5234', 'Providencia');
INSERT INTO Clientes VALUES(2, 'Gabriel', 'Av. trueque 23', 'Recoleta');
INSERT INTO Clientes VALUES(3, 'Felipe', 'Calle siempre 5223', 'Vitacura');
INSERT INTO Clientes VALUES(4, 'Paola', 'Psj. Las piñas 132', 'Providencia');
INSERT INTO Clientes VALUES(5, 'Javiera', 'Av. uno 6234', 'Quilicura');
INSERT INTO Clientes VALUES(6, 'Nicolas', 'Av. dos 8975', 'Las Condes');

-- Llenado tabla facturas
INSERT INTO Facturas VALUES(1, 2022-11-24, 5);
INSERT INTO Facturas VALUES(2, 2022-11-25, 1);
INSERT INTO Facturas VALUES(3, 2022-11-25, 6);
INSERT INTO Facturas VALUES(4, 2022-11-27, 2);
INSERT INTO Facturas VALUES(5, 2022-11-28, 4);
INSERT INTO Facturas VALUES(6, 2022-11-28, 3);

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

-- Llenado tabla VENTAS
INSERT INTO Ventas VALUE(1, 1, 1, 2);
INSERT INTO Ventas VALUE(2, 1, 1, 4);
INSERT INTO Ventas VALUE(3, 1, 1, 7);
INSERT INTO Ventas VALUE(4, 1, 2, 9);
INSERT INTO Ventas VALUE(5, 1, 3, 10);
INSERT INTO Ventas VALUE(6, 4, 3, 3);
INSERT INTO Ventas VALUE(7, 1, 4, 2);
INSERT INTO Ventas VALUE(8, 1, 5, 10);
INSERT INTO Ventas VALUE(9, 1, 6, 1);

-- Mostrando tablas 
SHOW TABLES; 

-- Mostrando tabla en especifico
describe proveedores;