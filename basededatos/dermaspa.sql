CREATE DATABASE  IF NOT EXISTS `tiendita` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tiendita`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: tiendita
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Refrescos'),(2,'Aceites'),(3,'Detergentes'),(4,'Dulces'),(5,'Frituras');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalle_producto_proveedor`
--

DROP TABLE IF EXISTS `detalle_producto_proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalle_producto_proveedor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idProducto` int NOT NULL,
  `idProveedor` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_prov_idx` (`idProveedor`),
  KEY `fk_prod_idx` (`idProducto`),
  CONSTRAINT `fk_prod` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`idProducto`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_prov` FOREIGN KEY (`idProveedor`) REFERENCES `proveedores` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalle_producto_proveedor`
--

LOCK TABLES `detalle_producto_proveedor` WRITE;
/*!40000 ALTER TABLE `detalle_producto_proveedor` DISABLE KEYS */;
INSERT INTO `detalle_producto_proveedor` VALUES (1,1,1),(2,2,1),(3,3,2),(4,4,2),(5,5,1),(6,6,4),(7,7,3),(8,8,5),(9,9,6),(10,10,5),(11,11,5),(12,12,6),(13,13,8),(14,14,7),(15,15,7),(16,16,8),(17,17,10),(18,18,9),(19,19,10),(20,20,10),(21,21,9);
/*!40000 ALTER TABLE `detalle_producto_proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idProducto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `fecha_alta` date DEFAULT '0000-00-00',
  `idCategoria` int NOT NULL,
  `existencia` int NOT NULL,
  PRIMARY KEY (`idProducto`),
  KEY `fk_CatPro_idx` (`idCategoria`),
  CONSTRAINT `fk_CatPro` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Refresco de Cola',10.00,'2016-01-01',1,10),(2,'Refesco de limon',9.00,'2015-02-06',1,15),(3,'Limonada',12.00,'2014-05-09',1,12),(4,'Refresco de toronja',9.00,'2016-05-07',1,20),(5,'Agua Mineral',15.00,'2016-02-15',1,8),(6,'Aceite Natural 1 Litro',20.00,'2015-09-20',2,25),(7,'Aceite de Coco 500 ml',15.00,'2016-03-24',2,20),(8,'Jabon lavanda 1 kg',12.00,'2014-02-21',3,6),(9,'Detergente en polvo 1 kg',18.50,'2014-11-17',3,9),(10,'Jabon para manos 500 ml',26.50,'2016-01-10',3,7),(11,'Detergente en polvo 2 kg',30.00,'2014-11-17',3,5),(12,'Detergente en polvo para trastes 500 g',18.50,'2016-02-20',3,8),(13,'Paleta de caramelo',5.00,'2013-01-01',4,50),(14,'Paleta de chocolate',6.50,'2014-05-20',4,34),(15,'Gomitas',12.50,'2016-03-30',4,16),(16,'Bolsa de dulces variados',14.50,'2015-12-12',4,23),(17,'Papas fritas',9.50,'2013-04-09',5,14),(18,'Frituras de queso',8.00,'2014-10-09',5,12),(19,'Papas fristas con limon',10.00,'2015-09-08',5,8),(20,'Bolsa de chicharrones',15.00,'2016-05-20',5,19),(21,'Palomitas de mantequilla',18.00,'2015-11-28',5,12);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
INSERT INTO `proveedores` VALUES (1,'Refrescante'),(2,'Refrescos SA de CV'),(3,'Naturalite'),(4,'Campullo'),(5,'Grupo cambay'),(6,'Detergentes de Mexico'),(7,'Sonrisas'),(8,'Ricodulce'),(9,'Bartel'),(10,'Frituras de Monterrey');
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-08  8:04:21
