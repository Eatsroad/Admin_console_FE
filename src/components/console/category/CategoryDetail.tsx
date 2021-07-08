import React from 'react';
import { CategoryInfoResponse } from '../../common/type';
import { CategoryDetatilContaienr, CategoryDetatilModifButton, CategoryDetatilName, CategoryDetatilDesc } from './styles';

interface Props {
  category: CategoryInfoResponse;
  storeId: string;
}
const CategoryDetail = ({
  category,
  storeId
}: Props): JSX.Element => (
  <CategoryDetatilContaienr>
    <CategoryDetatilModifButton>수정하기</CategoryDetatilModifButton>
    <CategoryDetatilName>카테고리 이름 {category.name}</CategoryDetatilName>
    <CategoryDetatilDesc>설명 {category.description}</CategoryDetatilDesc>
  </CategoryDetatilContaienr>
);

export default CategoryDetail;