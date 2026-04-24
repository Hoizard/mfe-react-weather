import Card from "./Components/Card/Card";
import styles from "./weather.module.css";
import { CITIES } from "./utils/data";
import { useState, useEffect } from "react";

function jitter(base) {
  return base + Math.floor((Math.random() - 0.5) * 4);
}

export default function WeatherWidget() {
  const [temps, setTemps] = useState(() =>
    CITIES.reduce((acc, c) => ({ ...acc, [c.id]: c.base }), {}),
  );
  const [selected, setSelected] = useState(1);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTemps(
        CITIES.reduce((acc, c) => ({ ...acc, [c.id]: jitter(c.base) }), {}),
      );
      setTick((t) => t + 1);
      console.log("tick", tick + 1);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const city = CITIES.find((c) => c.id === selected);

  return (
    <div className={styles.widget}>
      <div className={styles.liveLabel}>
        <span className={styles.dot} />
        Live · refreshes every 3s · tick #{tick}
      </div>

      <div className={styles.grid}>
        {CITIES.map((c) => (
          <Card
            key={c.id}
            selected={selected}
            city={c}
            temp={temps[c.id]}
            setSelected={setSelected}
          />
        ))}
      </div>

      <div className={styles.detail}>
        <div className={styles.detailCity}>▶ {city.name}</div>
        <div className={styles.stats}>
          <div>
            <div className={styles.statLabel}>Temp</div>
            <div className={styles.statVal}>{temps[selected]}°F</div>
          </div>
          <div>
            <div className={styles.statLabel}>Feels Like</div>
            <div className={styles.statVal}>{city.feels}°F</div>
          </div>
          <div>
            <div className={styles.statLabel}>Humidity</div>
            <div className={styles.statVal}>{city.humidity}%</div>
          </div>
          <div>
            <div className={styles.statLabel}>Wind</div>
            <div className={styles.statVal}>{city.wind} mph</div>
          </div>
        </div>
        <div className={styles.condition}>
          condition: <span className={styles.condVal}>{city.cond}</span>
        </div>
      </div>
    </div>
  );
}
