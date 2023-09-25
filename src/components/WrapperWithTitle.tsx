import React from "react";
import { styled } from "umi";

const HocWithTitle = (title: string) => {
  return <P extends {}>(Component: React.ComponentType<P>) => {
    return React.memo((props: P): JSX.Element => {
      return (
        <div style={{ border: "1px solid #000" }}>
          <span>{title}</span>
          <Component {...props} />
        </div>
      );
    });
  };
};

interface Props {
  title: string;
  component: React.ReactNode;
}

const Wrapper = styled.div`
  border: 1px solid #000;
  padding: 10px 20px;
  margin: 10px;
`;

const WrapperWithTitle: React.FC<Props> = (props) => {
  const { title, component } = props;

  return (
    <Wrapper>
      <h2>{title}</h2>
      <div>{component}</div>
    </Wrapper>
  );
};

export default WrapperWithTitle;
