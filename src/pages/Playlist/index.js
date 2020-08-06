import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { Container, Header, SongList, SongItem } from './styles';
import { Creators as PlaylistsActions } from '../../store/ducks/playlistDetails';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';
import Loading from '../../components/Loading';

export default function Playlist() {
  const [selectedSongs, setSelectedSongs] = useState([]);
  const playlistDetails = useSelector(state => state.playlistDetails);

  const dispatch = useDispatch();

  const { id } = useParams();
  useMemo(() => dispatch(PlaylistsActions.getPlaylistDetailsRequest(id)), [dispatch, id]);

  const playlist = playlistDetails.data;

  return (
    playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
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
              onClick={() => this.props.loadSong(playlist.songs[0], playlist.songs)}>
                PLAY
            </button>
            }
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <tr />
            <tr><th>Title</th></tr>
            <tr><th>Artist</th></tr>
            <tr><th>Album</th></tr>
            <tr><th><img src={ClockIcon} alt="Duration" /></th></tr>
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
    )
  )
}
