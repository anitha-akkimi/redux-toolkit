import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { postAdded } from "./postSlice";
import { allUsers } from "./userSlice";



const AddFormPost = () => {

    const users = useSelector(allUsers)

    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const onSavePost = () => {
        if(title && content) {
            dispatch(
                postAdded(title,content, userId)
                    
                
            )

            setTitle('')
            setContent('')
            
        }
    
    }

    const renderAuthors = () => {
        return(
            <>
            <label>Author</label>
            <br/>
            <select onChange={e => setUserId(e.target.value)} className="select-style">
                <option value='unknown'>unknown</option>
                {users.map(user => <option key={user.id} value={user.name}>{user.name}</option>)}
            </select>
            </>
        )
    }

    return(
        <form>
            <h2>Add a New Post</h2>
            <label htmlFor="postTitle">Title</label>
            <br/>
            <input id="postTitle" placeholder="Enter Title" className="input-title-style" onChange={(e) => setTitle(e.target.value)}/>
            <br/>
            {renderAuthors()}
            <br/>
            <label htmlFor="postContent">Content</label>
            <br/>
            <textarea rows={5} cols={150} id="postContent" onChange={(e) => setContent(e.target.value)} className="text-style" placeholder="Enter Content"/>
            <br/>
            <button type="button" className="btn-style" onClick={onSavePost}>Save Post</button>
        </form>
    )
}

export default AddFormPost