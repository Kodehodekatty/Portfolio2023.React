import shadowbody from "../../../images/secondshadowbody.png";
import shadowface from "../../../images/faceshadow.png";
import shadowfooter from "../../../images/shadowfooter.png";
import fullshadow from "../../../images/fullshadow.png";
import faceandbody from "../../../images/faceandbody.png";
import fullkatty from "../../../images/VSC/fullkatty.png";
import bodyandfooter from "../../../images/bodyandfootershadow.png";
import faceandfooter from "../../../images/faceandfooter.png";

import styled from "styled-components";
import style2 from "../../FrameworkStyles.module.css";

export function ShowImage({ showHeader, showBody, showFooter }) {

  if(!showHeader && !showBody && !showFooter) return <img className={style2.shadowmain} src={fullshadow} />
  if(showHeader && !showBody && !showFooter)  return <img className={style2.shadowmain} src={shadowface} />
  if(showHeader && showBody && !showFooter)   return <img className={style2.shadowmain} src={faceandbody} />
  if(!showHeader && showBody && !showFooter)  return <img className={style2.shadowmain} src={shadowbody} />
  if(!showHeader && showBody && showFooter)   return <img className={style2.shadowmain} src={bodyandfooter} />
  if(showHeader && !showBody && showFooter)   return <img className={style2.shadowmain} src={faceandfooter} />
  if(!showHeader && !showBody && showFooter)  return <img className={style2.shadowmain} src={shadowfooter} />
  if(showHeader && showBody && showFooter)    return <img className={style2.shadowmain} src={fullkatty} />
}
