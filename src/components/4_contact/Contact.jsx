import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";

import doneAnimation from "../../animation/done.json";

import contactAnimation from "../../animation/contact-us.json";
import { useState } from "react";

function Contact() {
  const [state, handleSubmit] = useForm("xyyrleky");

  const [suc, setsuc] = useState(state.succeeded);
  const [rel, setRel] = useState({
    input: "",
    textarea: "",
  });

  return (
    <section className="contact-us" id="contact">
      <div className="content-text mb-5">
        <h3 className=" text-titlelight dark:text-title text-3xl font-bold mb-3 flex items-center gap-4">
          <span className="icon-envelope text-sub-title-light dark:text-subtitle text-2xl" />{" "}
          Contact Us
        </h3>
        <p className=" text-sub-title-light dark:text-subtitle text-md">
          Contact us for more information and Get notified when I publish
          something new.
        </p>
      </div>
      <section className="content w-full flex  flex-col sm:flex-row items-start sm:items-center  justify-start sm:justify-between  ">
        <form
          onSubmit={handleSubmit}
          className="contact flex flex-col w-full sm:w-auto "
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3  py-2 w-full justify-between">
            <label
              htmlFor="email"
              className=" text-sub-title-light dark:text-subtitle"
            >
              Email Address:
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={rel.input}
              onChange={(event) => {
                setRel({ ...rel, input: event.target.value });
              }}
              className="inp w-full sm:w-auto p-2 rounded-lg  duration-500 outline-none  text-inputtext dark:text-white   bg-bginputlight dark:bg-bginput border border-borderinputlight dark:border-borderinput focus:border-blueElzero hover:border-blueElzero dark:focus:border-orange dark:hover:border-orange"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start  sm:items-center gap-3 mt-6  py-2  duration-300 w-full justify-between">
            <label
              htmlFor="textarea"
              className=" text-sub-title-light dark:text-subtitle"
            >
              Your message:
            </label>
            <textarea
              required
              id="textarea"
              name="message"
              value={rel.textarea}
              onChange={(event) => {
                setRel({ ...rel, textarea: event.target.value });
              }}
              className="inp w-full resize min-h-36 sm:w-auto rounded-lg  duration-500 outline-none p-2 text-inputtext dark:text-white   bg-bginputlight dark:bg-bginput border border-borderinputlight dark:border-borderinput focus:border-blueElzero hover:border-blueElzero dark:focus:border-orange dark:hover:border-orange"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            className=" bg-blueElzero dark:bg-bgsubmit active:scale-90 disabled:cursor-not-allowed disabled:opacity-40 border-bordersubmit hover:scale-[.99] p-3 capitalize text-center w-44 text-lg self-center  rounded-md duration-300 font-bold  border mt-10 "
            disabled={suc}
            onClick={() => {
              if (rel.input === "" && rel.textarea === "") {
                setsuc(false);
              } else {
                setRel({ input: "", textarea: "" });
                setsuc(true);
              }
              setTimeout(() => {
                setsuc(false);
                // window.location.reload();
              }, 1000);
            }}
          >
            {suc ? "submitting ..." : "submit"}
          </button>

          {suc && (
            <h1
              className={`${
                suc ? " opacity-100" : " opacity-0"
              } flex items-center duration-300  transition-all`}
            >
              <Lottie
                loop={false}
                animationData={doneAnimation}
                className="h-14"
              />
              Your message has been sent successfully!
            </h1>
          )}
        </form>
        <section className="contact-animation hidden sm:block animation max-w-sm ">
          <Lottie animationData={contactAnimation} className="w-full h-full" />
        </section>
      </section>
    </section>
  );
}

export default Contact;
