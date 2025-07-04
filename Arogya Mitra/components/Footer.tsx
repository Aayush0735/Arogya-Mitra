
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-dark text-neutral-lightest py-4 px-6 text-center text-sm shadow-inner">
      <p>&copy; {currentYear} आरोग्य Mitra. All rights reserved. | Developed by Aayush Bari</p>
    </footer>
  );
};

export default Footer;