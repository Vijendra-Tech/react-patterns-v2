import { usestate } from 'react';

const useInput = (initVal) => {
  const [value, setValue] = usestate(initVal);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    () => setValue(initVal),
  ];
};
