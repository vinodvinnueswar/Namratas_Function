import React, { useEffect, useRef, useState } from "react";


const MusicPlayer = () => {
   const audioRef = useRef();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const enableAudio = () => {
      audioRef.current.play();
      setPlaying(true);
      document.removeEventListener("click", enableAudio);
    };
    document.addEventListener("click", enableAudio);
  }, []);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="music-container">
      <audio ref={audioRef} loop>
        <source src="/music/Music.mp3" type="audio/mp3" />
      </audio>

      <button onClick={toggleMusic} className={playing ? "spin" : ""}>
        {playing ? "🎵" : "🔇"}
      </button>


    </div>
  );
}

export default MusicPlayer