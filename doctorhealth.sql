-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 28, 2023 at 10:10 AM
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
-- Database: `doctorhealth`
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
  `conv_index` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `conversation`
--

INSERT INTO `conversation` (`id`, `user_id`, `msg`, `isbot`, `conv_index`, `time`) VALUES
(9, 6, 'shortness of breath and loss of smell and taste', 0, 1, '2023-11-25 06:33:02'),
(10, 6, 'Predicted Disease : COVID-19', 1, 1, '2023-11-25 06:33:02'),
(11, 6, 'Causes of this disease: \n\nCOVID-19 spreads very easily through close contact with people who have the virus.\n\nWhen someone with COVID-19 breathes, speaks, coughs or sneezes, they release small droplets containing the virus. You can catch it by breathing in these droplets or touching surfaces covered in them.\nYou can still catch or spread COVID-19 if you:\n\ndo not have symptoms\nare fully vaccinated\nhave had the virus before', 1, 1, '2023-11-25 06:33:02'),
(12, 6, 'Suggested treatments : \n\nNirmatrelvir plus ritonavir, remdesivir and molnupiravir are antiviral medicines.\r\n\r\nWhen being assessed for treatment, a doctor will advise which treatment is most suitable for you.', 1, 1, '2023-11-25 06:33:02'),
(13, 6, 'I have blood in my urinate', 0, 1, '2023-11-25 06:44:38'),
(14, 6, 'Predicted Disease : Cancer', 1, 1, '2023-11-25 06:44:38'),
(15, 6, 'Causes of this disease: \n\nGenetic Factors: Inherited mutations can increase cancer risk.\r\nDNA Mutations: Acquired mutations in DNA over time.\r\nCarcinogens: Exposure to cancer-causing substances.\r\nTobacco: Leading cause of lung and oral cancers.\r\nDiet: Poor dietary choices, including processed foods.\r\nObesity: Increased risk for multiple cancers.\r\nPhysical Inactivity: Sedentary lifestyle linked to cancer risk.\r\nAlcohol: Excessive consumption raises cancer risk.\r\nInfections: HPV, hepatitis B and C', 1, 1, '2023-11-25 06:44:38'),
(16, 6, 'Suggested treatments : \n\n healthy eating\r\ntaking regular exercise\r\nnot smoking\r\nchemotherapy – powerful cancer-killing medicines\r\nradiotherapy – the controlled use of high-energy X-rays', 1, 1, '2023-11-25 06:44:38'),
(17, 6, 'I have aching muscle with headache', 0, 1, '2023-11-25 07:24:30'),
(18, 6, 'Predicted Disease : Bird-flu', 1, 1, '2023-11-25 07:24:30'),
(19, 6, 'Causes of this disease: \n\nBird flu is spread by close contact with an infected bird (dead or alive).\n\nThis includes:\n\ntouching infected birds\ntouching droppings or bedding\nkilling or preparing infected poultry for cooking\nMarkets where live birds are sold can also be a source of bird flu.', 1, 1, '2023-11-25 07:24:30'),
(20, 6, 'Suggested treatments : \n\nyou\'ll be advised to stay at home, or you\'ll be cared for in hospital in isolation from other patients.\r\nYou may be given an antiviral medicine such as oseltamivir (Tamiflu) or zanamivir (Relenza).', 1, 1, '2023-11-25 07:24:30'),
(29, 6, 'I\'m feeling very thirsty and peeing more frequently', 0, 2, '2023-11-25 08:06:26'),
(30, 6, 'Predicted Disease : Diabetes', 1, 2, '2023-11-25 08:06:26'),
(31, 6, 'Causes of this disease: \n\nare living with overweight or obesity\ndo not have a healthy diet\nhave a family history of type 2 diabetes\nare of Asian, Black African or African Caribbean origin\ntake certain medicines such as steroids for a long time\nhave high blood pressure\nhave had gestational diabetes during pregnancy\nDiabetes can damage the nerves in your feet and cause a loss of feeling. It can also reduce the blood supply to your feet.\nIf you have diabetes, your eyes are at risk from diabetic ret', 1, 2, '2023-11-25 08:06:26'),
(32, 6, 'Suggested treatments : \n\nMedications (e.g., metformin medicine), diet control, exercise \nRegular monitoring of blood glucose levels is essential for individuals with Type 1 diabetes.\r\nMany individuals with Type 1 diabetes use carbohydrate counting to help match their insulin doses to the amount of carbohydrates they consume.\r\nA balanced diet is important for people with Type 1 diabetes. Meeting with a registered dietitian.\r\nRegular physical activity is beneficial for managing blood sugar levels.', 1, 2, '2023-11-25 08:06:26'),
(33, 6, 'shortness of breath and loss of smell and taste', 0, 2, '2023-11-25 09:24:46'),
(34, 6, 'Predicted Disease : COVID-19', 1, 2, '2023-11-25 09:24:46'),
(35, 6, 'Causes of this disease: \n\nCOVID-19 spreads very easily through close contact with people who have the virus.\r\n\r\nWhen someone with COVID-19 breathes, speaks, coughs or sneezes, they release small droplets containing the virus. You can catch it by breathing in these droplets or touching surfaces covered in them.\nYou can still catch or spread COVID-19 if you:\n\ndo not have symptoms\nare fully vaccinated\nhave had the virus before', 1, 2, '2023-11-25 09:24:46'),
(36, 6, 'Suggested treatments : \n\nNirmatrelvir plus ritonavir, remdesivir and molnupiravir are antiviral medicines.\r\n\r\nWhen being assessed for treatment, a doctor will advise which treatment is most suitable for you.', 1, 2, '2023-11-25 09:24:46'),
(37, 6, 'I think my blood pressure is bit high', 0, 3, '2023-11-25 09:27:38'),
(38, 6, 'Predicted Disease : Hypertension (High Blood Pressure)', 1, 3, '2023-11-25 09:27:38'),
(39, 6, 'Causes of this disease: \n\nare overweight\r\neat too much salt and do not eat enough fruit and vegetables\r\ndo not do enough exercise\r\ndrink too much alcohol or coffee (or other caffeine-based drinks)\r\nsmoke\r\nhave a lot of stress\r\nare over 65\r\nhave a relative with high blood pressure\r\nare of black African or black Caribbean descent\r\nlive in a deprived area', 1, 3, '2023-11-25 09:27:38'),
(40, 6, 'Suggested treatments : \n\ncut your salt intake to less than 6g (0.2oz) a day, which is about a teaspoonful – find out how you can reduce the amount of salt in your diet\r\neat a low-fat, balanced diet – including plenty of fresh fruit and vegetables; get tips on eating more healthily\r\nbe active – read some tips about getting more exercise\r\ncut down on alcohol – get tips on cutting down, including downloading a drinks diary and keeping track of your drinking\r\nlose weight – find out what your ideal w', 1, 3, '2023-11-25 09:27:38'),
(41, 6, 'I\'m, feeling very tired with stiff in my neck', 0, 2, '2023-11-25 10:07:44'),
(42, 6, 'Predicted Disease : Migrane', 1, 2, '2023-11-25 10:07:44'),
(43, 6, 'Causes of this disease: \n\nSome people find certain triggers can cause migraines, such as:\r\n\r\nstarting their period\r\nanxiety and depression\r\nstress and tiredness\r\nnot eating regularly or skipping meals\r\ntoo much caffeine\r\nnot getting enough exercise', 1, 2, '2023-11-25 10:07:44'),
(44, 6, 'Suggested treatments : \n\nMigraine treatments include:\r\n\r\npainkillers such as ibuprofen and paracetamol\r\nmedicines called triptans\r\nmedicines that stop you feeling sick or being sick\r\nYou may have to try a combination of medicines before you find something that works.', 1, 2, '2023-11-25 10:07:44'),
(45, 6, 'I have aching muscle with headache', 0, 3, '2023-11-25 10:08:33'),
(46, 6, 'Predicted Disease : Bird-flu', 1, 3, '2023-11-25 10:08:33'),
(47, 6, 'Causes of this disease: \n\nBird flu is spread by close contact with an infected bird (dead or alive).\n\nThis includes:\n\ntouching infected birds\ntouching droppings or bedding\nkilling or preparing infected poultry for cooking\nMarkets where live birds are sold can also be a source of bird flu.', 1, 3, '2023-11-25 10:08:33'),
(48, 6, 'Suggested treatments : \n\nyou\'ll be advised to stay at home, or you\'ll be cared for in hospital in isolation from other patients.\r\nYou may be given an antiviral medicine such as oseltamivir (Tamiflu) or zanamivir (Relenza).', 1, 3, '2023-11-25 10:08:33'),
(49, 6, 'I\'m, feeling very tired with stiff in my neck', 0, 3, '2023-11-25 10:08:42'),
(50, 6, 'Predicted Disease : Migrane', 1, 3, '2023-11-25 10:08:42'),
(51, 6, 'Causes of this disease: \n\nSome people find certain triggers can cause migraines, such as:\r\n\r\nstarting their period\r\nanxiety and depression\r\nstress and tiredness\r\nnot eating regularly or skipping meals\r\ntoo much caffeine\r\nnot getting enough exercise', 1, 3, '2023-11-25 10:08:42'),
(52, 6, 'Suggested treatments : \n\nMigraine treatments include:\r\n\r\npainkillers such as ibuprofen and paracetamol\r\nmedicines called triptans\r\nmedicines that stop you feeling sick or being sick\r\nYou may have to try a combination of medicines before you find something that works.', 1, 3, '2023-11-25 10:08:42'),
(61, 9, 'fatuigued and have infection', 0, 1, '2023-11-26 12:00:36'),
(62, 9, 'Predicted Disease : Leukemia', 1, 1, '2023-11-26 12:00:36'),
(63, 9, 'Causes of this disease: \n\nGenetic mutations, exposure to certain chemicals', 1, 1, '2023-11-26 12:00:36'),
(64, 9, 'Suggested treatments : \n\n Chemotherapy, stem cell transplant ', 1, 1, '2023-11-26 12:00:36');

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
  ADD KEY `user_id` (`user_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

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
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
