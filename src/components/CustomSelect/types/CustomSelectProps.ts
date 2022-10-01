type CustomSelectProps = {
  id: string;
  label: string;
  initial: number;
  options: any[];
  callback: (index: number) => void;
};

export default CustomSelectProps;
