/* eslint-disable @next/next/no-img-element */
import Page from "@/components/page"
import Section from "@/components/section"

import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

import {
	CheckCircleIcon,
	CheckIcon,
	QuestionMarkCircleIcon,
	SelectorIcon,
	XCircleIcon
} from "@heroicons/react/solid"

const people = [
	{
		name: "Leslie Alexander",
		email: "lesliealexander@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		going: false
	},
	{
		name: "John Smith",
		email: "sdf@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
		going: true
	}
]

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ")
}

function getSunday(d: string | number | Date) {
	d = new Date(d)
	var day = d.getDay(),
		diff = d.getDate() - day
	return new Date(d.setDate(diff))
}

function getMonday(d: string | number | Date) {
	d = new Date(d)
	var day = d.getDay(),
		diff = d.getDate() - day + (day == 0 ? -6 : 1)
	return new Date(d.setDate(diff))
}

const Index = () => (
	<Page>
		<div className=" flex items-center space-x-3">
			<div className="flex-shrink-0">
				<img
					className="h-12 w-12 rounded-full"
					src={`https://i.ibb.co/X4PFmQ0/SCR-20220202-jyw.png`}
					alt=""
				/>
			</div>
		</div>
		<h2 className="mt-6 text-3xl font-semibold text-zinc-800 dark:text-zinc-200">
			Week of {dayjs(getSunday(new Date())).format("MMMM D")}
		</h2>
		{[1, 2, 3, 4, 5].map((i) => (
			<div key={i} className="mb-6">
				<span
					className="mt-10 inline-flex items-center px-6 py-2 rounded-md text-2xl 
			   font-semibold bg-purple-600 text-white"
				>
					{dayjs().day(i).format("dddd")}
				</span>

				<div className="mt-4">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div
							className="relative rounded-lg border border-gray-400 bg-white dark:bg-gray-600 px-6 py-5 
							shadow-sm flex items-center space-x-3 hover:border-gray-400"
						>
							<div className="flex-shrink-0">
								<img
									className="h-10 w-10 rounded-full"
									src={`https://i.ibb.co/3M76Ppn/1634230688068.jpg`}
									alt=""
								/>
							</div>
							<div className="flex-1 min-w-0">
								<a href="#" className="focus:outline-none">
									<span className="absolute inset-0" aria-hidden="true" />
									<p className="text-sm font-medium text-gray-900 dark:text-white">
										You
									</p>
									<p className="text-sm text-gray-500 dark:text-gray-400 truncate">
										perry.raskin@citi.com
									</p>
								</a>
							</div>
							<QuestionMarkCircleIcon className="h-6 w-6 text-gray-400 dark:text-gray-300" />
						</div>
						{people.map((person) => (
							<div
								key={person.email}
								className="relative rounded-lg border border-gray-400 bg-white dark:bg-gray-600 px-6 py-5 
							shadow-sm flex items-center space-x-3 hover:border-gray-400"
							>
								<div className="flex-shrink-0">
									<img
										className="h-10 w-10 rounded-full"
										src={person.imageUrl}
										alt=""
									/>
								</div>
								<div className="flex-1 min-w-0">
									<a href="#" className="focus:outline-none">
										<span className="absolute inset-0" aria-hidden="true" />
										<p className="text-sm font-medium text-gray-900 dark:text-white">
											{person.name}
										</p>
										<p className="text-sm text-gray-500 dark:text-gray-400 truncate">
											{person.email}
										</p>
									</a>
								</div>
								{person.going ? (
									<CheckCircleIcon className="h-6 w-6 text-green-500" />
								) : (
									<XCircleIcon className="h-6 w-6 text-red-500" />
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		))}
	</Page>
)

export default Index
