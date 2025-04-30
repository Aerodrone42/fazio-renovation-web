
import React, { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ApplicationItemProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const ApplicationItem: React.FC<ApplicationItemProps> = ({
  title,
  description,
  imageSrc,
  imageAlt
}) => {
  const [imgError, setImgError] = useState(false);
  
  const handleImageError = () => {
    console.log(`Image failed to load: ${imageSrc}`);
    setImgError(true);
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-fazio-dark-green mb-6">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg shadow-md mb-6">
        <img 
          src={imgError ? "https://via.placeholder.com/600x400?text=Image+non+disponible" : imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </AspectRatio>
    </div>
  );
};

export default ApplicationItem;
