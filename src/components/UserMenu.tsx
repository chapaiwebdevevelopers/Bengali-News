"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserMenu = () => {
      const router = useRouter();
      const { data: userData } = authClient.useSession();
      // console.log(userData);
      const handleSignOut = async () => {
            await authClient.signOut({
                  fetchOptions: {
                        onSuccess: () => {
                              router.push("/signin"); // redirect to login page
                        },
                  },
            });
      };
      return (
            <div className="flex gap-2 items-center">
                  {userData?.session ? (
                        <>
                              <Link href="/profile">{userData.user.name}</Link>
                              <Link href="/signin">
                                    <button
                                          onClick={handleSignOut}
                                          className="btn btn-error bg-red-700 text-white  "
                                    >
                                          সাইন out
                                    </button>
                              </Link>
                        </>
                  ) : (
                        <>
                              <Link href="/signin">
                                    <button className=" ">সাইন ইন</button>
                              </Link>
                              <Link href="/signup">
                                    <button className="btn btn-error bg-red-700 text-white  ">
                                          সাইন আপ
                                    </button>
                              </Link>
                        </>
                  )}
            </div>
      );
};

export default UserMenu;
