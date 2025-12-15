#!/bin/sh
set -e

# Cores
GREEN='\033[1;32m'
YELLOW='\033[1;33m'
RED='\033[1;31m'
RESET='\033[0m'

NOME="ONLYOFFICE"

URL="https://github.com/ONLYOFFICE/DesktopEditors/releases/latest/download/onlyoffice-desktopeditors_amd64.deb"
TMP_DEB="/tmp/onlyoffice.deb"

printf "${YELLOW}Baixando %s...${RESET}\n" "$NOME"
curl -L "$URL" -o "$TMP_DEB"

printf "${YELLOW}Instalando...${RESET}\n"
sudo apt install -y "$TMP_DEB"

printf "${YELLOW}Limpando arquivos temporários...${RESET}\n"
rm -f "$TMP_DEB"

printf "${GREEN}%s instalado com sucesso! 🎉${RESET}\n" "$NOME"
