<h1 align="center">baabaabucks.com</h1>
<h2 align="center">QR Code Debit System for School Concession Stand</h2>
<br>
<p>This is a the frontend for a QR code-based debit system, built along with Google Apps Script.</p>
# Baa Baa Bucks: QR Code Debit System for School Concession Stand

## Overview

Baa Baa Bucks is a simple cashless debit system for students to buy items at a school concession stand. Students use QR codes as "debit cards," with balances tracked in a Google Sheet.
This project uses Google Apps Script for the backend API and a lightweight QR scanner hosted on GitHub Pages for the frontend.

## Features

- **QR Code Scanning**: Scan student QR codes from school-issued name-tags to deduct $1 per item.
- **Balance Management**: Tracks student balances and transaction logs in a Google Sheet.
- **Secure Authentication**: Requires authorized Google accounts for operators to prevent unauthorized access.
- **Success/Error Pages**: Displays clear results after scans, with remaining balance or error messages.
- **Mobile-Friendly**: Works on desktops and phones, with a loading screen during processing.

## How It Works

1. **Setup**: Add student names and ids to the Google Sheet.
2. **Funding**: Parents pay admins, who manually credit accounts in the Sheet.
3. **Scanning**: Operators use the QR scanner app to read codes, extract IDs, and redirect to the API for processing.
4. **Transaction**: The API checks balance, deducts $1 if possible, logs the transaction, and shows a success or error page.

## Usage

- **For Operators**: Open the scanner app on a phone/browser, sign in with an authorized Google account, scan a student's QR code, and view the result.
- **Admin Tasks**: Manually update balances in the Google Sheet or run the QR generation script.

## Technologies

- **Backend**: Google Apps Script, Google Sheets.
- **Frontend**: HTML/JavaScript with html5-qrcode for scanning.
- **Hosting**: GitHub Pages for scanner, Google for API.
