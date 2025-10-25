// src/components/ProfileCard.jsx
import type { ClientType } from "../types/ClientType";
interface ProfileCardProps {
	client: ClientType;
}
const ProfileCard = ({ client }: ProfileCardProps) => {
	const { name, role, description, imgSrc, views, comments } = client;


    // Convert number to string e.g 2500 would be 2.5K and 3500000 would be 3.5M
  const numToString = (views: number) => {
  const viewsNum = parseInt(String(views));
  if (viewsNum >= 1000000) return (viewsNum / 1000000).toFixed(1) + "M";
  if (viewsNum >= 1000) return (viewsNum / 1000).toFixed(1) + "K";
  return viewsNum.toString();
};

    

	return (
		<div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-gray-800">
			<div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
				{/* Profile Image */}
				<img
					className="absolute inset-0 h-full w-full object-cover"
					src={imgSrc}
					alt={name}
				/>
			</div>

			<div className="p-6">
				<p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1 text-left">
					ROLE:{role}
				</p>
				<h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-left">
					{name}
				</h2>
				<p className="text-gray-700 dark:text-gray-300 text-base mb-4 text-left">
					{description}
				</p>

				<div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
					<a
						href="#"
						className="flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
					>
						View Profile
						<svg
							className="ml-1 w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
							></path>
						</svg>
					</a>
					<div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                        <span onClick={() => { console.log(id)}} className="bg-red-400 flex items-center">
						<svg
								className="w-4 h-4 mr-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								></path>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
								></path>
							</svg>
							{numToString(Number(views))}

						</span>
						<span className="flex items-center">
							<svg
								className="w-4 h-4 mr-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-3.618-.63L5 21l1.45-3.66A9.99 9.99 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
								></path>
							</svg>
							{comments}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
