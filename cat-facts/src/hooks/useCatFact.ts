import { useEffect, useState } from "react"
import { getRandomFact } from "../lib/getRandomFact"

export function useCatFact() {
  const [facts, setFacts] = useState<string>()

  const newFact = () => {
    getRandomFact().then(_fact => setFacts(_fact))
  }

  useEffect(newFact, [])

  return { facts, newFact }
}