import { useEffect, useRef } from 'react'

// 2초동안 동작.
const duration = 2000

// 여행자, 여행 리뷰, 여행일정 표시될때, 숫자가 올라가는 애니메이션 처럼 구현 해주는 Custom Hook,
// useRef함수 이용해서 렌더링 최적화.
function useEaseOutNumber(endNum: number) {
  const ref = useRef<HTMLSpanElement>(null)

  // ease-out 그래프를 그려주는 계산식 함수.
  const easeOutQuad = (
    progress: number,
    start: number,
    end: number,
    duration: number,
  ) => {
    return Math.round(-end * (progress /= duration) * (progress - 2) + start)
  }

  useEffect(() => {
    function easeOutQuadAnimation(passedTime: number) {
      if (!ref?.current?.innerText) {
        return
      }
      if (passedTime >= duration) {
        ref.current.innerText = `${endNum}`
        return
      }
      ref.current.innerText = `${easeOutQuad(passedTime, 0, endNum, duration)}`
      window.requestAnimationFrame(easeOutQuadAnimation)
    }

    window.requestAnimationFrame(easeOutQuadAnimation)
  }, [endNum])

  return ref
}

export default useEaseOutNumber
