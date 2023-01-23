import { render } from "react-dom";
import layout from "./layout.module.css";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

export default function AboutMe(play) {
  return (
    <Animate
      play={play}
      delay={0.5}
      start={{
        opacity: 0,
        transform: "translateY(-70px)",
      }}
      end={{
        opacity: 1,
        transform: "translateY(2px)",
      }}
    >
      <div className={layout.aboutMe}>
        <h1 className={layout.abouth1}>test</h1>
        <p>
          Mauris congue lorem ornare vehicula lobortis. Ut ac metus semper,
          pulvinar arcu nec, aliquet ipsum. Praesent imperdiet nulla sit amet
          neque tempor vulputate. Cras vitae diam tortor. Integer eget elementum
          magna, quis mattis felis. Suspendisse in sollicitudin ipsum.{" "}
        </p>
        <h3>something</h3>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Praesent vestibulum tincidunt leo eget
          scelerisque. Curabitur arcu enim, facilisis ut mauris rhoncus,
          tincidunt ultrices est. Proin blandit massa turpis, a scelerisque
          felis lacinia eu. Suspendisse a bibendum nunc. Sed ac nunc accumsan,
          ultrices lectus ut, egestas leo.
        </p>
        <p>
          lia curae; Praesent vestibulum tincidunt leo eget scelerisque.
          Curabitur arcu enim, facilisis ut mauris rhoncus, tincidunt ultrices
          est. Proin blandit massa turpis, a scelerisque felis lacinia eu.
          Suspendisse a bibendum nunc. Sed ac nunc accumsan, ultrices lectus ut,
          egestas leo.
        </p>
        <p>
          lia curae; Praesent vestibulum tincidunt leo eget scelerisque.
          Curabitur arcu enim, facilisis ut mauris rhoncus, tincidunt ultrices
          est. Proin blandit massa turpis, a scelerisque felis lacinia eu.
          Suspendisse a bibendum nunc. Sed ac nunc accumsan, ultrices lectus ut,
          egestas leo.
        </p>
      </div>
    </Animate>
  );
}
