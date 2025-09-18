import styled, { keyframes } from "styled-components";

const skeletonLoading = keyframes`
    0% { background-position: -200px 0; }
    100% { background-position: calc(200px + 100%) 0; }
`;

const SkeletonCard = styled.div`
    background-color: var(--card-color);
    border-radius: 14px;
    box-shadow: 0 2px 10px var(--shadow-color);
    width: 300px;
    padding: 1rem;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;
const SkeletonImage = styled.div`
    width: 100%;
    height: 180px;
    background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
    border-radius: 8px;
    animation: ${skeletonLoading} 1.2s infinite linear;
`;
const SkeletonLine = styled.div`
    height: 16px;
    background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
    border-radius: 4px;
    margin-bottom: 8px;
    animation: ${skeletonLoading} 1.2s infinite linear;
`;
const SkeletonButton = styled.div`
    width: 80px;
    height: 32px;
    background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
    border-radius: 16px;
    margin-top: 12px;
    animation: ${skeletonLoading} 1.2s infinite linear;
`;

export const Skeleton = () => {
        return (
                <SkeletonCard>
                        <SkeletonImage />
                        <div>
                                <SkeletonLine style={{ width: '90%' }} />
                                <SkeletonLine style={{ width: '70%' }} />
                                <SkeletonLine style={{ width: '50%', marginTop: '16px' }} />
                                <SkeletonButton />
                        </div>
                </SkeletonCard>
        );
};