# PersonaApp

## Descripción general

PersonApp es un proyecto React Native creado con Expo para administrar y mostrar una lista de personas. Esta guía lo ayudará a configurar y ejecutar el proyecto localmente por primera vez.

---

## Requisitos previos

Antes de comenzar, asegúrese de tener instalado lo siguiente:

- **Node.js**
- **npm** o **yarn**
- **Expo CLI**: Instalar globalmente usando:
  ```bash
  npm install -g expo-cli
  ```
- **Local API services**: Asegúrese de que los servicios de backend necesarios se estén ejecutando localmente.

Instrucciones de configuración
1. Clonar el repositorio
  ```bash
  git clone https://github.com/pujolcristian/PersonApp.git
  cd PersonaApp
  ```

3. Instalar dependencias
Instale las dependencias requeridas del proyecto:
  ```bash
    npm install
  ```
**O si usa yarn**
  ```bash
    yarn install
  ```

3. Ejecute servicios locales
Inicie los servicios backend necesarios para el proyecto.
Asegúrese de tener acceso a la API y de que se esté ejecutando en su máquina local.

4. Actualiza la URL base
Para conectar la aplicación a tu API local:

- Busca tu dirección IP local:
Mac/Linux: Ejecuta ifconfig
Windows: Ejecuta ipconfig

- Abre el archivo de configuración de la API en el proyecto:

core/api/personApi.ts

- Reemplace la URL base con la IP de su máquina:

const baseURL =
    Platform.OS === 'ios' ? 'http://localhost:8080' : 'http://<YOUR_IP>:8080';

5. Iniciar la aplicación
Inicie la aplicación con Expo:

 ```bash
    npm start
 ```
 **O con yarn**
```bash
    yarn start
```



