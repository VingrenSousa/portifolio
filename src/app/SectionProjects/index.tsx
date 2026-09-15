import { Conteiner, HeaderProjects } from "./styles";
import imgAppReceitas from "../../assets/Projects/appReceitas.png"
import imgAppRoteiroIa from "../../assets/Projects/appIaRoteiro.png"
import noteFullSteck from "../../assets/Projects/fullSteck.png"

import Projects from "../../components/Projetos";

export default function SectionProjects(){


    const descriptionFullSteck="Aplicação Full Stack de gerenciamento de notas, desenvolvida com frontend e backend próprios. O projeto permite que o usuário crie, visualize e gerencie suas anotações, utilizando autenticação para proteger os dados e uma API REST para comunicação entre as aplicações.  No frontend, desenvolvi a interface utilizando React, TypeScript, Vite, React Router e Axios. Já no backend, construí uma API utilizando Node.js, Express e TypeScript, responsável pela autenticação, regras de negócio e comunicação com o banco de dados."
    const descriptionRoteiroIa="Aplicativo mobile desenvolvido para gerar roteiros de viagem personalizados utilizando inteligência artificial. O usuário informa a cidade de destino e a quantidade de dias da viagem, e a aplicação utiliza a API do ChatGPT para gerar sugestões de passeios, pontos turísticos, restaurantes e atividades para cada dia."
    const descriptiosMyFood="Aplicativo mobile desenvolvido para consulta e descoberta de receitas, permitindo que o usuário explore diferentes pratos e visualize informações como ingredientes, calorias e modo de preparo.O aplicativo consome uma API externa de receitas, realizando requisições para buscar e consultar os dados das receitas de forma dinâmica. Também utilizei SQLite para trabalhar com armazenamento local e animações para tornar a experiência de navegação mais fluida e agradável."


    return(
        <Conteiner>
            <HeaderProjects>
                <h2>
                    ... /Porjetos ...
                </h2>
            </HeaderProjects>
            <Projects img={imgAppReceitas} title="myFood" description={descriptiosMyFood} skil={["react.native","typeScript","expo","expo.Router","expo.reanimed","expo.sqlite"]}/>
            <Projects directleft={true} img={noteFullSteck} title="myFood" description={descriptionFullSteck} skil={["react","typeScript","node.js","vite","express","knex","sqlie","jwt","bcrypt"]}/>
            <Projects directleft={false} img={imgAppRoteiroIa} title="RoteiroIa" description={descriptionRoteiroIa} skil={["react.native","typeScript","expo","api.opemIa"]}/>
           
        </Conteiner>
    )
}