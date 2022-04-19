-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: examen
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alumno`
--

DROP TABLE IF EXISTS `alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumno` (
  `Boleta` int NOT NULL,
  `Nom` varchar(70) DEFAULT NULL,
  `Img` blob,
  `Turno` varchar(10) NOT NULL,
  `Grupo` varchar(4) NOT NULL,
  PRIMARY KEY (`Boleta`),
  KEY `Turno` (`Turno`),
  KEY `Grupo` (`Grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumno`
--

LOCK TABLES `alumno` WRITE;
/*!40000 ALTER TABLE `alumno` DISABLE KEYS */;
/*!40000 ALTER TABLE `alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asig`
--

DROP TABLE IF EXISTS `asig`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asig` (
  `Id_Asig` int NOT NULL,
  `Asig` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id_Asig`),
  CONSTRAINT `asig_chk_1` CHECK (((`Id_asig` >= 1) and (`Id_asig` <= 4)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asig`
--

LOCK TABLES `asig` WRITE;
/*!40000 ALTER TABLE `asig` DISABLE KEYS */;
INSERT INTO `asig` VALUES (1,'BD'),(2,'PSW'),(3,'LPTI II'),(4,'TPPC');
/*!40000 ALTER TABLE `asig` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `labs`
--

DROP TABLE IF EXISTS `labs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `labs` (
  `Id_Lab` int NOT NULL,
  `Lab` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id_Lab`),
  CONSTRAINT `labs_chk_1` CHECK (((`Id_Lab` >= 1) and (`Id_lab` <= 4)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `labs`
--

LOCK TABLES `labs` WRITE;
/*!40000 ALTER TABLE `labs` DISABLE KEYS */;
INSERT INTO `labs` VALUES (1,'Aula 4.0'),(2,'Base de Datos'),(3,'Nuevas Tecnologías'),(4,'Desarrollo de Software');
/*!40000 ALTER TABLE `labs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `maquinas`
--

DROP TABLE IF EXISTS `maquinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `maquinas` (
  `Boleta` int NOT NULL,
  `Num_Maq` int DEFAULT NULL,
  `Id_Asig` int DEFAULT NULL,
  `Id_Lab` int DEFAULT NULL,
  KEY `Boleta` (`Boleta`),
  KEY `Num_Maq` (`Num_Maq`),
  KEY `Id_Asig` (`Id_Asig`),
  KEY `Id_Lab` (`Id_Lab`),
  CONSTRAINT `maquinas_ibfk_1` FOREIGN KEY (`Boleta`) REFERENCES `alumno` (`Boleta`),
  CONSTRAINT `maquinas_ibfk_2` FOREIGN KEY (`Id_Asig`) REFERENCES `asig` (`Id_Asig`),
  CONSTRAINT `maquinas_ibfk_3` FOREIGN KEY (`Id_Lab`) REFERENCES `labs` (`Id_Lab`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `maquinas`
--

LOCK TABLES `maquinas` WRITE;
/*!40000 ALTER TABLE `maquinas` DISABLE KEYS */;
/*!40000 ALTER TABLE `maquinas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-19 14:26:46
