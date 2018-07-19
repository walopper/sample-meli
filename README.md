# Sample Meli

Simple aplicacion fullstack, con un webserver en express que sirve una API REST, y un cliente en ReactJS como aplicacion que consume a la API.

### Instalacion de pendencias

```bash
$ yarn deps
```

### Inicio server

```bash
$ yarn start
```

### Inicio server (dev mode)

```bash
$ yarn dev
```

### Servir la app

Build primero:
```bash
$ yarn build:client
```

Y ahora si se puede levantar el client (en una terminal aparte)
```bash
$ yarn server:client
```
