import React, { useState } from 'react';

const Language = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setSelectedLanguage(newLanguage);
    onLanguageChange(newLanguage);
  };

  return (
    <div className='seleziona '>
      <label className=''>Seleziona lingua:</label>
      <select className='ms-2' value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="it">Italiano</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
      </select>
    </div>
  );
};

export default Language;
