import { useState } from 'react';
import PropTypes from 'prop-types';

const Lightbox = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Lightbox content */}
      {selectedImageIndex !== null && (
        <div className="lightbox-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={closeLightbox}>
          <div className="lightbox-container" style={{ position: 'relative', textAlign: 'center' }}>
            <div className="lightbox-close" style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', color: '#fff', fontSize: '24px' }} onClick={closeLightbox}>
              X
            </div>
            <img
              src={images[selectedImageIndex]}
              alt={`Image ${selectedImageIndex + 1}`}
              className="lightbox-image"
              style={{ maxWidth: '800px', maxHeight: '80vh' }}
            />
          </div>
        </div>
      )}

      {/* Gallery */}
      <div className="lightbox-gallery" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {images.map((image, index) => (
          <div key={index} className="lightbox-thumbnail-container">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="lightbox-thumbnail"
              style={{ width: '200px', height: '200px' }}
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Lightbox;
