import { useSelector } from "react-redux"
import Sidebar from "../../../components/Dashboard/Sidebar"
import Footer from "../../../components/Footer/Footer"
import NavBar from "../../../components/Navbar/NavBar"
import { getAllCommentsDisables, selectAllCommentsDisabled, selectAllCommentsDisabledStatus } from "../../../features/comments/commentsSlice"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { EStateGeneric } from "../../../utils/general"
import { useAppDispatch } from "../../../app/store"
import Image from "next/image"
import { deleteComment, enableComment } from "../../../features/comments/commentsApi"
import Link from "next/link"

const Users = () => {
    const commentsDisabledStatus = useSelector(selectAllCommentsDisabledStatus)
    const commets = useSelector(selectAllCommentsDisabled)
    const router = useRouter()
    const dispatch = useAppDispatch()
    useEffect(() => {
        const fetchData = async () => {
            if (router.isReady) {
                if (commentsDisabledStatus === EStateGeneric.IDLE) {
                    await dispatch(getAllCommentsDisables());
                }
            }
        }
        fetchData()
    }, [])
    async function deleteCommentAdm(e) {
        const { value } = e.target
        const res = await deleteComment(value)
        console.log(res)
        await dispatch(getAllCommentsDisables());
        alert('Comment Deleted')
        // dispatch(getAllComments(id?.toString()));
        // router.push(`/products/${id}`);
    }
    async function enableCommentAdm(e) {
        const { value } = e.target
        const resp = await enableComment(value)
        console.log(resp);
        await dispatch(getAllCommentsDisables());
        alert('Comment enable')
        // dispatch(getAllComments(id?.toString()));
        // router.push(`/products/${id}`);
    }
    return (
        <div className="
    main-body  
    pt-12 
    mb-8
    m-auto
    min-h-screen
    max-w-screen-xl
    bg-bg-body 
    ">
            <NavBar />
            <div className="w-full flex">
                <Sidebar />
                <div className="w-full flex flex-col">
                    <h2 className="text-lg text-center">Reported Comments</h2>
                    {commets.map(c => (
                        <div>
                            <p><span className="font-bold">{c.user.name}</span> ({c.updatedAt}) - <a href={`/products/${c.product.id}`} className="font-bold underline decoration-indigo-500">{c.product.wine}</a></p>
                            <p>{c.rating}</p>
                            <p>{c.content}</p>
                            <button value={c.id} onClick={(e) => enableCommentAdm(e)}>Enable</button>
                            <button value={c.id} onClick={(e) => deleteCommentAdm(e)}>Borrar</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Users