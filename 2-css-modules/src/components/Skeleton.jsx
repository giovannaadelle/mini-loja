import styles from "./Skeleton.module.css"

export const Skeleton = () => {
    return (
        <div className={styles.card}>
            <div className={styles.image}></div>
            <div>
                <div className={styles.line} style={{ width: '90%' }}></div>
                <div className={styles.line} style={{ width: '70%' }}></div>
                <div className={styles.line} style={{ width: '50%', marginTop: '16px' }}></div>
                <div className={styles.button}></div>
            </div>
        </div>
    );
};