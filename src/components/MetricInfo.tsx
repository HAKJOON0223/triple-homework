import { useState } from 'react'
import styled from 'styled-components'

import { fadeIn } from '../common/FadeIn'
import useEaseOutNumber from '../hooks/useEaseOutNumber'

const MetricInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  animation-delay: 100ms;
  animation-name: ${fadeIn};
  animation-duration: 0.7s;
  animation-timing-function: linear;
  &.hide {
    opacity: 0;
  }
`

const TextWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  .metric-text {
    font-size: 36px;
    font-weight: bold;
    color: ${({ theme }) => theme.text.metricInfo};
  }
  .normal-text {
    font-size: 36px;
    color: ${({ theme }) => theme.text.metricInfo};
  }
`
function MetricInfo() {
  const travelerRef = useEaseOutNumber(700)
  const reviewRef = useEaseOutNumber(100)
  const scheduleRef = useEaseOutNumber(470)

  const [isAnimationStarted, setIsAnimationStarted] = useState(false)

  const handleAnimationStart = () => {
    setIsAnimationStarted(true)
  }

  return (
    <MetricInfoWrapper
      onAnimationStart={handleAnimationStart}
      className={isAnimationStarted ? '' : 'hide'}
    >
      <TextWrapper>
        <span ref={travelerRef} className="metric-text">
          0
        </span>
        <span className="metric-text">만 명</span>
        <span className="normal-text">의 여행자</span>
      </TextWrapper>
      <TextWrapper>
        <span ref={reviewRef} className="metric-text">
          0
        </span>
        <span className="metric-text">만 개</span>
        <span className="normal-text">의 여행 리뷰</span>
      </TextWrapper>
      <TextWrapper>
        <span ref={scheduleRef} className="metric-text">
          0
        </span>
        <span className="metric-text">만 개</span>
        <span className="normal-text">의 여행 일정</span>
      </TextWrapper>
    </MetricInfoWrapper>
  )
}
export default MetricInfo
