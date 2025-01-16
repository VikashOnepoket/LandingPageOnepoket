import React from 'react';

const OCR = () => {
    const FSN_VALUE = 'WATG5FH9ZH2JBHGB'; // The exact FSN value
    const ASIN = "B0CKVRWCHJ"

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("Processing file...");

            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('https://api.ocr.space/parse/image', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'apikey': 'K82632255088957', // API key in the header
                    },
                });

                if (!response.ok) {
                    throw new Error(`API call failed with status ${response.status}`);
                }

                const result = await response.json();
                const text = result?.ParsedResults[0]?.ParsedText || '';

                console.log("Extracted Text:", text);

                // Check if the exact FSN value exists in the extracted text
                if (text.includes(ASIN)) {
                    console.log(`FSN found: ${ASIN}`);

                    // Construct the Flipkart URL
                    // const url = `https://www.flipkart.com/casio-mtp-v005d-1budf-enticer-men-s-analog-watch-men/write-review/itmf7328sp6xwdar?pid=${FSN_VALUE}`;

                    const asinUrl = `https://www.amazon.in/review/create-review/?ie=UTF8&channel=glance-detail&asin=${ASIN}`
                    console.log("Generated URL:", asinUrl);

                    // Optionally open the URL
                    window.open(asinUrl, '_blank');
                } else {
                    console.log("FSN not found in the extracted text.");
                }
            } catch (error) {
                console.error("Error during OCR processing:", error);
            }
        }
    };




    return (
        <div>
            <h2>Upload an Image to Extract FSN</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
    );
};

export default OCR;
