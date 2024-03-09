import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from "./spotify.module.css";

const Spotify = () => {
  const data = useStaticQuery(graphql`
    query spotifyQuery {
      allContentfulSpotifyPlaylist(limit: 5, sort: { updatedAt: DESC }) {
        nodes {
          id
          embedLink
        }
      }
    }
  `);

  // Check if there are no playlists available
  if (!data || !data.allContentfulSpotifyPlaylist) {
    return <h3>No playlists available</h3>;
  }

  console.log(data);
  const spotifyPlaylists = data.allContentfulSpotifyPlaylist.nodes;

  return (
    <div className={styles.playlistContainer}>
      {spotifyPlaylists.map((playlist) => (
        <iframe
          title={playlist.title}
          key={playlist.id}
          src={playlist.embedLink}
          width="100%"
          height="380"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      ))}
    </div>
  );
};

export default Spotify;
