
# E-comFast Riwi

E-commerce online sencillo...

## Requisitos Previos

Asegúrate de tener instalados los siguientes elementos en tu máquina:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) (v6 o superior)

## Instalación

Sigue estos pasos para instalar el proyecto:

1. Clona el repositorio:

   ```bash
   git clone [<URL-del-repositorio>](https://github.com/lukkaku12/E-comFast-Riwi.git)
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd E-comFast-Riwi
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Crea un archivo `.env` en la raíz del proyecto y define tus variables de entorno. Aquí tienes un ejemplo de cómo debería verse tu archivo `.env` para conectarte a la DB:

   ```plaintext
# Configuración de la Base de Datos
DB_HOST=localhost
DB_NAME=tu_base_de_datos
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_PORT=3306
 ```

## Uso

Para iniciar el servidor, utiliza el siguiente comando:

```bash
npm start
```

Esto iniciará el servidor en el puerto especificado en tu archivo `.env`.

## Contribución

Si deseas contribuir al proyecto, siéntete libre de enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
