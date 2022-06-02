import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = (props) => (
    <ul>
        {props.videoslist.map(video => (
            <li>
                <VideoItem key={video.id} videoitem={video} />
            </li>
        ))}
    </ul>
);

export default VideoList;