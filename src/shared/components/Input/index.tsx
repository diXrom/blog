import clsx from 'clsx';
import { FormRegistration, FormLogin } from 'pages/lib/types';
import { ComponentPropsWithRef, FC, memo } from 'react';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

interface IInput extends ComponentPropsWithRef<'input'> {
  placeholder: string;
  type: string;
  register: UseFormRegister<FormRegistration>;
  schema: { required: string; minLength?: { value: number; message: string } };
  error: Partial<FieldErrorsImpl<FormRegistration>>;
  name: 'email' | 'password' | 'fullName';
}

const Input: FC<IInput> = ({
  children,
  placeholder,
  type,
  register,
  name,
  schema,
  error,
  ...props
}) => (
  <div>
    <div className="relative flex items-center">
      {children}
      <input
        autoComplete="on"
        type={type}
        className={clsx(
          'block w-full py-2 text-gray-700 transition duration-300 bg-white border-2 border-gray-300 rounded-md px-9 focus:ring-0 focus:border-gray-900 text-sm',
          error[name]?.message ? '!border-red-500 border-2 placeholder-red-700 text-red-900 ' : ''
        )}
        placeholder={placeholder}
        {...register(name, schema)}
        {...props}
      />
    </div>
    {Boolean(error[name]?.message) && (
      <p className="mt-1 text-xs text-red-600">{error[name]?.message}</p>
    )}
  </div>
);

export default memo(Input);
