import { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "../Modal";
import UpdateProduct from "./UpdateProduct";

export default function Wines({ wines }) {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return null;
  }
  function handleEditProduct(product) {
    setSelectedProduct(product);
    document.body.classList.add('modal-open');
  }

  function handleCloseModal() {
    setSelectedProduct(null);
    document.body.classList.remove('modal-open');
  }
  console.log(wines)
  return (
    <div className="w-full h-full flex flex-wrap self-center justify-center divide-x-2 gap-y-8">
      {/* <Card ></Card>
      <Card ></Card>
      <Card ></Card>
      <Card ></Card>
      <Card ></Card>
      <Card ></Card>
      <Card ></Card> */}
      {
        wines.map((wine) => (
          <Card wine={wine} handleEditProduct={handleEditProduct}></Card>
          // <p>{wine.id}</p>
        ))
      }
      {selectedProduct && (
        <div className="modal">
            <UpdateProduct handleCloseModal={handleCloseModal} selectedProduct={selectedProduct}></UpdateProduct>
          <div className="modal-inner">
            <h1>{selectedProduct.wine}</h1>
          </div>
          <button className="modal-close-button" onClick={handleCloseModal}>
            Cerrar
          </button>
        </div>
      )}
    </div>
  )
}
