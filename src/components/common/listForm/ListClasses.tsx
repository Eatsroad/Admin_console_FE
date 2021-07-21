import React from 'react';
import Category from '../../console/category/Category/Category';
import Menu from "../../console/menu/Menu/Menu";
import OptionGroup from '../../console/optionGroup/OptionGroup/OptionGroupContainer';
import Option from '../../console/option/Option/OptionContainer';
import { 
  CategoryInfoResponse, 
  MenuInfoResponse, 
  OptionGroupInfoResponse, 
  OptionInfoResponse 
} from "../type";

export interface ItemClass {
  getComponenet: (data: any, setId: (id: number) => void, index: number) => JSX.Element;
  getId: () => number;
}

export class MenuClass implements ItemClass {
  constructor() {
    this.id = 0;
  }
  getComponenet = (data: MenuInfoResponse, setId: (id: number) => void, index: number): JSX.Element => {
    const setTest = (id: number) => {
      this.id  = id;
      setId(id);
    }
    return <Menu data={data} onClick={setTest} key={index}/>
  }
  getId = () => {
    return this.id;
  }
  id: number
}
export class CategoryClass implements ItemClass {
  constructor() {
    this.id = 0;
  }
  getComponenet = (data: CategoryInfoResponse, setId: (id: number) => void, index: number): JSX.Element => {
    const setTest = (id: number) => {
      this.id  = id;
      setId(id);
    }
    return <Category data={data} onClick={setTest} key={index}/>
  }
  getId = () => {
    return this.id;
  }
  id: number
}
export class OptionGroupClass implements ItemClass {
  constructor() {
    this.id = 0;
  }
  getComponenet = (data: OptionGroupInfoResponse, setId: (id: number) => void, index: number): JSX.Element => {
    const setTest = (id: number) => {
      this.id  = id;
      setId(id);
    }
    return <OptionGroup data={data} onClick={setTest} key={index}/>
  }
  getId = () => {
    return this.id;
  }
  id: number
};

export class OptionClass implements ItemClass {
  constructor() {
    this.id = 0;
  }
  getComponenet = (data: OptionInfoResponse, setId: (id: number) => void, index: number): JSX.Element => {
    const setTest = (id: number) => {
      this.id  = id;
      setId(id);
      console.log(this.id);
    }
    return <Option data={data} onClick={setTest} key={index}/>
  }
  getId = () => {
    return this.id;
  }
  id: number
}