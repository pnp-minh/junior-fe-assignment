import CheckIcon from "./CheckIcon";

const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-start text-gray-700 mb-3">
    <CheckIcon />
    <span className="leading-tight">{text}</span>
  </li>
);

export default FeatureItem;
