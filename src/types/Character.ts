export type Character = {
	id: number
	name: string
	description: string
	image: string
	race: string
	transformations: Transformation[]
}

export type Transformation = {
	id: number
	image: string
	name: string
	ki: string
}
