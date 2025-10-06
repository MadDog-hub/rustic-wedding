import { useAnimationContext } from '@/contexts/AnimationContext';

// Image loop images - New urban nighttime prenup photos
import imageLoop1 from '@assets/imageLoop_1759741344823.png';
import imageLoop2 from '@assets/imageloop2_1759741344823.png';
import imageLoop3 from '@assets/imageLOOP3_1759741344824.png';
import imageLoop4 from '@assets/imageLoop_1759741344823.png';
import imageLoop5 from '@assets/imageloop2_1759741344823.png';
import imageLoop6 from '@assets/imageLOOP3_1759741344824.png';
import imageLoop7 from '@assets/imageLoop_1759741344823.png';

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  const images = [
    imageLoop1,
    imageLoop2,
    imageLoop3,
    imageLoop4,
    imageLoop5,
    imageLoop6,
    imageLoop7,
    imageLoop1,
    imageLoop2
  ];

  return (
    <section id="slideshow" className="image-loop-section section-hard-blue w-full overflow-hidden py-4">
      <div className="image-loop-container">
        <div className={`${animationsEnabled ? 'image-loop-track' : 'image-loop-track-static'}`}>
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={`set1-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Urban nighttime couple moment ${index + 1}`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-${index + 1}`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {images.map((image, index) => (
            <div key={`set2-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Urban nighttime couple moment ${index + 1} duplicate`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-dup-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageLoop;
