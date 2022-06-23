import { useEffect, useState } from 'react'

// Timeout custom hook
function useTimeout(time: number) {
  const [state, setState] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setState(true)
    }, time)
  }, [time])

  return state
}

export default useTimeout
