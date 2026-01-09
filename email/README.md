# Email Marketing Templates

Esta pasta contém templates HTML para e-mails marketing da OPN Play.

## Estrutura

- `welcome-email.html` - Template de e-mail de boas-vindas
- `images/` - Pasta com todas as imagens utilizadas nos templates

## Características

Todos os templates seguem as melhores práticas de compatibilidade de e-mail:

- ✅ HTML 4.01 Transitional
- ✅ Layout 100% baseado em tabelas
- ✅ CSS inline apenas
- ✅ Sem JavaScript, SVG, forms ou vídeos
- ✅ Fontes seguras (Arial, Helvetica)
- ✅ Largura máxima: 600px
- ✅ Compatível com Gmail, Outlook, Apple Mail, Yahoo e mobile

## Como Usar

### 1. Substituir Placeholders

Antes de enviar, substitua os seguintes placeholders:

- `[First Name]` - Nome do destinatário
- URLs dos links (atualmente usando `https://opnapp.com/...`)

### 2. URLs das Imagens

**IMPORTANTE:** Para que as imagens funcionem nos e-mails, você precisa:

1. Hospedar as imagens em um servidor web acessível publicamente
2. Substituir os caminhos relativos (`images/...`) por URLs absolutas

Exemplo:
```html
<!-- Antes -->
<img src="images/header-1d0459.png" ...>

<!-- Depois -->
<img src="https://seu-dominio.com/emails/images/header-1d0459.png" ...>
```

### 3. Testar Antes de Enviar

Recomenda-se testar o e-mail em:
- Gmail (web e mobile)
- Outlook (desktop e web)
- Apple Mail
- Yahoo Mail
- Clientes móveis (iOS Mail, Gmail App)

Ferramentas úteis:
- [Litmus](https://litmus.com/)
- [Email on Acid](https://www.emailonacid.com/)
- [Mailtrap](https://mailtrap.io/)

## Personalização

### Cores

As cores utilizadas seguem a identidade visual da OPN:

- **Brand/Midnight**: `#001915` (fundo principal)
- **System Color/Success/2800**: `#1A3832` (seções destacadas)
- **Brand/Aqua Pop**: `#68E0C9` (destaques e links)
- **Brand/Muted Teal**: `#3A6860` (botões)
- **Neutral/White**: `#FFFFFF` (texto principal)
- **Neutral Colors/500**: `#D0D0D0` (texto secundário)

### Fontes

Utiliza apenas fontes seguras para e-mail:
- Arial
- Helvetica
- sans-serif (fallback)

## Notas Técnicas

- O template não utiliza `border-radius` para máxima compatibilidade com Outlook
- Todas as imagens possuem `width` e `height` definidos para evitar layout shift
- Links utilizam URLs absolutas
- Estrutura baseada em tabelas aninhadas para controle preciso do layout

## Suporte

Para dúvidas ou problemas, entre em contato com a equipe de desenvolvimento.
