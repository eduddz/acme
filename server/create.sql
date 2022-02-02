CREATE TABLE `banco`.`pacientes` (
  `id_pacientes` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(40) NOT NULL,
  `data_de_nascimento` DATE NOT NULL,
  `cpf` VARCHAR(11) NOT NULL,
  `sexo` CHAR(1) NOT NULL,
  `enderco` VARCHAR(70) NULL,
  `status` VARCHAR(7) NOT NULL,
  PRIMARY KEY (`id_pacientes`));