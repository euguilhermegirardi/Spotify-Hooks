import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Container, Header, SongList, SongItem } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';
import Loading from '../../components/Loading';

export default function Playlist() {
  const [selectedSong, setSelectedSong] = useState(null);
  const playlistDetails = useSelector(state => state.playlistDetails);

  const renderDetails = () => {
    const playlist = playlistDetails.data;

    return (
      <Container>
        <Header>
          <img
          src={playlist.thumbnail}
          alt={playlist.title}
          />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            { !!playlist.songs && <p>{playlist.songs.length}
            {playlist.songs.length === 1 ? (<small> song</small>) : (<small> songs</small>)} </p> }


            { !!playlist.songs &&
              <button
              type="button"
              onClick={() => loadSong(playlist.songs[0], playlist.songs)}>
                PLAY
            </button>
            }
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th><img src={ClockIcon} alt="Duration" /></th>
          </thead>

          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>No song registered.</td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <SongItem
                  key={song.id}

                  onClick={() => setSelectedSong({ selectedSong: song.id })}

                  onDoubleClick={() => props.loadSong(song, playlist.songs)}

                  selected={state.selectedSong === song.id}

                  playing={props.currentSong && props.currentSong.id === song.id}
                >
                  <td>
                    <img src={PlusIcon} alt="Add" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>{song.duration}</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  }

  return playlistDetails.loading ? (
    <Container loading>
      <Loading />
      </Container>
        ) : (
      renderDetails()
      );
}
