import Login from "./container/Login";
import { useEffect, useState,useContext } from "react";
import Spotify from "./container/Spotify";
import { getTokenFromURI } from "./container/spot";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayer } from "./contextApi/DataLayer.js";

const spotify=new SpotifyWebApi();
function App() { 
  // const s=useContext(StateProvider)
  const [token,setToken]=useState(null)
  const [{user ,newRelease},dispatch]=useDataLayer();
  console.log(newRelease)
  useEffect(() => {
       const hash=getTokenFromURI();
       window.location.hash="";
      const _token=hash.access_token;
      if(_token){
        spotify.setAccessToken(_token);
        spotify.getMe().then((user)=>{

          dispatch({
            type:'SET_USER',
            user:user
          })
          
        })
        spotify.getUserPlaylists().then(playlists=>{

          dispatch({
            type:'SET_PLAYLISTS',
            playlists:playlists
          })
        })
        spotify.getMyRecentlyPlayedTracks().then(song=>{
          dispatch({
            type:'SET_RECENT_SONG',
            recentPlay:song

          })
        })
        spotify.getNewReleases().then(song=>{
          dispatch({
            type:'SET_NEW_RELEASE',
            newRelease:song

          })
        })
                setToken(_token)
      }
      //  console.log('i have token',token)
      console.log(spotify)
     
  
  }, [])
   
  // const token=null
  return (
    <div className="App">
      {
        token?(<Spotify spotify={spotify}/>):(
          <Login/>

        )
      }
    </div>
  );
}

export default App;
