import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'rc-slider';
import Sound from 'react-sound';

import { Creators as PlayerActions } from '../../store/ducks/player';
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
  const position = useSelector(state => msToTime(state.player.position));
  const duration = useSelector(state => msToTime(state.duration));
  const positionShown = useSelector(state => msToTime(state.player.positionShown));
  const progress = useSelector(state => parseInt(
    state.player.positionShown || state.player.position ) * ( 1000 / state.player.duration), 10,) || 0;
  const volume = player.volume;

  console.log(player.status)
  console.log(position)
  console.log(duration)
  console.log(positionShown)
  console.log(volume)

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
        onFinishedPlaying={() => dispatch(PlayerActions.next())}
        // onPlaying={() => dispatch(PlayerActions.playing())}
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

        <button type="button" onClick={() => dispatch(PlayerActions.prev())}>
          <img src={BackwardIcon} alt="Backward" />
        </button>

        { !!player.currentSong && player.status === Sound.status.PLAYING ? (
          <button type="button" onClick={() => dispatch(PlayerActions.pause())} >
            <img src={PauseIcon} alt="Pause" />
          </button>
        ) : (
          <button type="button" onClick={() => dispatch(PlayerActions.play())}>
            <img src={PlayIcon} alt="Play" />
          </button>
        )}

        <button type="button" onClick={() => dispatch(PlayerActions.next())}>
          <img src={ForwardIcon} alt="Forward" />
        </button>

        <button type="button" onClick={() => dispatch(PlayerActions.repeat())}>
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
            onChange={value => dispatch(PlayerActions.handlePosition( value / 1000 ))}
            onAfterChange={value => dispatch(PlayerActions.setPosition( value / 1000 ))}
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
        value={volume}
        onChange={() => dispatch(PlayerActions.setVolume(volume))}
      />
    </Volume>
    </Container>
  )

  return (
    <Player />
  )
}



