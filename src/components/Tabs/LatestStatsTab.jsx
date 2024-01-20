import { UserAuth } from "../../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";

function LatestStatsTab() {
  const { user } = UserAuth();
  const [content, setContent] = useState({});
  const fetchData = async () => {
    try{
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        let docSnapData = docSnap.data();
        return docSnapData;
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  useEffect(() => {
    const loadStats = async () => {
      const data = await fetchData()
      setContent(data);
    };
    loadStats();
  }, [user]);

  if (content === undefined){
    console.log(`${content} empty`)
  } else{
    return content
  }
  
  return (
    <section className="px-4 flex flex-col gap-3">
    <footer className="w-full flex justify-center items-center">
      <p className="text-orange font-bold">
        Learn More:{" "}
        <a className="text-grean" href="https://grean.global">
          Grean Global
        </a>
      </p>
    </footer>
    <div className="w-full flex flex-col gap-4">
      <section className="w-full bg-orange py-2 rounded-md">
        <div className="flex w-full justify-evenly items-center text-white">
          <div className="flex items-center justify-center">
            <ion-icon size="large" name="home-outline"></ion-icon>
          </div>
          <h4 className="text-xl font-bold">12</h4>
          <button className="text-white flex items-center justify-center">
            <ion-icon
              size="large"
              name="information-circle-outline"
            ></ion-icon>
          </button>
        </div>
      </section>
      <section className="w-full bg-orange py-2 rounded-md">
        <div className="flex w-full justify-evenly items-center text-white">
          <div className="flex items-center justify-center">
            <ion-icon size="large" name="car-outline"></ion-icon>
          </div>
          <h4 className="text-xl font-bold">12</h4>
          <button className="text-white flex items-center justify-center">
            <ion-icon
              size="large"
              name="information-circle-outline"
            ></ion-icon>
          </button>
        </div>
      </section>
      <section className="w-full bg-orange py-2 rounded-md">
        <div className="flex w-full justify-evenly items-center text-white">
          <div className="flex items-center justify-center">
            <ion-icon size="large" name="trash-outline"></ion-icon>
          </div>
          <h4 className="text-xl font-bold">12</h4>
          <button className="text-white flex items-center justify-center">
            <ion-icon
              size="large"
              name="information-circle-outline"
            ></ion-icon>
          </button>
        </div>
      </section>
    </div>
    <section className="bg-grean text-center flex flex-col gap-3 rounded-md">
      <div className="px-4">
        <p className="text-8xl font-bold">16</p>
        <p>Cubic feet of waste your recycling has diverted from landfills!</p>
      </div>
    </section>
  </section>
    
  );
}

export default LatestStatsTab;
