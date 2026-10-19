
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import DateDisplay from "./DateDisplay";

const Header = () => {
      return (
            <div className="container mx-auto">
                  <div className="flex my-2 justify-center">
                        <Link href="/" className="flex items-center justify-center gap-3">
                              <Image alt="Logo"
                                    height={60}
                                    width={60}
                                    src={"/logo.webp"}
                              ></Image>
                              <div>
                                    <h2 className="text-red-700 text-3xl font-bold">Bangla News 24</h2>
                                    <DateDisplay />
                              </div>
                        </Link>

                        <div className="bg-white absolute right-4 space-x-2 ">
                              <UserMenu></UserMenu>
                        </div>
                  </div>
                  <div className="mx-auto text-center">
                            <NavLinks></NavLinks>
                  </div>
            </div>
      );
};

export default Header;
