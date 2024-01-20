import React from "react";

function OverallStatsTab() {
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
            <h4 className="text-xl font-bold">92</h4>
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
            <h4 className="text-xl font-bold">194</h4>
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
            <h4 className="text-xl font-bold">23</h4>
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

export default OverallStatsTab;
