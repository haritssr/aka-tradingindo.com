const DaftarIsi = ({ point, desc }) => {
  const style = 'flex space-x-5 w-full';
  const DescStyle = 'flex w-3/4 xs:w-2/3 md:w-3/4';
  return (
    <div className={style}>
      <div className='flex flex-row justify-between w-1/4 font-semibold xs:w-1/3 md:w-1/4'>
        <div>{point}</div>
        <div>:</div>
      </div>
      <div className={DescStyle}>{desc}</div>
    </div>
  );
};

export default DaftarIsi;
