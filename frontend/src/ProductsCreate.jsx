import { useState } from "react";
import { Navigate } from "react-router-dom";

const ProductsCreate = () => {
  const [title, setTitle] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        profileImg,
        nickname,
        Username: username,
        image: "a",
      }),
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/admin" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Title
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write the content here..."
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            ProfileImg
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ProfileImg..."
            required
            onChange={(e) => setProfileImg(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Username
          </label>
          <input
            type="text"
            id="company"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Username..."
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Nickname
          </label>
          <input
            type="text"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nickname..."
            required
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
      </div>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Create
      </button>
    </form>
  );
};

export default ProductsCreate;
