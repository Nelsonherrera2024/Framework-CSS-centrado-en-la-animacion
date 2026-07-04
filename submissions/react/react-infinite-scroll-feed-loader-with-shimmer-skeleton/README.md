# Infinite Scroll Feed Loader with Shimmer Skeleton

A performant, clean, modular React infinite scrolling manager designed with an optimized intersection observer setup and smooth EaseMotion linear shimmer sweeps.

## Installation
Drop the component directory into your UI source path hierarchy.

## Component Props

| Property | Type | Description |
| :--- | :--- | :--- |
| `isLoading` | `Boolean` | Controls structural mounting of animated loading items. |
| `hasMore` | `Boolean` | Determines if more content records exist. |
| `onLoadMore` | `Function` | Fetch handler triggered when reaching viewport boundaries. |
| `skeletonCount`| `Number` | Configures structural element length allocations. |
