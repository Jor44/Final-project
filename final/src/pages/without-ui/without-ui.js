import { useDispatch, useSelector } from "react-redux";
import { deletePlayers, returnPlayers } from "../../store/players/players.action";

export const WithoutUI = () => {
    const dispatch = useDispatch()

    const playersList = useSelector((state) => state.playersReducer.playersList)
    const handleDelete = () => {
        dispatch(
            deletePlayers()
        )
    }

    const handleReturn = () => {
        const newList = [
            ...playersList,
            { name: 'Marc-André ter Stegen', year: 1992, position: 'Goalkeeper', number: 1, id: Math.random() },
            { name: 'Ronald Araujo', year: 1999, position: 'Defender', number: 4, id: Math.random() },
            { name: 'Jules Koundé', year: 1998, position: 'Defender', number: 23, id: Math.random() },
            { name: 'Marcos Alonso', year: 1990, position: 'Defender', number: 17, id: Math.random() },
            { name: 'Jordi Alba', year: 1989, position: 'Defender', number: 18, id: Math.random() },
            { name: 'Sergio Busquets', year: 1988, position: 'Midfielder', number: 5, id: Math.random() },
            { name: 'Sergi Roberto', year: 1992, position: 'Midfielder', number: 20, id: Math.random() },
            { name: 'Gavi', year: 2004, position: 'Midfielder', number: 30, id: Math.random() },
            { name: 'Robert Lewandowski', year: 1988, position: 'Forward', number: 9, id: Math.random() },
            { name: 'Ansu Fati', year: 2002, position: 'Forward', number: 10, id: Math.random() },
            { name: 'Ousmane Dembélé', year: 1997, position: 'Forward', number: 7, id: Math.random() },
        ]
        dispatch(returnPlayers(newList))
    }
    return (
        <div>
            <div>
                {
                    playersList.map((i) => {
                        return (
                            <div key={i}>
                                <p>{i.name}/ {i.year}/ {i.position}/ {i.number}</p>
                            </div>
                        )
                    })
                }
            </div>
            <button style={{ marginRight: '5px' }} onClick={handleDelete}>Delete</button>
            <button onClick={handleReturn}>Return</button>
        </div>
    )
}