const SkillLevel = ({ skillName, percentage }) => {
  return (
    <div className='mb-4'>
      <div className='flex justify-between items-end mb-1'>
        <p>{skillName}</p>
        <p>{percentage}%</p>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-2.5'>
        <div
          className='bg-blue-500 h-2.5 rounded-full'
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
export default SkillLevel;