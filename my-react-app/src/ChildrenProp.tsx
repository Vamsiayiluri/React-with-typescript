type childrenProps = {
  children: string;
};

export const ChildrenProp = (props: childrenProps) => {
  return <div>{props.children}</div>;
};
