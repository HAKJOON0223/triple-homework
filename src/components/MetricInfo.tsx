import styled from 'styled-components'

import { fadeIn } from '../common/FadeIn'
import useEaseOutNumber from '../hooks/useEaseOutNumber'
import useTimeout from '../hooks/useTimeout'

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

interface TextWrapperProps {
  val?: number
}

const TextWrapper = styled.div<TextWrapperProps>`
  display: flex;
  margin-bottom: 20px;
  .metric-text {
    font-size: 36px;
    font-weight: bold;
    color: #3a3a3a;
  }
  .normal-text {
    font-size: 36px;
    color: #3a3a3a;
  }
`
function MetricInfo() {
  const travelerRef = useEaseOutNumber(700)
  const reviewRef = useEaseOutNumber(100)
  const scheduleRef = useEaseOutNumber(470)

  const isFadeInEnd = useTimeout(800)

  return (
    <MetricInfoWrapper className={isFadeInEnd ? '' : 'hide'}>
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
