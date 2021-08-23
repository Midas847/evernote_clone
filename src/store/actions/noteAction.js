export const addNote = (note) =>{
    return (dispatch, getState, {getFirestore}) =>{
        const firestore = getFirestore()
        firestore.collection('notes')
            .add({
                ...note,
                favorite: false,
                createdAt: new Date()
            })
            .then(()=>{
                console.log('add the note successfully');
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const deleteNote =  (note) =>{
    return (dispatch, getState, {getFirestore}) =>{
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).delete()
            .then(()=>{
                console.log('deleted the note successfully');
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const toggleFav =  (note) =>{
    return (dispatch, getState, {getFirestore}) =>{
        const favstatus = !note.favorite
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            favorite: favstatus
        }).then(()=>{
            console.log("Toggle Favorite success")
        }).catch(err=>{
            console.log(err)
        })
    }
}

export const updateNote =  (note) =>{
    return (dispatch, getState, {getFirestore}) =>{
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            title: note.title,
            content: note.content
        }).then(()=>{
            console.log("Toggle Favorite success")
        }).catch(err=>{
            console.log(err)
        })
    }
}