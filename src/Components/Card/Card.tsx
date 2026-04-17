import styles from "../../weather.module.css";

interface City {
  id: number;
  name: string;
  base: number;
  cond: string;
  humidity: number;
  wind: number;
  feels: number;
}

export default function Card({
  selected,
  city,
  temp,
  setSelected,
}: {
  selected: number;
  city: City;
  temp: number;
  setSelected: (id: number) => void;
}) {
  return (
    <div
      key={city.id}
      className={`${styles.card} ${selected === city.id ? styles.active : ""}`}
      onClick={() => setSelected(city.id)}
    >
      <div className={styles.cityName}>{city.name}</div>
      <div className={styles.temp}>{temp}°F</div>
      <div className={styles.cond}>{city.cond}</div>
    </div>
  );
}
