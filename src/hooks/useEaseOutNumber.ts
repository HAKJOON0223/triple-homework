import { useEffect, useRef } from 'react'

// 60FPS로 동작하기 위해 1초를 60으로 나눔.
const increasePerFrame = Math.floor(1000 / 60)
// 2초동안 동작.
const duration = 2000
// 여행자, 여행 리뷰, 여행일정 표시될때, 숫자가 올라가는 애니메이션 처럼 구현 해주는 Custom Hook,
// useRef함수 이용해서 렌더링 최적화.
function useEaseOutNumber(endNum: number) {
  const ref = useRef<HTMLSpanElement>(null)

  const easeOutQuad = (
    percent: number,
    start: number,
    end: number,
    duration: number,
  ) => {
    return Math.round(-end * (percent /= duration) * (percent - 2) + start)
  }

  useEffect(() => {
    let cnt = 0
    const interval = setInterval(() => {
      if (ref?.current?.innerText) {
        // ease-out 그래프를 그려주는 계산식 함수.
        const currText = easeOutQuad(
          (cnt += increasePerFrame),
          0,
          endNum,
          duration,
        )
        // 현재 표시할 값이 endNum보다 크다면, endNum으로 수정. Interval종료.
        if (currText >= endNum) {
          ref.current.innerText = `${endNum}`
          clearInterval(interval)
        } else {
          ref.current.innerText = `${currText}`
        }
      }
    }, increasePerFrame)

    return () => clearInterval(interval)
  })

  return ref
}

export default useEaseOutNumber
