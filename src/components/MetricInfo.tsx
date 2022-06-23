import styled from 'styled-components'

const MetricInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TextWrapper = styled.div`
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
  return (
    <MetricInfoWrapper>
      <TextWrapper>
        <span className="metric-text">700만 명</span>
        <span className="normal-text">의 여행자</span>
      </TextWrapper>
      <TextWrapper>
        <span className="metric-text">100만 개</span>
        <span className="normal-text">의 여행 리뷰</span>
      </TextWrapper>
      <TextWrapper>
        <span className="metric-text">470만 개</span>
        <span className="normal-text">의 여행 일정</span>
      </TextWrapper>
    </MetricInfoWrapper>
  )
}
export default MetricInfo
