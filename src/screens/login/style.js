import styled from 'styled-components';
import { Button as ButtonUI, TextField } from '@material-ui/core';
import AvatarUI from '@material-ui/core/Avatar';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`

export const Box = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px #cccccc solid;
  height: 500px;
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Input = styled(TextField)`
  width: 80%;
  margin-bottom: 10px;
`

export const Button = styled(ButtonUI)`
  width: 80%;
  margin: 0 10px;
`

export const Avatar = styled(AvatarUI)`
  margin: 10px;
  background-color: #bbbbbb;
`