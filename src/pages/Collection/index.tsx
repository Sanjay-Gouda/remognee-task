import { useEffect, useState } from "react";
import { Card } from "../../components/Shared/Card";
import axios from "axios";
import { useDispatch } from "react-redux";
import { handleAddToCart, useAddCart } from "../../store/slices/cart";
import { removeCartItem } from "../../store/slices/cart";
import { useSelector } from "react-redux";

type TRate = {
  rate: number;
  count: number;
};

type TCollection = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: TRate;
  title: string;
}[];

export const Collection = () => {
  const [catgories, setCatgories] = useState<any>({});
  const [collectionData, setCollectionData] = useState<TCollection>([]);
  const cart = useSelector(useAddCart);

  const [counter, setCounter] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const dispatch = useDispatch();

  const handleAddCart = (id: any) => {
    const cartItem: any = collectionData?.find((item) => item.id === id);

    dispatch(handleAddToCart(cartItem));

    // setCounter((prev) => prev + 1);
    // setShowCounter(true);
    console.log(cartItem);
  };

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementCounter = (id: any) => {
    const cartItem: any = collectionData?.find((item) => item.id === id);

    dispatch(removeCartItem(cartItem));
  };

  const getCollection = async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");

      setCollectionData(data?.data);
      for (let i = 0; i < data?.data.length; i++) {
        const item = data?.data[i];
        const category = item?.category;

        if (!catgories[category]) {
          catgories[category] = [];
        }

        catgories[category]?.push(item);
      }

      setCatgories({ ...catgories });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <>
      <div className="max-w-[1440px] m-auto p-4 ">
        {Object.entries(catgories).map((cat: any) => {
          return (
            // <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 justify-start items-start  mb-4  ">
              <h3 className="text-2xl font-bold capitalize">{cat[0]}</h3>
              <div className="flex flex-wrap gap-4  w-full">
                {cat[1].map((data: any) => {
                  return (
                    <Card
                      key={data.id}
                      productId={data.id}
                      title={data?.title}
                      price={data?.price}
                      image={data?.image}
                      addCart={() => {
                        handleAddCart(data.id);
                      }}
                      counter={counter}
                      decrement={() => decrementCounter(data.id)}
                      incremnet={incrementCounter}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
