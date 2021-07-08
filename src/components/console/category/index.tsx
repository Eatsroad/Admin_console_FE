import { AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';
import React, { useEffect, useState } from 'react';
import { categoryAPI } from '../../../api';
import { CategoryInfoResponse } from '../../common/type';
import CategoryDetail from './CategoryDetail';
import CategoryList from './CategoryList';
import CreateCategory from './CreateCateogory';
import { Container, Wrapper } from './styles';

interface Props {
  storeId: string;
}
const ConsoleCategory = ({
  storeId
}: Props):JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<CategoryInfoResponse>();
  const [categories, setCategories] = useState<CategoryInfoResponse[]>([]);
  const [menus, setMenus] = useState<number[]>([]);
  const [modal, setModal] = useState<boolean>(true);

  const switchComponent = (): JSX.Element => {
    if (modal) return <CreateCategory storeId={storeId} menus={menus}/>
    else if (!modal && category !== undefined) return  category !== undefined ? <CategoryDetail category={category} storeId={storeId}/> : <CreateCategory storeId={storeId} menus={menus}/>
    else return <></>
  }
  const selectCategory = (categoryId: number) => {
    const selectedCategory: CategoryInfoResponse = categories.filter((m) => m.category_id === categoryId)[0];
    setCategory(selectedCategory);
  }
  const getAllCategory = async () => {
    try {
      const result: AxiosResponse<CategoryInfoResponse[]> = await categoryAPI.getAllCategories(storeId);

      if (result.status === StatusCodes.OK) {
        setCategories(result.data);
        setLoading(!loading);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (loading) getAllCategory();
  }, []);

  if (loading) return <div>로딩중</div>
  return (
    <Container>
      <Wrapper>
        <CategoryList categories={categories} setCategory={selectCategory} setModal={setModal}/>
        {switchComponent()}
      </Wrapper>
    </Container>
  );
};

export default ConsoleCategory;