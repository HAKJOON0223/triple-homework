import styled from 'styled-components'

import './App.css'
import ContentLogo from './components/ContentLogo'

const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SectionWrapper = styled.section`
  min-width: 1200px;
`

function App() {
  return (
    <MainWrapper>
      <SectionWrapper>
        <ContentLogo />
      </SectionWrapper>
    </MainWrapper>
  )
}

export default App
