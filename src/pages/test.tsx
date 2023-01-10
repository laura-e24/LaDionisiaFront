import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../app/store";
import { getCatFact, selectFacts, selectFactsStatus } from "../features/testSlice";
import { StateGeneric } from "../utils/general";

const Test = () => {
  const dispatch = useAppDispatch()
  const facts = useSelector(selectFacts)
  const status = useSelector(selectFactsStatus)
  console.log(facts)
  useEffect(() => {
    const fetchData = async () => {
      if (status === StateGeneric.IDLE) {
        await dispatch(getCatFact());
      }
    };
    fetchData();
  }, [status]);
  
  if (status === StateGeneric.PENDING) return <div>Estoy cargando...</div>
  return (
    <div>
      {JSON.stringify(facts)}
    </div>
  )
}
 
export default Test;