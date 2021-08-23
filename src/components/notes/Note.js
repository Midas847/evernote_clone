import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteNote, toggleFav } from '../../store/actions/noteAction';
import moment from 'moment'
import {Link} from 'react-router-dom'

const Note = ({note}) => {
    const dispatch = useDispatch();
    const deleteNoteHandler = () =>{
        dispatch(deleteNote(note));
    }

    const ToggleFavoriteHandler = () =>{
        dispatch(toggleFav(note));
    }
    const editNoteHandler = () =>{
        dispatch({type:'EDIT_NOTE', payload: note})
    }
    const heartMarkup = note.favorite ? 'favorite' : 'favorite_border';
    return (
        <div className="note white">
            <div className="right-align">
                <i className="material-icons red-text" style={{cursor: 'pointer'}} onClick={ToggleFavoriteHandler}>{heartMarkup}</i>
                <i className="material-icons" style={{cursor: 'pointer'}} onClick={deleteNoteHandler}>delete</i>
            </div>
            <Link to={"/note/" + note.id}>
                <h5 className="black-text">{note.title}</h5>
            </Link>
            <p className="truncate">{note.content}</p>
            <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
            <div className="right-align">
                <Link to={`/editform/${note.id}`}>
                    <i className="material-icons black-text" onClick={editNoteHandler}>edit</i>
                </Link>
            </div>
        </div>
    )
}

export default Note;