"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";

const EditProfilePage = () => {
      const router = useRouter();
      const { data: userData } = authClient.useSession();

      const HandleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
            await authClient.updateUser({
                  image: data.image as string,
                  name: data.name as string,
            });
            router.push("/profile");
      };

      return (
            <div className="container mx-auto text-center mt-20 space-y-3">
                  <h1 className="text-4xl">Update Profile</h1>
                  <form
                        onSubmit={HandleUpdateProfile}
                        className="text-center flex justify-center"
                        action=""
                  >
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-15">
                              <input
                                    type="text"
                                    name="name"
                                    className="input w-md"
                                    placeholder={userData?.user.name || "নাম"}
                              />
                              <input
                                    type="url"
                                    name="image"
                                    className="input w-md"
                                    placeholder={userData?.user.image || "ছবির লিঙ্ক"}
                              />

                              <button
                                    type="submit"
                                    className="btn bg-red-700 text-white mt-4"
                              >
                                    update Profile
                              </button>
                        </fieldset>
                  </form>
            </div>
      );
};

export default EditProfilePage;
