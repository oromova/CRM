import styled from "styled-components";
import arrow from '../../../assets/icons/sidebar/arrowRight.svg?react'

const getColor = ({title}) => {
  switch(title) {
    case "Lidlar":
      return 'rgb(240, 245, 255)';
    case "Moliya":
      return 'rgb(255, 242, 232)';
    case "Talabalar":
      return 'rgb(249, 240, 255)'
    case "Kurslar":
      return 'rgb(230, 255, 251)'
    case "Guruhlar":
      return 'rgb(252, 255, 230)';
    case "HR":
      return 'rgb(255, 240, 246)';
    case "Sozlamalar":
      return 'rgb(255, 242, 232)';
    default: 
      return "#FFF2E8";
  }
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px 0px;
  padding: 24px;
  gap: 8px;
  background-color: ${getColor};
  margin-bottom: 32px;
`

export const Arrow = styled(arrow)`
  display: flex;
`