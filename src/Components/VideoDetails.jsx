import React, { useContext, useEffect } from 'react';
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
  const { id } = useParams;
  const { setLoading } = useContext(Context);

  useEffect(() => {
    fetchDataFromApi();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDataFromApi(`video/details/?id=${id}`).then(res => {
      console.log(res);
      setVideo(res);
      setLoading(false);
    })
  }

  return (
    <div>
      rs
    </div>
  )
}

export default VideoDetails