import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({video, video : {snippet}}) => {
    return (
        <section className={styles.detail}>
            <iframe 
                className={styles.vide}
                title={snippet.title}
                type="text/html" 
                width="100%" 
                height="500px"
                src={`https://www.youtube.com/embed/${video.id}`}
                frameborder="0" 
                allowfullscreen
            ></iframe>
            <h2>{snippet.title}</h2>
            <h3>{snippet.channelTitle}</h3>
            <pre className={styles.discription}>{snippet.description}</pre>
        </section>
    )
}

export default VideoDetail;