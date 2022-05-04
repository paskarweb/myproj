import { FC } from "react";

type BtnProps = {
    OnClick: (val: string) => void
};

export const Btn: FC<BtnProps> = (props) => (
    <button onClick={() => props.OnClick("Hello World!")}>Open Alert</button>
);

export default () => Btn;