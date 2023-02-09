import layout from "./layout.module.css";

export default function AboutMe({ textSelector }) {
  return (
    <div className={layout.aboutMe}>
      {textSelector === "landing page" && (
        <div className={layout.landing}>
          <h1 className={layout.abouth1}>Hei! Velkommen til siden min!</h1>
        </div>
      )}
      {textSelector === "om meg" && (
        <div className={layout.wordfix}>
          <h3>Litt kort om hvem jeg er</h3>

          <h2 className={layout.myname}>
            Navnet mitt er Kathrine, 29 år, og er deltaker i Kodehode, JoobLoop
            i Stavanger.
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
            Kristiansand, med et utvekslingsår i Japan. Etterfulgt av en
            bachelor i PR/Kommunikasjon, fra Deakin University, Australia.
          </p>

          <p>
            Men i 2022 fikk jeg endelig muligheten igjennom Kodehode å lære
            programmering!
          </p>

          <p>
            <blockquote>
              {" "}
              Min ambisjon for å bli front end utvikler, og drive med utvikling
              av web- og mobile applikasjoner, er ikke bare fordi jeg elsker å
              kode,{" "}
              <b>
                men fordi jeg også kan ta i bruk mine kreative talenter og
                kompentanse!
              </b>{" "}
            </blockquote>{" "}
          </p>

          <p>
            {" "}
            Design kunnskaper i Figma/Adobe programmer sammen med
            programmeringsspråk som JavaScript og rammeverk som React, gir meg
            gode ferdigheter til å faktisk virkeligjøre nettsider fra bunnen av!
          </p>

          <p className={layout.bottompadding}>
            Det er enda så mye mer kode,rammeverk og programmer jeg vil lære for
            anskaffe høyere digital kompetansen. Muligheten for praksis ute i
            den store verden, tror jeg er riktig neste steg for å få både
            faglig, og personlig utvikling.
          </p>
        </div>
      )}

      {textSelector === "mitt arbeid" && (
        <div className={layout.opening}>
          <p className={layout.paraskill}>
            På Github siden min, finner du mange eksempler på oppgaver og
            prosjekter jeg har jobbet med på Kodehode, og utenom i den siste
            tiden.
          </p>
          <p className={layout.paraskill}>
            Her skal jeg laget en mer oversiktlig liste over hva slags koding
            jeg har drevet med, mine programmeringsferdigheter, og andre
            erfaringer.
          </p>

          <section id={layout.cards}>
            <div className={layout.cardscontainer}>
              <div className={layout.card}>
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
          <div className={layout.bigwrap}>
            <section className={layout.bars}>
              <h1 className={layout.grafisktittel}>Programmering skill bars</h1>
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
              </div>{" "}
            </section>

            <section className={layout.bars}>
              <h1 className={layout.grafisktittel}>
                Annet programmvare kunnskaper
              </h1>

              <p className={layout.skillp}>Figma</p>
              <div className={layout.skillbox}>
                <div className={layout.figma}>75%</div>
              </div>

              <p className={layout.skillp}>Adobe Creative Suite</p>
              <div className={layout.skillbox}>
                <div className={layout.adobe}>89%</div>
              </div>

              <p className={layout.skillp}>Wordpress</p>
              <div className={layout.skillbox}>
                <div className={layout.wordpress}>90%</div>
              </div>
              <h1 className={layout.grafisktittel}>Grafisk kompetanser</h1>
              <section className={layout.grafisk}>
                <p>Filmproduksjon</p>
                <p>Video Redigering</p>
                <p>Bilde redigering</p>
              </section>
            </section>
            <div className={layout.cardbox}>
              <h1 className={layout.mecard}>Annet</h1>

              <div className={layout.annet}>
                <ul>
                  <li>Public Relations</li>
                  <li>1-linje IT Support</li>

                  <li>Kundeservice/telefonsupport</li>

                  <li>Digital markedsføring</li>
                  <li>
                    administrasjon av og publisering av innhold for klienter på
                    sosiale medie kanaler .
                  </li>
                  <li>Konsulentvirksomhet tilknyttet informasjonsteknologi</li>
                </ul>
              </div>
            </div>
          </div>
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
