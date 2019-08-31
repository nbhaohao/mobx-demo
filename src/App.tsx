import React from "react";
import { Provider } from "mobx-react";
import { Switch } from "./components/Switch";
import { SwitchState } from "./store/switch";

const switchState = new SwitchState();

const App: React.FC = () => {
  return (
    <div>
      <Provider switchState={switchState}>
        <Switch />
      </Provider>
    </div>
  );
};

export default App;
