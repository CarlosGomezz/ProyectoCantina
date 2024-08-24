-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 24-10-2022 a las 20:26:33
-- Versión del servidor: 10.6.10-MariaDB-1:10.6.10+maria~ubu2004
-- Versión de PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `a21alecrinor_cantina`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `COMANDA`
--

CREATE TABLE `COMANDA` (
  `idComanda` int(5) NOT NULL,
  `dataComanda` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `comandaCompletada` tinyint(1) DEFAULT 0,
  `idUsuari` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `COMANDA`
--

INSERT INTO `COMANDA` (`idComanda`, `dataComanda`, `comandaCompletada`, `idUsuari`) VALUES
(9, '2022-10-19 10:31:49', 0, 18),
(10, '2022-10-19 10:46:42', 0, 20),
(11, '2022-10-19 10:56:52', 0, 24),
(12, '2022-10-19 11:03:23', 0, 28),
(13, '2022-10-19 11:13:56', 0, 32),
(14, '2022-10-19 11:20:52', 0, 33),
(15, '2022-10-19 11:21:11', 0, 34),
(16, '2022-10-19 11:24:05', 0, 36),
(17, '2022-10-19 11:24:30', 0, 38),
(18, '2022-10-19 11:27:58', 0, 40),
(19, '2022-10-20 08:37:00', 0, 41),
(20, '2022-10-20 08:38:30', 0, 42),
(21, '2022-10-20 11:09:43', 0, 43),
(22, '2022-10-21 06:08:50', 0, 44),
(23, '2022-10-21 06:32:05', 0, 45),
(24, '2022-10-21 06:32:33', 0, 46),
(25, '2022-10-21 06:37:01', 0, 47),
(26, '2022-10-21 06:48:57', 0, 48),
(27, '2022-10-21 07:20:35', 0, 49),
(28, '2022-10-21 09:36:31', 0, 50),
(29, '2022-10-21 10:41:34', 0, 51),
(30, '2022-10-21 10:54:49', 0, 52),
(31, '2022-10-21 11:27:09', 0, 53),
(32, '2022-10-22 11:40:41', 1, 54),
(33, '2022-10-23 22:20:36', 0, 55),
(34, '2022-10-24 07:11:26', 0, 56),
(35, '2022-10-24 07:45:27', 0, 57),
(36, '2022-10-24 09:01:36', 1, 58),
(37, '2022-10-24 09:03:00', 0, 59),
(38, '2022-10-24 09:34:18', 0, 60),
(39, '2022-10-24 09:43:08', 0, 61),
(40, '2022-10-24 10:14:10', 0, 62),
(41, '2022-10-24 10:17:07', 0, 63),
(49, '2022-10-24 11:22:14', 0, 63),
(50, '2022-10-24 11:32:07', 0, 64),
(51, '2022-10-24 11:37:14', 0, 63),
(52, '2022-10-24 11:37:26', 0, 63),
(53, '2022-10-24 11:37:41', 0, 63),
(54, '2022-10-24 11:37:54', 0, 63),
(55, '2022-10-24 12:15:24', 0, 63);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `LINIA_COMANDA`
--

CREATE TABLE `LINIA_COMANDA` (
  `idLinia` int(5) NOT NULL,
  `idComanda` int(5) DEFAULT NULL,
  `idProducte` int(5) DEFAULT NULL,
  `numUnitats` int(5) DEFAULT NULL,
  `preuUnitari` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `LINIA_COMANDA`
--

INSERT INTO `LINIA_COMANDA` (`idLinia`, `idComanda`, `idProducte`, `numUnitats`, `preuUnitari`) VALUES
(5, 9, 2, 2, 1.8),
(6, 9, 3, 1, 4.25),
(7, 10, 2, 1, 1.8),
(8, 10, 3, 1, 4.25),
(9, 11, 2, 2, 1.8),
(10, 11, 3, 1, 4.25),
(11, 12, 2, 2, 1.8),
(12, 12, 3, 1, 4.25),
(13, 13, 2, 1, 1.8),
(14, 13, 3, 1, 4.25),
(15, 14, 2, 2, 1.8),
(16, 14, 3, 1, 4.25),
(17, 15, 2, 2, 1.8),
(18, 15, 3, 1, 4.25),
(19, 16, 2, 2, 1.8),
(20, 16, 3, 1, 4.25),
(21, 17, 2, 2, 1.8),
(22, 17, 3, 1, 4.25),
(23, 18, 2, 2, 1.8),
(24, 18, 3, 1, 4.25),
(25, 19, 1, 2, 1.6),
(26, 19, 3, 2, 4.25),
(27, 20, 1, 1, 1.6),
(28, 20, 3, 1, 4.25),
(29, 21, 2, 1, 1.8),
(30, 22, 1, 4, 1.6),
(31, 22, 2, 2, 1.8),
(32, 23, 1, 2, 1.6),
(33, 24, 1, 2, 1.6),
(34, 25, 1, 2, 1.6),
(35, 25, 5, 1, 1.8),
(36, 26, 1, 1, 1.6),
(37, 26, 2, 1, 1.8),
(38, 26, 4, 1, 1.67),
(39, 27, 1, 5, 1.6),
(40, 27, 2, 3, 1.8),
(41, 27, 3, 1, 4.25),
(42, 28, 3, 1, 4.25),
(43, 28, 1, 2, 1.6),
(44, 29, 2, 5, 1.8),
(45, 30, 1, 1, 1.6),
(46, 30, 2, 1, 1.8),
(47, 31, 1, 1, 1.6),
(48, 31, 2, 2, 1.8),
(49, 32, 1, 1, 1.6),
(50, 32, 3, 2, 4.25),
(51, 33, 1, 1, 1.6),
(52, 34, 2, 2, 1.8),
(53, 35, 1, 2, 1.6),
(54, 35, 2, 2, 1.8),
(55, 36, 1, 2, 1.6),
(56, 36, 2, 3, 1.8),
(57, 36, 3, 2, 4.25),
(58, 37, 2, 3, 1.8),
(59, 38, 1, 9, 1.6),
(60, 38, 3, 1, 4.25),
(61, 39, 1, 1, 1.6),
(62, 40, 1, 1, 1.6),
(63, 41, 1, 1, 1.6),
(64, 41, 4, 2, 1.67),
(65, 49, 1, 1, 1.6),
(66, 49, 4, 2, 1.67),
(67, 49, 3, 2, 4.25),
(68, 50, 1, 2, 1.6),
(69, 50, 2, 2, 1.8),
(70, 50, 4, 3, 1.67),
(71, 50, 5, 2, 1.8),
(72, 51, 1, 1, 1.6),
(73, 51, 4, 2, 1.67),
(74, 51, 3, 2, 4.25),
(75, 52, 1, 1, 1.6),
(76, 52, 4, 2, 1.67),
(77, 52, 3, 2, 4.25),
(78, 53, 1, 1, 1.6),
(79, 53, 4, 2, 1.67),
(80, 53, 3, 2, 4.25),
(81, 54, 1, 1, 1.6),
(82, 54, 4, 2, 1.67),
(83, 54, 3, 2, 4.25),
(84, 55, 1, 6, 1.6),
(85, 55, 4, 2, 1.67),
(86, 55, 3, 2, 4.25);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PRODUCTE`
--

CREATE TABLE `PRODUCTE` (
  `idProducte` int(5) NOT NULL,
  `nomProducte` varchar(200) DEFAULT NULL,
  `descripcioProducte` varchar(200) DEFAULT NULL,
  `preuProducte` float DEFAULT NULL,
  `tipusProducte` enum('beguda','menjar') DEFAULT NULL,
  `urlImatge` varchar(500) DEFAULT NULL,
  `horariProducte` enum('mati','tarda','ambdos') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `PRODUCTE`
--

INSERT INTO `PRODUCTE` (`idProducte`, `nomProducte`, `descripcioProducte`, `preuProducte`, `tipusProducte`, `urlImatge`, `horariProducte`) VALUES
(1, 'Coca-Cola Light', 'La Coca-Cola és una popular beguda de cola; produïda per The Coca-Cola Company.', 1.6, 'beguda', 'https://pizzerialacosanostra.com/wp-content/uploads/2020/06/01-BOTE-COCACOLA-LIGHT.jpg', 'mati'),
(2, 'Cafè amb llet', 'Un cafè amb llet és una beguda calenta consistent en una infusió de cafè barrejada més o menys a parts iguals amb llet.', 1.8, 'beguda', 'https://st2.depositphotos.com/1801979/8127/i/600/depositphotos_81274606-stock-photo-tasty-coconut-bread-and-hot.jpg', 'ambdos'),
(3, 'Entrepà de bacó', 'Entrepà de bacó acabat de fer.', 1.5, 'menjar', 'https://www.atodamesa.es/wp-content/uploads/2021/02/lomobacon-scaled.jpg', 'mati'),
(4, 'Fanta de taronja', 'Fanta amb gust a taronja', 1.35, 'beguda', 'https://www.pasteleria-mallorca.com/ka/apps/mallorca/assets/products/lata-fanta-naranja-fria-unid.jpg', 'ambdos'),
(5, 'Entrepà de Frankfurt', 'Entrepà mitjà de frankfurt.', 1.5, 'menjar', 'https://frankfurtpipol.com/wp-content/uploads/2020/05/FRANKFURT.jpg', 'tarda');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `USUARI`
--

CREATE TABLE `USUARI` (
  `idUsuari` int(5) NOT NULL,
  `nomUsuari` varchar(200) DEFAULT NULL,
  `telefonUsuari` int(9) DEFAULT NULL,
  `correuUsuari` varchar(200) DEFAULT NULL,
  `rol` enum('client','admin') DEFAULT 'client'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `USUARI`
--

INSERT INTO `USUARI` (`idUsuari`, `nomUsuari`, `telefonUsuari`, `correuUsuari`, `rol`) VALUES
(18, 'Jaume', 666666666, 'jaume@inspedralbes.cat', 'client'),
(19, 'alessia', 666666666, 'alessiatestlastinsert@inspedralbes.cat', 'client'),
(20, 'Carlos', 111111111, 'carlos@inspedralbes.cat', 'client'),
(22, 'aaatest', 666666666, 'alessia@inspedralbes.cat', 'client'),
(23, 'alessiatest', 666666666, 'atestaa@inspedralbes.cat', 'client'),
(24, 'alessiaaaa', 666666666, 'alessidsadasa@inspedralbes.cat', 'client'),
(25, 'alessiaaaa', 666666666, 'alessidsadasa@inspedralbes.cat', 'client'),
(26, 'nomUsuari', 666666, 'correuUsuari', 'client'),
(27, 'nomUsuari', 123456789, 'correuUsuari', 'client'),
(28, 'alessia', 666666666, 'ale@inspedralbes.cat', 'client'),
(29, 'alessia', 666666666, 'ale@inspedralbes.cat', 'client'),
(30, 'hola', 777, 'hola777', 'client'),
(31, 'hola2', 888, 'hola7aa77', 'client'),
(32, 'Carlos Gómez', 123456789, 'cargomfue@inspedralbes.cat', 'client'),
(33, 'marti', 111111111, 'marti@inspedralbes.cat', 'client'),
(34, 'fswr', 333333333, 'few@inspedralbes.cat', 'client'),
(35, 'fswr', 333333333, 'few@inspedralbes.cat', 'client'),
(36, 'fswssr', 333333333, 'fessw@inspedralbes.cat', 'client'),
(37, 'fswssr', 333333333, 'fessw@inspedralbes.cat', 'client'),
(38, 'asdasd', 666666666, 'alessissa@inspedralbes.cat', 'client'),
(39, 'asdasd', 666666666, 'alessissa@inspedralbes.cat', 'client'),
(40, 'ja', 666666666, 'ja@inspedralbes.cat', 'client'),
(41, 'AlessiaTest', 666666666, 'a21alecrinor@inspedralbes.cat', 'client'),
(42, 'testCarlos', 666666666, 'testCarlos@inspedralbes.cat', 'client'),
(43, 'Carlos', 123456789, 'Carlos@inspedralbes.cat', 'client'),
(44, 'Jaume', 123456789, 'jaume@inspedralbes.cat', 'client'),
(45, 'Jaume', 123456789, 'asd@inspedralbes.cat', 'client'),
(46, 'Jaume', 123456789, 'asd@inspedralbes.cat', 'client'),
(47, 'Jaume', 123456789, 'asd@inspedralbes.cat', 'client'),
(48, 'alessiatesteditarcompra', 666666666, 'alessiatesteditarcompra@inspedralbes.cat', 'client'),
(49, 'a', 666666666, 'a@inspedralbes.cat', 'client'),
(50, 'Asmae', 123456789, 'asmae@inspedralbes.cat', 'client'),
(51, 'Carlos', 111111111, 'carlos@inspedralbes.cat', 'client'),
(52, 'alessiaTest21', 666666666, 'alessiaTest21@inspedralbes.cat', 'client'),
(53, 'testalvaro', 666666666, 'testalvaro@inspedralbes.cat', 'client'),
(54, 'ian', 666666666, 'ian@inspedralbes.cat', 'client'),
(55, 'a21test', 617651267, 'a21test@inspedralbes.cat', 'client'),
(56, 'Jaume', 123456789, 'asd@inspedralbes.cat', 'client'),
(57, 'Jaume', 123456789, 'asd@inspedralbes.cat', 'client'),
(58, 'dgdfbrtfhjr', 123456789, 'sdgsgsg@inspedralbes.cat', 'client'),
(59, 'Jaume', 123456789, 'asd@inspedralbes.cat', 'client'),
(60, 'asmae', 678657865, 'asmae@inspedralbes.cat', 'client'),
(61, 'alessiatest', 675467898, 'alessiatest@inspedralbes.cat', 'client'),
(62, 'testform', 612345678, 'testform@inspedralbes.cat', 'client'),
(63, 'jaume', 612345676, 'testfaadsarm@inspedralbes.cat', 'client'),
(64, 'Carlos', 123456789, 'a@inspedralbes.cat', 'client'),
(65, 'Jaume', 123456789, 'asd@inspedralbes.cat', 'client'),
(75, 'jaume', 466767576, 'a@inspedralbes.cat', 'client'),
(76, 'jaume', 466767576, 'a@inspedralbes.cat', 'client'),
(77, 'jaume', 466767576, 'a@inspedralbes.cat', 'client'),
(78, 'jaume', 466767576, 'a@inspedralbes.cat', 'client'),
(79, 'ale', 675467878, 'ale@inspedralbes.cat', 'client'),
(80, 'ale', 675467878, 'ale@inspedralbes.cat', 'client'),
(81, 'ale', 675467878, 'ale@inspedralbes.cat', 'client'),
(82, 'jaume', 466767576, 'a@inspedralbes.cat', 'client');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `COMANDA`
--
ALTER TABLE `COMANDA`
  ADD PRIMARY KEY (`idComanda`),
  ADD KEY `idUsuari` (`idUsuari`);

--
-- Indices de la tabla `LINIA_COMANDA`
--
ALTER TABLE `LINIA_COMANDA`
  ADD PRIMARY KEY (`idLinia`),
  ADD KEY `idComanda` (`idComanda`),
  ADD KEY `idProducte` (`idProducte`);

--
-- Indices de la tabla `PRODUCTE`
--
ALTER TABLE `PRODUCTE`
  ADD PRIMARY KEY (`idProducte`);

--
-- Indices de la tabla `USUARI`
--
ALTER TABLE `USUARI`
  ADD PRIMARY KEY (`idUsuari`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `COMANDA`
--
ALTER TABLE `COMANDA`
  MODIFY `idComanda` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT de la tabla `LINIA_COMANDA`
--
ALTER TABLE `LINIA_COMANDA`
  MODIFY `idLinia` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT de la tabla `PRODUCTE`
--
ALTER TABLE `PRODUCTE`
  MODIFY `idProducte` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `USUARI`
--
ALTER TABLE `USUARI`
  MODIFY `idUsuari` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `COMANDA`
--
ALTER TABLE `COMANDA`
  ADD CONSTRAINT `COMANDA_ibfk_1` FOREIGN KEY (`idUsuari`) REFERENCES `USUARI` (`idUsuari`);

--
-- Filtros para la tabla `LINIA_COMANDA`
--
ALTER TABLE `LINIA_COMANDA`
  ADD CONSTRAINT `LINIA_COMANDA_ibfk_1` FOREIGN KEY (`idComanda`) REFERENCES `COMANDA` (`idComanda`),
  ADD CONSTRAINT `LINIA_COMANDA_ibfk_2` FOREIGN KEY (`idProducte`) REFERENCES `PRODUCTE` (`idProducte`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
