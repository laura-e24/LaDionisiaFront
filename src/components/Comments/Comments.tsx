import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/store"
import { createComment, disableCommentUser, getAllComments, getAllUsers, reportCommentUser, selectAllComments, selectAllCommentsStatus, selectAllUsers } from "../../features/comments/commentsSlice"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { EStateGeneric } from "../../utils/general";
import EditComment from "./EditComment";
import { useUser } from "@auth0/nextjs-auth0/client";
import { registerUser } from "../../features/comments/commentsApi";
import s from "./Comments.module.css"
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
            router.push(`/products/${id}`);
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
        if (e.target.name === 'rating') {
            const r = parseInt(e.target.value)
            setComment({
                ...comment,
                rating: r,
                userId: userExistente?.id
            })
        }
    }
    function ratingToWineEmoji(rating) {
        let wineEmoji = "";
        for (let i = 0; i < rating; i++) {
            wineEmoji += "🍷";
        }
        return wineEmoji;
    }
    return (
        <>
            <table className="w-full border-2 border-gray-400">
                <tr>
                    <td className="p-4">
                        {comments.map((comment) => (
                            <div className="mb-2 p-4 bg-gray-700/10">
                                <div className="flex justify-between">
                                    <p>
                                        <span className="font-bold">{comment.user?.name} </span>({comment.createdAt})
                                    </p>
                                    <span className={s.copas}>{ratingToWineEmoji(comment.rating)}</span>
                                </div>

                                <p>{comment.content}</p>
                                <div className="flex justify-between p-2">
                                    {
                                        userExistente && (
                                            <div >
                                                <details className="ml-2 float-right">
                                                    <summary className={`${s.iconos} p-2`}>
                                                        🖊️ Edit
                                                    </summary>
                                                    <EditComment comment={comment} />
                                                </details>
                                                <button className={`${s.iconos} p-2`} value={comment.id} onClick={(e) => deleteComment(e)}>🗑️ Delete</button>
                                            </div>
                                        )
                                    }{
                                        !userExistente && <button className={`${s.iconoReport} p-2`} value={comment.id} onClick={(e) => reportComment(e)}>⚠️ Report</button>
                                    }

                                </div>
                            </div>

                        ))}
                        {
                            user && <form className="flex flex-col w-full items-end p-4" onSubmit={(e) => handleNewComment(e)}>
                                <textarea className={`${s.textarea} w-full h-28`} wrap="hard" placeholder="ADD YOUR RATING & REVIEW" value={comment.content} name="content" onChange={(e) => handleChange(e)}></textarea>
                                <div className="mt-4">
                                    <div className={s.rating}>
                                        <button type="submit" className={s.btn}>Add a review</button>
                                        <input value="5" type="radio" name="rating" id="rating-🍷-5" onChange={(e) => handleChange(e)} />
                                        <label htmlFor="rating-🍷-5"></label>
                                        <input value="4" type="radio" name="rating" id="rating-🍷-4" onChange={(e) => handleChange(e)} />
                                        <label htmlFor="rating-🍷-4"></label>
                                        <input value="3" type="radio" name="rating" id="rating-🍷-3" onChange={(e) => handleChange(e)} />
                                        <label htmlFor="rating-🍷-3"></label>
                                        <input value="2" type="radio" name="rating" id="rating-🍷-2" onChange={(e) => handleChange(e)} />
                                        <label htmlFor="rating-🍷-2"></label>
                                        <input value="1" type="radio" name="rating" id="rating-🍷-1" onChange={(e) => handleChange(e)} />
                                        <label htmlFor="rating-🍷-1"></label>
                                    </div>
                                </div>
                            </form>
                        }
                    </td>
                </tr>
            </table>
            {/* <div className="flex w-full">
                <div className="w-2/5 border-2 border-gray-400">

                </div>
                <div className="w-3/5 flex-inline gap-2 border-2 border-gray-400">
                    {comments.map((comment) => (
                        <div className="bg-blue-200 mb-2">
                            <button value={comment.id} onClick={(e) => reportComment(e)}>⚠️ Report</button>
                            <p>{comment.content}</p>
                            <p>{comment.rating}</p>
                            <p>{comment.createdAt}</p>
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
                            <textarea className="w-full" wrap="hard" placeholder="ADD YOUR RATING & REVIEW" value={comment.content} name="content" onChange={(e) => handleChange(e)}></textarea>
                            <input type="number" name="rating" onChange={(e) => handleChange(e)} value={comment.rating} />
                            <div>
                                <div className={s.rating}>
                                    <button type="submit" className={s.btn}>Add a review</button>
                                    <input value="5" type="radio" name="rating-🍷" id="rating-🍷-5" />
                                    <label htmlFor="rating-🍷-5"></label>
                                    <input value="4" type="radio" name="rating-🍷" id="rating-🍷-4" />
                                    <label htmlFor="rating-🍷-4"></label>
                                    <input value="3" type="radio" name="rating-🍷" id="rating-🍷-3" />
                                    <label htmlFor="rating-🍷-3"></label>
                                    <input value="2" type="radio" name="rating-🍷" id="rating-🍷-2" />
                                    <label htmlFor="rating-🍷-2"></label>
                                    <input value="1" type="radio" name="rating-🍷" id="rating-🍷-1" />
                                    <label htmlFor="rating-🍷-1"></label>
                                </div>
                            </div>
                        </form>
                    }

                </div>
            </div> */}
        </>
    )
}

export default Comments