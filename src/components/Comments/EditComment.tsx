import { useAppDispatch } from "../../app/store"
import { updateCommentUser } from "../../features/comments/commentsSlice";
import {useState} from "react"
const EditComment = ({ commet }) => {
    const[comment, setComment] = useState(commet)
    const dispatch = useAppDispatch()
    function updateComment(commet) {
        dispatch(updateCommentUser(commet.id));
        console.log(commet)
    }
    const handleChange = (e) => {
        setComment({
            [e.target.name]: e.target.value
        })
    }
    return (
        <form className="" onSubmit={() => updateComment(commet)}>
            <input type="text" value={commet.content} onChange={handleChange} name="content"></input>
            <input type="text" value={commet.rating} onChange={handleChange} name="rating"></input>
            {/* <input type="text" value={commet.createdAt} onChange={handleChange} name="content"></input>
            <input type="text" value={commet.userId} onChange={handleChange} name="content"></input> */}
            <button type="submit">Update</button>
        </form>
    )
}

export default EditComment