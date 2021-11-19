import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoDetail, VideoList } from "./components";

export default function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    handleSubmit('Adele Hello')
  },[])

  const handleSubmit = async (searchTerm) => {

    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: 'AIzaSyC25ID1CyUNIoriSWPV6tsM4MJIK_tn0qU',
        q: searchTerm
      }
    });
    const {items} = response.data
    console.log(items);

    setVideos(items)
    setSelectedVideo(items[0])
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  return (
    <Grid container spacing={10} justify="center">
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            {/* SEARCH BAR */}
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={6}>
            {/* VIDEO DETAILS */}
            <VideoDetail video={selectedVideo}/>
          </Grid>
          <Grid item xs={6}>
            {/* VIDEO LIST */}
            <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
