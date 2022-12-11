import { AxiosCall } from '@/models'
import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

export const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(true)
  let controller: AbortController

  const callEndpoint = async (axiosCall: AxiosCall<any>) => {
    if (axiosCall.controller != null) controller = axiosCall.controller
    let result = {} as AxiosResponse<any>
    try {
      result = await axiosCall.call
    } catch (err: any) {
      setLoading(false)
      throw err
    }
    setLoading(false)
    return result
  }

  const cancelEndpoint = () => {
    setLoading(false)
    controller?.abort()
  }

  useEffect(() => {
    return () => {
      cancelEndpoint()
    }
  }, [])

  return { loading, callEndpoint }
}
