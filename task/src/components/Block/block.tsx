import classnames from "classnames";
import "./block.css";

interface BlockProps {
  letter: string;
  handleBlock: (id: number) => void;
  id: number;
  isOrange: boolean;
}

export const Block = (props: BlockProps) => {
  const { letter, handleBlock, id, isOrange } = props;

  return (
    <div
      className={classnames("block", { "block--orange": isOrange })}
      id={`letter${letter}`}
      onClick={() => handleBlock(id)}
    >
      {letter}
    </div>
  );
};
