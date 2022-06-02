import React from 'react';

const VideoItem = (props) => {
    return (
        <>
            <h1>{props.videoitem.snippet.title}</h1>
            <div>{props.videoitem.snippet.description}</div>
        </>
    )
};


export default VideoItem;