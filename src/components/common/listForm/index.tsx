import React from 'react';

interface Props {
  component: any
  data: any[];
}
const ListWithComponent = ({
  component,
  data
}: Props): JSX.Element => {
  return (
    <div>
      {
        data.map((i) => (
          component.Viewer
        ))
      }
    </div>
  );
}

export default ListWithComponent;