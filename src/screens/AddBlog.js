import React, {useState} from 'react';
import {View} from 'react-native';
import Container from '../components/Container';
import Input from '../components/Input';
import {mustFilled, email} from '../utils/Validations';
import {addPost} from '../apis';
import Strings from '../utils/Strings';
import Button from '../components/Button';
import {changeLoadAgain} from '../store/actions';
import {useDispatch} from 'react-redux';

function AddBlogScreen(props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [serverMessage, setMessage] = useState(null);

  const fields = [
    {
      name: 'title',
    },
    {
      name: 'description',
      multiline: true,
      numberOfLines: 3,
    },
  ];
  const [values, setValues] = useState({
    title: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const handleChanges = (name, value) => {
    setValues(prevState => ({...prevState, [name]: value}));
  };
  const validation = name => {
    let error = errors;
    let check;
    if (name === 'email') check = email(values[name]);
    else check = mustFilled(values[name]);
    if (check) error[name] = check;
    else delete error[name];
    setErrors(Object.assign({}, error));
  };
  const submit = () => {
    fields.map(({name}) => validation(name));
    if (Object.entries(errors).length !== 0 && errors.constructor === Object)
      return;
    else {
      setLoading(true);
      addPost(values)
        .then(response => {
          if (response.data.success) {
            setTimeout(() => {
              setLoading(false);
              setMessage({
                type: 'success',
                message: Strings.successfullyAdded,
              });
              dispatch(changeLoadAgain());
              setTimeout(() => props.navigation.goBack(), 300);
            }, 1000);
          } else {
            setMessage({
              type: 'error',
              message: response.data.message,
            });
            setLoading(false);
          }
        })
        .catch(err => {
          setMessage({
            type: 'error',
            message: Strings.errors.problem,
          });
          setLoading(false);
        });
    }
  };
  const onBlur = name => validation(name);
  return (
    <Container
      message={serverMessage}
      ccStyle={{justifyContent: 'center', flexGrow: 1}}>
      <View>
        {fields.map(({name, ...props}, idx) => (
          <Input
            error={errors[name]}
            onBlur={() => onBlur(name)}
            onChange={val => handleChanges(name, val)}
            name={name}
            key={idx}
            value={values[name]}
            {...props}
          />
        ))}
        <Button text={Strings.btns.submit} onPress={submit} loading={loading} />
      </View>
    </Container>
  );
}

export default AddBlogScreen;
