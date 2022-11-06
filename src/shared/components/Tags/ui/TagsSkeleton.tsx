import Card from 'shared/components/Card';

const TagsSkeleton = () => (
  <Card className="w-full pb-3">
    <div className="p-3 text-xl font-bold ">Тэги</div>
    <div className="px-3 space-y-3 animate-pulse">
      <div className="w-20 h-3 bg-gray-300 rounded-full" />
      <div className="h-3 bg-gray-300 rounded-full w-28" />
      <div className="w-24 h-3 bg-gray-300 rounded-full" />
    </div>
  </Card>
);
export default TagsSkeleton;
