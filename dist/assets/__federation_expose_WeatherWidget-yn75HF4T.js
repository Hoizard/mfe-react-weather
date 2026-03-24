import { importShared } from './__federation_fn_import-BMdLx5XD.js';
import { r as reactExports } from './index-Dm_EQZZA.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

const widget = "_widget_ufq5y_1";
const liveLabel = "_liveLabel_ufq5y_3";
const dot = "_dot_ufq5y_9";
const grid = "_grid_ufq5y_15";
const card = "_card_ufq5y_17";
const active = "_active_ufq5y_23";
const cityName = "_cityName_ufq5y_25";
const temp = "_temp_ufq5y_26";
const cond = "_cond_ufq5y_27";
const detail = "_detail_ufq5y_29";
const detailCity = "_detailCity_ufq5y_34";
const stats = "_stats_ufq5y_36";
const statLabel = "_statLabel_ufq5y_38";
const statVal = "_statVal_ufq5y_39";
const condition = "_condition_ufq5y_41";
const condVal = "_condVal_ufq5y_42";
const styles = {
	widget: widget,
	liveLabel: liveLabel,
	dot: dot,
	grid: grid,
	card: card,
	active: active,
	cityName: cityName,
	temp: temp,
	cond: cond,
	detail: detail,
	detailCity: detailCity,
	stats: stats,
	statLabel: statLabel,
	statVal: statVal,
	condition: condition,
	condVal: condVal
};

const {useState,useEffect} = await importShared('react');
const CITIES = [
  { id: 1, name: "Chicago, IL", base: 28, cond: "Partly Cloudy", humidity: 62, wind: 14, feels: 22 },
  { id: 2, name: "New York, NY", base: 34, cond: "Overcast", humidity: 71, wind: 9, feels: 30 },
  { id: 3, name: "Austin, TX", base: 58, cond: "Sunny", humidity: 45, wind: 11, feels: 60 },
  { id: 4, name: "Seattle, WA", base: 46, cond: "Light Rain", humidity: 88, wind: 7, feels: 43 }
];
function jitter(base) {
  return base + Math.floor((Math.random() - 0.5) * 4);
}
function WeatherWidget() {
  const [temps, setTemps] = useState(
    () => CITIES.reduce((acc, c) => ({ ...acc, [c.id]: c.base }), {})
  );
  const [selected, setSelected] = useState(1);
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setTemps(CITIES.reduce((acc, c) => ({ ...acc, [c.id]: jitter(c.base) }), {}));
      setTick((t) => t + 1);
    }, 3e3);
    return () => clearInterval(id);
  }, []);
  const city = CITIES.find((c) => c.id === selected);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.widget, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.liveLabel, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.dot }),
      "Live · refreshes every 3s · tick #",
      tick
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.grid, children: CITIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `${styles.card} ${selected === c.id ? styles.active : ""}`,
        onClick: () => setSelected(c.id),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.cityName, children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.temp, children: [
            temps[c.id],
            "°F"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.cond, children: c.cond })
        ]
      },
      c.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.detail, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.detailCity, children: [
        "▶ ",
        city.name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.stats, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.statLabel, children: "Temp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.statVal, children: [
            temps[selected],
            "°F"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.statLabel, children: "Feels Like" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.statVal, children: [
            city.feels,
            "°F"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.statLabel, children: "Humidity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.statVal, children: [
            city.humidity,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.statLabel, children: "Wind" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.statVal, children: [
            city.wind,
            " mph"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.condition, children: [
        "condition: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.condVal, children: city.cond })
      ] })
    ] })
  ] });
}

export { WeatherWidget as default, jsxRuntimeExports as j };
