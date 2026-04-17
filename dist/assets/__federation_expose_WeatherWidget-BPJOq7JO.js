import { importShared } from './__federation_fn_import-BMdLx5XD.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';
import Card, { s as styles } from './__federation_expose_Card-D1JLTBw-.js';
import MyButton from './__federation_expose_Counter-DBCr4eLu.js';

const CITIES = [
  {
    id: 1,
    name: "Chicago, IL",
    base: 28,
    cond: "Partly Cloudy",
    humidity: 62,
    wind: 14,
    feels: 22
  },
  {
    id: 2,
    name: "New York, NY",
    base: 34,
    cond: "Overcast",
    humidity: 71,
    wind: 9,
    feels: 30
  },
  {
    id: 3,
    name: "Austin, TX",
    base: 58,
    cond: "Sunny",
    humidity: 45,
    wind: 11,
    feels: 60
  },
  {
    id: 4,
    name: "Seattle, WA",
    base: 46,
    cond: "Light Rain",
    humidity: 88,
    wind: 7,
    feels: 43
  }
];

const {useState,useEffect} = await importShared('react');

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
      setTemps(
        CITIES.reduce((acc, c) => ({ ...acc, [c.id]: jitter(c.base) }), {})
      );
      setTick((t) => t + 1);
      console.log("tick", tick + 1);
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.grid, children: CITIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        selected,
        city: c,
        temp: temps[c.id],
        setSelected
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
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, {})
  ] });
}

export { WeatherWidget as default };
