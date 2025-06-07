"use client";
// src/components/DownloadCV/DownloadCV.js
import React from 'react';
import './DownloadCV.scss'; // We'll create this SCSS file next
import { FaDownload } from 'react-icons/fa'; // Using react-icons for the download icon

// --- IMPORTANT: Place your CV file in the `public` folder ---
// For example, if your CV is named `Sham_Roy_CV.pdf`, place it in `public/Sham_Roy_CV.pdf`
// Then, the path below will be relative to the public folder.

const CV_FILE_NAME = "Sham_Roy_Frontend_Developer_CV.pdf"; // The desired name for the downloaded file
const CV_FILE_PATH = "/Sham_Roy_CV.pdf"; // The path to your CV in the `public` folder

const DownloadCV = () => {
    const handleDownload = () => {
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = CV_FILE_PATH;
        link.setAttribute('download', CV_FILE_NAME); // This attribute prompts the download

        // Append to the document, click, and then remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button className="download-cv-button" onClick={handleDownload} aria-label="Download my CV">
            <FaDownload className="download-icon" />
            <span>Download CV</span>
        </button>
    );
};

export default DownloadCV;