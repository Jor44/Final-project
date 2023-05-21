import { useState } from "react";
import Header from "../header/header";
import terstegen from '../../assets/images/ter-stegen.png';
import ronald from '../../assets/images/ronald.webp';
import alonso from '../../assets/images/alonso.png';
import jules from '../../assets/images/jules.png';
import alba from '../../assets/images/jordi.webp';
import busquest from '../../assets/images/sergio.png';
import roberto from '../../assets/images/roberto.webp';
import gavi from '../../assets/images/gavi.png';
import leva from '../../assets/images/leva.webp';
import fati from '../../assets/images/fati.png';
import dembele from '../../assets/images/dembele.png';

import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export const Users = () => {
    const [list, setList] = useState([
        { com: '', image: terstegen, name: 'Marc-André ter Stegen', year: 1992, position: 'Goalkeeper', number: 1, id: Math.random() },
        { com: '', image: ronald, name: 'Ronald Araujo', year: 1999, position: 'Defender', number: 4, id: Math.random() },
        { com: '', image: jules, name: 'Jules Koundé', year: 1998, position: 'Defender', number: 23, id: Math.random() },
        { com: '', image: alonso, name: 'Marcos Alonso', year: 1990, position: 'Defender', number: 17, id: Math.random() },
        { com: '', image: alba, name: 'Jordi Alba', year: 1989, position: 'Defender', number: 18, id: Math.random() },
        { com: '', image: busquest, name: 'Sergio Busquets', year: 1988, position: 'Midfielder', number: 5, id: Math.random() },
        { com: '', image: roberto, name: 'Sergi Roberto', year: 1992, position: 'Midfielder', number: 20, id: Math.random() },
        { com: '', image: gavi, name: 'Gavi', year: 2004, position: 'Midfielder', number: 30, id: Math.random() },
        { com: '', image: leva, name: 'Robert Lewandowski', year: 1988, position: 'Forward', number: 9, id: Math.random() },
        { com: '', image: fati, name: 'Ansu Fati', year: 2002, position: 'Forward', number: 10, id: Math.random() },
        { com: '', image: dembele, name: 'Ousmane Dembélé', year: 1997, position: 'Forward', number: 7, id: Math.random() },
    ])

    const [show, setShow] = useState(null);
    const [com, setCom] = useState('')

    Users.propTypes = {
        list: PropTypes.string,
        setList: PropTypes.func,
    }

    const handleDel = (id) => {
        const delList = list.filter((i) => i.id !== id)
        setList(delList)
    }

    const changeComment = (e) => {
        setCom(e.target.value)
    }

    const handleCommentOpen = (i) => {
        setShow(i);
        setCom(i.com);
    };

    const handleCommentSave = () => {
        const updatedUsers = list.map((i) =>
            i.number === show.number ? { ...i, com: com } : i
        );
        setList(updatedUsers);
        setShow(null);
        setCom('');
    };

    return (
        <div className="main-cnt">
            <Header list={list} setList={setList} />
            <div className="list-div">
                {
                    list.map((i) => {
                        return (
                            <div key={i.id} style={{ position: 'relative' }}>
                                <Link to={`/user-details/${i.number}`}>
                                    <div className="titles">

                                        <p><b>{i.name}</b></p>
                                        <img className="player-img" src={i.image} alt="img" />
                                        <div><p>{i.position}</p> <p>{i.year}</p> </div> <p className="number">{i.number}</p>
                                        <p>Comment: {i.com}</p>
                                    </div>
                                </Link>
                                <button onClick={() => handleCommentOpen(i)} className="comment-btn">&#9997;</button>
                                <button onClick={() => handleDel(i.id)} className="del-btn">X</button>
                            </div>
                        )
                    })

                }

            </div>
            {
                show && (

                    <div className="comment-div">
                        <h3>Add Comment for {show.name}</h3>
                        <input value={com} onChange={changeComment} className="com-input" type="text" />
                        <button onClick={handleCommentSave} className="add-com">Add</button>

                    </div>
                )}
        </div>
    )
}