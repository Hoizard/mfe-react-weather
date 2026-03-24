import { useState, useEffect } from 'react'
import styles from './weather.module.css'

const CITIES = [
  { id: 1, name: 'Chicago, IL',  base: 28, cond: 'Partly Cloudy', humidity: 62, wind: 14, feels: 22 },
  { id: 2, name: 'New York, NY', base: 34, cond: 'Overcast',       humidity: 71, wind: 9,  feels: 30 },
  { id: 3, name: 'Austin, TX',   base: 58, cond: 'Sunny',          humidity: 45, wind: 11, feels: 60 },
  { id: 4, name: 'Seattle, WA',  base: 46, cond: 'Light Rain',     humidity: 88, wind: 7,  feels: 43 },
]

function jitter(base) {
  return base + Math.floor((Math.random() - 0.5) * 4)
}

export default function WeatherWidget() {
  const [temps, setTemps] = useState(() =>
    CITIES.reduce((acc, c) => ({ ...acc, [c.id]: c.base }), {})
  )
  const [selected, setSelected] = useState(1)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setTemps(CITIES.reduce((acc, c) => ({ ...acc, [c.id]: jitter(c.base) }), {}))
      setTick(t => t + 1)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  const city = CITIES.find(c => c.id === selected)

  return (
    <div className={styles.widget}>
      <div className={styles.liveLabel}>
        <span className={styles.dot} />
        Live · refreshes every 3s · tick #{tick}
      </div>

      <div className={styles.grid}>
        {CITIES.map(c => (
          <div
            key={c.id}
            className={`${styles.card} ${selected === c.id ? styles.active : ''}`}
            onClick={() => setSelected(c.id)}
          >
            <div className={styles.cityName}>{c.name}</div>
            <div className={styles.temp}>{temps[c.id]}°F</div>
            <div className={styles.cond}>{c.cond}</div>
          </div>
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
  )
}
