import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  colors
} from '@material-ui/core';
import axios from 'src/utils/axios';
import Label from 'src/components/Label';

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1150
  },
  methodCell: {
    width: 100
  },
  statusCell: {
    width: 64
  }
}));

function Logs({ className, ...rest }) {
  const classes = useStyles();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchLogs = () => {
      axios.get('/api/management/customers/1/logs').then(response => {
        if (mounted) {
          setLogs(response.data.logs);
        }
      });
    };

    fetchLogs();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Card>
        <CardHeader title="Tilbyderhendelser" />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar options={{ suppressScrollY: true }}>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Dato</TableCell>
                    <TableCell>Hendelse</TableCell>
                    <TableCell>Kommentar</TableCell>
                    <TableCell>Innrapportering</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Antall</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {logs.map(log => (
                    <TableRow key={log.id}>
                      <TableCell>
                        {moment(log.opprettet).format('YYYY/MM/DD')}
                      </TableCell>
                      <TableCell>{log.hendelse}</TableCell>
                      <TableCell>{log.kom}</TableCell>
                      <TableCell>
                        {log.innrapportering
                          ? log.innrap_delar + ' ' + log.innrap_ar
                          : ''}
                      </TableCell>
                      <TableCell>{log.auto ? 'Auto' : 'Manuell'}</TableCell>
                      <TableCell>
                        {log.bulk.length ? log.bulk.length : 1}
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary"
                          component={RouterLink}
                          size="small"
                          to="/management/customers/1"
                          variant="outlined"
                        >
                          Detaljer
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </div>
  );
}

Logs.propTypes = {
  className: PropTypes.string
};

export default Logs;
