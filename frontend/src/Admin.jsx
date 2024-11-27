import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FeedBackCard from "./components/FeedBackCard";

const Admin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:8000/api/products");
      const data = await response.json();
      setProducts(data);
    };
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/api/products/${id}`, {
      method: "DELETE",
    });

    setProducts(products.filter((product) => product.id !== id));

    /* 
      onClick={() => handleDelete(product.id)}
    */
  };

  return (
    <div className="bg-primary w-full text-dimWhite">
      {products.length > 0 && (
        <>
          <div className="flex flex-col items-start align-center gap-2 border-b-2 border-cyan-300">
            <div
              className="flex flex-wrap sm:justify-start gap-4
                justify-center w-full relative feedback-container z-[1] gap-x-20 items-center"
            >
              {products.map((product) => (
                <>
                  <FeedBackCard
                    key={product.id}
                    username={product.Username}
                    nickname={product.nickname}
                    profileImg={product.profileImg}
                    title={product.title}
                  />
                  <div className="flex gap-5">
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </>
              ))}
            </div>
            <Link
              to={"/admin/createProduct"}
              className="text-green-800 w-25 h-25 bg-cyan-300 flex justify-center items-center text-lg rounded-md p-5 cursor-pointer"
            >
              Add
            </Link>

            <Link
              to={"/"}
              className="text-green-800 w-25 h-25 bg-cyan-300 flex justify-center items-center text-lg rounded-md p-5 cursor-pointer"
            >
              Back
            </Link>
          </div>
        </>
      )}
      )
    </div>
  );
};

export default Admin;
