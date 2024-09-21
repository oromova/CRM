import React from 'react'
import { Container } from "./style";

export const Subtitle = (props) => {
    return (
    <Container {...props}>
     {props?.children}
    </Container>
  )
}

export default Subtitle;