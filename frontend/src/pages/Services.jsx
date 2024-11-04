import React from "react";
import {
  // FaBlockchain, // Uncomment if you want to use this icon
  FaSass,
  FaAndroid,
  FaCode,
  FaChartLine,
  FaGamepad,
  FaPalette,
  FaCheckCircle,
  FaUserGraduate,
} from "react-icons/fa";
import ButtonLink from "../components/ButtonLink";

const servicesData = [
  {
    // icon: <FaBlockchain />,
    title: "NFT & Blockchain Development",
    description: "Blockchain and NFTs create massive opportunities.",
  },
  {
    icon: <FaSass />,
    title: "Web SaaS Platform Development",
    description:
      "Build scalable web SaaS platforms with our expert team and cutting-edge technology.",
  },
  {
    icon: <FaAndroid />,
    title: "Android & iOS Development",
    description:
      "Empower your business with our expert Android and iOS app development.",
  },
  {
    icon: <FaCode />,
    title: "Custom Software Development",
    description:
      "Web and mobile custom software development tailored to your business.",
  },
  {
    icon: <FaChartLine />,
    title: "Digital Transformation",
    description:
      "Digital transformation is a set of tools that takes your company from today to the future.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Development Team Augmentation",
    description:
      "Hiring a dedicated agile team that will work with your in-house developers.",
  },
  {
    icon: <FaGamepad />,
    title: "VR/AR/MR Development",
    description:
      "Software solutions for VR, AR, and MR across platforms, reshaping interaction and learning.",
  },
  {
    icon: <FaGamepad />,
    title: "Game Development",
    description:
      "Crafting captivating gaming experiences with passion, precision, and artistry.",
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    description:
      "Improve your digital product with user-centric interfaces, visually appealing and easy to use.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Software Quality Assurance",
    description:
      "Bug-free software ensured through manual and automated testing by our expert QA teams.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Recruiting and Academy Training",
    description: "Top-tier talent acquisition and tailored training programs.",
  },
];

function Services() {
  return (
    <div className="relative top-6 flex gap-2">
      <div className="grid grid-cols-3 gap-4">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="flex items-start space-x-2 rounded-lg p-4 hover:bg-zinc-300"
          >
            <div className="text-2xl">{service.icon}</div>
            <div>
              <h1 className="font-semibold">{service.title}</h1>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/4">
        <div>
          <img />
          <h1>Services</h1>
          <p>Turnkey solutions to develop your business idea</p>
        </div>
        <div>
          <h1>Clutch</h1>
          <p>From 200+ reviews</p>
        </div>
        <div>
          <h1>Gartner</h1>
          <p>From 200+ reviews</p>
        </div>
        <ButtonLink name="Free Consultancy" />
      </div>
    </div>
  );
}

export default Services;

//
// From 200+ reviews

// Industries
// About Us
// Solutions

// Perfect Technology Solution
// We Help Companies To Build their very own AI  .
// In today's rapidly evolving digital landscape, staying ahead of the curve is essential for businesses aiming to thrive and succeed.

// Focus on quality first
// Get to the market on time
// CONTACT US DAILY
// (+57) 314 2556260
// (+91) 920 501 4238
// Software Consulting and Quality Development
// Brands We help to Build
// Our Services
// How We Can Help You
// NFT & Blockchain Development
// Blockchain architecture
// Blockchain integration
// Blockchain as a service
// Business Implementation
// Blockchain & Token Audit
// Security Assessment & Identify vulnerabilities
// Smart Contract Review potential bugs or exploits
// Tokenomics Analysis token distribution and supply mechanisms.
// Performance Evaluation Assess the efficiency and speed
// Custom Software Development
// Software architecture design
// System integration services
// Data migration services
// Legacy app modernization
// Audit & IT Consulting Services
// TechGuard Audit
// CyberSafe Audit & IT Consulting
// AssuranceEdge & IT Consulting
// IT Sentry Audit & IT Consulting
// Web Application Design and Development
// Web app development services
// Web portal development services
// Website development services
// Offshore web development
// Mobile App Design and Development
// Android development services
// iOS app development services
// Mobile application design services
// Enterprise mobile app development
// Best UI/UX Design Services
// PixelPerfection UI/UX Design
// DesignCraft UI/UX Design
// CreativeWave UI/UX Design
// InterfaceGenius UI/UX Design
// Maintenance and Customer Support
// CareCraft Maintenance
// FixItPro Maintenance
// TechCare Maintenance
// AssistEdge Maintenance
// 6k+
// Happy Customer

