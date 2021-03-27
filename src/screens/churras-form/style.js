import styled from "styled-components";
import { Paper as PaperUI } from "@material-ui/core";
import { Grid as GridUI } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import DatePicker from "react-datepicker";
import CurrencyInput from "../../components/currency-input";

export const ContainerGrid = styled.div`
  flex-grow: 1;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`;

export const CurrencyMask = styled(CurrencyInput)`
  border-radius: 5px;
  margin-top: 10px;
  //height: 50px !important;
  padding: 20px 5px;
  width: 380px;
  border: 1px solid #ccc;

  &:hover {
    border: 1px solid #555;
  }
`;

export const DatePickerInput = styled(DatePicker)`
  border-radius: 5px;
  margin-top: 10px;
  height: 50px;
  padding: 2px 5px;
  width: 380px;
  border: 1px solid #ccc;

  &:hover {
    border: 1px solid #555;
  }
`;

export const AddButton = styled(Fab)``;

export const BackButton = styled(Fab)``;

export const Grid = styled(GridUI)``;

export const Paper = styled(PaperUI)`
  padding: 10px;
  text-align: center;
  height: 100px;
`;
