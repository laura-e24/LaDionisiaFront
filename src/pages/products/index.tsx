import NavBar from "../../components/NavBar";
import Wines from "../../components/dashboard/Wines";

export default function index({ wines }) {
    return (
        <>
            <NavBar></NavBar>
            <Wines wines={wines}></Wines>
        </>
    )
}
export async function getServerSideProps() {
    const response = await fetch('http://localhost:3001/products/wineByYear/1999')
    const wines = await response.json()
    return {
        props: {
            wines,
        },
    }
}