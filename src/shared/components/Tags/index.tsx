import { FC, memo } from 'react';
import Card from 'shared/components/Card';
import { FaHashtag, FaSync } from 'react-icons/fa';
import clsx from 'clsx';
import TagsSkeleton from './ui/TagsSkeleton';

interface ITags {
  tags: string[];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const tagStyle =
  'flex items-center gap-3 px-3 py-2 text-gray-600 transition duration-300 cursor-pointer 0 text-md hover:bg-slate-100 hover:scale-105 active:scale-100';

const Tags: FC<ITags> = ({ tags, setFilter }) => {
  const handleClick = (filter: string) => () => setFilter(filter);

  if (!tags.length) return <TagsSkeleton />;

  return (
    <Card className="w-full">
      <div className="p-3 text-xl font-bold">Тэги</div>
      {tags.map((tag) => (
        <div key={tag} className={tagStyle} onClick={handleClick(tag)}>
          <FaHashtag />
          {tag}
        </div>
      ))}
      <div className={clsx('font-semibold', tagStyle)} onClick={handleClick('all')}>
        <FaSync />
        Сбросить тэги
      </div>
    </Card>
  );
};

export default memo(Tags);
