import { useRouter } from "next/router";
import { useAppDispatch } from "../../app/store"
import { getAllComments, updateCommentUser } from "../../features/comments/commentsSlice";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { EStateGeneric } from "../../utils/general";
const EditComment = ({ comment }) => {
    const router = useRouter()
    const [input, setInput] = useState({
        id: comment.id,
        content: comment.content,
        rating: comment.rating,
        productId: comment.productId,
        userId: comment.userId,
    })
    const { id } = router.query
    const dispatch = useAppDispatch()
    useEffect(() => {
        const fetchData = async () => {
            dispatch(getAllComments(id?.toString()));
        }
        fetchData()
    }, [input.id])
    function updateComment(e) {
        e.preventDefault()
        dispatch(updateCommentUser(input));
        alert('Comment Created')
        
    }
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form className="" onSubmit={(e) => updateComment(e)}>
            <input type="text" value={input.content} onChange={(e) => handleChange(e)} name="content"></input>
            <input type="text" value={input.rating} onChange={(e) => handleChange(e)} name="rating"></input>
            {/* <input type="text" value={commet.createdAt} onChange={handleChange} name="content"></input>
            <input type="text" value={commet.userId} onChange={handleChange} name="content"></input> */}
            <button type="submit">Update</button>
        </form>
    )
}

export default EditComment