export const initialState={
    user:null,
    playlists:[],
    playing:false,
    recentPlay:[],
    newRelease:[],
    item:null

}
 const reducer=(state,action)=>{
    
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists:action.playlists

            }
        case 'SET_RECENT_SONG':
            return {
                ...state,
                recentPlay:action.recentPlay
            }    
        case 'SET_NEW_RELEASE':
            return{
                ...state,
                newRelease:action.newRelease
            }    

        default:
            return state;
    }
}
export default reducer