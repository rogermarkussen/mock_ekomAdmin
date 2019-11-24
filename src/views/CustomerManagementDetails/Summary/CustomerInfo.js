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
  TableBody,
  TableRow,
  TableCell,
  colors
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import PersonIcon from '@material-ui/icons/PersonOutline';
import Label from 'src/components/Label';
import CustomerEditModal from './CustomerEditModal';

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

function CustomerInfo({ customer, className, ...rest }) {
  const classes = useStyles();
  const [openEdit, setOpenEdit] = useState(false);

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Tilbyder detaljer" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Orgnummer</TableCell>
              <TableCell>{customer.orgnr}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Brreg-navn</TableCell>
              <TableCell>{customer.bregNavn}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Gruppering</TableCell>
              <TableCell>{customer.gruppering}</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Slettet</TableCell>
              <TableCell>{customer.slettet}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Aktiv</TableCell>
              <TableCell>{customer.aktiv}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={handleEditOpen}>
          <EditIcon className={classes.buttonIcon} />
          Endre
        </Button>
      </CardActions>
      <CustomerEditModal
        customer={customer}
        onClose={handleEditClose}
        open={openEdit}
      />
    </Card>
  );
}

CustomerInfo.propTypes = {
  className: PropTypes.string,
  customer: PropTypes.object.isRequired
};

export default CustomerInfo;
