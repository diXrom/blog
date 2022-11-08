import { ComponentPropsWithRef, FC, memo } from 'react';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';

import { FormRegistration } from 'pages/Registration/lib/types';
import { input, errorMessage } from './lib/styles';

interface IInput extends ComponentPropsWithRef<'input'> {
  placeholder: string;
  type: string;
  register: UseFormRegister<FormRegistration>;
  schema: { required: string; minLength?: { value: number; message: string } };
  error: Partial<FieldErrorsImpl<FormRegistration>>;
  name: 'email' | 'password' | 'fullName';
}

const Input: FC<IInput> = (props) => {
  const { children, placeholder, type, register, name, schema, error, ...arg } = props;

  return (
    <div>
      <div className="relative flex items-center">
        {children}
        <input
          autoComplete="on"
          type={type}
          className={clsx(input, error[name]?.message ? errorMessage : '')}
          placeholder={placeholder}
          {...register(name, schema)}
          {...arg}
        />
      </div>
      {Boolean(error[name]?.message) && (
        <p className="mt-1 text-xs text-red-600">{error[name]?.message}</p>
      )}
    </div>
  );
};

export default memo(Input);
