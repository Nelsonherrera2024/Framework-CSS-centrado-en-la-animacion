import React, { useState } from 'react';

export default function Tooltip({ content, position = 'top', children }) {
  const [isVisible, setIsVisible] = useState(false);

  // Position utility mapping matching EaseMotion classes
  const positionClasses = {
    top: 'ease-bottom-full ease-left-1/2 ease--translate-x-1/2 ease-mb-2',
    bottom: 'ease-top-full ease-left-1/2 ease--translate-x-1/2 ease-mt-2',
    left: 'ease-right-full ease-top-1/2 ease--translate-y-1/2 ease-mr-2',
    right: 'ease-left-full ease-top-1/2 ease--translate-y-1/2 ease-ml-2',
  };

  return (
    <div 
      className="ease-relative ease-inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`ease-absolute ease-center ${positionClasses[position]} ease-fade-in ease-slide-up`}>
          {content}
        </div>
      )}
    </div>
  );
}
