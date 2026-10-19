"use client";
import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import { useRouter } from "next/navigation";


const SignUpPage = () => {
      const router = useRouter();
      const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const user = Object.fromEntries(formData.entries()) as {name:string,email:string,password:string,image:string};
            // console.log(user);
            const { data, error } = await authClient.signUp.email({
                  name: user.name , // required, The name of the user.
                  email: user.email, // required, The email address of the user.
                  password: user.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
                  image: user.image , // An optional profile image of the user.
                  callbackURL: "/", // An optional URL to redirect to after the user signs up.

            });
            if (data){
                  console.log(data);
                  // you can add toast here 
                  router.push("/");
            } else {
                  console.log(error)
            }
      };
            const GooglesignIn = async () => {
                  await authClient.signIn.social({
                        provider: "google",
                  });
            };
      
            const GithubsignIn = async () => {
                  await authClient.signIn.social({
                        provider: "github",
                  });
            };
      return (
            <div className="container mx-auto  mt-20">
                  <h2 className="text-2xl text-red-700 my-5 text-center text-bold">
                        সাইন আপ
                  </h2>
                  <form
                        onSubmit={onSubmit}
                        className="text-center flex justify-center"
                        action=""
                  >
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-15">
                              <input
                                    type="text"
                                    name="name"
                                    className="input w-md"
                                    placeholder="নাম"
                              />
                              <input
                                    type="url"
                                    name="image"
                                    className="input w-md"
                                    placeholder="Image"
                              />
                              <input
                                    type="email"
                                    name="email"
                                    className="input w-md"
                                    placeholder="ইমেইল"
                              />

                              <input
                                    type="password"
                                    name="password"
                                    className="input w-md"
                                    placeholder="পাসওয়ার্ড"
                              />

                              <button
                                    type="submit"
                                    className="btn bg-red-700 text-white mt-4"
                              >
                                    সাইন আপ করুন
                              </button>
                              
                        </fieldset>
                  </form>
                                          <div className="text-center space-x-4-3 space-y-3">
                              <button
                                    onClick={GooglesignIn}
                                    className="btn mt-4"
                              >
                                    GOOGLE সাইন আপ 
                              </button>
                              <button
                                    onClick={GithubsignIn}
                                    className="btn mt-4"
                              >
                                   Github সাইন আপ 
                              </button>
                              <p>
                                   অ্যাকাউন্ট আছে? ?{" "}
                                    <Link
                                          className="text-red-700"
                                          href="/signin"
                                    >
                                          {" "}
                                          সাইন ইন করুন
                                    </Link>{" "}
                              </p>
                        </div>
            </div>
      );
};

export default SignUpPage;
