import { CatFact } from "@/types"
import { API_CAT_FACT } from "./constanst"

export const getRandomFact = async () => {
  const response = await fetch(API_CAT_FACT)
  const data : CatFact = await response.json()
  return data.fact
}