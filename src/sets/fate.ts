import type { DiceSet } from '../types'

const sets: DiceSet[] = [
	{
		name: 'Face d6',
		sides: [
			{
				label: '-1',
				value: -1,
				face: 1,
			},
			{
				label: '-1',
				value: -1,
				face: 2,
			},
			{
				label: '0',
				value: 0,
				face: 3,
			},
			{
				label: '0',
				value: 0,
				face: 4,
			},
			{
				label: '+1',
				value: 1,
				face: 5,
			},
			{
				label: '+1',
				value: 1,
				face: 6,
			},
		],
	},
]

export default sets
