import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { Container, NewPlaylist, Nav } from "./styles";
import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

export default function Sidebar() {
  const playlists = useSelector(state => state.playlists);

  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <Link to="/">Navigate</Link>
          </li>
          <li>
            <a href="/">Radio</a>
          </li>
        </Nav>

        <Nav>
            <li>
              <span>YOUR LIBRARY</span>
            </li>
            <li>
              <a href="/">Your Daily Mix</a>
            </li>
            <li>
              <a href="/">Recently Played</a>
            </li>
            <li>
              <a href="/">Music</a>
            </li>
            <li>
              <a href="/">Albums</a>
            </li>
            <li>
              <a href="/">Artists</a>
            </li>
            <li>
              <a href="/">Station</a>
            </li>
            <li>
              <a href="/">Local Files</a>
            </li>
            <li>
              <a href="/">Videos</a>
            </li>
            <li>
              <a href="/">Podcasts</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLISTS</span>





            </li>
            {playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
      </div>

      <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Add Playlist" />
          <p>New Playlist</p>
        </NewPlaylist>
    </Container>
  )
}
