-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 29, 2023 at 08:26 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `petheaven`
--

-- --------------------------------------------------------

--
-- Table structure for table `adoptions`
--

CREATE TABLE `adoptions` (
  `id` int(11) NOT NULL,
  `adopter` varchar(50) NOT NULL,
  `petname` varchar(50) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  `status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adoptions`
--

INSERT INTO `adoptions` (`id`, `adopter`, `petname`, `contact`, `address`, `email`, `date`, `status`) VALUES
(6, 'Mahin', 'Jackson', '01839963763', 'Dhaka,Bangladesh', 'mahin00021@gmail.com', '20/10/2023', 'Processing'),
(7, 'Ehsanul Karim Talha', 'Nickel', '01871212436', 'Mirpur,Dhaka', 'talha39@gmail.com', '21/10/2023', 'Processing');

-- --------------------------------------------------------

--
-- Table structure for table `pets`
--

CREATE TABLE `pets` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `type` varchar(20) NOT NULL,
  `breed` varchar(30) NOT NULL,
  `description` varchar(255) NOT NULL,
  `age` varchar(10) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pets`
--

INSERT INTO `pets` (`id`, `name`, `type`, `breed`, `description`, `age`, `gender`, `price`, `image`) VALUES
(25, 'Mocha', 'Dog', 'Chihuahua', 'Mocha is affectionate,calm and exteranodvaosdfasdv', '2', 'Male', 350, '1.PNG'),
(26, 'Nickel', 'Cat', 'Bengali Cat', 'Nickel is a sweet and extremely curious hdasof haosdf vasndofds fgasodfh', '1', 'Female', 450, '2.PNG'),
(27, 'Piglet', 'Cat', 'Domestic Short Hair', 'Piglet is a kitten with a great dreams of finding the perfect one! She\'s hasof vhsoadv sdvoasn ytwowa goyahak', '6', 'Female', 500, '3.PNG'),
(28, 'Shell-lock Holmes', 'Tortoise', 'Russian', 'This adorable Russian tortoise is Shell-lock Holmes. He enjoys sdga dfasv vhhao pasdf', '13', 'Male', 550, '8.PNG'),
(29, 'Siimba and Nala', 'Rabbit', 'Rex Mix', 'Simba and Nala are a bonded pair of medium-large rabbits. Both born sdaf yowqa qodfjhw woudf.', '3', 'Male', 32, '7.PNG'),
(30, 'Jackson', 'Guinea Pig', 'Short-Haired', 'It hanbdo adsf aslge qw pufea nbnvbuia fhwsiovc gfbeicva opqfwegf bqwicsadfldhg gkasdgf.', '3', 'Male', 30, '6.PNG'),
(31, 'LGR Lovebirds', 'Bird', 'Lovebird', 'many lovebirds waiting for their perfect home. Many of them are very friendly and would love to keep you and you family company.', '16', 'Male', 650, '5.PNG');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `contactNumber` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL,
  `role` varchar(10) NOT NULL,
  `token` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `contactNumber`, `address`, `role`, `token`) VALUES
(5, 'mahin', 'mahin00021@gmail.com', '$2b$10$eQW9uRuApXxrrp01ur1EPe9iaG1Zus/0.XHKjWFZrce9/51YVaM9S', '01839963763', 'Dhaka,Bangladesh', 'user', '5091ade6c5a3f169920d174751eb66d321bf430a'),
(6, 'admin', 'admin@admin.com', '123456', '0123456789', 'Dhaka', 'admin', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adoptions`
--
ALTER TABLE `adoptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adoptions`
--
ALTER TABLE `adoptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `pets`
--
ALTER TABLE `pets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
