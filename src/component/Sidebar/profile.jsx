import React from 'react'
import { ProfileContainer } from './style';
import noImg from '../../assets/img/noUser.webp'


export const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileContainer.Image src={noImg}/>
      <div>
        <ProfileContainer.Name>Oromova Yulduz</ProfileContainer.Name>
        <ProfileContainer.Email>oromova93@gmail.com</ProfileContainer.Email>
      </div>
    </ProfileContainer>
  )
}
