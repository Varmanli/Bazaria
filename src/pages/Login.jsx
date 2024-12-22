import React from "react";

function Login() {
  return (
    <>
      <div className="flex m-auto  justify-center items-center mt-20">
        <div className=" rounded-lg w-[420px] p-5 shadow-2xl  flex gap-7 flex-col justify-center">
          <div>
            <h1 className="text-[28px]">ثبت نام</h1>
          </div>
          <div className="flex flex-col">
            <label htmlFor="3">نام</label>
            <input
              id="3"
              type="text"
              className=" border-2 mt-1 rounded-3xl p-2"
              placeholder="نام خود را وارد کنید"
            />
          </div>

          <div>
            <form className="flex flex-col gap-6 ">
              <div className="flex flex-col">
                <label htmlFor="1">ایمیل</label>
                <input
                  id="1"
                  type="email"
                  className=" border-2 mt-1 rounded-3xl p-2"
                  placeholder="وارد کردن ایمیل"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="1">پسورد</label>
                <input
                  id="2"
                  type="password"
                  placeholder="حداقل 8 کاراکتر"
                  className=" border-2 rounded-3xl p-2 mt-1"
                />
              </div>
              <button className="bg-[#5D5FEF] text-white rounded-3xl p-2">
                ورود
              </button>
            </form>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Login;
