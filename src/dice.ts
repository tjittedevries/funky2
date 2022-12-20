import fateSet from './sets/fate'
import starWarsSet from './sets/star-wars'
import theOneRingSet from './sets/the-one-ring'
import type { DiceSet, DieFace } from './types'

export function getRandomInt(max: number): number {
	return Math.ceil(Math.random() * max)
}

export const sets: DiceSet[] = [
	...theOneRingSet,
	...fateSet,
	...starWarsSet,
]

export function roll(set: DiceSet): DieFace {
	return set.sides[getRandomInt(set.sides.length) - 1]
}

export function roller(set: DiceSet, amount: number): DieFace[] {
	const results: DieFace[] = []

	for (let i = 0; i < amount; i++) {
		results.push(roll(set))
	}

	return results
}

export function resultLabels(results: DieFace[]): string[] {
	return results.map(r => r.label)
}

export function resultValues(results: DieFace[]): number[] {
	return results.map(r => r.value)
}

export function resultFaces(results: DieFace[]): number[] {
	return results.map(r => r.face)
}

export function totalValues(results: DieFace[]): number {
	return results.reduce((total, r) => total + r.value, 0)
}

export function totalFaces(results: DieFace[]): number {
	return results.reduce((total, r) => total + r.face, 0)
}

// Voor Starwars return je resultLabels
// Voor Fate return je totalFaces
