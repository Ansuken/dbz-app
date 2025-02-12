export interface Character {
	id: number
	name: string
	description: string
	image: string
	race: string
	transformations: Transformation[]
}

export interface Transformation {
	id: number
	image: string
	name: string
	ki: string
}
