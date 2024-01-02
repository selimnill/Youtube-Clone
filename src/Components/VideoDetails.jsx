import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { abbreviateNumber } from 'js-abbreviation-number';
import { fetchDataFromApi } from "../utils/api";
import SuggestionVideoCard from "./SuggestionVideoCard";
import { Context } from '../Context/ContextApi';


const VideoDetails = () => {

  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h"); 
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then(res => {
      console.log(res);
      setVideo(res);
      setLoading(false);
    })
  };

  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataFromApi(`video/related-contents/?id=${id}`).then(res => {
      console.log(res);
      setVideo(res);
      setLoading(false);
    })
  }

  return (
    <div className='flex justify-center flex-row h-[calc('>
      rs
    </div>
  )
}

export default VideoDetails