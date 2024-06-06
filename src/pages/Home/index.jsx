
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

=======
import { useState } from "react";
import { StyledContainer, StyledSearchForm, StyledResultsContainer, StyledResultItem, StyledButton } from "./style";
import Header from "../../components/Header"

const Home = () => {
    const [searchCriteria, setSearchCriteria] = useState({
        localizacao: "",
        areaEspecializacao: "",
        disponibilidade: ""
    });
    const [searchResults, setSearchResults] = useState([]);
    const [selectedExpert, setSelectedExpert] = useState(null);
    const [showResults, setShowResults] = useState(false);

    // Lista de profissionais
    const professionals = [
        { id: 1, nome: "João", localizacao: "São Paulo", areaEspecializacao: "Energia Solar", disponibilidade: "Disponível", img: "Imagens/joao.png"},
        { id: 2, nome: "Maria", localizacao: "Rio de Janeiro", areaEspecializacao: "Reciclagem", disponibilidade: "Ocupado", img: "Imagens/maria.png" },
        { id: 3, nome: "Carlos", localizacao: "Curitiba", areaEspecializacao: "Agricultura Sustentável", disponibilidade: "Disponível", img: "Imagens/carlos.png" },
        { id: 4, nome: "Ana", localizacao: "São Paulo", areaEspecializacao: "Reciclagem", disponibilidade: "Disponível", img: "Imagens/ana.png" },
        { id: 5, nome: "Pedro", localizacao: "Curitiba", areaEspecializacao: "Energia Solar", disponibilidade: "Disponível", img: "Imagens/pedro.png" },
        { id: 6, nome: "Mariana", localizacao: "Rio de Janeiro", areaEspecializacao: "Agricultura Sustentável", disponibilidade: "Ocupado", img: "Imagens/mariana.png" },
        { id: 7, nome: "Fernando", localizacao: "São Paulo", areaEspecializacao: "Reciclagem", disponibilidade: "Disponível", img: "Imagens/fernando.png" },
        { id: 8, nome: "Luana", localizacao: "Curitiba", areaEspecializacao: "Energia Solar", disponibilidade: "Ocupado", img: "Imagens/luana.png" },
        { id: 9, nome: "Lucas", localizacao: "Rio de Janeiro", areaEspecializacao: "Agricultura Sustentável", disponibilidade: "Disponível", img: "Imagens/lucas.png" },
        { id: 10, nome: "Julia", localizacao: "São Paulo", areaEspecializacao: "Reciclagem", disponibilidade: "Disponível", img: "Imagens/julia.png" },
    ];

    // Função para realizar a pesquisa de especialistas
    const searchExperts = () => {
        event.preventDefault();
        const results = professionals.filter(professional =>
            professional.localizacao.toLowerCase().includes(searchCriteria.localizacao.toLowerCase()) &&
            professional.areaEspecializacao.toLowerCase().includes(searchCriteria.areaEspecializacao.toLowerCase()) &&
            professional.disponibilidade.toLowerCase().includes(searchCriteria.disponibilidade.toLowerCase())
        );
        setSearchResults(results);
        setShowResults(true); // Mostrar os resultados após a pesquisa
    };

    // Função para agendar uma consulta com o especialista selecionado
    const scheduleConsultation = () => {
        if (selectedExpert) {
            // Implementar a lógica para a consulta
            console.log("Consulta agendada com:", selectedExpert);
        } else {
            console.log("Nenhum especialista selecionado.");
        }
    };

    return (
        <StyledContainer>
            <Header />
            <h1>Encontre um Especialista em Sustentabilidade</h1>
            <StyledSearchForm>
                <input type="text" placeholder="Localização" onChange={(e) => setSearchCriteria({ ...searchCriteria, localizacao: e.target.value })} />
                <input type="text" placeholder="Área de Especialização" onChange={(e) => setSearchCriteria({ ...searchCriteria, areaEspecializacao: e.target.value })} />
                <input type="text" placeholder="Disponibilidade" onChange={(e) => setSearchCriteria({ ...searchCriteria, disponibilidade: e.target.value })} />
                <StyledButton onClick={searchExperts}>Pesquisar</StyledButton>
            </StyledSearchForm>
            {showResults && (
                <StyledResultsContainer>
                    {searchResults.length > 0 ? (
                        searchResults.map(professional => (
                            <StyledResultItem key={professional.id}>
                                <h2>{professional.nome}</h2>
                                <p>Localização: {professional.localizacao}</p>
                                <p>Área de Especialização: {professional.areaEspecializacao}</p>
                                <p>Disponibilidade: {professional.disponibilidade}</p>
                                <StyledButton onClick={() => setSelectedExpert(professional)}>Agendar Consulta</StyledButton>
                            </StyledResultItem>
                        ))
                    ) : (
                        <p>Nenhum especialista encontrado com os critérios de pesquisa.</p>
                    )}
                </StyledResultsContainer>
            )}
        </StyledContainer>
    );
};


export default Home;
