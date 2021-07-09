import React, { createRef, useEffect, useState } from 'react';
import { Container, Divider, DividerHitBox, LeftViewContainer, RightViewContainer, Wrapper } from './styles';

const MIN_WIDTH = 480;

interface Props {
  leftComponent: JSX.Element;
  rightComponent: JSX.Element;
  leftFixedTop: boolean;
  rightFixedTop: boolean;
}

interface LeftPaneProps {
  setLeftWidth: (value: number) => void;
  leftWidth: number | undefined;
  children: React.ReactNode;
  leftFixedTop: boolean;
  scrollY: number;
}
const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};
const LeftPane = ({
  setLeftWidth,
  leftWidth,
  children,
  leftFixedTop,
  scrollY
}: LeftPaneProps ) => {
  const leftRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (leftRef.current) {
      if (!leftWidth) {
        setLeftWidth(leftRef.current.clientWidth);
        return;
      }

      leftRef.current.style.width = `${leftWidth}px`;
    }
  }, [leftRef, leftWidth, setLeftWidth]);

  return (
    <LeftViewContainer state={leftFixedTop} y={scrollY}ref={leftRef}>{children}</LeftViewContainer>
  );
}
const AdjustableLayout = ({
  leftComponent,
  rightComponent,
  leftFixedTop,
  rightFixedTop
}: Props): JSX.Element => {
  const scrollY = useScroll().y;
  const [leftWidth, setLeftWidth] = useState<number | undefined>(undefined);
  const [separatorXPosition, setSeparatorXPosition] = useState<undefined | number>(undefined);
  const [dragging, setDragging] = useState(false);
  const splitPaneRef = createRef<HTMLDivElement>();

  const onMouseDown = (e: React.MouseEvent) => {
    setSeparatorXPosition(e.clientX);
    setDragging(true);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setSeparatorXPosition(e.touches[0].clientX);
    setDragging(true);
  };

  const onMove = (clientX: number) => {
    if (dragging && leftWidth && separatorXPosition) {
      const newLeftWidth = leftWidth + clientX - separatorXPosition;
      setSeparatorXPosition(clientX);

      if (newLeftWidth < MIN_WIDTH) {
        setLeftWidth(MIN_WIDTH);
        return;
      }

      if (splitPaneRef.current) {
        const splitPaneWidth = splitPaneRef.current.clientWidth;

        if (newLeftWidth > splitPaneWidth - MIN_WIDTH) {
          setLeftWidth(splitPaneWidth - MIN_WIDTH);
          return;
        }
      }

      setLeftWidth(newLeftWidth);
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    onMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    onMove(e.touches[0].clientX);
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  });

  return (
    <Container ref={splitPaneRef}>
      <Wrapper>
        <LeftPane setLeftWidth={setLeftWidth} leftWidth={leftWidth} leftFixedTop={leftFixedTop} scrollY={scrollY}>
          {leftComponent}
        </LeftPane>
        <DividerHitBox
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onMouseUp}
          y={scrollY}
        >
          <Divider />
        </DividerHitBox>
        <RightViewContainer state={rightFixedTop} y={scrollY}>
          {rightComponent}
        </RightViewContainer>
      </Wrapper>
    </Container>
  );
};

export default AdjustableLayout