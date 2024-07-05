type Props = {
  titles: string[];
  lastChildBold: boolean;
};
const Information = ({ titles, lastChildBold }: Props) => {
  return (
    <>
      {titles?.map((title, index) => {
        if (lastChildBold == true && index == titles.length - 1) {
          return (
            <li className="text-[13px]" key={index}>
              {title}
            </li>
          );
        } else {
          return <li key={index}>{title}</li>;
        }
      })}
    </>
  );
};

export default Information;
