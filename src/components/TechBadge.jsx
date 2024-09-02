import TechStackIcon from './icons/TechStackIcon';

const TechBadge = (props) => {
  const { name } = props;

  return (
    <div className='flex flex-row text-nowrap w-min bg-sea-green-light rounded-md text-body font-MT gap-2 px-2 py-1 text-oxford-blue drop-shadow-sm'>
      <TechStackIcon iconName={name} color='#0E1C36' className='w-6 h-6' />
      {name}
    </div>
  );
};

export default TechBadge;
