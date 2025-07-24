import PhotoRow from '@/components/Gallery/PhotoRow/photoRow';

type Photo = {
  id: number,
  src: string,
  alt: string,
};

const GalleryPage = ({ photoList , photosPerRow }: { photoList: Photo[] , photosPerRow: number }) => {
  const splitArray = (array: Photo[], length: number): Photo[][] => {
    const result: Photo[][] = []
    for (let i = 0; i < array.length; i += length) {
      result.push(array.slice(i, i + length))
    }
    return result
  }

  const photoListChunks = splitArray(photoList, photosPerRow)

  return (
    <div>
      {photoListChunks.map((photoListChunk, index) => {
        const even = index % 2 === 0;
        return (
          <PhotoRow
            key={index}
            photoListChunk={photoListChunk}
            style={even}
          />
        );
      })}
    </div>
  )
}
export default GalleryPage;