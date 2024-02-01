-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-02-2024 a las 23:03:16
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbentrega`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudesartistas`
--

CREATE TABLE `solicitudesartistas` (
  `id` int(11) NOT NULL,
  `IPUsuario` varchar(20) NOT NULL,
  `FechaSolicitud` varchar(20) NOT NULL,
  `NombreArtista` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `solicitudesartistas`
--

INSERT INTO `solicitudesartistas` (`id`, `IPUsuario`, `FechaSolicitud`, `NombreArtista`) VALUES
(48, '::1', '2024-02-01', 'Lucas Sugo'),
(49, '::1', '2024-02-01', 'Ricardo Montaner'),
(50, '::1', '2024-02-01', 'Ke personaje'),
(51, '::1', '2024-02-01', 'Bizarrap');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `solicitudesartistas`
--
ALTER TABLE `solicitudesartistas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `solicitudesartistas`
--
ALTER TABLE `solicitudesartistas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
