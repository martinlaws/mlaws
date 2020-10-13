import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { devices } from "./base"

const TableContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 1rem 0 4rem;
`

const Row = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.25rem;
  border: none;
  border-bottom: 2px solid var(--fontSecondary);
  padding: 1rem;
  background: transparent;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    border-color: var(--fontPrimary);
    background: var(--fontPrimary);

    * {
      text-decoration: none;
      color: var(--contentBg);
      --wght: "wght" 900;
      --slnt: "slnt" -15;
      --casl: "CASL" 1;
    }

    .date {
      color: var(--contentBg);
      text-decoration: none;
    }
  }

  &:focus {
    outline: 3px solid var(--accentPrimary);
  }

  @media ${devices.tablet} {
    grid-template-columns: 2fr 1fr;
  }
`

const ExternalRow = styled.a`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.25rem;
  border: none;
  border-bottom: 2px solid var(--fontSecondary);
  padding: 1rem;
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  color: var(--fontSecondary);

  &:hover,
  &:focus {
    border-color: var(--fontPrimary);
    background: var(--fontPrimary);

    * {
      text-decoration: none;
      color: var(--contentBg) !important;
      --wght: "wght" 800;
      --slnt: "slnt" -15;
      --casl: "CASL" 1;
    }
  }

  &:focus {
    outline: 3px solid var(--accentPrimary);
  }

  @media ${devices.tablet} {
    grid-template-columns: 2fr 1fr;
  }
`

const P = styled.p`
  margin: 0;
  color: var(--fontPrimary);
  --wght: "wght" 800;

  &.subhead {
    text-decoration: none;
    text-align: start;
    color: var(--fontSecondary);

    @media ${devices.tablet} {
      text-align: end;
    }
  }
`

const Date = styled(P)`
  text-align: start;
  color: var(--fontSecondary);
  --wght: "wght" 200;
  --casl: "CASL" 1;
  --mono: "MONO" 0;
  --slnt: "slnt" -15;

  @media ${devices.tablet} {
    text-align: end;
  }
`

const renderRow = (rowData, index) => {
  if (rowData.internalLink)
    return (
      <Row key={index} to={rowData.path}>
        <div>
          <P>{rowData.title}</P>
          {rowData.date && <Date>{rowData.date}</Date>}
        </div>
      </Row>
    )
  else
    return (
      <ExternalRow
        key={index}
        href={rowData.path}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Opens in a new tab"
      >
        <P>{rowData.title}</P>
        <div>
          <P className="subhead">{rowData.subhead}</P>
          {rowData.date && <Date>{rowData.date}</Date>}
        </div>
      </ExternalRow>
    )
}

function Table({ data }) {
  return (
    <TableContainer>
      {data.map((rowData, index) => renderRow(rowData, index))}
    </TableContainer>
  )
}

export default Table
