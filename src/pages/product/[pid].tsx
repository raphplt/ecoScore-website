import MetaData from "@/components/metadatas";
import { fetchProduct } from "@/services/products/products.services";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Product() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const router = useRouter();
  let { pid }: any = router.query;

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchProduct(pid);
      setData(result);
    };
    fetch();
  }, [pid]);

  return (
    <div>
      <MetaData />
      <h1>Product</h1>
      {JSON.stringify(data)}
    </div>
  );
}
