import { useSelector } from "react-redux"
import Sidebar from "../../../components/Dashboard/Sidebar"
import Footer from "../../../components/Footer/Footer"
import NavBar from "../../../components/Navbar/NavBar"
import { getAllUsers, selectAllUsers, AllUsersStatus } from "../../../features/comments/commentsSlice"
import { useAppDispatch } from "../../../app/store"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { EStateGeneric } from "../../../utils/general"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Users = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const users = useSelector(selectAllUsers)
  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        await dispatch(getAllUsers());
      }
    }
    fetchData()
  }, [])
  console.log(users)
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
      <div className="w-full flex ">
        <Sidebar />
        <div className="w-full flex flex-col ">
        <DataTable value={users} header="List of All Users:" showGridlines >
        <Column className="p-3" field="name" header="E-mail"></Column>
        <Column  field="nickname" header="nickname"></Column>
        <Column field="logins_count" header="loggin count"></Column>
    </DataTable>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users