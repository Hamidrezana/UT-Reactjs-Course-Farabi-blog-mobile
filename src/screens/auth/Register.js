import React, {useState} from 'react';
import Input from '../../components/Input';
import Container from '../../components/Container';
import Button from '../../components/Button';
import {mustFilled, email} from '../../utils/Validations';
import {setAuthToken, register} from '../../apis';
import Strings from '../../utils/Strings';
import {changeLoginStatus, changeUserInfo} from '../../store/actions';
import {useDispatch} from 'react-redux';
import {View} from 'react-native';

function RegisterScreen(props) {
  const dispatch = useDispatch();
  const fields = [
    {
      name: 'firstName',
    },
    {
      name: 'lastName',
    },
    {
      name: 'email',
      keyboardType: 'email-address',
    },
    {
      name: 'password',
      secureTextEntry: true,
    },
  ];
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const validation = name => {
    let hasError;
    let newErrors = errors;
    if (name === 'email') {
      hasError = email(values[name]);
    } else {
      hasError = mustFilled(values[name]);
    }
    if (hasError) newErrors[name] = hasError;
    else delete newErrors[name];
    setErrors(Object.assign({}, newErrors));
  };
  const changeValue = (name, value) => {
    setValues(prevState => ({...prevState, [name]: value}));
  };
  const submit = () => {
    fields.map(({name}) => validation(name));
    if (Object.entries(errors).length !== 0 && errors.constructor === Object)
      return;
    else {
      setLoading(true);
      setMessage(null);
      register(values)
        .then(response => {
          if (response.data.success) {
            setTimeout(() => {
              setLoading(false);
              setAuthToken(response.data.token);
              dispatch(changeUserInfo(response.data.message));
              dispatch(changeLoginStatus(true));
              // props.navigation.navigate('Home');
            }, 300);
          } else {
            setLoading(false);
            setMessage({
              type: 'error',
              message: response.data.message,
            });
          }
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
          setMessage({
            type: 'error',
            message: Strings.errors.problem,
          });
        });
    }
  };
  const goToLogin = () => props.navigation.navigate('Login');
  const onBlur = name => validation(name);
  return (
    <Container
      fromAuth
      message={message}
      ccStyle={{justifyContent: 'center', flexGrow: 1}}>
      <View>
        {fields.map(({name, ...props}, idx) => (
          <Input
            onBlur={() => onBlur(name)}
            onChange={val => changeValue(name, val)}
            key={idx}
            name={name}
            value={values[name]}
            error={errors[name]}
            {...props}
          />
        ))}
        <Button
          onPress={submit}
          text={Strings.btns.register}
          loading={loading}
          style={{marginBottom: 10}}
        />
        <Button onPress={goToLogin} text={Strings.btns.login} />
      </View>
    </Container>
  );
}

export default RegisterScreen;
