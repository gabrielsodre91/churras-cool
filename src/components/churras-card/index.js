import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { People, MonetizationOn } from '@material-ui/icons';

import {
  Title,
  SubTitle,
  Participants,
  Value
} from './style';

export const CardChurras = ({ churras }) => {
  const sum = participants => {
    const result = churras.participants.reduce((total, elem, index) => total + elem.value, 0)

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(result)
  }

  const formatDate = date => {
    const data = new Date(date);
    return (('00' + data.getDate()).slice(-2)) + '/' + (('00' + (data.getMonth() + 1)).slice(-2));
  }

  return (
    <Card>
      <CardContent>
        <Title>
          {churras.description}
        </Title>
        <SubTitle>
          {formatDate(churras.date)}
        </SubTitle>
        <Participants>
          <People style={{ fontSize: 16 }} /> {churras.participants.length}
        </Participants>
        <Value>
          <MonetizationOn style={{ fontSize: 16 }} /> {sum(churras.participants)}
        </Value>
      </CardContent>
    </Card>
  );
};
