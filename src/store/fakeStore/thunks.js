import url from "../../api/Api";
import { getProduct } from "./storeSlice";

export const getArrayProduct = (id='') => {
  return async (dispatch) => {
    try {
      const {data} = await url.get(`/${id}`);
      const dataArray = Array.isArray(data) ? data : [data];
      dispatch(getProduct(dataArray));
    } catch (error) {
      console.error('Error al realizar la petición:', error);
    }
  };
};

