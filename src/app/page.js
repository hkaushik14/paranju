import Image from "next/image";
import Navbar from "../../components/Navbar";
export default function Home() {
  return (
    <>

   <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh]  px-5">
        <div className="font-bold flex gap-2 justify-center text-5xl">
          Paranju
          <span>
            <img src="chai.gif" width={50} alt="chai" />
          </span>
        </div>

        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
        </p>

        <div className="flex gap-4">
          <button
            type="button" className="text-white rounded-2xl bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Start Here</button>

          <button type="button" className="text-white rounded-2xl bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Read More</button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

    <div className="text-white container mx-auto pb-32 pt-14 px-10">
  <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
  <div className="flex gap-5 justify-around">
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
      <p className="font-bold text-center">Fans want to help</p>
      <p className="text-center">Your fans are available to support you</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
      <p className="font-bold text-center">Fans want to contribute</p>
      <p className="text-center">Your fans are willing to contribute financially</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
      <p className="font-bold text-center">Fans want to collaborate</p>
      <p className="text-center">Your fans are ready to collaborate with you</p>
    </div>
  </div>
</div>
    </>
  );
}