import { observable, action, computed } from "mobx";
class SwitchState {
  @observable state = "off";

  @computed get transStateToChinese() {
    if (this.state === "off") {
      return "关闭";
    }
    if (this.state === "on") {
      return "开启";
    }
    return "未获取状态";
  }

  @action.bound
  onSwitchState() {
    this.state = this.state === "on" ? "off" : "on";
  }
}

export { SwitchState };
