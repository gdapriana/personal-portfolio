import profile from "@/assets/images/apriana.png";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
	return (
		<div className="w-full h-full flex flex-col gap-4">
			<Header />
			<Divider />
			<Navigation />
		</div>
	);
}

const metadata: {
	name: string;
	tag: string;
	hired: boolean;
	navigations: { name: string; path: string; icon?: string }[];
} = {
	name: "Gede Apriana",
	tag: "@gdaprianaa",
	hired: true,
	navigations: [
		{
			name: "Dashboard",
			path: "/",
			icon: "M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3",
		},
		{
			name: "About",
			path: "/about",
			icon: "M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z",
		},
		{
			name: "Project",
			path: "/project",
			icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z",
		},
		{
			name: "Blog",
			path: "/blog",
			icon: "M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75",
		},
		{
			name: "Learn",
			path: "/learn",
			icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
		},
	],
};

const Header = () => {
	return (
		<div className="w-full gap-4 flex flex-col justify-center items-start">
			<div>
				<Image
					width={200}
					height={200}
					className="w-20 h-20 rounded-full"
					src={profile.src}
					alt="Rounded avatar"
				/>
			</div>
			<div className="">
				<h1 className="text-neutral-600 text-base font-bold flex gap-1">
					{metadata.name} <CheckBadgeIcon className="w-5 text-blue-500" />
				</h1>
				<p className="text-sm text-neutral-400">{metadata.tag}</p>
			</div>
			<div className="w-full flex justify-between gap-4 items-center">
				<p className="text-sm text-neutral-400 flex gap-1">
					<CodeBracketIcon className="w-4" />
					Available for hired
				</p>
				<label className="relative inline-flex items-center cursor-pointer">
					<input type="checkbox" value="" className="sr-only peer" />
					<div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
				</label>
			</div>
		</div>
	);
};
const Navigation = () => {
	return (
		<div className="w-full flex flex-col">
			<ul className="w-full flex flex-col">
				{metadata.navigations.map((item, index) => {
					return (
						<li
							className="text-neutral-400 w-full rounded-lg flex justify-start items-center hover:bg-neutral-200"
							key={index}
						>
							<Link href={item.path} className="py-2 text-sm px-2 flex gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-5 h-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d={item.icon}
									/>
								</svg>
								{item.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
const Divider = () => {
	return <div className="w-full border-b"></div>;
};
