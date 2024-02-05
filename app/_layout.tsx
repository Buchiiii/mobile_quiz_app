import { Slot, Stack } from "expo-router";
import Home from ".";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const _layout = () => {
  return (
    <Provider store={store}>
      <Stack/>
    </Provider>
  );
};
export default _layout;
