-- Crear la BD
CREATE DATABASE api_rest;
-- Usar la BD
USE api_rest;

-- Creo tabla usuarios
CREATE TABLE usuarios(
	id int auto_increment not null, 
	created_at date not null,
	updated_at date not null,
	nombre varchar(30) not null,
	PRIMARY KEY (id)
);

-- Creo tabla mensajes
CREATE TABLE mensajes(
	id int auto_increment not null, 
	created_at date not null,
	updated_at date not null,
	mensaje varchar(100) not null,
	PRIMARY KEY (id)
);

ALTER TABLE `usuarios` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `mensajes` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
