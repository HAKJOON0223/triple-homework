import styled from 'styled-components'

import './App.css'
import ContentLogo from './components/ContentLogo'
import MetricInfo from './components/MetricInfo'
import { GlobalStyle } from './style/global-style'

const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SectionWrapper = styled.section`
  min-width: 1200px;
  display: flex;
  justify-content: space-around;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <SectionWrapper>
          <ContentLogo />
          <MetricInfo />
        </SectionWrapper>
      </MainWrapper>
    </>
  )
}

export default App