// 6
// K+
// Projects Done
// 1
// 0
// 0
// %
// Results Guaranteed
// About Us
// Colibyt Mission & Goal
// At Colibyt, our mission is to empower businesses through innovative software solutions that streamline operations, foster growth, and drive success. With a commitment to excellence and customer satisfaction we strive.

// Our Showcase
// Our latest Case Studies
// Computer Software
// Astarte Medical
// Creating software for Astarte Medical involves a meticulous process aimed at addressing their specific needs and objectives. It begins with thorough research and planning to understand the requirements goals of the project.

// Industry: Computer software
// Country: Germany, Issum
// Healthcare
// CAE Blue Phantom
// CAE Blue Phantom is a cutting-edge simulation technology designed to revolutionize medical training and education. Utilizing advanced virtual reality and artificial intelligence, CAE Blue Phantom provides.

// Industry: Wellness & Fitness
// Country: Germany, Issum
// Real Estate
// Liberkeys
// Liberkeys is a modern real estate platform that is revolutionizing the way people buy, sell, and rent properties. With a focus on transparency, efficiency, and customer satisfaction, Liberkeys streamlines.

// Industry: Real estate
// Country: France, Paris
// Working Process
// Our Approach
// 01. COMMUNICATION
// Once we have a contract in place, we open a connection on Slack or any other chatting tool that allows the allocated resources to team-up with you and your stakeholders to start the planning. The communication channel is kept up forever and of course involves also several strategic agile meetings on most famous video-call tools.

// 02. PLANNING
// 03. EXECUTION
// 04. ARCHITECTURES AND INFRASTRUCTURES
// 05. TRASPARENCY
// 06. DELIVERY
// 07. RETROSPECTIVE
// Communication
// Planning
// Execution
// Architectures and infrastructures
// Transparency
// Delivery
// Retrospective
// Our Technologies
// We Use Technologies
// Web Platform
// Databases
// Cloud & DevOps
// Mobile Apps
// Other Frameworks
// React Js
// Next Js
// JavaScript
// Swift
// Typescript
// Python
// G318
// Java
// Ruby
// C++
// PHP
// Laraval
// Our Reputation
// What They Say
// 900+ customers win deals with Colibyt
// From 200+ reviews
// From 300+ reviews
// “Amazing software services”
// Respect for the customer, understanding of the requirements and team needs, meticulous, almost obsessive research and attention to details, extreme success willing. Those who seek the best are willing to pay for quality

// MARIANO PETERLONGO
// CTO, @Rosmariano
// Sydney, Australia
// “Amazing software services”
// I had the pleasure to work with Michele to build an enterprise software and all the project was handled with great professionalism. Communication was fast and very good and so was also the support after the product was released in production. Great work.

// Tristan W.
// CEO @Schoolthinks
// Mumbai, India
// “Amazing software services”
// The solutions they're providing is helping our business run more smoothly. We've been able to make quick developments with them, meeting our product vision within the timeline we set up. Listen to them because they can give strong advice about how to build good products.

// Maverick Phoenix
// Board Member, UNIQA
// Seattle, USA

// You Are Here
// Let's Start
// Initiating Your Journey to Success and Growth.

// +91 920 578 5238
// developers@colibyt.com
// 9th/10th floor, Graphix 2, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301
// 01
// Share your requirements
// 02
// Discuss them with our experts
// 03
// Get a free quote
// 04
// Start the project
//  Let's Connect!
// Send us a message, and we'll promptly discuss your project with you.
// Your Name
// Your Enter
// Your Phone No.
// Your Company Name
// How can we help you?
// Custom Web Apps
// App Development
// Web Development
// Software Solution
// Enterprise Apps
// Devops Services
// Custom Web Apps
// App Development
// Web Development
// Software Solution
// Enterprise Apps
// Devops Services
// Company
// About
// Our achievements
// Our partners
// Our locations
// Careers
// Contacts
// Expertise
// Cloud solutions
// Data warehouse
// Data management
// BI services
// Big data
// Data science
// Industries
// Insurance
// Banking
// Fintech
// Logistics
// Retail
// Healthcare
// Newsletter
// Sign up to Colibyt Global weekly newsletter to get the latest updates.

// Enter your email
// Send
// Copyright © 2020-2024 Colibyt Technologies, All rights reserved.

// Terms of Use
// Privacy Policy
