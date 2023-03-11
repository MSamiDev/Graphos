import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { db } from "../firbase";

const GetClients = () => {
	const usersCollection = db.collection("JobList");

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
		<div>
			{/* <Header /> */}
			<div class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-56 max-w-md md:max-w-2xl ">
				<div class="flex items-start px-5 py-7">
					<div class="px-6 ">
						<div class="flex items-center justify-between">
							<h2 class="text-lg font-semibold text-gray-900 -mt-1">
								Title
							</h2>
							<small class="text-sm text-gray-700">22h ago</small>
						</div>
						<p class="text-gray-700">Name - <small>C_name</small></p>
						<p class="mt-3 text-gray-700 text-sm">
							Lorem ipsum, dolor sit amet conse. Saepe optio minus rem
							dolor sit amet!
						</p>
						<div class="flex items-center justify-between">
							<div class="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
								Remote
							</div>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 float-left rounded">
								Contact
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default GetClients;
