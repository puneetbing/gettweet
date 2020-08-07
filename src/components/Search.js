import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';
import './Search.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing(2),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '15ch',
    },
  }));

//   const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },s
//     },
//   }));

const Search = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    return (
        <>
          <Container maxWidth="md">
            <Typography component="div" style={{ backgroundColor: '#f4f4f4', height: '100vh', paddingLeft: '25px' }}>
                <Typography variant="h4" component="h2">
                    Download video/gif from Twitter
                </Typography>
                <form>
                    <FormControl 
                        fullWidth 
                        className={classes.margin} 
                        variant="outlined"
                    >
                        <InputLabel htmlFor="outlined-adornment-amount">Place the URL here</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={values.amount}
                            onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">
                                    <LinkIcon color="disabled" />:
                                </InputAdornment>}
                            labelWidth={137}
                            autoFocus={true}
                            inputProps = {{type: "url"}}
                        />
                        <div className={classes.root}>
                            <Button 
                                className="gettweet-search-btn" 
                                variant="contained" 
                                style = {{ backgroundColor: "#e53935", color: "#f4f4f4"}}
                                component = "submit"
                            >
                                SEARCH
                            </Button>
                        </div>
                    </FormControl>
                </form>
            </Typography>
          </Container>
        </>
      );
};

export default Search;