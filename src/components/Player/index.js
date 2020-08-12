import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'rc-slider';
import Sound from 'react-sound';

import { next, playing, prev, pause, play, repeat, handlePosition, setPosition } from '../../store/modules/main/actions';
import { Container, Current, Volume, Progress, Controls, Time, ProgressSlider } from './styles';
import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

export default function Player() {
  const player = useSelector(state => state.player);
  const position = msToTime(player.position);
  const duration = msToTime(player.duration);
  const positionShown = msToTime(player.positionShown);
  const progress = parseInt(
    (positionShown || position ) * (1000 / duration),
    10,
    ) || 0

  const dispatch = useDispatch();

  function msToTime(duration) {
    if (!duration) return null;

    let seconds = parseInt((duration / 1000) % 60, 10);

    const minutes = parseInt((duration / (1000 * 60) % 60), 10);

    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${seconds}`;
  };

  const Player = () => (

    <Container>
      { !!player.currentSong && (
      <Sound
        url={player.currentSong.file}
        playStatus={player.status}
        onFinishedPlaying={() => dispatch(next())}
          onPlaying={() => dispatch(playing({position, duration}))}
        // position={position}
        // volume={player.volume}
      />
    )}

    <Current>
      { !!player.currentSong && (
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
      )}
    </Current>

    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>

        <button type="button" onClick={() => dispatch(prev())}>
          <img src={BackwardIcon} alt="Backward" />
        </button>

        { !!player.currentSong && player.status === Sound.status.PLAYING ? (
          <button type="button" onClick={() => dispatch(pause())} >
            <img src={PauseIcon} alt="Pause" />
          </button>
        ) : (
          <button type="button" onClick={() => dispatch(play())}>
            <img src={PlayIcon} alt="Play" />
          </button>
        )}

        <button type="button" onClick={() => dispatch(next())}>
          <img src={ForwardIcon} alt="Forward" />
        </button>

        <button type="button" onClick={() => dispatch(repeat())}>
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>

      <Time>
        <span>{positionShown || position}</span>
        {/* <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: 0 }}
            max={1000}
            onChange={value => dispatch(handlePosition( value / 1000 ))}
            onAfterChange={value => dispatch(setPosition( value / 1000 ))}
            value={progress}
          />
        </ProgressSlider> */}
          <span>{duration}</span>
      </Time>
    </Progress>

    {/* <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        // value={volume}
        // onChange={() => dispatch(PlayerActions.setVolume(volume))}
      />
    </Volume> */}
    </Container>
  )

  return (
    <Player />
  )
}



