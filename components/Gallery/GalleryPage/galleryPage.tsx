import { useState } from 'react';
import PhotoRow from '@/components/Gallery/PhotoRow/photoRow';
import Lightbox from '@/components/Gallery/Lightbox/lightbox';

type Photo = {
  id: number;
  src: string;
  alt: string;
};

export interface GalleryPageProps {
  photoList: Photo[],
  photosPerRow: number,
  backgroundColor: string,
  alternate: boolean
}

const GalleryPage = ({ 
  photoList, 
  photosPerRow, 
  backgroundColor, 
  alternate, 
}: GalleryPageProps) => {
  const [lightboxOpen, setlightboxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setlightboxOpen(true);
  };

  const closeLightbox = () => setlightboxOpen(false);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((i) => (i === 0 ? photoList.length - 1 : i - 1));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((i) => (i === photoList.length - 1 ? 0 : i + 1));
  };

  const splitArray = (array: Photo[], length: number): Photo[][] => {
    const result: Photo[][] = [];
    for (let i = 0; i < array.length; i += length) {
      result.push(array.slice(i, i + length));
    }
    return result;
  };

  const photoListChunks = splitArray(photoList, photosPerRow);

  return (
    <div>
      {photoListChunks.map((photoListChunk, rowIndex) => {
        if (alternate && rowIndex % 2 === 0) {
          return (
            <PhotoRow
              key={rowIndex}
              photoListChunk={photoListChunk}
              onImageClick={openLightbox}
              backgroundColor='transparent'
            />
          );
        }
        return (
          <PhotoRow
            key={rowIndex}
            photoListChunk={photoListChunk}
            onImageClick={openLightbox}
            backgroundColor={backgroundColor}
          />
        );
      })}

      <Lightbox
        open={lightboxOpen}
        photoList={photoList}
        photoIndex={photoIndex}
        close={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
      />
    </div>
  );
};

export default GalleryPage;
