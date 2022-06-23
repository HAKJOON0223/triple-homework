import styled from 'styled-components'

import { fadeIn } from '../common/FadeIn'
import useTimeout from '../hooks/useTimeout'
import { TRIPLE_TROPHY } from '../images'

const ContentLogoWrapper = styled.div`
  width: 400px;
  height: 338px;
  position: relative;
  animation: ${fadeIn} 0.7s linear;
  & {
    .hide {
      opacity: 1;
    }
  }

  .content-logo-img {
    width: 100%;
  }
  .content-text {
    width: fit-content;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;
    margin: 0px auto;
    color: #3a3a3ab3;
  }
`

function ContentLogo() {
  const timeout = useTimeout(900)

  return (
    <ContentLogoWrapper className={timeout ? '' : 'hide'}>
      <img
        className="content-logo-img"
        src={TRIPLE_TROPHY}
        alt="2021년 12월 기준"
      />
      <span className="content-text">2021년 12월 기준</span>
    </ContentLogoWrapper>
  )
}

export default ContentLogo
