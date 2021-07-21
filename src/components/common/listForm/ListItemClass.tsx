import { CategoryInfoResponse, MenuInfoResponse } from "../type";
import { ItemClass } from "./ListClasses";

export interface ListClass {
  Driver: () => JSX.Element;
  Item: (data: MenuInfoResponse | CategoryInfoResponse, index: number) => JSX.Element;
  setId: (id: number) => void;
  getId: () => number;
}

export class ListImple<T extends ItemClass> implements ListClass {
  constructor(data: MenuInfoResponse[] | CategoryInfoResponse[], item: T, setId: (id: number) => void) {
    this.id = 0;
    this.data = data;
    this.item = item;
    this.setId = setId;
  }
  Driver = (): JSX.Element => (
    <div>
      {
        this.data.map((i, index) => (
          this.Item(i, index)
        ))
      } 
    </div>
  )
  
  Item = (data: MenuInfoResponse | CategoryInfoResponse, index: number): JSX.Element => {
    return this.item.getComponenet(data, this.setId, index)
  }
  
  getId = (): number => {
    return this.id;
  }
  id: number;
  data: any[];
  item: T;
  setId: (id: number) => void;
}