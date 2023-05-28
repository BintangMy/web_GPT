import React from 'react';
import styles from './LoadingMessage.module.css';
import Image from 'next/image';
const LoadingMessage = ({ image }) => {
    return (
        <div className='flex my-3  justify-start gap-2 mr-10'>
            <Image
                loader={({ src }) => src}
                src={image}
                className="rounded-full"
                width={30}
                height={30}
                alt="bot_image"
                style={{ maxWidth: "30px", maxHeight: "30px" }}
            />
            <div className={styles.loadingDots}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
            </div>
        </div>
    );
};

export default LoadingMessage;
