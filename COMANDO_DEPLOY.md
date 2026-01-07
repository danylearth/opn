# 🤖 Comando de Deploy no Chat

## Instrução para o Assistente

Quando o usuário digitar **"fazer deploy"** ou **"deploy"** ou variações similares, executar o seguinte processo:

### 1. Fazer Commit e Push para GitHub

```bash
cd "/Users/teste/Documents/Danyll Goodman/OPNPlay/DEV"
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main
```

### 2. Fazer Deploy no Vercel

```bash
vercel --prod --yes
```

### Processo Completo (Pode usar o script)

```bash
cd "/Users/teste/Documents/Danyll Goodman/OPNPlay/DEV"
./deploy.sh
```

**OU** usando Python:

```bash
cd "/Users/teste/Documents/Danyll Goodman/OPNPlay/DEV"
python3 deploy.py
```

---

## Palavras-chave que acionam o deploy:

- "fazer deploy"
- "deploy"
- "fazer o deploy"
- "fazer deploy agora"
- "deploy agora"
- "publicar"

---

## Requisitos:

- Git configurado com acesso ao GitHub
- Vercel CLI instalado (`npm i -g vercel`)
- Usuário logado no Vercel (`vercel login`)
- Scripts deploy.sh ou deploy.py executáveis

---

## Verificação antes de fazer deploy:

Se o usuário não tiver Vercel CLI instalado ou não estiver logado, informar e guiar para a configuração inicial conforme `DEPLOY_INSTRUCTIONS.md`.
