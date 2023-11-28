-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 28, 2023 at 05:35 PM
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
-- Database: `doctorki`
--

-- --------------------------------------------------------

--
-- Table structure for table `conversation`
--

CREATE TABLE `conversation` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `msg` varchar(500) NOT NULL,
  `isbot` int(11) NOT NULL,
  `conv_index` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `conversation`
--

INSERT INTO `conversation` (`id`, `user_id`, `msg`, `isbot`, `conv_index`) VALUES
(108, 6, 'shortness of breath and loss of smell and taste', 0, 11),
(109, 6, 'Predicted Disease : COVID-19', 1, 11),
(110, 6, 'Causes of this disease: \n\nCOVID-19 spreads very easily through close contact with people who have the virus.\r\n\r\nWhen someone with COVID-19 breathes, speaks, coughs or sneezes, they release small droplets containing the virus. You can catch it by breathing in these droplets or touching surfaces covered in them.\nYou can still catch or spread COVID-19 if you:\n\ndo not have symptoms\nare fully vaccinated\nhave had the virus before', 1, 11),
(111, 6, 'Suggested treatments : \n\nNirmatrelvir plus ritonavir, remdesivir and molnupiravir are antiviral medicines.\r\n\r\nWhen being assessed for treatment, a doctor will advise which treatment is most suitable for you.', 1, 11),
(112, 6, 'My son is always in low mood', 0, 13),
(113, 6, 'Predicted Disease : Depression', 1, 13),
(114, 6, 'Causes of this disease: \n\nIllness\r\nAlcohol and drugs\r\nLoneliness\r\nMenopause\r\nPregnancy and giving birth\r\nFamily history\r\nPersonality\r\nStressful events', 1, 13),
(115, 6, 'Suggested treatments : \n\nIf a GP diagnoses you with mild depression, they may suggest waiting a short time to see if it gets better by itself.\r\nGuided self-help\r\nYour GP may suggest trying guided self-help to see if it can help with your depression.\r\nThere\'s evidence that exercise can help depression, and it\'s one of the main treatments for mild depression.\r\nIf you have mild depression that\'s not improving, you may find a talking therapy helpful.\r\nAntidepressants are medicines that treat the sym', 1, 13),
(116, 6, 'I have aching muscle with headache', 0, 13),
(117, 6, 'Predicted Disease : Bird-flu', 1, 13),
(118, 6, 'Causes of this disease: \n\nBird flu is spread by close contact with an infected bird (dead or alive).\n\nThis includes:\n\ntouching infected birds\ntouching droppings or bedding\nkilling or preparing infected poultry for cooking\nMarkets where live birds are sold can also be a source of bird flu.', 1, 13),
(119, 6, 'Suggested treatments : \n\nyou\'ll be advised to stay at home, or you\'ll be cared for in hospital in isolation from other patients.\r\nYou may be given an antiviral medicine such as oseltamivir (Tamiflu) or zanamivir (Relenza).', 1, 13);

-- --------------------------------------------------------

--
-- Table structure for table `convolist`
--

CREATE TABLE `convolist` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `convolist`
--

INSERT INTO `convolist` (`id`, `title`, `user_id`) VALUES
(11, 'November Chats', 6),
(13, 'My son\'s Disease', 6),
(14, 'New Conversation', 6);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL,
  `conv_no` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `conv_no`) VALUES
(6, 'mahin', 'mahin00021@gmail.com', 'pbkdf2:sha256:600000$DCFLNMeZEUDfI2gY$376d7e3e0b2ae822a37f27fa26cfca0d28ddafd8f3c602b1854f9e8a806d0f80', 6),
(7, 'jobair', 'jobair@gmail.com', 'pbkdf2:sha256:600000$XSESoOYr4jowfhKw$3ff43755a20835076e52d6a812c0bcd4e0b01f0e98fe10660f087dcbd53b37fe', 0),
(9, 'samiha', 'samiha@gmail.com', 'pbkdf2:sha256:600000$OSIHXHcpny372T6k$ae5282a354d9d5db273b68581402ab291194610c0d59ab633681c72e71155312', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `conversation`
--
ALTER TABLE `conversation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `conv_index` (`conv_index`);

--
-- Indexes for table `convolist`
--
ALTER TABLE `convolist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `conversation`
--
ALTER TABLE `conversation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `convolist`
--
ALTER TABLE `convolist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `conversation`
--
ALTER TABLE `conversation`
  ADD CONSTRAINT `conv_index` FOREIGN KEY (`conv_index`) REFERENCES `convolist` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
