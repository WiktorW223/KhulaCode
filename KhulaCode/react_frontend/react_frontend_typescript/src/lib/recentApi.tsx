import { getAccessToken } from "./tokenService"
import type {makeRequest} from "./useApi"

const access = getAccessToken()
export type RecentLesson = {
    unit: number|string
    number: number
    order: number

  }
export async function getRecentLesson(makeRequest:makeRequest):Promise<RecentLesson|null|"">
    {
        if (access)   
     {
        const res = await makeRequest("get-last/")
        if(!res.ok)
        {
            return null
        }
        const data = await res.json()

        if(data.message==="all lessons completed")
        {
            return null
        }
        return data

    }
    return ""
    }
