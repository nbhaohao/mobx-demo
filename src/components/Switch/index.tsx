import React from "react";
import { observer, inject } from "mobx-react";
import { SwitchState } from "../../store/switch";

interface SwitchProps {
  switchState?: SwitchState;
}

interface SpanTextProps {
  state: string;
}

const SpanText: React.FC<SpanTextProps> = React.memo(({ state }) => {
  return <span>{state}</span>;
});

const _Switch: React.FC<SwitchProps> = ({ switchState }) => {
  const {
    state,
    transStateToChinese,
    onSwitchState
  } = switchState as SwitchState;
  return (
    <div>
      <SpanText state={state} />
      <span>{transStateToChinese}</span>
      <button onClick={onSwitchState}>switch</button>
    </div>
  );
};

const Switch = inject("switchState")(observer(_Switch));

export { Switch };
