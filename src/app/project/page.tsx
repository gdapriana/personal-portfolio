"use client";
import { useState } from "react";
import { Square2StackIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import LaravelIcon from "@/assets/images/laravel.png"

const metadata: any = {
	title: "Project",
	subtitle: "Here are the projects that I have worked on so far",
};

export default function Project() {
	const [view, setView] = useState("card");
	return (
		<div className="w-full h-full">
			<Header />
			<Divider />
			<ViewButton />
			<ProjectSection />
		</div>
	);
}

const Header = () => {
	return (
		<header className="flex flex-col justify-center items-start gap-2">
			<h1 className="text-3xl text-neutral-600 font-bold">{metadata.title}</h1>
			<p className="text-sm text-neutral-400">{metadata.subtitle}</p>
		</header>
	);
};

const ViewButton = () => {
	return (
		<div className="w-full flex justify-end items-center gap-2">
			<p className="text-sm text-neutral-400">Change View</p>
			<div
				data-tooltip-target="cardview-tooltip"
				className="border p-1 rounded-md text-neutral-600 cursor-pointer bg-neutral-100"
			>
				<Square2StackIcon className="w-5" />
			</div>

			<div className="border p-1 rounded-md text-neutral-600 cursor-pointer">
				<ListBulletIcon className="w-5" />
			</div>
		</div>
	);
};

const ProjectSection = () => {
	return (
		<div className="w-full gap-2 grid mt-4 grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
	)
}

const ProjectCard = () => {
	return (
		<div className="max-w-sm flex flex-col relative overflow-hidden bg-white border border-gray-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700">
			<div className="w-full bg-cover h-12" style={{backgroundImage: "url(https://source.unsplash.com/random/1920x1080?programming)"}}></div>
			<div className="w-12 rounded-full m-6 h-12 absolute" style={{backgroundImage: `src(${LaravelIcon})`}}>
			</div>
			<div className="w-full h-32 px-2 pb-2 pt-6">
				<div className="">
					<h1 className="font-bold text-neutral-600 text-sm">Indonesian Literature</h1>
				</div>
			</div>
		</div>
	)
}

const Divider = () => {
	return <div className="w-full border-b my-4"></div>;
};
