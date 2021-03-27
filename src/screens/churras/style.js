import styled from 'styled-components';
import { Paper as PaperUI } from '@material-ui/core';
import { Grid as GridUI } from '@material-ui/core';
import { Fab } from "@material-ui/core";

export const ContainerGrid = styled.div`
  flex-grow: 1;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`

export const AddButton = styled(Fab)`
  
`

export const Grid = styled(GridUI)`
  
`

export const Paper = styled(PaperUI)`
  padding: 10px;
  text-align: center;
  height: 100px;
`
