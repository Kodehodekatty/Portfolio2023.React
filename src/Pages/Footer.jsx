import FooterLayout from "./FooterLayout.module.css";

export default function Footer() {
  return (
    <div className={FooterLayout.footerwrapper}>
      <div className={FooterLayout.footerbackground}>
        <div className={FooterLayout.text}>
          <ul className={FooterLayout.footerlist}>
            <li className={FooterLayout.footeritems}>
              copyright: Kathrine Stangeland 2023
            </li>
            <li className={FooterLayout.footeritems}>Portfolio</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
