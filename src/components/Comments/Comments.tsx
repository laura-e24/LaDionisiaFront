import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/store"
import { createComment, disableCommentUser, getAllComments, selectAllComments, selectAllCommentsStatus } from "../../features/comments/commentsSlice"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { EStateGeneric } from "../../utils/general";
import EditComment from "./EditComment";
const Comments = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const comments = useSelector(selectAllComments)
    const allCommentsStatus = useSelector(selectAllCommentsStatus)
    const [comment, setComment] = useState({
        content: "jdhakjdljadakldkajldkadada",
        rating: 8,
        userId: 1,
        productId: 1
    })
    const { id } = router.query
    useEffect(() => {
        const fetchData = async () => {
            if (router.isReady) {
                if (allCommentsStatus === EStateGeneric.IDLE) {
                    await dispatch(getAllComments(id?.toString()));
                }
            }
        }
        fetchData()
    }, [id])
    function handleNewComment() {
        dispatch(createComment({ id, comment }));
    }
    function deleteComment(e) {
        const { value } = e.target
        dispatch(disableCommentUser(value?.toString()));
    }

    return (
        <div className="w-full">
            {comments.map((commet) => (
                <div>
                    <p>{commet.content}</p>
                    <p>{commet.rating}</p>
                    <p>{commet.createdAt}</p>
                    <p>{commet.userId}</p>
                    <button value={commet.id} onClick={(e) => deleteComment(e)}>Borrar</button>
                    <details className="ml-2 float-right">
                        <summary>
                            Editar
                        </summary>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non delectus commodi, fugiat aliquid iste expedita, modi consectetur alias laudantium voluptates pariatur earum officiis. Optio culpa sed, similique eum officiis et?</p>
                        <EditComment commet={commet} />
                    </details>
                </div>

            ))}
            <div className="w-2/3">
                <textarea className="e1" wrap="hard" placeholder="ADD YOUR RATING & REVIEW"></textarea>
                <input type="number" />
                <button onClick={handleNewComment}>Add a review</button>
            </div>
        </div>
    )
}

export default Comments