import { UserAuth } from "../../context/AuthContext";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Create a reference to the file whose metadata we want to retrieve
const storage = getStorage();
const statsRef = ref(storage, "graphics/Stats.png");
getDownloadURL(statsRef)
  .then((url) => {
    // Or inserted into an <img> element
    const statsImg = document.getElementById("statsImg");
    statsImg.setAttribute("src", url);
  })
  .catch((error) => {
    // Handle any errors
  });

function StatsTab() {
  const { user } = UserAuth();
  getDownloadURL(statsRef)
    .then((url) => {
      // Or inserted into an <img> element
      const statsImg = document.getElementById("statsImg");
      statsImg.setAttribute("src", url);
    })
    .catch((error) => {
      // Handle any errors
    });
  return (
    <section className="w-full h-[82svh] bg-black bg-opacity-40 bg-blur-10 border-t-transparent border-b-transparent border-l-orange border-r-orange border-2 absolute top-0 flex items-center justify-center">
      {/* Card */}
      <main className="container mx-auto max-w-[650px] h-full overflow-scroll flex items-center justify-center md:py-4 md:rounded-lg">
        <div className="bg-white w-full h-full overeflow-scroll md:rounded-lg">
          <header className="w-full flex items-center justify-center gap-3 bg-white py-2 rounded-lg">
            <img
              id="statsImg"
              className="rounded-full w-full max-w-[650px]"
              alt="placeholder"
            ></img>
          </header>
          <section className="px-4 flex flex-col gap-3 pt-4">
            <div className="w-full flex flex-col gap-4">
              <section className="w-full bg-orange py-2 rounded-md">
                <div className="flex w-full justify-evenly items-center text-white">
                  <div className="flex items-center justify-center">
                    <ion-icon size="large" name="home-outline"></ion-icon>
                  </div>
                  <h4 className="text-xl font-bold">473</h4>
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
                  <h4 className="text-xl font-bold">473</h4>
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
                  <h4 className="text-xl font-bold">473</h4>
                  <button className="text-white flex items-center justify-center">
                    <ion-icon
                      size="large"
                      name="information-circle-outline"
                    ></ion-icon>
                  </button>
                </div>
              </section>
            </div>
            <section className="bg-grean text-center flex flex-col gap-3">
              <p className="text-4xl">4</p>
              <p>
                Cubic feet of waste your recycling has diverted from landfills!
              </p>
            </section>
            <section className="flex items-center justify-center gap-4">
              <button className="bg-orange text-white px-4 p-2 rounded-lg">
                Latest
              </button>
              <button className="text-grean p-2 px-4">Overall</button>
            </section>
          </section>
          <footer className="w-full flex justify-center items-center">
            <p>
              Learn More:{" "}
              <a className="text-white" href="https://grean.global">
                Grean Global
              </a>
            </p>
          </footer>
        </div>
      </main>
    </section>
  );
}

export default StatsTab;
