import './SkeletonLoading.css'

export default function JobSkeleton(){
    return(
        <div className="skeleton-row">
            <div className="skeleton-box skeleton-logo"></div>
            <div className="skeleton-box skeleton-title"></div>
            <div className="skeleton-box skeleton-text"></div>
            <div className="skeleton-box skeleton-text"></div>
            <div className="skeleton-box skeleton-badge"></div>
        </div>
    )
}