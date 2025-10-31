import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div
      className="text-center m-4 bg-gray-600
    text-white p-4 text-3xl"
    >
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="github profile picture" width={300} />
    </div>
  );
}

export default Github;

export const githubinfo = async () => {
  const response = await fetch("https://api.github.com/users/rajangithub0");
  return response.json();
};

//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/rajangithub0")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
