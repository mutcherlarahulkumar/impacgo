import { useEffect, useState } from "react";

export default function Footer() {
  const [showIframe, setShowIframe] = useState(true);

  useEffect(() => {
    // If iframe doesn't load in 2.5s, fallback
    const timer = setTimeout(() => {
      setShowIframe(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">

          {/* D&B Seal */}
          <div className="bg-white p-2 rounded-md shadow-md w-[114px] h-[97px] flex items-center justify-center">

            {showIframe ? (
              <iframe
                title="Dun & Bradstreet Registered Seal"
                src="https://dunsregistered.dnb.com/SealAuthentication.aspx?Cid=1"
                width="114"
                height="97"
                frameBorder="0"
                scrolling="no"
                className="border-0"
                sandbox="allow-scripts allow-same-origin"
              />
            ) : (
              <a
                href="https://www.dnb.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://seal.dnb.com/seal/2WzkR0AzqTnTewZgTkBAxTbFYA==?h=97&w=114"
                  alt="Dun & Bradstreet Verified Business"
                  width="114"
                  height="97"
                  loading="lazy"
                />
              </a>
            )}

          </div>

          {/* Text */}
          <div className="text-center">
            <p className="text-sm md:text-base">
              © 2024 Impacgo Solutions. All rights reserved.
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
