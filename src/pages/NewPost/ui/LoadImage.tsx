import { FC } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import inputFilePost from '../lib/styles';

interface ILoadImage {
  imgRef: React.RefObject<HTMLInputElement>;
}

const LoadImage: FC<ILoadImage> = ({ imgRef }) => {
  return (
    <div className="flex items-center justify-center w-full md:w-52 xl:w-1/3">
      <label htmlFor="dropzone-file" className={inputFilePost}>
        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
          <FaCloudUploadAlt className="w-10 h-10 mb-3 text-gray-400" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Нажмите, чтобы загрузить</span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            или перетащите изображение сюда
          </p>
        </div>
        <input ref={imgRef} id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
};

export default LoadImage;
