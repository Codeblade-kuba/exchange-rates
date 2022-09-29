export default interface Props {
  id: string;
  label: string;
  initial: number;
  options: any[];
  callback: (index: number) => void;
}
