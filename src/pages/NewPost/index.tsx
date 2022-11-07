import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MDEditor from '@uiw/react-md-editor';

import { fade, motionVariants } from 'shared/common/styles';
import { isAuth } from 'shared/common/util';
import Card from 'shared/components/Card';
import Button from 'shared/components/Button';
import useNewPost from './model/useNewPost';
import LoadImage from './ui/LoadImage';

const NewPost = () => {
  const { onSubmit, onChange, setTags, setTitle, tags, title, imgRef, text, active } = useNewPost();

  if (!isAuth()) return <Navigate to="/" />;

  return (
    <motion.div variants={fade} {...motionVariants}>
      <Card className="p-5 space-y-4">
        <div className="text-3xl font-bold text-center">Новая статья</div>
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Заголовок статьи"
            className="w-full h-12 text-2xl font-semibold border-none outline-none"
          />
        </div>
        <div>
          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Тэги"
            className="w-1/3 text-sm font-semibold outline-none"
          />
        </div>
        <LoadImage imgRef={imgRef} />
        <div data-color-mode="light">
          <MDEditor
            visibleDragbar={false}
            preview="edit"
            height={350}
            value={text}
            onChange={onChange}
          />
        </div>
        <Button disabled={!active} onClick={onSubmit}>
          Отправить
        </Button>
      </Card>
    </motion.div>
  );
};

export default NewPost;
