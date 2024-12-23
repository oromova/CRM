import { useEffect, useState } from 'react';
import { Arrow, Container } from './style';
import Title from '../../Generics/Title';
import { useLocation } from 'react-router-dom';
import Subtitle from '../../Generics/Subtitle';

export const Breadcrumb = ({ children }) => {
  const [path, setPath] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setPath(
      typeof location.state.parent === "string" 
        ? location.state.parent.split(" ")
        : location.state.parent
      );
    }, []);

  return (
    <Container>
      {
        path.map((value) => {
          return (
            <Title key={value}>{value}<Arrow /></Title>
          );
        })
      }
      <Subtitle> {location.state?.child} </Subtitle>
      <div style={{ display: 'flex', marginLeft: "auto" }}> {children} </div>
    </Container>
  );
};

export default Breadcrumb;