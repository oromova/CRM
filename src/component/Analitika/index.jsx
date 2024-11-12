import React, { useContext } from 'react';
import { Container, Card, Wrapper, Section, Plus, Counter, Arrow, SubCard, FooterWrapper } from './style';
import Title from '../Generics/Title';
import Subtitle from '../Generics/Subtitle';
import { media, privateData } from '../../utils/analitics';
import Moliya from './Moliya';
import Email from './Email';
import { MentorContext } from '../../context/mentor';

export const Analitika = () => {
  const [state, dispatch] = useContext(MentorContext)
  console.log(state, 'sta');
  
  return (
    <Container>
      <Title mb={16}>Analitika</Title>
      {/* Private Data */}
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
      <Subtitle mt={24} mb={16}>
        Ijtimoiy tarmoqlar
      </Subtitle>
      {/* Media */}
      <Wrapper>
      {
          media.map((value) => {
            const { icon: Icon } = value;
            return(
              <SubCard key={value.id} gap={24} title={value.title}>
                {/* TOP */}
                <Section>
                  <Subtitle>
                    <Icon className="subicon"/> {value.title}
                  </Subtitle> 
                  <Plus title={value.title}/>
                </Section>
                 {/* BOTTOM */}
                 <Section title={value.title}>
                  <Title color={"#52C41A"}>
                    <Arrow className="icon"/>22%
                  </Title> 
                  <Counter>{value.count}K</Counter>
                  <Plus/>
                </Section>
              </SubCard>
            )
          })
        }
      </Wrapper>
      {/* EMAIL & MOLIYA */}
      <FooterWrapper>
        <FooterWrapper.Email>
          <Subtitle mt={24} mb={16} count={12}>
            Email xabarlari
          </Subtitle>
          <Email/>
        </FooterWrapper.Email>
        {/* MOLIYA */}
        <FooterWrapper.Moliya>
          <Subtitle mt={28} mb={16}>
            Moliya
          </Subtitle>
          <Moliya>
            moliya
          </Moliya>
        </FooterWrapper.Moliya>
      </FooterWrapper>
    </Container>
  );
};

export default Analitika;