export const authEndPoint='https://accounts.spotify.com/authorize'
const redirectUri='http://localhost:3000/'
const clientId="1ccb0a741bab41f3a712a715f925acf7"
const clientSecretId="6e529d730ba0418f87551c7edac25eac"
const scopes=[
    'user-read-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-top-read',
    ' user-modify-playback-state',
]
export const loginUri=`${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
    )}&response_type=token&show_dialog=true`

    export const getTokenFromURI=()=>{
        return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial,item)=>{
            let parts=item.split('=')
            initial[parts[0]]=decodeURIComponent(parts[1]);
            return initial;
        },{})
    }