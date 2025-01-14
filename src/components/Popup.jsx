import React, { useState } from "react";


const Popup = ({ triggerContent, popupTitle, popupContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTriggerClick = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Trigger: O conteúdo que abre o popup */}
      <div className="cursor-pointer inline-block" onClick={handleTriggerClick}>
        {triggerContent}
      </div>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">{popupTitle}</h2>
            <p className="text-gray-700">{popupContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;