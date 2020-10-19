import * as React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'

const GlobalStyle = () => {
    return <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;500;700&display=swap');
        body, html {
          font-family: 'Rubik', sans-serif;
        }
      `
      }
      />
}

export const globalStyle = (Story:any) => (
  <>
    <GlobalStyle />
    <Story />
  </>
)

export const SpacingBottom = styled.div`
  padding: 1rem;
  overflow: auto;
  box-sizing: border-box;
`

export const DarkBackground = styled.div`
  width: 100%;
  background-color: #000;
  padding: 2rem;
  box-sizing: border-box;
`

