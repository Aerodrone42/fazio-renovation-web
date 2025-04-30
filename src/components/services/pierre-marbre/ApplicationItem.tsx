
import React from 'react';
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
  return (
    <div>
      <h3 className="text-2xl font-semibold text-fazio-dark-green mb-6">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg shadow-md mb-6">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
            target.alt = "Image temporairement indisponible";
          }}
        />
      </AspectRatio>
    </div>
  );
};

export default ApplicationItem;
