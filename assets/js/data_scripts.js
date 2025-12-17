const scriptsData = [
    {
        name: "OCR Screenshot",
        description: "<span class='text-accent'>Script em .sh</span><br>Script para capturar parte da tela, extrair texto com OCR e copiar para a área de transferência.<br>Algumas bibliotecas são necessárias, baixar com:<br><code>sudo apt install maim tesseract-ocr tesseract-ocr-por xclip libnotify-bin</code>",
        file: "ocr-screenshot.sh",
        code: `#!/bin/bash

if maim -s | tesseract stdin stdout -l por | xclip -selection clipboard; then
    notify-send "OCR concluído!" "Texto copiado para a área de transferência."
else
    notify-send "OCR cancelado" "Nenhuma área foi selecionada."
fi
`
    },
    {
        name: "Atualização do Sistema (Em Deselvolvimento)",
        description: "Atualiza todos os pacotes e o sistema operacional",
        file: "update-system.sh",
        code: `#!/bin/bash
    sudo apt update && sudo apt upgrade -y
    sudo snap refresh`
    },
    {
        name: "Concertar bug de audio em Headset wifi",
        description: "<span class='text-accent'>Script em .fish</span><br>Toda vez que eu conecto o meu headset no notebook, tinha que ir nas configurações mudar o perfil do áudio para poder funcionar corretamente.<br>Com esse scipt só tenho que abrir o terminal e digitar <code>fixsound</code> que volta a funionar corretamente.<br>Obs: descubra o nome do card do seu headset com <code>pactl list cards short</code> e altera isso no script",
        file: "fixsound.fish",
        code: `#!/usr/bin/env fish

# Nome fixo do card do headset
set CARD_NAME "alsa_card.usb-Realtek_H2015BG-00"

# Descobrir o número real do card dinamicamente
set CARD (pactl list cards short | grep $CARD_NAME | awk '{print $1}')

# Se não encontrou o card, aborta
if test -z "$CARD"
    echo "Headset não encontrado!"
    exit 1
end

echo "Card detectado: $CARD ($CARD_NAME)"

# Muda para o perfil que dá áudio
pactl set-card-profile $CARD output:analog-stereo+input:mono-fallback

sleep 1

# Volta para o perfil padrão que seu sistema usa
pactl set-card-profile $CARD output:iec958-stereo+input:mono-fallback

echo "$CARD_NAME configurado com sucesso!"`
    },
    {
        name: "Procurar por atualizações (.deb e .tar.xz)",
        description: "<span class='text-accent'>Script em .fish</span><br>Verifica se os programas instalados por <code>.deb</code> e <code>.tar.xz</code> estão atualizados<br>Atualmente esse código verifica os programas: <code'>Betterbird, ONLYOFFICE e Vesktop</code>",
        file: "update-checker",
        code: `#!/usr/bin/env fish

set has_update 0

# Verificando o Betterbird
    # Pega a versão atual
set local_version (/opt/betterbird/betterbird --version | awk '{print $4}')

    # URL oficial do Betterbird
set url "https://www.betterbird.eu/downloads/"

    # Pega a versão atual do site
set remote_version (curl -s $url | grep "Current version" | awk -F'Betterbird ' '{print $2}' | awk '{print $1}')

    # Compara as versões
if test "$remote_version" != "$local_version"
    echo "⚠️  Nova versão disponível do Betterbird: $local_version -> $remote_version"
    set has_update 1
end

# ----------------------------------------------------------------

# Verificando o OnlyOffice
    # Pega a versão atual
set local_version (onlyoffice-desktopeditors --version 2>&1 | awk '{print $NF}' | cut -d. -f1-3)

    # Define o repositório do GitHub
set repo "ONLYOFFICE/DesktopEditors"

# Pega a versão atual do site
set remote_version (curl -s https://api.github.com/repos/$repo/releases/latest | jq -r '.tag_name' | sed 's/^v//')

    # Compara as versões
if test "$remote_version" != "$local_version"
    echo "⚠️  Nova versão disponível do ONLYOFFICE: $local_version -> $remote_version"
    set has_update 1
end

# ----------------------------------------------------------------

# Verificando o Vesktop
    # Pega a versão atual
set local_version (vesktop --version 2>&1 | awk '{print $NF}' | cut -d. -f1-3)

    # Define o repositório do GitHub
set repo "Vencord/Vesktop"

    # Pega a versão atual do site
set remote_version (curl -s https://api.github.com/repos/$repo/releases/latest | jq -r '.tag_name')

    # Compara as versões
if test "$remote_version" != "$local_version"
    echo "⚠️  Nova versão disponível do Vesktop: $local_version -> $remote_version"
    set has_update 1
end

# ----------------------------------------------------------------

if test $has_update -eq 0
    echo "✅  Todos os programas estão atualizados"
end`
    }
];
