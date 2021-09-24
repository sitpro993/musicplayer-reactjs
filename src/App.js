import { useState } from 'react';
import Player from './components/Player/Player';
import './App.scss'
import Playlist from './components/Player/Playlist';

function App() {
  const [songs] = useState([
    {
      title: "Cartoon - [NCS Release]",
      artist: "On & On (feat. Daniel Levi)",
      img_src: "./images/song-1.png",
      src: "./music/song-1.mp3"
    },
    {
      title: 'Thở',
      artist: 'Da LAB ft. Juky San',
      img_src: "./images/song-2.png",
      src: "./music/song-2.mp3"
    },
    {
      title: 'Bad Habits',
      artist: 'Ed Sheeran',
      img_src: "./images/song-3.png",
      src: "./music/song-3.mp3"
    },
    {
      title: 'Begin',
      artist: 'Gaho',
      img_src: "./images/song-4.png",
      src: "./music/song-4.mp3"
    },
    {
      title: 'Diamond',
      artist: 'Ha Hyun Woo (Guckkasten)',
      img_src: "./images/song-5.png",
      src: "./music/song-5.mp3"
    },
    {
      title: 'With you(Ngẫu hứng)',
      artist: 'Nick Strand, Hoaprox, Mio',
      img_src: "./images/song-6.png",
      src: "./music/song-6.mp3"
    },
    {
      title: 'Khi em lớn',
      artist: 'Orange, Hoàng Dũng',
      img_src: "./images/song-7.png",
      src: "./music/song-7.mp3"
    },
    {
      title: 'Trốn tìm',
      artist: 'Đen vâu',
      img_src: "./images/song-8.png",
      src: "./music/song-8.mp3"
    },
    {
      title: 'I do',
      artist: '911 band',
      img_src: "./images/song-9.png",
      src: "./music/song-9.mp3"
    },
    {
      title: 'Believer',
      artist: 'Imagine dragon',
      img_src: "./images/song-10.png",
      src: "./music/song-10.mp3"
    },

  ]);


  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // const [nextSongIndex, setNextSongIndex] = useState(0);

  // useEffect(() => {
  //   setNextSongIndex(() => {
  //     if (currentSongIndex + 1 > songs.length - 1) {
  //       return 0;
  //     } else {
  //       return currentSongIndex + 1;
  //     }
  //   });
  // }, [currentSongIndex, songs.length]);



  return (
    <div className="player" >
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        //nextSongIndex={nextSongIndex}
        songs={songs}
      />
      <Playlist
        songs={songs}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}

      />
    </div>
  );
}

export default App;
