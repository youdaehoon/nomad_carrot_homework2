import Layout from "@/components/layout";
import { cls } from "@/libs/utils";
import type { NextPage } from "next";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
interface Inputs {
  what: string;
  why: string;
  salary: string;
  introduce: string;
  dream: string;
  email: string;
}
const Home: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();
  const onValid: SubmitHandler<Inputs> = (e) => {
    console.log(e);
  };
  const onInvalid: SubmitErrorHandler<Inputs> = () => {};

  return (
    <Layout>
      <form
        onSubmit={handleSubmit(onValid, onInvalid)}
        className="mx-auto min-w-[500px] border border-r-4 rounded-2xl border-b-4 border-gray-900 p-8 bg-teal-400 overflow-auto max-h-[800px]"
      >
        <h1 className="text-center font-semibold text-2xl">
          Job Application Form
        </h1>
        <div className="mt-4 space-y-2">
          <div>
            <h2 className="text-base font-medium">
              what department do tou want to work for?
              {errors.what && (
                <span className="text-red-600">{errors.what.message}</span>
              )}
            </h2>
            <div>
              {[
                { ui: "Sales", value: "sales" },
                { ui: "Marketing", value: "marketting" },
                { ui: "Accounting", value: "accounting" },
                { ui: "Customer Service", value: "cs" },
              ].map((el, i) => (
                <div className="space-x-1" key={el.ui}>
                  <input
                    id={"what_option" + i}
                    type="radio"
                    value={el.value}
                    className="w-2 h-2"
                    {...register("what", {
                      required: { value: true, message: "required" },
                    })}
                  />
                  <label htmlFor={"what_option" + i} className="text-xs">
                    {el.ui}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-base font-medium">
              Why do you want to join this company?
              {errors.why && (
                <span className="text-red-600">{errors.why.message}</span>
              )}
            </h2>
            <div>
              {[
                { ui: "I want money!", value: "money" },
                { ui: "I love this company", value: "company" },
                { ui: "I want to lern", value: "learn" },
                { ui: "I don't know why", value: "none" },
              ].map((el, i) => (
                <div className="space-x-1" key={el.ui}>
                  <input
                    {...register("why", {
                      required: { value: true, message: "required" },
                    })}
                    id={"why" + i}
                    type="radio"
                    value={el.value}
                    className="w-2 h-2"
                  />
                  <label htmlFor={"why" + i} className="text-xs">
                    {el.ui}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3 space-y-5">
          <div className="flex flex-col">
            <label htmlFor="salary">Salary</label>
            <select {...register("salary")} id="salary ">
              <option value={50}>$50K</option>
              <option value={100}>$100K</option>
              <option value={150}>$150K</option>
              <option value={200}>$200K</option>
              <option value={300}>$300K</option>
            </select>
          </div>
          <div className="flex flex-col relative">
            <label>Intoroduce yourself</label>
            <input
              className={cls(errors.introduce ? "border-red-600" : "")}
              {...register("introduce", {
                required: "required",
              })}
              type="text"
            ></input>
            {errors.introduce && (
              <span className="absolute -bottom-5 text-red-600">
                {errors.introduce.message}
              </span>
            )}
          </div>
          <div className="flex flex-col relative">
            <label>Tell us what your dreams are</label>
            <textarea
              {...register("dream", {
                minLength: { value: 10, message: "more than 10" },
                required: "required",
              })}
            ></textarea>
            {errors.dream && (
              <span className="absolute -bottom-5 text-red-600">
                {errors.dream.message}
              </span>
            )}
          </div>
          <div className="flex flex-col relative">
            <label>Email</label>
            <input
              type="text"
              {...register("email", {
                required: "required",
                validate: {
                  dotCheck: (e) => e.includes(".") || "need'.'",
                  AtCheck: (e) => e.includes("@") || `need"@"`,
                },
              })}
            />
            {errors.email && (
              <span className="absolute -bottom-5 text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="border border-r-2 border-b-2 border-gray-900 bg-yellow-400 w-full mt-5 p-2 font-semibold"
        >
          Give me this job
        </button>
      </form>
    </Layout>
  );
};

export default Home;
