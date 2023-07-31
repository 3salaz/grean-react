import { motion } from "framer-motion";
function Stats() {
  return (
    <motion.div className="mx-auto max-w-[400px] gap-2 bg-orange p-3 rounded-md drop-shadow-xl h-[60vh]">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white flex flex-col items-center justify-center w-full rounded-md">
          <div className="text-lg font-bold text-orange">Our Impact</div>
          <div className="text-2xl text-grean">
            30,137 <span className="text-xl">lbs</span>
          </div>
          <div>Of waste recycled!</div>
        </div>
        <hr className="bg-white m-2" />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="flex items-center justify-center">
              <ion-icon name="home"></ion-icon>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-md">400</div>
              <div className="text-sm">Homes powered for a month!</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center justify-center">
              <ion-icon name="car-outline"></ion-icon>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="">14,800</div>
              <div>miles traveled!</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center justify-center">
              <ion-icon name="trash"></ion-icon>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>17,050</div>
              <div>Cubic Feeet</div>
              <div>Of Waste Diverted from landfills</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Stats;
