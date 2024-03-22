import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArrayProduct } from "../store/fakeStore";

export const StoreGrid = () => {
  const { product = [] } = useSelector((state) => state.fakeStore) || [];

  const [inputValue, setInputValue] = useState("")

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArrayProduct());
  }, []);

  const handleSearchById = () => {
    dispatch(getArrayProduct(inputValue));
  }

  return (
    <>
      <div>
        {" "}
        <input
          type="text"
          placeholder="Buscar Producto por id"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => handleSearchById()}>Buscar</button>
      </div>
      <div className="card-grid">
        {product.map((image) => (
          <div
            className="card"
            key={image.image}
            style={{ width: "500px", height: "900px", objectFit: "cover" }}
          >
            <img src={image.image} alt={image.title} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};
