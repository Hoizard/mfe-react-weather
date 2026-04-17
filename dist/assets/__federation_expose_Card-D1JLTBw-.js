import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';

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

function Card({
  selected,
  city,
  temp,
  setSelected
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `${styles.card} ${selected === city.id ? styles.active : ""}`,
      onClick: () => setSelected(city.id),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.cityName, children: city.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.temp, children: [
          temp,
          "°F"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.cond, children: city.cond })
      ]
    },
    city.id
  );
}

export { Card as default, styles as s };
