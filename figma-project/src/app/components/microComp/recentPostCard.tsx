import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });

const RecentPostCard = () => {
  return (
    <div>
        <div className="bg-white h-[450px] w-[290px] min-[600px]:w-[483px] min-[600px]:h-[356px] relative">
        <div className="w-[210px] min-[600px]:w-[391px] h-[286px] absolute top-[38px] left-[36px] flex flex-col space-y-5">
          <h1 className={`${heebo.className} font-[700] text-[26px] leading-[38px] tracking-[2%]`}>Making a design system from scratch</h1>
          <div className={`flex flex-row ${heebo.className} font-[400] text-[18px] leading-[38px] tracking-[2%] text-black text-opacity-[70%] space-x-6`}> 
            <p>12 Feb 2020</p>
            <p>|</p>
            <p>Design , Pattern</p>
          </div>
          <p className={`${heebo.className} font-[400] text-[16px] leading-[23.5px]`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        </div>
    </div>
  )
}

export default RecentPostCard
