import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import Card from 'shared/components/Card';
import Button from 'shared/components/Button';
import Input from 'shared/components/Input';
import { fade, motionVariants } from 'shared/common/styles';
import { isAuth } from 'shared/common/util';
import inputsData from '../Registration/model/constants';
import useLogin from './model/useLogin';

const Login = () => {
  const { onSubmit, register, handleSubmit, errors, error } = useLogin();

  if (isAuth()) return <Navigate to="/" />;

  return (
    <motion.div variants={fade} {...motionVariants}>
      <Card className="flex justify-center max-w-sm p-5 mx-auto">
        <form className="space-y-3 w-60" onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-2 text-2xl font-semibold text-center">Вход в аккаунт</div>
          {inputsData.slice(1).map((input) => (
            <Input
              key={input.placeholder}
              placeholder={input.placeholder}
              type={input.type}
              register={register}
              name={input.name}
              error={errors}
              schema={input.shema}
            >
              {input.icon}
            </Input>
          ))}
          {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
          <Button type="submit" className="w-full !text-base shadow-md h-11">
            Войти
          </Button>
          <div className="text-center text-gray-500">
            Нет аккаунта?
            <Link to="/registration" className="ml-2 text-gray-800 hover:underline">
              Регистрация
            </Link>
          </div>
        </form>
      </Card>
    </motion.div>
  );
};

export default Login;
