import styled from "styled-components";
import { Color } from "../../config";

interface IProps {
  danger?: boolean;
}

export const StyledRemainingCard = styled.div`
  background-color: ${(props: IProps) => (props.danger ? Color.Red : Color.Viol)};
  color: ${(props: IProps) => (props.danger ? "#FFF" : "black")};
  border-radius: 10px;
  padding: 30px 20px;
  font-size: 20px;
  font-weight: 500;
  @media (max-width: 390px) {
    font-size: 16px;
  }
`;
