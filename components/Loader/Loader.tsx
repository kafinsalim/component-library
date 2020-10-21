import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import * as React from "react"

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`

function SpinnerLoader(props: any) {
  return (
    <svg width={24} id="loading_spinner_animated" height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M21.477 11.424a.922.922 0 00-1.843.086 7.366 7.366 0 11-3.38-5.853.922.922 0 10.996-1.553 9.208 9.208 0 104.227 7.32z"
        fill={props.fillPath || "#fff"}
      />
    </svg>
  )
}

export const Loader = styled(SpinnerLoader)`
    animation: ${spin} 1s linear infinite;
`
