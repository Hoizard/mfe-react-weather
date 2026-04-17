import { importShared } from './__federation_fn_import-BMdLx5XD.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';

const {useState} = await importShared('react');

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleClick, children: [
    "Clicked ",
    count,
    " times"
  ] });
}

export { MyButton as default };
