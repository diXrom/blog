import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUpload } from 'react-icons/fa';

import Button from 'shared/components/Button';
import Card from 'shared/components/Card';
import Input from 'shared/components/Input';
import { fade, motionVariants } from 'shared/common/styles';
import { isAuth } from 'shared/common/util';
import inputsData from './model/constants';
import useRegistration from './model/useRegistration';
import inputFileRegistration from './lib/styles';

const Registration = () => {
  const { onSubmit, register, handleSubmit, errors, imgRef, error, disabled } = useRegistration();

  if (isAuth()) return <Navigate to="/" />;

  return (
    <motion.div variants={fade} {...motionVariants}>
      <Card className="flex justify-center max-w-sm p-5 mx-auto">
        <form className="space-y-3 w-60" onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-2 text-2xl font-semibold text-center">Регистрация</div>
          {inputsData.map((input) => (
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
          <label htmlFor="dropzone-file" className={inputFileRegistration}>
            <FaUpload className="w-5 h-5 text-gray-800" />
            <h2 className="mx-2 text-gray-500">Аватар</h2>
            <input ref={imgRef} id="dropzone-file" type="file" className="hidden" />
          </label>
          {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
          <Button disabled={disabled} type="submit" className="w-full !text-base shadow-md h-11">
            Зарегистрироваться
          </Button>
          <div className="text-center text-gray-500">
            Есть аккаунт?
            <Link to="/login" className="ml-2 text-gray-800 hover:underline">
              Войти?
            </Link>
          </div>
        </form>
      </Card>
    </motion.div>
  );
};

export default Registration;
