import { useState } from 'react';
import Image from 'next/image';
import ContentHeader from '../ContentHeader/ContentHeader';
import styles from './Moby.module.css'

const mobyPhotos = [
  { src: "/images/moby1.png", alt: "enjoying the beach" },
  { src: "/images/moby2.png", alt: "that's one hot dog" },
  { src: "/images/moby3.png", alt: "nappage" },
  { src: "/images/moby4.png", alt: "moby's favorite hobby is sleeping" },
  { src: "/images/moby5.png", alt: "moby in tennessee" },
  { src: "/images/moby6.png", alt: "pensive moby in the morning" },
  { src: "/images/moby7.png", alt: "moby channeling babushka" },
  { src: "/images/moby8.png", alt: "moby in the outerbanks" },
]

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  photo: { src: string; alt: string };
}

const PhotoModal: React.FC<PhotoModalProps> = ({ isOpen, onClose, photo }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-4xl hover:text-primary transition-colors"
          aria-label="Close modal"
        >
          ×
        </button>
        
        {/* Image container */}
        <div className="relative bg-base-100 rounded-lg overflow-hidden">
          <div className="relative w-full" style={{ aspectRatio: '1' }}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          
          {/* Caption */}
          {photo.alt && (
            <div className="p-4 text-center bg-base-200">
              <p className="text-lg">{photo.alt}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AboutMoby = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhotoClick = (photo: { src: string; alt: string }) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };
  return (
    <div id="moby" className={`${styles.MobyContainer} w-[100%] mt-6`}>
      <div className="mb-6">
        <ContentHeader title="moby" inCard={false} />

        <div className="px-8 mb-8">
          <p className={`${styles.MobyBodyText} mb-6`}>
            Moby is my border-aussie, half corder collie half australian shepherd, that is.
            He's about 10 years old at this point and is only barely showing signs of slowing down.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {mobyPhotos.map((photo, index) => (
              <div 
                key={index} 
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => handlePhotoClick(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          photo={selectedPhoto}
        />
      )}
    </div>
  );
}

export default AboutMoby;