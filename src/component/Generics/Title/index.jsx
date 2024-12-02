import { Container } from "./style";

export const Title = (props) => {
  return (
    <Container {...props}>
      {props?.children}
    </Container>
  );
};

export default Title;