export type Player = {
  id: number
  first_name: string
  last_name: string
  height_feet: string
  weight_pounds?: number
  position: string
  team: {
    full_name: string
  }
}
