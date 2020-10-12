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
