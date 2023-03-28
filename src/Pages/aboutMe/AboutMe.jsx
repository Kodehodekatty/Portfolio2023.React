import layout from "./layout.module.css";
import workstyles from "./workstyles.module.css";
import contactstyles from "./contactstyles.module.css";

export default function AboutMe({ textSelector }) {
  return (
    <div className={layout.aboutMe}>
      {textSelector === "landing page" && (
        <div className={layout.landing}>
          <span className={layout.welcometext}>
            {" "}
            Hei! Velkommen til siden min!
          </span>
        </div>
      )}
      {textSelector === "om meg" && (
        <div>
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
            men i 2022 fikk jeg muligheten å delta i Kodehode. En boot-camp i
            programmering gjennom Jobloop AS.
          </p>

          <p>
            {" "}
            De siste 6 månedene har jeg fått spisset kodekunnskapene mine i
            HTML, CSS, React, JavaScript og Figma.
          </p>

          <blockquote>
            {" "}
            Jeg har funnet et kall i kodingen, og stortrives med å lage
            nettsider med React. Men det er enda så mye mer koding,rammeverk og
            programmvarer jeg vil lære for anskaffe høyere digital kompetanse.
          </blockquote>
          <p>
            {" "}
            Så Det neste steget for meg, er å finne en Frontend praksisplass hos
            en bedrift for å anskaffe mer programmeringskunnskaper, og personlig
            utvikling.
          </p>

          <p>
            Min ambisjon for å bli front end utvikler, og drive med utvikling av
            web- og mobile applikasjoner, er ikke bare fordi jeg elsker å kode,{" "}
            <b>
              men fordi jeg også kan ta i bruk mine kreative talenter og
              kompentanse!
            </b>
          </p>
        </div>
      )}

      {textSelector === "mitt arbeid" && (
        <div className={layout.opening}>
          <p className={workstyles.paraskill}>
            På Github siden min, finner du mange eksempler på oppgaver og
            prosjekter jeg har jobbet med på Kodehode, og utenom i den siste
            tiden.
          </p>
          <p className={workstyles.paraskill}>
            Her skal jeg laget en mer oversiktlig liste over hva slags koding
            jeg har drevet med, mine programmeringsferdigheter, og andre
            erfaringer.
          </p>
          <div className={workstyles.card} id={workstyles.project1}>
            <h1>Prosjekter som har blitt kodet i React/Vite</h1>
            <a href="https://kodehodekatty.github.io/JulCountdown/"> </a>
            <p className={workstyles.label}>Juleoppgave</p>
            <a
              className={workstyles.secondlink}
              href="https://github.com/Kodehodekatty/JulCountdown"
            >
              link to repository{" "}
            </a>
            <a href="https://github.com/Kodehodekatty/React.Pokedex.API"></a>
            <p className={workstyles.label}>Pokedex v.2</p>{" "}
            <a href="https://github.com/Kodehodekatty/Portfolio2023.React"></a>
            <p className={workstyles.label}>Portfolio</p>{" "}
            <a href="https://kodehodekatty.github.io/ReactRoutesCalculator/">
              {" "}
            </a>
            <p className={workstyles.label}>React Routes og Kalkulator</p>{" "}
            <a
              className={workstyles.secondlink}
              href="https://github.com/Kodehodekatty/ReactRoutesCalculator"
            >
              link to repository
            </a>
          </div>
          <div className={workstyles.card} id={workstyles.project1}>
            <h1>Prosjekter som har blitt kodet i Javascript</h1>
            <a href="https://github.com/Kodehodekatty/Blackjack"></a>{" "}
            <p className={workstyles.label}>BlackJack</p>{" "}
            <a href=" https://github.com/Kodehodekatty/Pokedex"> </a>
            <p className={workstyles.label}>Pokedex v.1</p>{" "}
            <a href="https://github.com/Kodehodekatty/spaceproject"> </a>{" "}
            <p className={workstyles.label}>Space Project</p>{" "}
          </div>
          <section className={workstyles.bars}>
            <h1 className={workstyles.grafisktittel}>
              Programmering skill bars
            </h1>
            <span className={workstyles.mma}>
              <p className={workstyles.skillp}>HTML</p>
              <div className={workstyles.skillbox}>
                <div className={workstyles.html}>100%</div>
              </div>
              <p className={workstyles.skillp}>CSS</p>
              <div className={workstyles.skillbox}>
                <div className={workstyles.css}>95%</div>
              </div>
              <p className={workstyles.skillp}>JavaScript</p>
              <div className={workstyles.skillbox}>
                <div className={workstyles.js}>90%</div>
              </div>
              <p className={workstyles.skillp}>REACT</p>
              <div className={workstyles.skillbox}>
                <div className={workstyles.react}>80%</div>
              </div>{" "}
            </span>
          </section>
          <section className={workstyles.bars}>
            <h1 className={workstyles.grafisktittel}>
              Andre Programmvare kunnskaper
            </h1>
            <span className={workstyles.linefix2}>
              <p className={workstyles.skillp}>Figma</p>
              <div className={workstyles.skillbox}>
                <div className={workstyles.figma}>75%</div>
              </div>

              <p className={workstyles.skillp}>Adobe Creative Suite</p>
              <div className={workstyles.skillbox}>
                <div className={workstyles.adobe}>89%</div>
              </div>

              <p className={workstyles.skillp}>Wordpress</p>
              <div className={workstyles.skillbox}>
                <div className={workstyles.wordpress}>90%</div>
              </div>
            </span>
          </section>
          <section className={workstyles.grafisk}>
            <h1 className={workstyles.kreativtittel}>kreative ferdigheter</h1>
            <div className={workstyles.kompetanse}>
              <p>Filmproduksjon</p>
              <p>Video Redigering</p>
              <p>Bilde redigering</p>
            </div>
          </section>{" "}
          <h1>Annet</h1>
          <div className={workstyles.cardbox}></div>
        </div>
      )}

      {textSelector === "kontakt" && (
        <div className={contactstyles.kontaktboks}>
          <section className={contactstyles.infobox}>
            <h1>Kontakt informasjon</h1>
            <div className={contactstyles.pinfo}>
              <h1>Telefon </h1>
              <p>+47 92993977</p>
            </div>
            <div className={contactstyles.pinfo}>
              {" "}
              <h1>Adresse</h1>
              <p>Hasselveien 34315 Sandnes, Rogaland.</p>
            </div>
            <a href="https://jobloop.no/kodehode-modellen">
              {" "}
              <div className={contactstyles.joobloop}>
                {" "}
                <h1>Les mer om Kodehode, Joobloop her </h1>{" "}
              </div>{" "}
            </a>{" "}
          </section>
        </div>
      )}
    </div>
  );
}
