import styled, { ThemeProvider } from 'styled-components'

import AwardsInfo from './components/AwardsInfo'
import ContentLogo from './components/ContentLogo'
import MetricInfo from './components/MetricInfo'
import { GlobalStyle } from './style/global-style'
import { theme } from './style/theme'

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

const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 85px;
  padding-left: 60px;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <SectionWrapper>
            <ContentLogo />
            <RightSideWrapper>
              <MetricInfo />
              <AwardsInfo />
            </RightSideWrapper>
          </SectionWrapper>
        </MainWrapper>
      </ThemeProvider>
    </>
  )
}

export default App
