# Imagen de NODEJS que voy a usar
FROM node:18

# Establezco el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copio el package.json y el package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalo las dependencias del proyecto
RUN npm install

# Copio el resto de los archivos del proyecto al contenedor
COPY . .


# Expongo el puerto en el que la aplicación va a correr
EXPOSE 9090

# Comando para ejecutar la aplicación
CMD ["npm", "start"]