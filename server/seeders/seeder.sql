-- Aqui inicializaremos las tablas de usuarios y mensajes
INSERT INTO status_usuarios (id_status, descripcion) 
VALUES (1,"conectado"),(2,"no_conectado");

INSERT INTO status_mensajes (id_status, descripcion) 
VALUES (1,"leido"),(2,"no_leido");