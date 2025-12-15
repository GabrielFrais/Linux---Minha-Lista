#!/bin/sh
set -e

# Repositório GitHub
REPO="laurent22/joplin"
TMP="/tmp/joplin.AppImage"

# Pega a URL do AppImage da última release
URL=$(curl -s "https://api.github.com/repos/$REPO/releases/latest" \
      | jq -r '.assets[] | select(.name | endswith(".AppImage")) | .browser_download_url')

# Baixa e executa
curl -L "$URL" -o "$TMP"