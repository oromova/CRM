import React from 'react';
import { Container, Card, Wrapper, Section, Plus, Counter, Arrow } from './style';
import Title from '../Generics/Title';
import Subtitle from '../Generics/Subtitle';
import { privateData } from '../../utils/analitics';


export const Analitika = () => {
  return (
    <Container>
      <Title mb={16}>Analitika</Title>
      <Wrapper gap={24}>
        {
          privateData.map((value) => {
            const { icon: Icon } = value;
            const { img: Img } = value;
            return(
              <Card key={value.id} gap={24} title={value.title}>
                {/* TOP */}
                <Section>
                  <Title>
                    <Icon className="icon"/> {value.title}
                  </Title> 
                  <Plus title={value.title}/>
                </Section>
                 {/* BOTTOM */}
                 <Section title={value.title}>
                  <Title>
                    <Arrow className="icon"/> 
                    <Counter>{value.count}</Counter>
                  </Title> 
                  <Img/>
                  <Plus/>
                </Section>
              </Card>
            )
          })
        }
      </Wrapper>
      <Subtitle mt={24} mb={16}>Ijtimoiy tarmoqlar</Subtitle>
      <Wrapper>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
      </Wrapper>
    </Container>
  );
};

export default Analitika;