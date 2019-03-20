-- Crear la BD
CREATE DATABASE api_rest;
-- Usar la BD
USE api_rest;

-- Creo tabla usuarios
CREATE TABLE usuarios(
	id int auto_increment NOT NULL,
	nombre varchar(30) NOT NULL,
	apellido varchar(30) NOT NULL,
	nombre_de_usuario varchar(30) NOT NULL,
	email varchar(30) NOT NULL,
	creado_en timestamp NOT NULL DEFAULT NOW(),
	actualizado_en timestamp NOT NULL DEFAULT NOW() ON UPDATE NOW(),
	id_status int NOT NULL,

    UNIQUE KEY unique_email (email),
	PRIMARY KEY (id)
);

-- Creo tabla status_usuarios
CREATE TABLE status_usuarios (
	id_status int NOT NULL,
	descripcion varchar(20) NOT NULL,
	creado_en timestamp NOT NULL DEFAULT NOW()
);

-- Creo tabla mensajes
CREATE TABLE mensajes(
	id int auto_increment NOT NULL, 
	cuerpo varchar(100) NOT NULL,
	creado_en datetime NOT NULL DEFAULT NOW(),
	actualizado_en datetime NOT NULL DEFAULT NOW() ON UPDATE NOW(),
	id_usuario int NOT NULL,
	id_status int NOT NULL,
	PRIMARY KEY (id)
);

-- Creo tabla status_mensajes
CREATE TABLE status_mensajes(
	id_status int NOT NULL,
	descripcion varchar(20) NOT NULL,
	creado_en timestamp NOT NULL DEFAULT NOW()
);

-- Hago incremental los usuarios y mensajes
ALTER TABLE `usuarios` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `mensajes` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;