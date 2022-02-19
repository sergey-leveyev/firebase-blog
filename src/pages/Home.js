import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";

const Home = () => {
  const [postLists, setPostLists] = useState([]);

    useEffect(() =>{
        const getPosts = async () => {
            const data = await getDocs();
        }
    })

  return <div>Home</div>;
};

export default Home;
