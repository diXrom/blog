import { FormLogin } from 'pages/Registration/lib/types';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSignInMutation } from 'shared/api';
import { STORAGE_TOKEN } from 'shared/common/constants';

const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLogin>({ mode: 'onSubmit' });
  const [error, setError] = useState('');
  const [signIn] = useSignInMutation();

  const onSubmit: SubmitHandler<FormLogin> = async (values) => {
    try {
      const { token } = await signIn({ ...values }).unwrap();
      localStorage.setItem(STORAGE_TOKEN, token);
    } catch (e) {
      setError('Неверный эл.адресс или пароль');
    }
  };

  return { onSubmit, register, handleSubmit, errors, error };
};

export default useLogin;
