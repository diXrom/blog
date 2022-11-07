import { FormRegistration } from 'pages/Registration/lib/types';
import getFormData from 'pages/Registration/lib/utils';
import { useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUploadImageMutation, useSignUpMutation } from 'shared/api';
import { STORAGE_TOKEN } from 'shared/common/constants';

const useRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegistration>({ mode: 'onSubmit' });
  const imgRef = useRef<HTMLInputElement>(null);
  const [uploadImg] = useUploadImageMutation();
  const [signUp] = useSignUpMutation();
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(false);

  const onSubmit: SubmitHandler<FormRegistration> = async (values) => {
    setDisabled(true);
    let avatarUrl = getFormData(imgRef);
    if (typeof avatarUrl !== 'string') {
      const { secure_url: img } = await uploadImg(avatarUrl).unwrap();
      avatarUrl = img;
    }
    try {
      const { token } = await signUp({ ...values, avatarUrl }).unwrap();
      localStorage.setItem(STORAGE_TOKEN, token);
    } catch (e) {
      setDisabled(true);
      setError('Данный эл.адресс уже занят');
    }
  };

  return { onSubmit, register, handleSubmit, errors, imgRef, error, disabled };
};

export default useRegistration;
