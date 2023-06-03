import { useState } from 'react'; // Import useState hook from React

import Lightbox from './Lightbox';
import Progress from './Progress';

const App = () => {
  const images = ['/src/assets/images/image1.jpg', '/src/assets/images/image2.jpg', '/src/assets/images/image3.jpg'];
  const [showLightbox, setShowLightbox] = useState(true);

  const closeLightbox = () => {
    setShowLightbox(false);
  };

  return (
    <div>
      {/* Your app content */}
      {showLightbox && (
        <Lightbox
          images={images}
          size="large"
          show={showLightbox}
          onClose={closeLightbox}
        />
      )}
      <Progress />
    </div>
  );
};

export default App;
