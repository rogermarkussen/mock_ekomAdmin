import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  colors
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > * + *': {
      marginLeft: 0
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

function Kontakter({ customer, className, ...rest }) {
  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);
  const kontakter = customer.kontakter;

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Kontaktpersoner" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fornavn</TableCell>
              <TableCell>Etternavn</TableCell>
              <TableCell>Telefon</TableCell>
              <TableCell>Epost</TableCell>
              <TableCell>Aktiv</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {kontakter.map(kontakt => (
              <TableRow key={kontakt.id}>
                <TableCell>{kontakt.fornavn}</TableCell>
                <TableCell>{kontakt.etternavn}</TableCell>
                <TableCell>{kontakt.tlf}</TableCell>
                <TableCell>{kontakt.epost}</TableCell>
                <TableCell>{kontakt.aktiv ? 'Ja' : 'Nei'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

Kontakter.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired
};

export default Kontakter;
