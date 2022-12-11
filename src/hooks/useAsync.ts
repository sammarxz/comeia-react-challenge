import { AxiosResponse } from 'axios'
import { useEffect } from 'react'

export const useAsync = (
  asyncFn: () => Promise<AxiosResponse<any, any>>,
  successFunction: Function,
  returnFunction: Function,
  dependencies: any[] = []
) => {
  useEffect(() => {
    let isActive = true
    void asyncFn().then((result) => {
      if (isActive) successFunction(result.data)
    })
    return () => {
      returnFunction?.()
      isActive = false
    }
  }, dependencies)
}
