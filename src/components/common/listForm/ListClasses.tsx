import React from 'react';
import Category from '../../console/category/Category';
import Menu from "../../console/menu/Menu";
import { CategoryInfoResponse, MenuInfoResponse } from "../type";

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
      console.log(id);
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