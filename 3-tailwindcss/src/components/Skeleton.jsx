export const Skeleton = () => {
    return (
    <div className="rounded-[14px] shadow-lg w-[300px] p-4 mb-5 flex flex-col gap-3 animate-pulse" style={{ backgroundColor: 'var(--card-color)' }}>
            <div className="w-full h-[180px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg"></div>
            <div>
                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-[90%] mb-2"></div>
                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-[70%] mb-2"></div>
                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-[50%] mt-4 mb-2"></div>
                <div className="w-20 h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full mt-3"></div>
            </div>
        </div>
    );
};