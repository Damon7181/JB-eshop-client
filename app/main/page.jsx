"use client";
import Image from "next/image";
import Link from "next/link";

const categories = [
	{
		name: "Saunas",
		img: "https://www.eschgfeller.eu/thumbnail/1d/a7/10/1714500126/c90cded4f6f14c3aa3a34450f6f78028_1920x1920.webp",
	},
	// {
	//   name: 'Smart Rings',
	//   img: '/ring.png',
	// },
	// {
	//   name: 'Ice Baths',
	//   img: '/ice-bath.png',
	// },
	// {
	//   name: 'Massage Guns',
	//   img: '/massage-gun.png',
	// },
];

export default function UserPortalPage() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-x-hidden">
			<h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900 drop-shadow-lg">
				What are you looking for?
			</h1>
			<p className="text-lg sm:text-xl text-blue-700 text-center mb-10 font-medium animate-fadeIn">
				Discover wellness products tailored for you
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl animate-fadeInUp">
				{categories.map((item, idx) => (
					<div
						key={item.name}
						className="flex flex-col items-center group transition-transform duration-300"
						style={{
							animation: `fadeInUp 0.7s ${0.1 * idx}s both`,
						}}
					>
						<Link
							href="/Sauna"
							className="bg-blue-100 rounded-3xl w-28 h-32 flex items-center justify-center shadow-md border-2 border-transparent group-hover:border-blue-400 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
						>
							<div className="relative bg-blue-100 rounded-3xl w-28 h-32 flex items-center justify-center">
								<Image
									src={item.img}
									alt={item.name}
									width={100}
									height={80}
									className="object-contain rounded-3xl w-24 h-24 group-hover:scale-110 transition-transform duration-300"
								/>
							</div>
						</Link>
						<p className="mt-4 text-center font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
							{item.name}
						</p>
					</div>
				))}
			</div>
			{/* Animation keyframes for fadeIn and fadeInUp */}
			<style jsx>{`
				@keyframes fadeIn {
					0% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}
				@keyframes fadeInUp {
					0% {
						opacity: 0;
						transform: translateY(40px);
					}
					100% {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fadeIn {
					animation: fadeIn 1s both;
				}
				.animate-fadeInUp {
					animation: fadeInUp 1s both;
				}
			`}</style>
		</div>
	);
}
