import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  flex-direction: row-reverse;
  padding: 0 80px;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
export const Search = styled.div` 
  display: flex;
  align-items: center;
  padding: 60px;
  width: 100%;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.ORANGE};
`

