import { render, screen } from '@/test-utils';
import GalleryPage from './galleryPage';

const samplePhotos = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  src: '/event_example.svg',
  alt: `Photo ${i + 1}`,
}));

describe('GalleryPage component', () => {
  it('renders all images', () => {
    render(<GalleryPage photoList={samplePhotos} photosPerRow={7} />);
    samplePhotos.forEach((photo) => {
      expect(screen.getByAltText(photo.alt)).toBeInTheDocument();
    });
  });

  it('renders correct number of rows', () => {
    render(<GalleryPage photoList={samplePhotos} photosPerRow={7} />);
    expect(screen.getAllByTestId('photoGrid').length).toBe(2);
  });

  it('renders correct number of images per row', () => {
    render(<GalleryPage photoList={samplePhotos} photosPerRow={7} />);
    const rows = screen.getAllByTestId('photoGrid');
    expect(rows[0].querySelectorAll('img').length).toBe(7);
    expect(rows[1].querySelectorAll('img').length).toBe(7);
  });

  it('renders correctly with an arbitrary photosPerRow', () => {
    render(<GalleryPage photoList={samplePhotos} photosPerRow={5} />);
    const rows = screen.getAllByTestId('photoGrid');
    expect(rows.length).toBe(3);
    expect(rows[0].querySelectorAll('img').length).toBe(5);
    expect(rows[1].querySelectorAll('img').length).toBe(5);
    expect(rows[2].querySelectorAll('img').length).toBe(4);
  });
});
