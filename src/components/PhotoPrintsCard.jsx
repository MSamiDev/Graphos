import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firbase";

const PhotoPrintsCard = (Photo, title, image, Date, Time, id) => {
	console.log(Photo.id);

	return (
		<div className="">
			<div className="w-96 rounded-sm overflow-hidden shadow-lg m-16">
				<div
					className="h-64 bg-center bg-cover hover:bg-gray"
					style={{
						backgroundImage: `url(${Photo.image})`,
					}}
				/>
				<div className="mx-6 my-4 border-b border-gray-light">
					<div className="font-medium text-xl text-gray-darker mb-4">
						{Photo.title}
					</div>
					<p className="font-normal text-gray-700 text-sm mb-2">
						{Photo.Date} {Photo.Time}
					</p>
				</div>
				<div className="mx-6 my-4 flex">
					<div className="flex flex-grow text-right">
						<div className="flex items-center justify-center gap-x-3 text-lg">
							<span className="text-teal-500 font-semibold">
								Price <small>{Photo.price}</small>
							</span>
						</div>
					</div>
                    <button className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-black">Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default PhotoPrintsCard;
