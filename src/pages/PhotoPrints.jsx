import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { db } from "../firbase";
import { getDocs } from "firebase/firestore";

const PhotoPrints = () => {
  const usersCollection = db.collection("Marketplace");

  const [document, setDocument] = useState();

  useEffect(() => {
    const getJobs = async () => {
      const data = await getDocs(usersCollection);
      let jobs = [];
      data.docs.forEach((doc) => {
        jobs.push({ ...doc.data(), id: doc.id });
      });
      setDocument(jobs);
    };

    getJobs();
  }, []);
  console.log(document);
  return (
    <>
      <div className="py-5">
        <Header />
      </div>
      {/* component */}
      <div className="flex justify-center gap-8 min-h-screen max-h-max pt-14">
        {document?.map((item) => (
          <div className="py-6">
            <div className="flex w-96 h-44 bg-white shadow-lg rounded-lg overflow-hidden">
              <div
                className="w-1/3 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.url})`,
                }}
              ></div>
              <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">
                  {item.title}
                </h1>
                <p className="mt-2 text-gray-600 text-sm">By {item.name}</p>
                <div className="flex item-center mt-2">
                  <svg
                    className="w-5 h-5 fill-current text-gray-700"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-current text-gray-700"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-current text-gray-700"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-current text-gray-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-current text-gray-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </div>
                <div className="flex item-center justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-xl">
                    ${item.price}
                  </h1>
                  <button className="px-3 py-2 bg-teal-600 text-white text-xs font-bold uppercase rounded">
                    Add to Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-5">
        <Footer />
      </div>
    </>
  );
};

export default PhotoPrints;
