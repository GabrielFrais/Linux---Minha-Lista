#!/bin/sh
set -e

# Cores
GREEN='\033[1;32m'
YELLOW='\033[1;33m'
RED='\033[1;31m'
RESET='\033[0m'

NOME="PlexMediaServer"

URL="https://plex.tv/downloads/latest/5?channel=8&build=linux-x86_64&distro=debian"
TMP_DEB="/tmp/${NOME}.deb"

printf "${YELLOW}Baixando %s...${RESET}\n" "$NOME"
curl -L "$URL" -o "$TMP_DEB"

printf "${YELLOW}Instalando...${RESET}\n"
sudo apt install -y "$TMP_DEB"

printf "${YELLOW}Limpando arquivos temporários...${RESET}\n"
rm -f "$TMP_DEB"

printf "${GREEN}%s instalado com sucesso! 🎉${RESET}\n" "$NOME"

# Ativar e iniciar o serviço
sudo systemctl enable plexmediaserver
sudo systemctl start plexmediaserver

printf "${GREEN}%s iniciado com sucesso!${RESET}\n" "$NOME"
