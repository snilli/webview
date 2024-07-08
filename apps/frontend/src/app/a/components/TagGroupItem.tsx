'use client'

import type { CheckboxProps } from '@nextui-org/react'

import { Icon } from '@iconify/react'
import { Chip, VisuallyHidden, cn, useCheckbox } from '@nextui-org/react'
import { forwardRef } from 'react'

export type TagGroupItemProps = Omit<CheckboxProps, 'icon'> & {
	icon?: string
}

const TagGroupItem = forwardRef<HTMLLabelElement, TagGroupItemProps>(({ icon, size = 'md', ...props }, ref) => {
	const { children, isSelected, isFocusVisible, getBaseProps, getLabelProps, getInputProps } = useCheckbox({
		...props,
	})

	return (
		<label {...getBaseProps()} ref={ref}>
			<VisuallyHidden>
				<input {...getInputProps()} />
			</VisuallyHidden>
			<Chip
				classNames={{
					base: cn({
						'outline-none ring-2 ring-focus ring-offset-2 ring-offset-background': isFocusVisible,
						'bg-primary': isSelected,
					}),
					content: cn('!text-small text-default-400', {
						'text-primary-foreground': isSelected,
						'pr-1': !!icon,
					}),
				}}
				radius="sm"
				size={size}
				startContent={
					icon ? (
						<Icon
							className={cn('text-default-400', {
								'text-primary-foreground': isSelected,
							})}
							icon={icon}
							width={16}
						/>
					) : undefined
				}
				variant="flat"
				{...(getLabelProps() as { id: string; className: string })}
			>
				{children}
			</Chip>
		</label>
	)
})

TagGroupItem.displayName = 'TagGroupItem'

export default TagGroupItem
