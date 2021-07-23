import React, {FC} from 'react';

interface ProfileCardProps {
  title?: string;
  users?: object[];
}

const ProfileCard: FC<ProfileCardProps> = ({title, users}) => {
  return(
    <h3>{title}</h3>
  )
}

export default ProfileCard;