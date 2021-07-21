import React from 'react';
import { Container, Tag, Title } from './styles';
interface TagType {
  name: string;
}
interface Props {
  title: string;
  list: TagType[];
}
const Tags = ({title, list}: Props): JSX.Element => (
  <Container>
    { list.length !== 0 && <Title>{title}</Title>}
    {
      list.length !== 0 && list.map((item) => (<Tag key={item.name}>{item.name}</Tag>))
    }
  </Container>
);


export default Tags;