import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import SearchHeader from './search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube
    .search(query)//
    //.then(videos => setVideos(videos));
    .then(console.log);
  };

  useEffect (() => {
    youtube
    .mostPopular()//
    .then(videos => setVideos(videos));
    //.then(console.log);
  },[]);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videoslist={videos} />
    </div>
    
  );
}

export default App;
