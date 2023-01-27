import layout from "./layout.module.css";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

export default function AboutMe({ textSelector }) {
  return (
    <div className={layout.aboutMe}>
      {textSelector === "landing page" && (
        <div className={layout.landing}>
          <h1 className={layout.abouth1}>Hei! Velkommen til siden min!</h1>
        </div>
      )}
      {textSelector === "om meg" && (
        <div>
          <h3>Litt kort om hvem jeg er</h3>

          <h2>
            Navnet er Kathrine, 28 år, og er deltaker i Kodehode, JoobLoop i
            Stavanger.
          </h2>
          <p>
            Som de aller fleste i min krets, så vokste jeg opp når den digitale
            tidsalderen virkelig endret verdensbildet. Videospill, data, og
            andre “geeky og nerdy” saker er ofte de første ordene jeg bruker for
            å beskrive mine interesser.{" "}
          </p>

          <p>
            Min historie startet utgangspunktet innforbi den kreative bransjen.
            Jeg fullførte høyere studier innenfor litteratur film og teater i
            kristiansand, med et utvekslingsår i Japan. Etterfulgt av, en
            bachelor i PR/Kommunikasjon fra Deakin University, Australia.
          </p>

          <p>
            {" "}
            Men i 2022 fikk jeg endelig muligheten igjennom Kodehode å lære
            programmering!{" "}
          </p>

          <p>
            Min ambisjon for å bli front end utvikler, og drive med utvikling av
            web- og mobile applikasjoner, er ikke bare fordi jeg elsker å kode,{" "}
            <b>
              men fordi jeg også kan ta i bruk mine kreative talenter og
              kompentanse!
            </b>
          </p>

          <p>
            <b> </b>
          </p>

          <p>
            {" "}
            Mine design kunnskaper i Figma/Adobe programmer sammen med
            programmeringsspråk som JavaScript og rammeverk som React, gir meg
            gode ferdigheter til å faktisk virkeligjøre nettsider fra bunnen av!
          </p>

          <p>
            Det er enda så mye mer kode,rammeverk og programmer jeg vil lære for
            anskaffe høyere digital kompetansen. Muligheten for praksis ute i
            den store verden, tror jeg er riktig neste steg for å få både
            faglig, og personlig utvikling.
          </p>
        </div>
      )}

      {textSelector === "mitt arbeid" && (
        <div>
          <p>
            På Github siden min, finner du mange eksempler på oppgaver og
            prosjekter jeg har jobbet med på Kodehode, og utenom i den siste
            tiden.
          </p>
          <p>
            Her skal jeg laget en mer oversiktlig liste over hva slags koding
            jeg har drevet med, mine programmeringsferdigheter, og andre
            erfaringer.
          </p>

          <section id={layout.cards}>
            <div className={layout.cardscontainer}>
              <div className={layout.card} id={layout.project1}>
                <h1>Prosjekter som har blitt kodet i React/Vite</h1>

                <a href="https://github.com/Kodehodekatty/JulCountdown">
                  <p className={layout.label}>Juleoppgave</p>
                </a>
                <a href="https://github.com/Kodehodekatty/React.Pokedex.API">
                  <p className={layout.label}>Pokedex v.2</p>{" "}
                </a>

                <a href="https://github.com/Kodehodekatty/Portfolio2023.React">
                  <p className={layout.label}>Portfolio</p>{" "}
                </a>
              </div>

              <div className={layout.card} id={layout.project1}>
                <h1>Prosjekter som har blitt kodet i Javascript</h1>

                <a href="https://github.com/Kodehodekatty/Blackjack">
                  {" "}
                  <p className={layout.label}>BlackJack</p>{" "}
                </a>
                <a href=" https://github.com/Kodehodekatty/Pokedex">
                  <p className={layout.label}>Pokedex v.1</p>{" "}
                </a>
                <a href="https://github.com/Kodehodekatty/spaceproject">
                  {" "}
                  <p className={layout.label}>Space Project</p>{" "}
                </a>
              </div>
            </div>
          </section>
          <section className={layout.bars}>
            <h2>Programmerings Nivå</h2>
            <p className={layout.skillp}>HTML</p>
            <div className={layout.skillbox}>
              <div className={layout.html}>100%</div>
            </div>

            <p className={layout.skillp}>CSS</p>
            <div className={layout.skillbox}>
              <div className={layout.css}>95%</div>
            </div>

            <p className={layout.skillp}>JavaScript</p>
            <div className={layout.skillbox}>
              <div className={layout.js}>90%</div>
            </div>

            <p className={layout.skillp}>REACT</p>
            <div className={layout.skillbox}>
              <div className={layout.react}>80%</div>
            </div>
          </section>

          <section className={layout.bars}>
            <h1>andre ferdigheter</h1>
            <p className={layout.skillp}>Figma</p>
            <div className={layout.skillbox}>
              <div className={layout.html}>75%</div>
            </div>

            <p className={layout.skillp}>Adobe Creative Suite</p>
            <div className={layout.skillbox}>
              <div className={layout.css}>89%</div>
            </div>

            <p className={layout.skillp}>Wordpress</p>
            <div className={layout.skillbox}>
              <div className={layout.js}>90%</div>
            </div>
            <section className={layout.grafisk}>
              <p className={layout.skillp}>Andre Grafisk kompetanser</p>
              <div className={layout.kompetanse}>
                <p>Filmproduksjon</p>
                <p>Video Redigering</p>
                <p>Bilde redigering</p>
              </div>
            </section>

            <p className={layout.skillp}>Annet</p>
            <ul className={layout.annet}>
              <li>Public Relations</li>
              <li>1-linje IT Support</li>
              <li>Kundeservice/telefonsupport</li>
              <li>Kommunikasjonsstrategier</li>
              <li>Digital markedsføring</li>
              <li>
                administrasjon av sosiale medie kanaler og publisering av
                innhold for klienter/bedrifter
              </li>
              <li>
                Utvikling og gjennomføring av strategier og kampanjer i sosiale
                medier
              </li>
              <li>Konsulentvirksomhet tilknyttet informasjonsteknologi</li>
              <li>Teknisk engelsk og konversasjon</li>
            </ul>
          </section>
        </div>
      )}

      {textSelector === "kontakt" && (
        <div className={layout.kontaktboks}>
          <section className={layout.infobox}>
            <h1>kontakt informasjon</h1>
            <div className={layout.pinfo}>
              <h1>Telefon </h1>
              <p>+47 92993977</p>

              <h1>Adresse</h1>
              <p>Hasselveien 34315 Sandnes, Rogaland.</p>
              <h1>
                Les mer om Kodehode, Joobloop{" "}
                <a href="https://jobloop.no/kodehode-modellen">her</a>{" "}
              </h1>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
