import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Content = styled.div`
  padding: 0 64px;
  overflow-y: auto;
`
export const NewNote = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 207px;
  height: 48px;
  border-radius: 10px;
  position: absolute;
  right: 64px;
  bottom: 650px;

  svg {
    margin-right: 8px;
  }
`

