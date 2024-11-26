export default function FbLoginClone() {
  return (
    <div>
      {/* main */}
      <div className="flex justify-center h-screen mt-[180px] gap-[36px] px-[270px]">
        {/* left div */}
        <div>
          {/* Facebook Head */}
          <h1 className="text-[60px] text-blue-600 font-Mulish font-[800] tracking-[-.02em]">
            facebook
          </h1>
          {/* Text */}
          <p className="text-[28px] leading-[1.15]">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        {/* right div */}
        <div className="flex flex-col items-center gap-[26px] mt-[-50px]">
          {/* card */}
          <div className="w-[397px] h-[350px] bg-white shadow-fb rounded-md p-4">
            <form>
              {/* email input */}
              <input
                className="px-4 py-3 rounded-md text-[17px] w-full border border-gray-300 mb-[13px]"
                type="text"
                placeholder="Email address or phone number"
              />
              {/* password input */}
              <input
                className="px-4 py-3 rounded-md w-full border text-[17px] border-gray-300 mb-[16px]"
                type="password"
                placeholder="Password"
              />
              {/* submit */}
              <button className="bg-[#0866ff] hover:bg-[rgb(65,133,244)] p-[9px] w-full rounded-md text-white text-[20px] font-bold mb-[15px]">
                Log in
              </button>
              {/* forget password button */}
              <a
                className="text-blue-600 hover:underline text-[14px] block w-fit mx-auto transition-all duration-200"
                href="/"
              >
                Forgotten password?
              </a>
              {/* seperation */}
              <hr className="mt-[20px] mb-[25px]" />
              {/* create new account button */}
              <button className="bg-[#42B72A] hover:bg-[#3fa52a] p-[11px] w-[calc(50%+10px)] rounded-md text-nowrap text-white text-[17px] font-bold mb-[23px] block mx-auto transition-all duration-200">
                Create new account
              </button>
            </form>
          </div>
          {/* text below card */}
          <p className="text-[14px]">
            <span className="font-semibold cursor-pointer hover:underline">
              Create a Page{" "}
            </span>
            for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </div>
  );
}
