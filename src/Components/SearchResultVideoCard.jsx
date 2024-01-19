import React from 'react';
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from '../shared/VideoLength';


function SearchResultVideoCard({ video }) {
    return (
        <Link to={`/video/${video?.videoId}`}>
            <div className="flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-white/[0.1] rounded-xl md:p-4">
                <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w0-full md:w-48 lg:w-64 xl:w-80 rounded-xl bg-slate-800 overflow-hidden">
                    <img className='h-full w-full object-cover' src={video?.thumbnails?.[0]?.url} alt="" />
                    {video?.lengthSeconds && (
                        <VideoLength time={video?.lengthSeconds} />
                    )}
                </div>
            </div>
        </Link>
    )
}

export default SearchResultVideoCard