import { ItemClass } from './ListClasses';
import { ListImple } from './ListItemClass';

interface Props {
  component: ItemClass;
  data:  any[]
  onClick: (id: number) => void
  setCreateItemPanel: (state: boolean) => void;
}
const ListWithComponent = ({
  component,
  data,
  onClick,
  setCreateItemPanel
}: Props): JSX.Element => {
  const handleClick = (id: number) => {
    onClick(id);
    setCreateItemPanel(false);
  }
  const List = new ListImple(data, component, handleClick);

  return List.Driver();
}

export default ListWithComponent;