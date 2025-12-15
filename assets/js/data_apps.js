const categories = [
    {
        id: "desenvolvimento",
        title: "Desenvolvimento",
        description: "Ferramentas para programação e desenvolvimento",
        apps: [
            {
                name: "Visual Studio Code",
                description: "Editor de código poderoso e extensível com suporte para múltiplas linguagens",
                install: "curl -sL https://raw.githubusercontent.com/GabrielFrais/FraisTech/main/install_scripts/install_vscode.sh | sh",
                type: ".deb"
            },
            {
                name: "Git",
                description: "Sistema de controle de versão distribuído",
                install: "sudo apt install git",
                type: "apt"
            },
            {
                name: "Docker (Em Deselvolvimento)",
                description: "Plataforma para desenvolvimento, envio e execução de aplicativos em containers",
                install: "curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh",
                type: "script"
            }
        ]
    },
    {
        id: "comunicacao",
        title: "Comunicação",
        description: "Mensagens e videoconferência",
        apps: [
            {
                name: "Discord (Em Deselvolvimento)",
                description: "Plataforma de comunicação para comunidades",
                install: "sudo snap install discord",
                type: "snap"
            }
        ]
    },
    {
        id: "multimidia",
        title: "Multimídia",
        description: "Edição e reprodução de mídia",
        apps: [
            {
                name: "Stremio",
                description: "Player de vídeo que reproduz filmes e séries torrent",
                install: "flatpak install flathub com.stremio.Stremio",
                type: "flatpack"
            },
            {
                name: "VLC Media Player",
                description: "Player de vídeo que reproduz praticamente qualquer formato",
                install: "sudo apt install vlc",
                type: "apt"
            },
            {
                name: "GIMP (Em Deselvolvimento)",
                description: "Editor de imagens open source similar ao Photoshop",
                install: "sudo apt install gimp",
                type: "apt"
            },
            {
                name: "OBS Studio (Em Deselvolvimento)",
                description: "Software de gravação e streaming de vídeo",
                install: "sudo apt install obs-studio",
                type: "apt"
            }
        ]
    },
    {
        id: "produtividade",
        title: "Produtividade",
        description: "Aplicativos para aumentar sua produtividade",
        apps: [
            {
                name: "Obsidian (Em Deselvolvimento)",
                description: "Aplicativo de anotações em Markdown com gráfico de conhecimento",
                install: "sudo snap install obsidian --classic",
                type: "snap"
            },
            {
                name: "ONLYOFFICE",
                description: "Suíte office completa para criar e editar documentos de texto, planilhas e apresentações.",
                install: "curl -sL https://raw.githubusercontent.com/GabrielFrais/FraisTech/main/install_scripts/install_onlyoffice.sh | sh",
                type: ".deb"
            }
        ]
    },
    {
        id: "sistema",
        title: "Sistema",
        description: "EM DESENVOLVIMENTO",
        apps: [
            {
                name: "Flatseal",
                description: "Gerencie as permissões de Flatpaks",
                install: "flatpak install flathub io.github.flattool.Warehouse",
                type: "flatpack"
            },
            {
                name: "Mission Center",
                description: "Monitorar o uso de recursos do sistema",
                install: "flatpak install flathub io.missioncenter.MissionCenter",
                type: "flatpack"
            },
            {
                name: "Warehouse",
                description: "Gerencie tudo relacionado a Flatpak",
                install: "flatpak install flathub com.github.tchx84.Flatseal",
                type: "flatpack"
            }
        ]
    }
];