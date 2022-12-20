import fateSet from './sets/fate'
import starWarsSet from './sets/star-wars'
import { resultLabels, roller, totalValues } from './dice'

const roll = roller(starWarsSet[0], 3)
console.log('roll', roll, totalValues(roll), resultLabels(roll))

const roll2 = roller(fateSet[0], 4)
console.log('roll', roll2, totalValues(roll2), resultLabels(roll2))
