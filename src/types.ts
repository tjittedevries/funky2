export interface DieFace {
	label: string
	value: number
	face: number
}

export interface DiceSet {
	name: string
	sides: DieFace[]
}

/*
3 x d6 wordt vertaald naar een RollResult[] met 3 resultaten.
Het totaal kan per dice set verschillen

3x star wars force die (d12) levert bijv op:
- <dark> (6)
- <dark> (3)
- <dark> + <dark> (7)
resultaat: <dark>, <dark>, <dark> + <dark>
*/
