import { useState } from 'react';

export default function Footer() {
    const [iframeError, setIframeError] = useState(false);

    const handleIframeError = () => {
        console.log("Error Set back");
        setIframeError(true);
    };

    

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center gap-4">
                    {/* D&B Seal */}
                    <div className="bg-white p-2 rounded-md shadow-md min-h-[97px] min-w-[114px] flex items-center justify-center">
                        {!iframeError ? (
                            <>
                                <iframe 
                                id='Iframe1' 
                                src='https://seal.dnb.com/seal/2WzkR0AzqTnTewZgTkBAxTbFYA==?h=97&w=114' 
                                width='114' 
                                height='97' 
                                frameBorder='0'
                                title="D&B Seal Authentication"
                                className="border-0"
                                onError={handleIframeError}
                                console.log("In Here")
                                sandbox="allow-same-origin allow-scripts"
                            ></iframe>
                            </>
                        ) : (
                            <a 
                                href="https://www.dnb.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <img 
                                    src="https://seal.dnb.com/seal/2WzkR0AzqTnTewZgTkBAxTbFYA==?h=97&w=114" 
                                    alt="Dun & Bradstreet Verified Business Seal"
                                    width="114"
                                    height="97"
                                    className="border-0"
                                />
                            </a>
                        )}
                    </div>
                    
                    {/* Copyright text */}
                    <div className="text-center">
                        <p className="text-sm md:text-base">
                            &copy; 2024 Impacgo Solutions. All rights reserved.
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                            Verified by Dun & Bradstreet
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
