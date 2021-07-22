import React, { FC } from 'react';

interface ListProps {
  title?: string;
  // items: Array<string>;
  items: string[];
  // items: string;
}

const List: FC<ListProps> = ({ title, items }) => {
  return (
    <>
      <h1>{title}</h1>
      {items.map((item: string) => (
        <p>{item}</p>
      ))}
      {/* <p>items</p> */}
    </>
  );
};

export default List;