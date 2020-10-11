import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const TableContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin: 4rem 0;

    p {
      font-family: "IBM Plex Mono", monospace;
      color: var(--linkPrimary);
      font-style: normal;

      &.date {
        font-style: italic;
        color: var(--fontSecondary);
        text-align: end;
      }
    }
  `

const Row = styled(Link)`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    border: none;
    border-bottom: 2px solid var(--other);
    padding: 1rem 0;
    background: transparent;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      border-color: var(--fontPrimary);

      * {
        color: var(--accentPrimary);
      }

      .date {
        color: var(--accentPrimary);
        width: content-max;
      }
    }

    @media only screen and (min-width: 680px) {
      flex-flow: row nowrap;
    }
  `

const P = styled.p`
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 400;
    margin: 0;
    color: var(--fontSecondary);
    font-style: italic;
  `

function Table({ data }) {
  return (
    <TableContainer>
      {data.map((rowData, index) => (
        <Row key={index} to={rowData.path}>
          <P>{rowData.title}</P>
          <P className="date">{rowData.date}</P>
        </Row>
      ))}
    </TableContainer>
  )
}

export default Table
