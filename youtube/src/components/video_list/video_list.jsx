import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({videoslist,onVideoClick,display}) => (
    <ul className={styles.videos}>
        {videoslist.map(video => (
            <VideoItem 
                key={video.id} 
                videoitem={video} 
                onVideoClick={onVideoClick}
                display={display}
             />
        ))}
    </ul>
);

export default VideoList;