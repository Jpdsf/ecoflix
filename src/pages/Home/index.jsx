import React from "react";
import Header from "../../components/Header";
import { StyledHome, Features, Feature, GetStarted } from "./style";
import Button from "../../components/Button";
import solarPanel from "../../assets/solar-panel.jpg";
import windTurbine from "../../assets/wind-turbine.jpg";
import expert from "../../assets/expert.jpg";

const Home = () => {
    return (
        <StyledHome>
            <Header />
            <section className="hero">
                <div className="hero-content">
                    <h1>EcoFlix</h1>
                    <p>Conectando comunidades locais com especialistas em sustentabilidade para projetos de energia renovável.</p>
                    <Button primary>Saiba Mais</Button>
                </div>
            </section>
            <Features>
                <Feature>
                    <img src={solarPanel} alt="Solar Panel" />
                    <h2>Energia Solar</h2>
                    <p>Instalação de sistemas de energia solar em residências e empresas.</p>
                </Feature>
                <Feature>
                    <img src={windTurbine} alt="Wind Turbine" />
                    <h2>Energia Eólica</h2>
                    <p>Desenvolvimento de parques eólicos para geração de energia limpa.</p>
                </Feature>
                <Feature>
                    <img src={expert} alt="Sustainability Expert" />
                    <h2>Especialistas em Sustentabilidade</h2>
                    <p>Consultoria especializada para implementação de projetos sustentáveis.</p>
                </Feature>
            </Features>
            <GetStarted>
                <h2>Comece agora mesmo!</h2>
                <p>Descubra como podemos ajudar você a iniciar seu projeto de energia renovável.</p>
                <Button>Entre em Contato</Button>
            </GetStarted>
        </StyledHome>
    );
};

export default Home;
