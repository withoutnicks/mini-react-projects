import { API_CAT_IMG } from "@/lib/constanst";
import { useEffect, useState } from "react";
export function useCatImage(fact: string | undefined) {
  const [imgUrl, setImgUrl] = useState<string>();

  useEffect(() => {
    if (!fact) return;

    const words = fact.split(' ',3).join(' ')
    setImgUrl(`${API_CAT_IMG}${words}?type=square&fontColor=red`)

  }, [fact])

  return {imgUrl}
}