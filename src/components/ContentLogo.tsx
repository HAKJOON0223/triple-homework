import { useState } from 'react'
import styled from 'styled-components'

import { fadeIn } from '../common/FadeIn'
import { TRIPLE_TROPHY } from '../images'

const ContentLogoWrapper = styled.div`
  width: 400px;
  height: 338px;
  position: relative;
  animation: ${fadeIn} 0.7s linear;
  &.hide {
    opacity: 0;
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
    color: ${({ theme }) => theme.text.contentLogo};
  }
`

function ContentLogo() {
  const [isAnimationStarted, setIsAnimationStarted] = useState(false)

  const handleAnimationStart = () => {
    setIsAnimationStarted(true)
  }

  return (
    <ContentLogoWrapper
      onAnimationStart={handleAnimationStart}
      className={isAnimationStarted ? '' : 'hide'}
    >
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
