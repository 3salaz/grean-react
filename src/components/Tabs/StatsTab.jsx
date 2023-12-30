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
    <section
      id="statsTab"
      className="w-full h-[82svh] bg-black bg-opacity-40 bg-blur-10 absolute top-0 flex items-center justify-center"
    >
      {/* Card */}
      <main className="container mx-auto max-w-[650px] h-full overflow-scroll flex items-center justify-center md:py-4 md:rounded-lg">
        <div className="bg-white w-full h-full md:rounded-lg z-20">
          <header className="w-full flex items-center justify-center gap-3 bg-white p-2 rounded-lg">
            <img
              className="rounded-full w-20"
              alt="placeholder"
              src={user.photoURL}
            ></img>
            <div>
              <h2 className="text-lg font-bold text-grean">
                {user.displayName}
              </h2>
              <p className="text-sm bg-grean text-white font-bold px-4 py-2 rounded-xl">
                Users ID:{user.uid}
              </p>
            </div>
          </header>
          <div className="flex flex-col flex-end">
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
        </div>
      </main>
    </section>
  );
}

export default StatsTab;
