export const Skeleton = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-image"></div>
            <div>
                <div className="skeleton-line" style={{ width: '90%' }}></div>
                <div className="skeleton-line" style={{ width: '70%' }}></div>
                <div className="skeleton-line" style={{ width: '50%', marginTop: '16px' }}></div>
                <div className="skeleton-button"></div>
            </div>
        </div>
    );
};