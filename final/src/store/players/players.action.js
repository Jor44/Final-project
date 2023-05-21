export const DELETE_PLAYERS = 'DELETE_PLAYERS';
export const RETURN_PLAYERS = 'RETURN_PLAYERS';

export const deletePlayers = () => {
    return {
        type: DELETE_PLAYERS
    }
}

export const returnPlayers = (newList) => {
    return {
        type: RETURN_PLAYERS,
        payload: newList
    }
}