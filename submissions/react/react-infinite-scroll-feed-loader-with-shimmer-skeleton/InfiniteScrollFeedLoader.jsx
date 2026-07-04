import React, { useEffect, useRef } from 'react';
import './InfiniteScrollFeedLoader.css';

const InfiniteScrollFeedLoader = ({ 
  isLoading, 
  hasMore, 
  onLoadMore, 
  skeletonCount = 3 
}) => {
  const observerRef = useRef(null);

  useEffect(() => {
    if (!hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [isLoading, hasMore, onLoadMore]);

  // Shimmer Card Element Structure
  const renderSkeletons = () => {
    return Array.from({ length: skeletonCount }).map((_, index) => (
      <div key={`skeleton-${index}`} className="shimmer-feed-card">
        <div className="shimmer-element shimmer-avatar" />
        <div className="shimmer-text-wrapper">
          <div className="shimmer-element shimmer-title" />
          <div className="shimmer-element shimmer-subtitle" />
        </div>
        <div className="shimmer-element shimmer-media" />
      </div>
    ));
  };

  return (
    <div className="infinite-scroll-feed-container">
      {isLoading && renderSkeletons()}
      {hasMore && !isLoading && (
        <div ref={observerRef} className="infinite-scroll-trigger">
          <div className="shimmer-loading-bar" />
        </div>
      )}
      {!hasMore && (
        <div className="infinite-scroll-end">
          <p>You have caught up with everything!</p>
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollFeedLoader;
