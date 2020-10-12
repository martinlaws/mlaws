import styled from "styled-components"
import { Link } from "gatsby"

export const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  margin: 1rem 0.5rem;
  color: var(--fontPrimary);
`

export const H1 = styled.h1`
  color: var(--fontPrimary);
  --wght: "wght" 800;
`

export const P = styled.p`
  color: var(--fontSecondary);
  font-style: italic;
`

export const CTALink = styled(Link)`
  width: max-content;
  color: var(--linkPrimary);
  text-decoration: none;
  padding-top: 3px;
  border-style: solid;
  border-width: 0px 0px 2px;
  border-color: transparent;
  letter-spacing: 0.04em;
  line-height: 1.4em;
  text-transform: uppercase;
  transition: border-color 0.2s ease 0s, color 0.2s ease 0s;

  &:hover {
    color: var(--other);
    border-color: var(--fontPrimary);
  }

  &:not(:last-of-type) {
    margin-right: 2rem;
  }
`

export const LinkButton = styled.span`
  &:hover {
    color: var(--other);
    border-color: var(--fontPrimary);
  }
`

export const StyledLink = styled(Link)`
  color: var(--fontSecondary);
  --slnt: "slnt" 0;
  --wght: "wght" 600;
  text-decoration: underline;
  padding-top: 3px;
  border-style: solid;
  border-width: 0px 0px 2px;
  border-color: transparent;
  letter-spacing: 0.08em;
  line-height: 1.4em;
  text-transform: uppercase;
  transition: all 0.1s ease 0s;
  width: max-content;

  &:hover,
  &:focus,
  &.isActive {
    color: var(--fontPrimary);
    --wght: "wght" 800;
    --slnt: "slnt" -15;
    --casl: "CASL" 1;
    text-decoration: none;
  }

  &:focus {
    outline: 3px solid var(--other);
  }
`
