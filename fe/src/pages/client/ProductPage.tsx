import { useEffect } from "react";
import { useSelector } from "react-redux";
export default function ProductPage() {
  const { listProduct } = useSelector((state: any) => state.ProductReducer);

  // const add = async () => {
  //   await productService.addItem({
  //     name: 'Áo hồng',
  //     imageUrl: 'https://picsum.photos/seed/picsum/500/300',
  //     category: 'Chỉ'
  //   })
  // }

  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      Product
      {listProduct
        ? listProduct.map((i: any) => (
            <>
              <div>{i.name}</div>
              <div>{i.imageUrl}</div>
              <div>{i.category}</div>
            </>
          ))
        : null}
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={add} >
      Button
    </button> */}
    </div>
  );
}
