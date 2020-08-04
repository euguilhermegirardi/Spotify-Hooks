import React from 'react';
import { useSelector } from 'react-redux';

export default function Browser() {
  const playlists = useSelector(state => state.reducers);

  console.log(playlists);

  return (
    <>
      <h1>Test</h1>

      <div>
      {playlists.data.map(playlist => (
        <ul key={playlist.id}>

            <li>{playlist.title}</li>

        </ul>
      ))}
      </div>
    </>
  )
}
