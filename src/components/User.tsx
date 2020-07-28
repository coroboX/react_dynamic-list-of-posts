import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

interface Props {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}
export const User: React.FC<Props> = (props) => {
  const { name, email, address } = props;
  const { street, city, zipcode } = address;

  return (
    <Alert variant="standard">
      <AlertTitle>
        <p>{name}</p>
      </AlertTitle>
      <p className="email">{email}</p>
      <hr />
      <p>{street}</p>
      <p>{city}</p>
      <p>{zipcode}</p>
    </Alert>
  );
};
