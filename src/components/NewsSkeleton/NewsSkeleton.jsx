import { SkeletonCard } from './NewsSlkeletonStyled';

export default function NewsSkeleton() {
  return (
    <SkeletonCard>
      <div className="thumbnail"></div>
      <div className="details">
        <div className="title"></div>
        <div className="description"></div>
      </div>
    </SkeletonCard>
  );
}
