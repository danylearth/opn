# 📚 Instruções de Deploy

Este documento contém todas as instruções para configurar e usar o deploy automático do projeto OPNPlay.

## 🎯 Primeira Configuração (Apenas uma vez)

### 1. Instalar Vercel CLI

Execute no terminal:

```bash
npm install -g vercel
```

**Se você receber erro de permissão (EACCES):**

Execute os seguintes comandos para configurar npm para instalar pacotes globais sem precisar de `sudo`:

```bash
# Criar diretório para pacotes globais do npm
mkdir -p ~/.npm-global

# Configurar npm para usar esse diretório
npm config set prefix '~/.npm-global'

# Adicionar ao PATH (adicione esta linha ao seu ~/.zshrc ou ~/.bashrc)
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc

# Recarregar o shell
source ~/.zshrc

# Agora instale o Vercel CLI
npm install -g vercel
```

**Se você não tem Node.js instalado:**
- Acesse: https://nodejs.org/
- Baixe e instale a versão LTS

### 2. Fazer Login no Vercel

```bash
vercel login
```

Isso abrirá o navegador para você fazer login com sua conta GitHub ou criar uma conta no Vercel.

### 3. Conectar Projeto ao Vercel

Na primeira vez, execute:

```bash
cd "/Users/teste/Documents/Danyll Goodman/OPNPlay/DEV"
vercel
```

Siga as instruções:
- **Set up and deploy?** → Y
- **Which scope?** → Seu usuário
- **Link to existing project?** → N
- **What's your project's name?** → opn-play (ou qualquer nome)
- **In which directory is your code located?** → ./
- **Override settings?** → N

### 4. Configurar Deploy para Produção

Na primeira vez, o Vercel cria um ambiente de preview. Para fazer deploy de produção, execute:

```bash
vercel --prod
```

Isso criará um link permanente para sua aplicação (ex: `https://opn-play.vercel.app`)

## 🚀 Como Fazer Deploy

### Opção 1: Usar o Script Automatizado (Recomendado)

Torne o script executável (apenas primeira vez):

```bash
chmod +x deploy.sh
```

Execute o deploy:

```bash
./deploy.sh
```

### Opção 2: Deploy Manual

```bash
# 1. Commit e push
git add -A
git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main

# 2. Deploy no Vercel
vercel --prod --yes
```

## 🤖 Deploy via Chat (Comando: "fazer deploy")

Quando você digitar **"fazer deploy"** no chat, o assistente irá:

1. ✅ Fazer commit de todas as mudanças
2. ✅ Fazer push para o GitHub
3. ✅ Fazer deploy no Vercel para produção

**Nota:** O assistente precisará que você tenha:
- Git configurado com acesso ao GitHub
- Vercel CLI instalado e autenticado (`vercel login`)
- Script `deploy.sh` executável

## 📝 Configurações Importantes

### URLs do Projeto

Após o primeiro deploy, você receberá:
- **Preview:** `https://opn-play-*.vercel.app` (para cada commit)
- **Produção:** `https://opn-play.vercel.app` (ou seu domínio customizado)

Você pode encontrar essas URLs no dashboard do Vercel: https://vercel.com/dashboard

### Integração Contínua (Opcional)

Você pode conectar o repositório GitHub ao Vercel para que cada push faça deploy automaticamente:

1. Acesse: https://vercel.com/dashboard
2. Clique em "Add New Project"
3. Importe o repositório `danylearth/opn`
4. Configure e faça deploy

Com isso, cada `git push` já fará deploy automaticamente!

## 🔧 Solução de Problemas

### Erro: "Vercel CLI not found"
```bash
npm install -g vercel
```

### Erro: "Not logged in"
```bash
vercel login
```

### Erro: "Permission denied" no deploy.sh
```bash
chmod +x deploy.sh
```

### Ver status do deploy
```bash
vercel ls
```

### Ver logs de deploy
```bash
vercel logs
```

## 📌 Checklist de Primeira Configuração

- [ ] Node.js instalado
- [ ] Vercel CLI instalado (`npm i -g vercel`)
- [ ] Login feito no Vercel (`vercel login`)
- [ ] Projeto conectado ao Vercel (`vercel`)
- [ ] Primeiro deploy de produção feito (`vercel --prod`)
- [ ] Script deploy.sh executável (`chmod +x deploy.sh`)
- [ ] Git configurado com acesso ao GitHub

---

**Pronto!** Após completar estes passos, você poderá usar o comando "fazer deploy" no chat para fazer deploy automático a qualquer momento!
