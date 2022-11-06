import { SimpleMDEReactProps } from 'react-simplemde-editor';

const ROUTE_PATH = {
  INDEX: '/',
  POST: 'post',
  LOGIN: 'login',
  REGISTRATION: 'registration',
  EDIT: 'edit',
  ADD: 'new-post',
};

const STORAGE_TOKEN = 'TOKEN';

const options = {
  spellChecker: false,
  maxHeight: '300px',
  placeholder: 'Введите текст...',
  status: false,
  autosave: {
    enabled: true,
    delay: 1000,
    uniqueId: 'SimpleMDEReactProps',
  },
} as SimpleMDEReactProps;

export { ROUTE_PATH, STORAGE_TOKEN, options };
