import React from 'react';
import '../styles/CertificationModal.css';

function CertificationModal({ isOpen, onClose, certification }) {
  if (!isOpen || !certification) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <div className="modal-body">
          <img 
            src={certification.image} 
            alt={certification.title}
            className="certification-image"
          />
        </div>
      </div>
    </div>
  );
}

export default CertificationModal;
