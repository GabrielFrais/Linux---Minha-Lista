#!/bin/sh
set -e

# Cores
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
RED="\033[1;31m"
RESET="\033[0m"

NOME="Darktable"

# Repositório GitHub
REPO="darktable-org/darktable"
TMP="/tmp/darktable.AppImage"

# Pega a URL do AppImage da última release
URL=$(curl -s "https://api.github.com/repos/$REPO/releases/latest" \
      | jq -r '.assets[] | select(.name | endswith(".AppImage")) | .browser_download_url')

printf "${YELLOW}Baixando %s...${RESET}\n" "$NOME"
curl -L "$URL" -o "$TMP"

printf "${YELLOW}Instalando via GearLevel...${RESET}\n"
flatpak run it.mijorus.gearlever --integrate "$TMP"

printf "${YELLOW}Limpando arquivos temporários...${RESET}\n"
rm -f "$TMP"

printf "${GREEN}%s instalado com sucesso! 🎉${RESET}\n" "$NOME"