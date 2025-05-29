create database fansols;
use fansols;

create table usuario (
	id int primary key auto_increment,
	nome varchar(50) not null,
	email varchar(100) not null,
	senha varchar(30) not null
);

create table quiz (
	id int primary key auto_increment,
	qtd_acertos int,
	id_usuario int,
	foreign key (id_usuario) references usuario (id));

