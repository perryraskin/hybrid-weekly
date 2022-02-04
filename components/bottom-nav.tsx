import { HomeIcon, UserIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { useRouter } from "next/router"

const BottomNav = () => {
	const router = useRouter()

	return (
		<div className="sm:hidden">
			<nav className="pb-safe w-full bg-zinc-100 border-t dark:bg-zinc-900 dark:border-zinc-800 fixed bottom-0">
				<div className="mx-auto px-6 max-w-md h-16 flex items-center justify-around">
					{links.map(({ href, label, icon }) => (
						<Link key={label} href={href}>
							<a
								className={`space-y-1 w-full h-full flex flex-col items-center justify-center ${
									router.pathname === href
										? "text-indigo-500 dark:text-indigo-400"
										: "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
								}`}
							>
								{icon}
								<span className="text-xs text-zinc-600 dark:text-zinc-400">
									{label}
								</span>
							</a>
						</Link>
					))}
				</div>
			</nav>
		</div>
	)
}

export default BottomNav

const links = [
	{
		label: "Home",
		href: "/",
		icon: <HomeIcon className="w-6 h-6" />
	},
	{
		label: "Profile",
		href: "/story",
		icon: <UserIcon className="w-6 h-6" />
	}
	// {
	// 	label: 'Recipes',
	// 	href: '/recipes',
	// 	icon: (
	// 		<svg
	// 			viewBox='0 0 15 15'
	// 			fill='none'
	// 			xmlns='http://www.w3.org/2000/svg'
	// 			width='18'
	// 			height='18'
	// 		>
	// 			<path
	// 				d='M7.5 15V7m0 .5v3m0-3a4 4 0 00-4-4h-3v3a4 4 0 004 4h3m0-3h3a4 4 0 004-4v-3h-3a4 4 0 00-4 4v3zm0 0l4-4m-4 7l-4-4'
	// 				stroke='currentColor'
	// 			/>
	// 		</svg>
	// 	),
	// },
]
