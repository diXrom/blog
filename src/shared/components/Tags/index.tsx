import { FC, memo } from 'react';
import { FaHashtag, FaSync } from 'react-icons/fa';
import clsx from 'clsx';

import Card from 'shared/components/Card';
import TagsSkeleton from './ui/TagsSkeleton';
import tagStyle from './lib/styles';

interface ITags {
  tags: string[];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

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
