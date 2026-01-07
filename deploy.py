#!/usr/bin/env python3
"""
Script de Deploy Automatizado para OPNPlay
Faz commit, push para GitHub e deploy no Vercel
"""

import os
import subprocess
import sys
from datetime import datetime

# Configurar PATH para incluir npm global (se instalado localmente)
os.environ['PATH'] = os.path.expanduser('~/.npm-global/bin') + os.pathsep + os.environ.get('PATH', '')

def run_command(cmd, description, ignore_errors=False):
    """Executa um comando e exibe o resultado"""
    print(f"\n🔵 {description}...")
    try:
        result = subprocess.run(cmd, shell=True, check=not ignore_errors, 
                              capture_output=True, text=True)
        if result.stdout:
            print(result.stdout)
        if result.stderr and result.returncode != 0:
            print(f"⚠️  {result.stderr}")
        return result.returncode == 0
    except subprocess.CalledProcessError as e:
        if not ignore_errors:
            print(f"❌ Erro: {e}")
            sys.exit(1)
        return False

def main():
    print("🚀 Iniciando processo de deploy...\n")
    
    # Verificar se há mudanças
    has_changes = subprocess.run(
        "git status --porcelain",
        shell=True,
        capture_output=True,
        text=True
    ).stdout.strip()
    
    if not has_changes:
        print("⚠️  Nenhuma mudança detectada para commit.")
    else:
        # Adicionar mudanças
        run_command("git add -A", "📝 Adicionando mudanças ao git")
        
        # Commit
        commit_message = f"Deploy: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
        run_command(
            f'git commit -m "{commit_message}"',
            "💾 Fazendo commit",
            ignore_errors=True
        )
    
    # Push para GitHub
    if not run_command("git push origin main", "📤 Enviando para GitHub"):
        print("⚠️  Erro ao fazer push. Verificando configuração...")
        sys.exit(1)
    
    # Deploy no Vercel
    print("\n🔵 🌐 Fazendo deploy no Vercel...")
    vercel_check = subprocess.run(
        "command -v vercel",
        shell=True,
        capture_output=True
    )
    
    if vercel_check.returncode != 0:
        print("⚠️  Vercel CLI não encontrado.")
        print("   Execute: npm install -g vercel")
        print("   Ou acesse: https://vercel.com/dashboard para deploy manual")
        sys.exit(1)
    
    if not run_command("vercel --prod --yes", "🌐 Fazendo deploy no Vercel"):
        print("⚠️  Erro no deploy. Verifique se está logado: vercel login")
        sys.exit(1)
    
    print("\n✅ Deploy concluído com sucesso!")

if __name__ == "__main__":
    main()
