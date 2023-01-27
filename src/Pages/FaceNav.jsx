import Navlayout from "./NavLayout.module.css";

export default function FaceNav({ setTextSelector }) {
  return (
    <div className={Navlayout.FaceNavWrap}>
      <ul className={Navlayout.list}>
        <li className={Navlayout.navigation}>
          <button onClick={() => setTextSelector("om meg")}>Om meg</button>
        </li>
        <li className={Navlayout.navigation}>
          <button onClick={() => setTextSelector("mitt arbeid")}>
            Mitt Arbeid
          </button>
        </li>
        <li className={Navlayout.navigation}>
          <button onClick={() => setTextSelector("kontakt")}>Kontakt</button>
        </li>
      </ul>
    </div>
  );
}
