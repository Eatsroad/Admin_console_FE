import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from './styles';
interface Props {
  route: string;
  title: string;
}

const RouteButton: React.FC<Props> = ({
  route,
  title,
}: Props) => {
  const history = useHistory();

  return (
    <Button onClick={() => history.push(route)}>{title}</Button>
  );
};

export default RouteButton;