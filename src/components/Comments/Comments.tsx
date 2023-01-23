import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/store"
import { createComment, disableCommentUser, getAllComments, getAllUsers, reportCommentUser, selectAllComments, selectAllCommentsStatus, selectAllUsers } from "../../features/comments/commentsSlice"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { EStateGeneric } from "../../utils/general";
import EditComment from "./EditComment";
import { useUser } from "@auth0/nextjs-auth0/client";
import { registerUser } from "../../features/comments/commentsApi";
const Comments = () => {
    const { user } = useUser();
    const router = useRouter()
    const dispatch = useAppDispatch()
    const comments = useSelector(selectAllComments)
    const users = useSelector(selectAllUsers)
    const userExistente = users.find(u => u.email === user?.email)
    const [comment, setComment] = useState({
        content: "",
        rating: 0,
        userId: 0,
    })
    const allCommentsStatus = useSelector(selectAllCommentsStatus)
    const { id } = router.query
    useEffect(() => {
        const fetchData = async () => {
            if (router.isReady) {
                if (allCommentsStatus === EStateGeneric.IDLE) {
                    await dispatch(getAllComments(id?.toString()));
                    await dispatch(getAllUsers());
                }
            }
        }
        fetchData()
    }, [id])
    async function handleNewComment(e) {
        e.preventDefault();
        if (user) {
            try {
                const response = await registerUser(user)
            } catch (error) {
                console.log(error.message);
            }
            if (!comment.content || !comment.rating) return alert('something went wrong')
            await dispatch(createComment({ id, comment }));
            alert('Comment Created')
            await dispatch(getAllComments(id?.toString()));
            router.push({
                pathname: `/products/${id}`
            },
                undefined,
                { shallow: true }
            );
            setComment({
                content: "",
                rating: 0,
                userId: 0,
            })
        }

    }
    function deleteComment(e) {
        const { value } = e.target
        dispatch(disableCommentUser(value?.toString()));
        alert('Comment Deleted')
        dispatch(getAllComments(id?.toString()));
        // router.push(`/products/${id}`);
        router.push({
            pathname: `/products/${id}`
        },
            undefined,
            { shallow: true }
        );
    }
    function reportComment(e) {
        const { value } = e.target
        dispatch(reportCommentUser(value?.toString()));
        dispatch(disableCommentUser(value?.toString()));
        alert('Comment Reported')
        dispatch(getAllComments(id?.toString()));
        // router.push(`/products/${id}`);
        router.push({
            pathname: `/products/${id}`
        },
            undefined,
            { shallow: true }
        );
    }
    function handleChange(e) {
        setComment({
            ...comment,
            [e.target.name]: e.target.value,
            userId: userExistente?.id
        })
    }
    console.log(userExistente)
    return (
        <div className="w-full flex-inline gap-2">
            {comments.map((comment) => (
                <div className="bg-blue-200 mb-2">
                    <button value={comment.id} onClick={(e) => reportComment(e)}>Report</button>
                    <p>{comment.content}</p>
                    <p>{comment.rating}</p>
                    <p>{comment.createdAt}</p> 
                    {/* <p>{comment.user.name}</p> */}
                    {
                        userExistente && (
                            <>
                                <button value={comment.id} onClick={(e) => deleteComment(e)}>Borrar</button>
                                <details className="ml-2 float-right">
                                    <summary>
                                        Editar
                                    </summary>
                                    <EditComment comment={comment} />
                                </details>
                            </>
                        )
                    }
                </div>

            ))}
            {
                user && <form className="w-2/3" onSubmit={(e) => handleNewComment(e)}>
                    <textarea className="e1" wrap="hard" placeholder="ADD YOUR RATING & REVIEW" value={comment.content} name="content" onChange={(e) => handleChange(e)}></textarea>
                    <input type="number" name="rating" onChange={(e) => handleChange(e)} value={comment.rating}/>
                    <button type="submit">Add a review</button>
                </form>
            }

        </div>
    )
}

export default Comments