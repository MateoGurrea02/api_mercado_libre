import React from "react";


function CardProduct({ product }) {
  return (
    <>
      <div className="group relative shadow-lg m-10 max-w-80 bg-white">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={product.pictures ? product.pictures[0].url : (product.thumbnail)} //Corregir producto.pictures[0].url porque no funciona, solo funciona el thumbnail
            className="h-full w-full object-cover object-center lg:h-96 lg:w-96"
          />
        </div>
        <div className="pt-4 flex flex-col justify-between p-5">
          <div>
            <h3>
              <a href={`/product/${product.id}`} className="font-light black text-black">
                
                {product.title}
              </a>
            </h3>
          </div>
          {product.original_price ? (
            <div className="flex">
              <p className="text-gray-400 mt-2 line-through">
                ${product.original_price.toLocaleString("es-AR")}
              </p>
            </div>
          ) : (
            ""
          )}
          {product.price ? (
            <p className="font-normal text-2xl text-black">${product.price}</p>
          ) : (
            ""
          )}
          {product.shipping.free_shipping ? (
            <p className="text-[#31B771] font-semibold text-sm ">
              Envío gratis
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default CardProduct;
