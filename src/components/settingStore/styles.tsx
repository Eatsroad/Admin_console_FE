import styled from 'styled-components';
interface ButtonProps {
 state: boolean
}
export const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100%;
`;
export const Wrapper = styled.div`

  padding: 20px 20px 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  gap: 10px;
`;
export const StoreBoxContainer = styled.button`
  width: 100%;
  height: 300px;

  background-color: ${({ theme }) => theme.colors.footerBackgroundColor};
  
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StoreName = styled.div`
`;
export const StoreImg = styled.div``;

export const CreateStoreBoxContainer = styled.button`
  width: 100%;
  height: 300px;

  background-color: ${({ theme }) => theme.colors.footerBackgroundColor};
  
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: gray;
    color: white;
  }
`;
export const CreateStoreBoxText = styled.div`
  font-size: 18px;
`;

export const CreateStoreContainer = styled.div`
  margin-top: 50px;
`;
export const CreateStoreWrapper = styled.div`
  width: 400px;
  height: 800px;
  display: flex;
  flex-direction: column;
`;
export const CreateStoreButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-top: 10px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.logoColor};
  ${(props: ButtonProps) => props.state ? "": "opacity: 0.4"};
`;
export const CreateStoreButtonText = styled.div`
`;
  