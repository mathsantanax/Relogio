# Relógio Mundial, Cronômetro e Temporizador
Este projeto é uma aplicação web que oferece três funcionalidades principais:

**Relógio Mundial:** Exibe a hora atual de diferentes fusos horários ao redor do mundo. Inclui tanto um relógio digital quanto um analógico, e permite a navegação entre diferentes fusos horários.

**Cronômetro:** Um cronômetro simples que permite iniciar, pausar e resetar o tempo, com precisão de milissegundos.

**Temporizador:** Um temporizador customizável onde o usuário pode definir horas, minutos e segundos, com opções para iniciar, pausar e resetar.

# Funcionalidades
## Relógio Mundial
Exibe a hora atual para várias cidades ao redor do mundo.
Alterna entre diferentes fusos horários usando setas de navegação.
Exibe tanto um relógio digital quanto um analógico.
Mostra uma imagem correspondente ao país do fuso horário selecionado.

## Cronômetro
Cronômetro com contagem em horas, minutos, segundos e milissegundos.
Permite iniciar, pausar e resetar o cronômetro.

## Temporizador
Temporizador configurável pelo usuário para horas, minutos e segundos.
Exibe a contagem regressiva em tempo real.
Opções para iniciar, pausar e resetar o temporizador.

# Estrutura do Projeto

**index.html:** Página principal que exibe o Relógio Mundial.
**Cronometro.html:** Página do cronômetro.
**Temporizador.html:** Página do temporizador.
**assets/img/:** Contém as imagens dos países/Cidades.
**assets/css/:** Contém os arquivos CSS para o estilo das páginas.
**assets/js/:** Contém os arquivos JavaScript que implementam as funcionalidades.

### Como Usar

**Clone o repositório:**

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git

Abra o arquivo index.html em um navegador para acessar a página principal do Relógio Mundial.

Use a navegação no menu para acessar as páginas do Cronômetro e do Temporizador.

# Customização

Você pode adicionar mais zonas de tempo, alterando o objeto Zones no arquivo Relogio.js, e também adicionar novas imagens no objeto ImagensPaises.

const Zones = {
    'America/Sao_Paulo': 'pt-BR',
    'America/New_York': 'en-US',
    // Adicione mais fusos horários aqui
};

const ImagensPaises = {
    'America/Sao_Paulo': 'assets/img/brazil.jpg',
    'America/New_York': 'assets/img/usa.jpg',
    // Adicione mais imagens correspondentes aqui
};

**Obs:** Não esqueça de adicionar a fotos do pais em assets/img/


# Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias e novas funcionalidades.


Tecnologias Utilizadas
HTML5
CSS3
JavaScript
Créditos
Projeto desenvolvido por Matheus Santana.

## Licença

Este projeto está licenciado sob a MIT License.