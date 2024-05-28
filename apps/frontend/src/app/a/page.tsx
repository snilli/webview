'use client'
import { BreadcrumbItem, Breadcrumbs, CheckboxGroup, Chip, RadioGroup, Select, SelectItem } from '@nextui-org/react'
import ColorRadioItem from './components/ColorRadioItem'
import PopoverFilterWrapper from './components/PopoverFilterWrapper'
import PriceSlider from './components/PriceSlider'
import ProductsGrid from './components/ProductGrid'
import RatingRadioGroup from './components/RatingRadioGroup'
import TagGroupItem from './components/TagGroupItem'
export default function Component() {
	return (
		<div className="max-w-8xl w-full px-2 mb-6 lg:px-24 overflow-y-auto">
			<nav className="my-4 px-2 py-2">
				<Breadcrumbs>
					<BreadcrumbItem>Home</BreadcrumbItem>
					<BreadcrumbItem>Shoes Category</BreadcrumbItem>
					<BreadcrumbItem>Training Shoes</BreadcrumbItem>
				</Breadcrumbs>
			</nav>
			<div className="flex gap-x-6">
				<div className="w-full flex-1 flex-col">
					<header className="relative z-20 flex flex-col gap-2 rounded-medium bg-default-50 px-4 pb-3 pt-2 md:pt-3">
						<div className="flex items-center gap-1 md:hidden md:gap-2">
							<h2 className="text-large font-medium">Shoes</h2>
							<span className="text-small text-default-400">(1240)</span>
						</div>
						<div className="flex  items-center justify-between gap-2 ">
							<div className="flex flex-row gap-2">
								<div className="hidden items-center gap-1 md:flex">
									<h2 className="text-medium font-medium">Shoes</h2>
									<span className="text-small text-default-400">(1240)</span>
								</div>
							</div>
							<div className="-ml-2 flex w-full flex-wrap items-center justify-start gap-2 md:ml-0 md:justify-end">
								<PopoverFilterWrapper title="Pricing Range" backdrop="transparent">
									<PriceSlider
										aria-label="Pricing Filter"
										range={{
											min: 0,
											defaultValue: [100, 500],
											max: 2000,
											step: 1,
										}}
									/>
								</PopoverFilterWrapper>
								<PopoverFilterWrapper title="Color" backdrop="transparent">
									<RadioGroup
										aria-label="Color"
										classNames={{
											wrapper: 'gap-2',
										}}
										orientation="horizontal"
									>
										<ColorRadioItem color="#3F3F46" tooltip="Gray" value="gray" />
										<ColorRadioItem color="#F31260" tooltip="Red" value="red" />
										<ColorRadioItem color="#006FEE" tooltip="Blue" value="blue" />
										<ColorRadioItem color="#17C964" tooltip="Green" value="green" />
										<ColorRadioItem color="#F5A524" tooltip="Yellow" value="yellow" />
										<ColorRadioItem color="#222222" tooltip="Black" value="black" />
										<ColorRadioItem color="#ffffff" tooltip="White" value="white" />
									</RadioGroup>
								</PopoverFilterWrapper>
								<PopoverFilterWrapper title="Size" backdrop="transparent">
									<CheckboxGroup aria-label="Select size" className="gap-1" orientation="horizontal">
										<TagGroupItem value="35">35</TagGroupItem>
										<TagGroupItem value="36">36</TagGroupItem>
										<TagGroupItem value="37">37</TagGroupItem>
										<TagGroupItem value="38">38</TagGroupItem>
										<TagGroupItem value="39">39</TagGroupItem>
										<TagGroupItem value="40">40</TagGroupItem>
										<TagGroupItem value="41">41</TagGroupItem>
										<TagGroupItem value="42">42</TagGroupItem>
										<TagGroupItem value="43">43</TagGroupItem>
										<TagGroupItem value="44">44</TagGroupItem>
										<TagGroupItem value="45">45</TagGroupItem>
										<TagGroupItem value="46">46</TagGroupItem>
									</CheckboxGroup>
								</PopoverFilterWrapper>
								<PopoverFilterWrapper title="Rating" backdrop="transparent">
									<RatingRadioGroup className="w-72" />
								</PopoverFilterWrapper>
								<PopoverFilterWrapper title="Category" backdrop="transparent">
									<CheckboxGroup
										aria-label="Select category"
										className="gap-1"
										orientation="horizontal"
									>
										<TagGroupItem value="sneakers">Sneakers</TagGroupItem>
										<TagGroupItem value="boots">Boots</TagGroupItem>
										<TagGroupItem value="sandals">Sandals</TagGroupItem>
										<TagGroupItem value="slippers">Slippers</TagGroupItem>
										<TagGroupItem value="basketball">Basketball</TagGroupItem>
										<TagGroupItem value="running">Running</TagGroupItem>
										<TagGroupItem value="football">Football</TagGroupItem>
										<TagGroupItem value="paddle">Paddle</TagGroupItem>
										<TagGroupItem value="tennis">Tennis</TagGroupItem>
										<TagGroupItem value="golf">Golf</TagGroupItem>
									</CheckboxGroup>
								</PopoverFilterWrapper>
								<Select
									aria-label="Sort by"
									classNames={{
										base: 'items-center justify-end max-w-fit',
										value: 'w-[112px]',
									}}
									defaultSelectedKeys={['most_popular']}
									labelPlacement="outside-left"
									placeholder="Select an option"
									variant="bordered"
								>
									<SelectItem key="newest" value="newest">
										Newest
									</SelectItem>
									<SelectItem key="price_low_to_high" value="price_low_to_high">
										Price: Low to High
									</SelectItem>
									<SelectItem key="price_high_to_low" value="price_high_to_low">
										Price: High to Low
									</SelectItem>
									<SelectItem key="top_rated" value="top_rated">
										Top Rated
									</SelectItem>
									<SelectItem key="most_popular" value="most_popular">
										Most Popular
									</SelectItem>
								</Select>
							</div>
						</div>
					</header>
					<main className="mt-4 h-full w-full overflow-visible px-1">
						{/* List of applied filters */}
						<div className="mb-4 mt-2 flex flex-wrap items-center gap-2">
							{Array.from({ length: 6 }).map((_, index) => (
								<Chip
									key={index}
									classNames={{
										content: 'text-default-700',
										closeButton: 'text-default-500',
									}}
									variant="flat"
									onClose={() => {}}
								>
									Filter {index + 1}
								</Chip>
							))}
						</div>
						<div className="block rounded-medium border-medium border-dashed border-divider">
							{/* Put your content here */}
							<ProductsGrid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" />
						</div>
					</main>
				</div>
			</div>
		</div>
	)
}
