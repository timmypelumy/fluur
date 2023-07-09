import { Fade } from "react-reveal";

export default function NotificationCard({
  id = "U000000",
  error = false,
  errorCallback,
  sMsg = "",
  eMsg = "",
  successText = "Proceed to sign in",
  successCallback = null,
  errorText = "Close",
  successIcon = "bi-check2-circle",
  errorIcon = "bi-exclamation-circle",
  show = true,
}) {
  const Animator = Fade;
  const animatorProps = {
    top: true,
    duration: 400,
    when: show,
  };

  function handleBtn(e) {
    if (error && errorCallback) {
      errorCallback();
    } else {
      if (successCallback) {
        successCallback();
      }
    }
  }
  return (
    <>
      {show && (
        <div className="fixed z-10 top-0 right-0 left-0 bottom-0 bg-black/60 w-full"></div>
      )}
      <Animator {...animatorProps}>
        <div className="fixed top-[20%] z-10 right-0 left-0 w-[90%]  lg:w-[60%] max-w-xl mx-auto min-h-[200px] bg-gray-100 shadow-xl rounded-3xl  p-2">
          <div className="mx-auto mt-4 flex flex-col justify-center items-center">
            {error ? (
              <i className={" text-6xl text-red-500 " + errorIcon}></i>
            ) : (
              <i className={" text-6xl c-text " + successIcon}></i>
            )}
          </div>
          {error ? (
            <p className="c-text text-base px-1 py-4 text-center font-bold">
              {eMsg || "Unable to create account, please retry."}
              <br />
              <span className="px-3 py-1 text-sm  text-red-500 font-normal ">
                ({error})
              </span>
            </p>
          ) : (
            <p className="c-text text-base  md:text-lg px-1 py-4 text-center font-bold">
              {sMsg || (
                <>
                  Your account has been created. Your ID is{" "}
                  <span className="px-3 py-1 text-sm bg-black/5 c-text rounded-lg">
                    {id}
                    <i className="bi-clipboard cursor-pointer ml-1 c-text inline-block"></i>
                  </span>
                </>
              )}
            </p>
          )}

          <button
            onClick={handleBtn}
            className="block border border-black/40 mt-2 transition-colors mb-2 hover:bg-black/10 w-[60%] mx-auto outline-none text-black/60 px-2 py-1 rounded-3xl "
          >
            {error ? errorText : successText}
          </button>
        </div>
      </Animator>
    </>
  );
}
