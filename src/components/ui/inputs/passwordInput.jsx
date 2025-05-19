import { Link } from "react-router-dom";

function PasswordInput({ text = "", className = "", forgot = "", atLeast = "" }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex flex-row justify-between items-center">
        <p className="text-white text-sm font-medium leadin-[1.2] font-[Inter] tracking-[-0.2px] text-left">{text}</p>
        <Link to="/forgotpassword" className={`text-neutral-400 text-[12px] text-right ${forgot ? "visible" : "invisible"}`}>
          {forgot}
        </Link>
      </div>
      <div className="w-full relative">
        <img
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-lg cursor-pointer"
          src="src\assets\images\icon-hide-password-darkMode.svg"
          alt=""
        />
        <input
          className={`${className} border border-neutral-600 py-3 px-4 rounded-[8px] placeholder:text-neutral-500 bg-none text-white`}
          type="password"
          name="password"
          required
          minLength={8}
          pattern="^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$"
        />
      </div>
      <div className={`flex flex-row items-center gap-2 ${atLeast ? "visible" : "invisible"}`}>
        <img className=" w-4 h-4" src="src\assets\images\icon-info-darkMode.svg" alt="" />
        <p className="text-neutral-400 text-[12px] font-medium leadin-[1.4] font-[Inter] tracking-[-0.2px] text-left">
          {atLeast}
        </p>
      </div>
    </div>
  );
}

export default PasswordInput;
