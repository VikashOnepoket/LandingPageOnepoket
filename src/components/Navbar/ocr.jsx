import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const Ocr = () => {
    const [invoiceNumber, setInvoiceNumber] = useState(''); // State to store invoice number
    const [loading, setLoading] = useState(false); // State to handle loading status

    // Function to preprocess the image (convert to grayscale and enhance contrast for better OCR accuracy)
    const preprocessImage = (file, callback) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const img = new Image();
        const url = URL.createObjectURL(file);
        img.src = url;

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw the image on the canvas
            ctx.drawImage(img, 0, 0, img.width, img.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            // Enhance contrast and convert to grayscale
            for (let i = 0; i < data.length; i += 4) {
                // Calculate grayscale value
                const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                const contrast = 1.2; // Adjust the contrast (1 is no change, >1 increases contrast)
                const brightness = 10; // Adjust brightness (0 for no change)

                // Apply contrast and brightness
                data[i] = avg + (data[i] - avg) * contrast + brightness;    // Red
                data[i + 1] = avg + (data[i + 1] - avg) * contrast + brightness; // Green
                data[i + 2] = avg + (data[i + 2] - avg) * contrast + brightness; // Blue

                // Ensure pixel values are within valid range (0 to 255)
                data[i] = Math.min(255, Math.max(0, data[i]));
                data[i + 1] = Math.min(255, Math.max(0, data[i + 1]));
                data[i + 2] = Math.min(255, Math.max(0, data[i + 2]));
            }

            // Put modified image data back on the canvas
            ctx.putImageData(imageData, 0, 0);

            // Convert canvas to Blob and pass it to callback
            canvas.toBlob((blob) => callback(blob));
        };
    };

    // Function to extract Invoice Number using improved regex
    const extractInvoiceNumber = (cleanText) => {
        console.log('Cleaned OCR Text:', cleanText);

        // Improved regex for capturing Invoice Number (with "Number" or "No")
        const match = cleanText.match(/Invoice\s*(?:Number|No)\s*[#:]\s*([A-Z0-9]+)/i);

        if (match) {
            console.log('Extracted Invoice Number:', match[1]);
            return match[1];
        } else {
            console.warn('Invoice number not found. Debug text:', cleanText);
            return 'Not Found';
        }
    };

    // Perform OCR using Tesseract
    const performOCR = (file) => {
        Tesseract.recognize(
            file,
            'eng', // Language code for English
            {
                logger: (info) => console.log(info), // Log progress
                tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:#- ', // Allowed characters
                psm: 11, // Adjusted for sparse text recognition
            }
        )
            .then(({ data: { text } }) => {
                console.log('Raw OCR Text:', text);

                // Clean the OCR text for better processing
                const cleanText = text
                    .replace(/[^A-Za-z0-9\s:#\-]/g, '') // Remove unwanted characters
                    .replace(/\s+/g, ' ') // Normalize multiple spaces to a single space
                    .trim();

                console.log('Cleaned OCR Text:', cleanText);

                // Extract the Invoice Number
                const invoiceNum = extractInvoiceNumber(cleanText);
                setInvoiceNumber(invoiceNum);
            })
            .catch((err) => {
                console.error('Error:', err);
                setInvoiceNumber('Error occurred');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // Handle file input and preprocessing
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setLoading(true);
            preprocessImage(file, (processedBlob) => {
                performOCR(processedBlob);
            });
        }
    };

    return (
        <div>
            <h1>Invoice OCR</h1>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {loading ? <p>Processing...</p> : <p>Invoice Number: {invoiceNumber}</p>}
        </div>
    );
};

export default Ocr;
