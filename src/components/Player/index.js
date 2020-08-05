import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'rc-slider';
import Sound from 'react-sound';

import { Container, Current, Volume, Progress, Controls, Time, ProgressSlider } from './styles';
import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

export default function Player(player,
  play,
  pause,
  next,
  prev,
  playing,
  position,
  duration,
  handlePosition,
  setPosition,
  positionShown,
  progress,
  setVolume) {

    function msToTime(duration) {
      if (!duration) return null;

      let seconds = parseInt((duration / 1000) % 60, 10);

      const minutes = parseInt((duration / (1000 * 60) % 60), 10);

      seconds = seconds < 10 ? `0${seconds}` : seconds;

      return `${minutes}:${seconds}`;
    };


  return (
    <Container>
    { !!player.currentSong && (
      <Sound
        url={player.currentSong.file}
        playStatus={player.status}
        onFinishedPlaying={next}
        onPlaying={playing}
        position={player.position}
        volume={player.volume}
      />
    )}

    <Current>
      {/* { !!player.currentSong && (
        <>
          <img
            src={player.currentSong.thumbnail}
            alt={player.currentSong.title}
          />
          <div>
            <span>{player.currentSong.title}</span>
            <small>{player.currentSong.author}</small>
          </div>
        </>
      )} */}
    </Current>

    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>

        <button type="button" onClick={prev}>
          <img src={BackwardIcon} alt="Backward" />
        </button>

        {/* { !!player.currentSong && player.status === Sound.status.PLAYING ? (
          <button type="button" onClick={pause} >
            <img src={PauseIcon} alt="Pause" />
          </button>
        ) : (
          <button type="button" onClick={play}>
            <img src={PlayIcon} alt="Play" />
          </button>
        )} */}

        <button type="button" onClick={next}>
          <img src={ForwardIcon} alt="Forward" />
        </button>

        <button type="button">
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>

      <Time>
        <span>{positionShown || position}</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: 0 }}
            max={1000}
            onChange={value => handlePosition( value / 1000 )}
            onAfterChange={value => setPosition( value / 1000 )}
            value={progress}
          />
        </ProgressSlider>
          <span>{duration}</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        value={player.volume}
        onChange={setVolume}
      />
    </Volume>

  </Container>
  )
}


