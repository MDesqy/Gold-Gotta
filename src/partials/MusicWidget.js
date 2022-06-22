import React from 'react';
import AppleWidget from "../images/banner/music-widget/applewidget.png";
import SpotifyWidget from "../images/banner/music-widget/spotifywidget.png";

function MusicWidget() {
  return (
    <section>
      <div className="max-w-full flex mx-auto py-32 px-4 sm:px-6 relative">
        <div className="w-1/2">
          {/* Apple Music Widget */}
          
          {/* <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;background:transparent;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/7220-reloaded/1614870185"></iframe> */}

          <img
          src={AppleWidget}
        ></img>

        </div>
        <div className="w-1/2">
          {/* Spotify Widget */}
          
          {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1mrEyUpk65kpk6v8zFwT49?utm_source=generator" width="300" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}

          <img
          src={SpotifyWidget}
        ></img>
        </div>
      </div>

      {/* <div className="max-w-full flex mx-auto pt-32 px-4 sm:px-6 relative">
        <div className="w-1/2">
          <h1 className="h1 weight-bold text-about mb-8 pt-about pl-about">
            Lorem ipsum dolor sit amet, consectetur.
          </h1>
          <p className="h2 weight-thin align-center pl-about">lorem ipsum dolor</p>
        </div>
        <div className="w-1/2">
          <h1 className="h1 weight-bold text-about mb-8 pt-about pl-about">
            Lorem ipsum dolor sit amet, consectetur.
          </h1>
          <p className="h2 weight-thin align-center pl-about">lorem ipsum dolor</p>
        </div>
      </div> */}

    </section>
  );
}

export default MusicWidget;