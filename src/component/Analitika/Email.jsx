import React from 'react';
import { Info, Wrapper, Section } from './emailStyle';
import email from '../../mock/email';
import Subtitle from '../Generics/Subtitle';


export const Email = () => {
  return (
    <Wrapper>
      {email.map((eml) => {
        return (
          <Info key={eml.id}>
            <Section>
              <Info.Img src={eml.src} />
              <div>
                <Subtitle size={14}>{eml.name}</Subtitle>
                <Subtitle size={14} color={"#929FAF"}>{eml.status}</Subtitle>
              </div>
            </Section>
            <Info.Sms size={14}>{eml.name}</Info.Sms>
            <Section end>{eml.date}</Section>
          </Info>
        );
      })}
    </Wrapper>
  );
};

export default Email;