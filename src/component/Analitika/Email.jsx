import React, { useContext, useEffect } from 'react';
import { Info, Wrapper, Section } from './emailStyle';
//import email from '../../mock/email';
import Subtitle from '../Generics/Subtitle';
import { EmailsContext } from '../../context/emails';


export const Email = () => {
  const [email, dispatch] = useContext(EmailsContext);

  const url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
        // emails
        fetch(`${url}/tabs/emails`)
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: "get", payload: res });
        });
  }, []);


  return (
    <Wrapper>
      {email?.map((eml) => {
        return (
          <Info key={eml.id}>
            <Section>
              <Info.Img src={eml.src} />
              <div>
                <Subtitle size={14}>{eml.name}</Subtitle>
                <Subtitle size={14} color={"#929FAF"}>
                  {eml.title}
                </Subtitle>
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