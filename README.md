![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)

# Evaluación 3

Este proyecto trata de desarrollar una página web con un listado de personajes de Harry Potter, que podemos filtrar tanto por el nombre del personaje como por la casa a la que pertenecen dentro de Hogwarts. 

Esto lo haremos utilizando React y es para la evaluación del tercer módulo del bootcamp de Programadora web de Adalab.

Usando lo aprendido en clase hasta la fecha, he seguido las directrices del enunciado proporcionado por la profesora para el desarrollo de esta aplicación web. 

Los pasos seguidos para realizar este ejercicio fueron los siguientes:

1. Mostrar un listado de personajes de Harry Potter utilizando el API abierto de HP-API.

2. Crear una estructura básica con un input dónde poner el nombre que queremos buscar y un select para elegir la casa correspondiente, además del listado de resultados del primer punto.

3. En base a la información proporcionada en el input, el select o ambos, realizar un filtro de personajes tanto por nombre como por la casa a la que pertenecen. Y que en dicha búsqueda aparezca tanto la imagen como el nombre y la especie del personaje.

4. Escuchar eventos sobre todos los personajes, de tal forma que al clicar en uno naveguemos a otra página donde se nos muestren más detalles del mismo, como por ejemplo su estado o género, además de los datos indicados en el punto anterior. 

5. Como parte de los bonus, he ordenado alfabéticamente el listado de personajes y he creado un botón de reset que al clicarlo, lo devuelve al listado original en el que se muestran los personajes que corresponden a Gryffindor.

## Guía de inicio rápido

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) con una versión superior a la 14:

1. **Abre una terminal** en la carpeta raíz de tu repositorio.
2. **Instala las dependencias** locales ejecutando en la terminal el comando:

```bash
npm install
```

### Pasos para arrancar el proyecto:

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto ejecutando uno de los siguientes comandos:

```bash
npm run dev
```
Este comando:

- **Abre una ventana de Chrome y muestra la página web**, al igual que hace el plugin de VS Code Live Server (Go live).
