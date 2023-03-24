import shadowbody from "../../../images/secondshadowbody.png";
import shadowface from "../../../images/faceshadow.png";
import shadowfooter from "../../../images/shadowfooter.png";
import fullshadow from "../../../images/fullshadow.png";
import faceandbody from "../../../images/faceandbody.png";
import fullkatty from "../../../images/VSC/fullkatty.png";
import bodyandfooter from "../../../images/bodyandfootershadow.png";
import faceandfooter from "../../../images/faceandfooter.png";
import style2 from "../FrameworkStyles.module.css";

export function ShowImage({ showHeader, showBody, showFooter }) {
  return (
    <>
      {/* showing shadow me at the start*/}
      {!showHeader && !showBody && !showFooter && (
        <img className={style2.shadowmain} src={fullshadow} />
      )}
      {showHeader && !showBody && !showFooter && (
        <img className={style2.shadowmain} src={shadowface} />
      )}
      {showHeader && showBody && !showFooter && (
        <img className={style2.shadowmain} src={faceandbody} />
      )}
      {!showHeader && showBody && !showFooter && (
        <img className={style2.shadowmain} src={shadowbody} />
      )}
      {!showHeader && showBody && showFooter && (
        <img className={style2.shadowmain} src={bodyandfooter} />
      )}
      {showHeader && !showBody && showFooter && (
        <img className={style2.shadowmain} src={faceandfooter} />
      )}
      {!showHeader && !showBody && showFooter && (
        <img className={style2.shadowmain} src={shadowfooter} />
      )}
      {showHeader && showBody && showFooter && (
        <img className={style2.shadowmain} src={fullkatty} />
      )}
    </>
  );
}
