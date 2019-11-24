import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Chip,
  Collapse,
  Divider,
  Drawer,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  Typography
} from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  drawer: {
    width: 420,
    maxWidth: '100%'
  },
  header: {
    padding: theme.spacing(2, 1),
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'space-between'
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  },
  content: {
    padding: theme.spacing(0, 3),
    flexGrow: 1
  },
  contentSection: {
    padding: theme.spacing(2, 0)
  },
  contentSectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer'
  },
  contentSectionContent: {},
  formGroup: {
    padding: theme.spacing(2, 0)
  },
  fieldGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  field: {
    marginTop: 0,
    marginBottom: 0
  },
  flexGrow: {
    flexGrow: 1
  },
  addButton: {
    marginLeft: theme.spacing(1)
  },
  tags: {
    marginTop: theme.spacing(1)
  },
  minAmount: {
    marginRight: theme.spacing(3)
  },
  maxAmount: {
    marginLeft: theme.spacing(3)
  },
  radioGroup: {},
  actions: {
    padding: theme.spacing(3),
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

const aktivOptions = ['Nei', 'Halvår', 'Helår'];
const grupperinger = ['Ingen', 'Altibox', 'Telenor', 'Telia', 'GlobalConnect'];

const initialValues = {
  aktivOptions: '',
  grupperinger: '',
  slettet: '',
  amount: [1, 4]
};

function Filter({ open, onClose, onFilter, className, ...rest }) {
  const classes = useStyles();
  const [expandProject, setExpandProject] = useState(true);
  const [expandCustomer, setExpandCustomer] = useState(false);
  const [values, setValues] = useState({ ...initialValues });

  const handleClear = () => {
    setValues({ ...initialValues });
  };

  const handleFieldChange = (event, field, value) => {
    if (event) {
      event.persist();
    }

    setValues(prevValues => ({
      ...prevValues,
      [field]: value
    }));
  };

  const handleTagAdd = () => {
    setValues(prevValues => {
      const newValues = { ...prevValues };

      if (newValues.tag && !newValues.tags.includes(newValues.tag)) {
        newValues.tags = [...newValues.tags];
        newValues.tags.push(newValues.tag);
      }

      newValues.tag = '';

      return newValues;
    });
  };

  const handleTagDelete = tag => {
    setValues(prevValues => {
      const newValues = { ...prevValues };

      newValues.tags = newValues.tags.filter(t => t !== tag);

      return newValues;
    });
  };

  const handleToggleProject = () => {
    setExpandProject(prevExpandProject => !prevExpandProject);
  };

  const handleToggleCustomer = () => {
    setExpandCustomer(prevExpandCustomer => !prevExpandCustomer);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (onFilter) {
      onFilter(values);
    }
  };

  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant="temporary"
    >
      <form
        {...rest}
        className={clsx(classes.root, className)}
        onSubmit={handleSubmit}
      >
        <div className={classes.header}>
          <Button onClick={onClose} size="small">
            <CloseIcon className={classes.buttonIcon} />
            Lukk
          </Button>
        </div>
        <div className={classes.content}>
          <div className={classes.contentSectionContent}>
            <div className={classes.formGroup}>
              <TextField
                className={classes.field}
                fullWidth
                label="Aktiv"
                margin="dense"
                name="aktivOptions"
                onChange={event =>
                  handleFieldChange(event, 'aktivOptions', event.target.value)
                }
                select
                SelectProps={{ native: true }}
                value={values.aktivOptions}
                variant="outlined"
              >
                <option disabled value="" />
                {aktivOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
            </div>
            <div className={classes.formGroup}>
              <Typography component="p" gutterBottom variant="overline">
                Tilbyder størrelse
              </Typography>
              <div className={classes.fieldGroup}>
                <Typography className={classes.minAmount} variant="body1">
                  {values.amount[0]}
                </Typography>
                <Slider
                  className={classes.flexGrow}
                  max={5}
                  min={1}
                  onChange={(event, value) =>
                    handleFieldChange(event, 'amount', value)
                  }
                  value={values.amount}
                  valueLabelDisplay="auto"
                />
                <Typography className={classes.maxAmount} variant="body1">
                  {values.amount[1]}
                </Typography>
              </div>
            </div>
            <div className={classes.formGroup}>
              <Typography component="p" gutterBottom variant="overline">
                Slettet i Brreg
              </Typography>
              <div className={classes.fieldGroup}>
                <RadioGroup
                  className={classes.radioGroup}
                  name="slettet"
                  onChange={event =>
                    handleFieldChange(event, 'slettet', event.target.value)
                  }
                  value={values.slettet}
                >
                  <FormControlLabel
                    control={<Radio color="primary" />}
                    label="Nei"
                    value="nei"
                  />
                  <FormControlLabel
                    control={<Radio color="primary" />}
                    label="Ja"
                    value="ja"
                  />
                </RadioGroup>
              </div>
              <div className={classes.formGroup}>
                <TextField
                  className={classes.field}
                  fullWidth
                  label="Gruppering"
                  margin="dense"
                  name="grupperinger"
                  onChange={event =>
                    handleFieldChange(event, 'grupperinger', event.target.value)
                  }
                  select
                  SelectProps={{ native: true }}
                  value={values.grupperinger}
                  variant="outlined"
                >
                  <option disabled value="" />
                  {grupperinger.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </TextField>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.actions}>
          <Button fullWidth onClick={handleClear} variant="contained">
            <DeleteIcon className={classes.buttonIcon} />
            Clear
          </Button>
          <Button
            color="primary"
            fullWidth
            type="submit"
            variant="contained"
            onClick={onClose}
          >
            Apply filters
          </Button>
        </div>
      </form>
    </Drawer>
  );
}

Filter.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  onFilter: PropTypes.func,
  open: PropTypes.bool.isRequired
};

export default Filter;
