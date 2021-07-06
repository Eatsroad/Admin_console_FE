import styled from 'styled-components';

interface ButtonProps {
  state: boolean;
}
export const Container = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  padding: 20px;
  display: grid; 
  /* grid-template-columns: 52.13vw 34.75vw; */
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
`;

export const MenuListContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const CreateMenuContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
`;
export const CreateMenuButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: ${({ theme }) => theme.colors.logoColor};
  ${(props: ButtonProps) => props.state ? "": "opacity: 0.4"};    
`;

export const MenuContainer = styled.button`
  width: 100%;
  height: 50px;
  background-color: #EFEFEF;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 56px;
`;
export const MenuWrapper = styled.div``;
export const MenuState = styled.div`
`;
export const MenuDefaultInfo = styled.div`
`;
export const MenuName = styled.div`
`;
export const MenuPrice = styled.div`
`;
export const MenutagsContainer = styled.div`
  background-color: #dedede;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 0px 0px 10px 10px;
  padding: 10px;
`;
export const MenuOptioGroupTags = styled.div`
`;
export const MenuCategoryTags = styled.div`
`;

export const MenuDetailContaienr = styled.div`
  /* position: fixed;
  right: 20px;
  width: 34.75vw; */
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
`;
export const MenuDetailName = styled.div``;
export const MenuDetailPrice = styled.div``;
export const MenuDetailCategory = styled.div``;
export const MenuDetailOptionGroup = styled.div``;
export const MenuDetailState = styled.div``;
export const MenuDetailDeleteButton = styled.button``;
export const MenuDetailMOdifyButton = styled.button``;
