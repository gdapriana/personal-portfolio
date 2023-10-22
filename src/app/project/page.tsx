"use client";
import { useState } from "react";
import { Square2StackIcon, ListBulletIcon } from "@heroicons/react/24/outline";

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

const Divider = () => {
	return <div className="w-full border-b my-4"></div>;
};
