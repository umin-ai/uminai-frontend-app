import { useEffect, useState } from "react";

const BASE_SERVER_URL = 'http://localhost:8000';
const useGetAllProductsWithTileLocation = () => {
  const [productLocation, setProductLocation] = useState<IProductLocation[]>([]);
  const onFetch = async () => {
    try {
      const result = await fetch(`${BASE_SERVER_URL}/get-location`);

      if (!result.ok) throw 'Error fetching data';

      const onResult = await result.json();
      const data = onResult.data;
      setProductLocation(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (productLocation.length === 0) {
      onFetch();
    }
  }, []);

  return {
    productLocation
  }
}

export {
  useGetAllProductsWithTileLocation,
}

interface IProduct {
  identity: number,
  label: string[],
  properties: {
    identifier: string,
    color: string,
    material: string,
    name: string,
    weight: string,
    description: string,
  },
  elementId: string
}

export interface IProductLocation {
  productInfo: IProduct,
  tileNo: number,
}