import { useEffect, useState } from "react";
import Card from "./Card";
import UpdateProduct from "./UpdateProduct";
import Pagination from "../Pagination";
import { useRouter } from "next/router";
export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};
export default function Wines({ wines }) {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(21);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = wines.slice(indexOfFirstItem, indexOfLastItem);
  const router = useRouter();
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
  const onPageChange = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  function handleCloseModal() {
    setSelectedProduct(null);
    document.body.classList.remove('modalU-open');
  }
  console.log(wines)
  return (
    <>
      <div className="w-full h-full flex flex-wrap self-center justify-center divide-x-2 gap-y-8">
        {
          currentItems.map((wine) => (
            <Card wine={wine} handleEditProduct={handleEditProduct} updateProduct={updateProduct}></Card>
          ))
        }
        {selectedProduct && (
          <div className="modalU">
            <UpdateProduct handleCloseModal={handleCloseModal} selectedProduct={selectedProduct}></UpdateProduct>
          </div>
        )}
      </div>
      <Pagination
        onPageChange={onPageChange}
        wines={wines}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}
