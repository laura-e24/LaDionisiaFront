import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/store";
import { deleteWine, getAllDisabledWines, getAllWines, selectAllDisabedWinesStatus, updateWine } from "../../features/products/productsSlice";
import GenericModal from "../Modals/GenericModal";
import { EStateGeneric } from "../../utils/general";
import { useSelector } from "react-redux";

export default function Card({ wine, handleEditProduct }) {
  const dispatch = useAppDispatch()
  const winesDisabledStatus = useSelector(selectAllDisabedWinesStatus)
  const [displayModalConfirmDelete, setDisplayModalConfirmDelete] = useState(false);
  const [displayModalConfirmDeleteDisabled, setDisplayModalConfirmDeleteDisabled] = useState(false);
  const router = useRouter()


    const [isLoading, setIsLoading] = useState(true);
    const { user } = useUser();
    function isUser(obj: any): obj is { '/roles': string[] } {
        return '/roles' in obj;
    }
    useEffect(() => {
        setIsLoading(false);
    }, []);
    if (isLoading) {
        return null;
    }

    const disableProduct = async () => {
      const product = {
        id: wine.id,
        disabled: true
      }
      const result = await dispatch(updateWine(product))
      if (updateWine.fulfilled.match(result)) /* alert('Product Deleted') */
      console.log(result)
    }

    // en caso de que queramos eliminar el producto ya definitivamente:
    async function deleteProduct() {
      const result = await dispatch(deleteWine(wine.id))
      if (deleteWine.fulfilled.match(result)) /* alert('Product Deleted for ever') */
      console.log(result)
    }
    if (user) {

        const usuario = isUser(user) ? user[`/roles`] : [];

        return (
            <>
                <div className="flex flex-col items-center w-4/12 text-center relative" key={wine.id}>
                    {user && usuario.includes('administrador') && (
                        <>
                            <div className="absolute right-10 top-0">
                                <button className="inline-flex items-center justify-center w-8 h-8 mr-2 text-pink-100 transition-colors duration-150 bg-blue-600 hover:bg-blue-700 rounded-lg focus:shadow-outline" onClick={() => handleEditProduct(wine)}>
                                    <svg width="64px" height="64px" viewBox="0 0 16.00 16.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" className="bi bi-pencil w-4 h-4" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_iconCarrier"> <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path> </g></svg>
                                </button>
                            </div>
                            {wine.disabled &&
                                <div className="absolute right-0 top-0">
                                  <button 
                                    className="inline-flex items-center justify-center w-8 h-8 mr-2 text-pink-100 transition-colors duration-150 bg-red-600 hover:bg-red-700 rounded-lg focus:shadow-outline" 
                                    onClick={() =>  setDisplayModalConfirmDelete(true)}
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                  </button>
                                </div>
                            }
                            {!wine.disabled &&
                              <div className="absolute right-0 top-0">
                                <button 
                                  className="inline-flex items-center justify-center w-8 h-8 mr-2 text-pink-100 transition-colors duration-150 bg-red-600 hover:bg-red-700 rounded-lg focus:shadow-outline" 
                                  onClick={() =>  setDisplayModalConfirmDeleteDisabled(true)}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </div>
                            }
                        </>
                    )}
                    <Link href={`/dashboard/products/${wine.id}`}>
                        <div className="flex flex-col items-center text-center ">
                            <img src={wine.image} alt={wine} className="object-scale-down" style={{ maxHeight: 300 }} />
                            <h1 className="h-12">{wine.wine}</h1>
                            <h2>${wine.price}</h2>
                            <button className="bg-btn-color text-white py-4 px-8 hover:bg-red-600">Add to Cart</button>
                        </div>
                    </Link>
                </div>
                <GenericModal 
                  display={displayModalConfirmDeleteDisabled}
                  setDisplay={setDisplayModalConfirmDeleteDisabled}
                  title='Disable product'
                  onClickAccept={disableProduct}
                  acceptBtnLabel="Yes, disable"
                  message={`You're about to disable the product "${wine.wine}", are you sure you want to continue? 
                    You can later enable it again in the "Disabled products" section above.
                  `}
                />
                <GenericModal 
                  display={displayModalConfirmDelete}
                  setDisplay={setDisplayModalConfirmDelete}
                  title='Delete product'
                  onClickAccept={deleteProduct}
                  acceptBtnLabel="Yes, delete"
                  message={`You're about to delete the product "${wine.wine}", are you sure you want to continue? 
                  `}
                />
            </>
        )
    }

}
