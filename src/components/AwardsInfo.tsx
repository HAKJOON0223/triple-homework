import styled from 'styled-components'

import { APPSTORE_BADGE, PLAYSTORE_BADGE } from '../images'

const AwardsInfoWrapper = styled.div`
  width: 100%;
  display: flex;
`
const AwardsDescription = styled.div`
  width: 100%;
  display: flex;
  margin-right: 40px;
  align-items: center;
  .awards-badge {
    width: 55px;
    object-fit: contain;
  }
  .description-text {
    margin-left: 5px;
    line-height: 1.5;
    flex-shrink: 0;
    color: #3a3a3acc;
    font-weight: bold;
    font-size: 14px;
  }
`

function AwardsInfo() {
  return (
    <AwardsInfoWrapper>
      <AwardsDescription>
        <img
          className="awards-badge"
          src={PLAYSTORE_BADGE}
          alt="올해의 앱 최우수상"
        />
        <span className="description-text">
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </span>
      </AwardsDescription>
      <AwardsDescription>
        <img
          className="awards-badge"
          src={APPSTORE_BADGE}
          alt="오늘의 여행앱 선정"
        />
        <span className="description-text">
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </span>
      </AwardsDescription>
    </AwardsInfoWrapper>
  )
}

export default AwardsInfo
