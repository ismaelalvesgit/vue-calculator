# vue-finances

Este projeto foi gerado com [Vue.js](https://vuejs.org/) versão 2.6.11

FRONT-END criado para ser utlizado em conjunto com uma API GraphQL, ferramenas utilizadas:

* NodeJS
* Apollo Boost
* Chart.js
* Md5
* GraphQL
* Moment
* Rxjs
* Vuetify
* Vuex
* Vue Router
* Vuelidate
* Docker (Compose e Machine)
* Roboto Fontface
* Material Design Icons

## Screenshots

app view:

<img src="https://raw.githubusercontent.com/ismaelalvesgit/vue-finances/master/app.png" width="800">

## Development

### Setup

#### 1) Instalação de dependencias
1º download das dependeicas do projeto
``` sh
npm install

# Você pode instalar vue CLI globalmeente em seu SO
npm install -g @vue/cli @vue/cli-service-global
# OU
yarn global add @vue/cli @vue/cli-service-global
```
#### 2) Iniciar o ambiente backend
O ambiente backend está em outro projeto que está localizado [AQUI](https://github.com/ismaelalvesgit/grapql-finaces)

#### 3) Iniciar o servidor de desenvolvimento
```
npm run serve
```
### Build Docker
Para gerar um nova imagem docker do projeto, o arquivo de configuração da imagem está localizado em `Dockerfile`.
``` sh
npm run docker:build
```
Você tambem pode iniciar uma instancia de sua imagem local, o arquivo de configuração da imagem está  localizado em `Dockerfile`.
``` sh
npm run docker:run
```
### Build da aplicação
Para gerar um build do projeto basta roca o comando abaixo no seu CMD ou TERMINAL do seu SO, para mais informações 
sobre build do [Vue.js](https://vuejs.org/) acesse este [Link](https://cli.vuejs.org/guide/mode-and-env.html).
```sh
npm run build
```

## Contato

Desenvolvido por: [Ismael Alves](https://github.com/ismaelalvesgit)

* Email: [cearaismael1997@gmail.com](mailto:cearaismael1997@gmail.com) 
* Github: [github.com/ismaelalvesgit](https://github.com/ismaelalvesgit)
* Linkedin: [linkedin.com/in/ismael-alves-6945531a0/](https://www.linkedin.com/in/ismael-alves-6945531a0/)

### Customização de Configurações do projeto
Verifique [Configurações e Referencias](https://cli.vuejs.org/config/).