import React from 'react';

function Video({src, onVideoEnd}) {

    return (
        <video onEnded={onVideoEnd} className="w-[100%] h-[600px] mx-auto" controls muted>
            <source src={src} type="video/mp4"/>
        </video>);
}

export default Video;