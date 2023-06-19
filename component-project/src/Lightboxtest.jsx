import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Lightbox from './Lightbox';

describe('Lightbox', () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  test('renders the gallery with thumbnails', () => {
    const { getAllByAltText } = render(<Lightbox images={images} />);
    const thumbnails = getAllByAltText(/Image \d+/);
    expect(thumbnails.length).toBe(images.length);
  });

  test('opens the lightbox when a thumbnail is clicked', () => {
    const { getAllByAltText, getByAltText } = render(<Lightbox images={images} />);
    const thumbnails = getAllByAltText(/Image \d+/);
    fireEvent.click(thumbnails[0]);
    const lightboxImage = getByAltText(/Image 1/);
    expect(lightboxImage).toBeInTheDocument();
  });

  test('closes the lightbox when the close button is clicked', () => {
    const { getAllByAltText, getByText, queryByAltText } = render(<Lightbox images={images} />);
    const thumbnails = getAllByAltText(/Image \d+/);
    fireEvent.click(thumbnails[0]);
    const closeButton = getByText('X');
    fireEvent.click(closeButton);
    const lightboxImage = queryByAltText(/Image 1/);
    expect(lightboxImage).toBeNull();
  });
});
