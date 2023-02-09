import FooterLayout from "./FooterLayout.module.css";

export default function Footer() {
  return (
    <div className={FooterLayout.footerwrapper}>
      <div className={FooterLayout.footerbackground}>
        <ul>
          <li>
            <h1 className={FooterLayout.bottomtext}>
              copyright: Kathrine Stangeland 2023
            </h1>
          </li>
          <li>
            <h1>Portfolio</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}
