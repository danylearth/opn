#!/bin/bash

# Script de Deploy Automatizado
# Faz commit, push para GitHub e deploy no Vercel

set -e

# Configurar PATH para incluir npm global (se instalado localmente)
export PATH=~/.npm-global/bin:$PATH

echo "🚀 Iniciando processo de deploy..."

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar se há mudanças
if [ -z "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️  Nenhuma mudança detectada para commit.${NC}"
else
    echo -e "${BLUE}📝 Adicionando mudanças ao git...${NC}"
    git add -A
    
    echo -e "${BLUE}💾 Fazendo commit...${NC}"
    git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || {
        echo -e "${YELLOW}⚠️  Nenhuma mudança para commitar.${NC}"
    }
fi

echo -e "${BLUE}📤 Enviando para GitHub...${NC}"
git push origin main || {
    echo -e "${YELLOW}⚠️  Erro ao fazer push. Verificando se o remote está configurado...${NC}"
    exit 1
}

echo -e "${BLUE}🌐 Fazendo deploy no Vercel...${NC}"
if command -v vercel &> /dev/null; then
    vercel --prod --yes
    echo -e "${GREEN}✅ Deploy concluído com sucesso!${NC}"
else
    echo -e "${YELLOW}⚠️  Vercel CLI não encontrado. Execute: npm i -g vercel${NC}"
    echo -e "${YELLOW}   Ou acesse: https://vercel.com/dashboard para fazer deploy manual${NC}"
    exit 1
fi
