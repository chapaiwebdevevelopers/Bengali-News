import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

const removeCategory = [
      "বিবিসি বাংলা এখন হোয়াটসঅ্যাপে!",
      "বিবিসি বাংলা এখন ইন্সটাগ্রামে!",
      "সামাজিক মাধ্যমে বিবিসি বাংলা",
];
export default async function Home() {
      const res = await fetch(
            "https://news-api-v2.vercel.app/api/news/sections",
      );
      const data = await res.json();
      const sections = data.data;
      // console.log(sections);
      const mainSection = sections[0].articles;
      // console.log(mainSection);

      // Remove the First Index from API
      const [first, ...restSection] = sections;
      // console.log("check", restSection.articles);
      // console.log(restSection);
   

      return (
            <main className="container mx-auto">
                  <div className=" my-20 grid grid-cols-3 gap-5">
                        {/* Main content */}
                        <div className="col-span-2 ">
                              {/* Primary news  */}
                              <MainNews news={mainSection}></MainNews>
                              <div>
                                    {/* The below using to help by AI  for removing 3 category */}
                                    {restSection
                                          .filter(
                                                sec =>
                                                      !removeCategory.includes(
                                                            sec.title,
                                                      ),
                                          )
                                          .map((sec, index) => (
                                                <div
                                                      className="py-10"
                                                      key={index}
                                                >
                                                      <h3 className="text-2xl  my-5 py-2 border-b-2 border-red-600">
                                                            {sec.title}
                                                      </h3>

                                                      <div className="grid grid-cols-3 gap-4">
                                                            <NewsCard
                                                                  news={sec}
                                                            />
                                                      </div>
                                                </div>
                                          ))}
                              </div>
                        </div>
                        {/* sidebar  */}
                        <div className="col-span-1">
                              <MostRead></MostRead>
                        </div>
                  </div>
            </main>
      );
}
