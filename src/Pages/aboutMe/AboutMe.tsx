import React, { useState, useRef, useEffect, FunctionComponent } from "react";

import aboutmestyles from "./aboutmestyles.module.css";
import workstyles from "./workstyles.module.css";
import contactstyles from "./contactstyles.module.css";

type TAboutMe = {
  setTextSelector: string;
  textSelector: string;
};
export const AboutMe: FunctionComponent<TAboutMe> = ({
  setTextSelector,
  textSelector,
}) => {
  return (
    <div className={aboutmestyles.aboutMe}>
      {textSelector === "landing page" && (
        <div className={aboutmestyles.landing}>
          <span className={aboutmestyles.welcometext}>
            {" "}
            Hei! Velkommen til siden min!
          </span>
        </div>
      )}
      {textSelector === "om meg" && (
        <div>
          <h3>Litt kort om hvem jeg er</h3>

          <h2 className={aboutmestyles.myname}>
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
          
            Jeg har funnet et kall i kodingen, og stortrives med å lage
            nettsider med React. 
          </blockquote>
          <p>
          Akkurat nå er jeg i praksis hos Bouvet, som Frontend utvikler, og jobber med React og Typescript. Sammen med to andre, så har jeg jobbet med et kodeprosjekt, hvor oppgaven er å utvikle en App for å inspisere og sikkerhetskontrollere vindmøller.
          </p>

          <p>
          Det har vært utrolig spennende å kunne jobbe direkte med andre utviklere og lære koding rett fra selve bransjen! 
          <p>Bouvet har gitt meg en fantastisk glimt til hvordan det er å jobbe som utvikler, og gitt meg erfaring med Github og presentere ukenlige demoer om prosjektet.</p>
            <b> {" "}
            Min praksis tar slutt i September, og nå ser jeg etter nye muligheter for å finne jobb som Frontend-Utvikler.
            </b>
          </p>
        </div>
      )}

      {textSelector === "mitt arbeid" && (
        <div className={workstyles.opening}>
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
            <h1>Prosjekter som har blitt kodet i min praksisperiode hos Bouvet</h1>
            <a href="https://github.com/OptiCorp/TurbinSikker-App.git/"> 
            <p className={workstyles.label}>TurbinSikker-App</p></a>
           
            <a href="https://github.com/OptiCorp/ImageShirtStore.git/">
            <p className={workstyles.label}>ImageShirtStore</p>
            </a>
            </div>
          <div className={workstyles.card} id={workstyles.project1}>
            <h1>Prosjekter som har blitt kodet i React/Vite</h1>
            <a href="https://kodehodekatty.github.io/JulCountdown/"> 
            <p className={workstyles.label}>Juleoppgave</p></a>
            <a
              className={workstyles.secondlink}
              href="https://github.com/Kodehodekatty/JulCountdown"
            >
              link to repository{" "}
            </a>
            <a href="https://github.com/Kodehodekatty/React.Pokedex.API">
            <p className={workstyles.label}>Pokedex v.2</p>{" "}</a>
            <a href="https://github.com/Kodehodekatty/Portfolio2023.React">
            <p className={workstyles.label}>Portfolio</p></a>
            <a href="https://kodehodekatty.github.io/ReactRoutesCalculator/">
            
          
            <p className={workstyles.label}>React Routes og Kalkulator</p></a>
            <a
              className={workstyles.secondlink}
              href="https://github.com/Kodehodekatty/ReactRoutesCalculator"
            >
              link to repository
            </a>
          </div>
          <div className={workstyles.card} id={workstyles.project1}>
            <h1>Prosjekter som har blitt kodet i Javascript</h1>
            <a href="https://github.com/Kodehodekatty/Blackjack">
            <p className={workstyles.label}>BlackJack</p></a>
            <a href=" https://github.com/Kodehodekatty/Pokedex">
            <p className={workstyles.label}>Pokedex v.1</p></a>
            <a href="https://github.com/Kodehodekatty/spaceproject">
            <p className={workstyles.label}>Space Project</p></a>
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
};
