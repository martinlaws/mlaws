import React from "react"
import styled from "styled-components"

const Span = styled.span`
  display: inline-block;

  &.marginLoose {
    margin: 0 0.5rem;
  }
`

export const Emoji = ({ label, symbol, marginLoose = false }) => (
  <Span
    className={"emoji" && marginLoose && "marginLoose"}
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </Span>
)
