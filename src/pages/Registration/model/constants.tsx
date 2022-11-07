import { FaUser, FaRegEnvelope, FaLock } from 'react-icons/fa';

const inputsData = [
  {
    placeholder: 'Имя и фамилия',
    type: 'text',
    name: 'fullName' as const,
    shema: {
      required: 'Укажите ваш имя',
      minLength: { value: 3, message: 'Длина имени, минимум 3 символа' },
    },
    icon: <FaUser className="absolute w-5 h-5 mx-2 text-gray-800" />,
  },
  {
    placeholder: 'Почта',
    type: 'email',
    name: 'email' as const,
    shema: { required: 'Укажите вашу почту' },
    icon: <FaRegEnvelope className="absolute w-5 h-5 mx-2 text-gray-800" />,
  },
  {
    placeholder: 'Пароль',
    type: 'password',
    name: 'password' as const,
    shema: {
      required: 'Укажите ваш пароль',
      minLength: { value: 5, message: 'Длина пароля, минимум 5 символов' },
    },
    icon: <FaLock className="absolute w-5 h-5 mx-2 text-gray-800" />,
  },
];

export default inputsData;
