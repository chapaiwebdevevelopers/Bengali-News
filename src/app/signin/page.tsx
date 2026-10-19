"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
      const router = useRouter();
      const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const user = Object.fromEntries(formData.entries()) as {
                  email: string;
                  password: string;
            };
            // console.log(user)

            const { data, error } = await authClient.signIn.email({
                  email: user.email,
                  password: user.password,
                  rememberMe: true,
            });
            console.log("data", data);
            if (data) {
                  toast.success("সফলভাবে সাইন ইন হয়েছে");
                  router.push("/");
            }
            if (error) {
                  toast.error(error.message || "সাইন ইন ব্যর্থ হয়েছে");
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
            <div className="container mx-auto  mt-20 bg-base-200 border-base-300 rounded-box  border p-15">
                  <h2 className="text-2xl text-red-700 my-5 text-center text-bold">
                        সাইন ইন
                  </h2>
                  <div className="">
                        <form
                              onSubmit={onSubmit}
                              className="text-center flex justify-center"
                              action=""
                        >
                              <fieldset className="fieldset ">
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
                                          সাইন ইন করুন
                                    </button>
                              </fieldset>
                        </form>
                        <div className="text-center space-x-4-3 space-y-3">
                              <button
                                    onClick={GooglesignIn}
                                    className="btn mt-4"
                              >
                                    সাইন ইন GOOGLE
                              </button>
                              <button
                                    onClick={GithubsignIn}
                                    className="btn mt-4"
                              >
                                    সাইন ইন Github
                              </button>
                              <p>
                                    অ্যাকাউন্ট নেই?{" "}
                                    <Link
                                          className="text-red-700"
                                          href="/signup"
                                    >
                                          {" "}
                                          সাইন আপ করুন
                                    </Link>{" "}
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default SignInPage;
