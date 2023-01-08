import { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "../Modal";
import UpdateProduct from "./UpdateProduct";
import { useRouter } from "next/router";
import Pagination from "../Pagination";
export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};
export default function Wines({ wines }) {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 21;
  const paginatedPosts = paginate(wines, currentPage, pageSize);
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
  async function updateProduct(productId, data) {
    const response = await fetch(`http://localhost:3001/products/${productId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert('producto eliminado')
      router.push("/dashboard/products");
    } else {
      console.log('error')
    }
  }
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  function handleCloseModal() {
    setSelectedProduct(null);
    document.body.classList.remove('modal-open');
  }
  // console.log(wines)
  return (
    <>
      <div className="w-full h-full flex flex-wrap self-center justify-center divide-x-2 gap-y-8">
        {
          paginatedPosts.map((wine) => (
            <Card wine={wine} handleEditProduct={handleEditProduct} updateProduct={updateProduct}></Card>
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
      <Pagination
        items={wines.length} // total wines
        currentPage={currentPage} // 1
        pageSize={pageSize} // 10
        onPageChange={onPageChange}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}
