# Site Karla Iasi - Cuidadora e Enfermeira para Idosos

Site portfólio profissional one-page para Karla Alexandra Iasi, focado em cuidado humanizado e presença profissional para idosos nas regiões de Itapecerica da Serra, Embu das Artes, Taboão da Serra e Cotia - SP.

## Tecnologias Utilizadas

- **React 19.2** com TypeScript
- **Vite 7** - Build tool
- **Tailwind CSS 4** - Framework CSS moderno
- **Leaflet** com OpenStreetMap - Mapa interativo
- **Lucide React** - Ícones modernos
- **React Scroll** - Navegação suave entre seções

## Funcionalidades

- Design moderno e responsivo (mobile-first)
- Navegação suave com scroll animado
- Mapa interativo com Leaflet/OpenStreetMap
- Botão WhatsApp flutuante
- SEO otimizado com meta tags completas
- Schema.org markup para Google
- Animações sutis e efeitos hover

## Estrutura do Site

1. **Hero** - Apresentação com CTAs
2. **Sobre** - Informações pessoais, formação e cursos
3. **Serviços** - 4 cards com serviços oferecidos
4. **Diferenciais** - Lista com ícones
5. **Regiões** - Mapa interativo + lista de cidades
6. **Hospitais** - Lista pesquisada de hospitais/PS das 4 cidades
7. **Depoimentos** - Feedback de clientes
8. **Contato** - Informações de contato e botão WhatsApp
9. **Footer** - Rodapé simples

## Como Executar

### Desenvolvimento

```bash
npm install
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Build de Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

### Preview do Build

```bash
npm run preview
```

## Personalização

### Imagens

- ✅ **Hero**: Foto da Karla já configurada em `/public/profile.png`
- ✅ **Favicon**: Favicon customizado em `/public/favicon.svg`
- ⚠️ **OG Image**: Adicione `/public/og-image.jpg` para preview em redes sociais (1200x630px)

### Dados de Contato

Todos os dados estão centralizados em `src/data/content.ts`:
- Informações de contato
- Serviços
- Depoimentos
- Formação e cursos
- Regiões de atuação

### Hospitais

Lista de hospitais está em `src/data/hospitals.ts`

## SEO

O site inclui:
- Meta tags completas (Open Graph, Twitter Cards)
- Schema.org markup (LocalBusiness + Person)
- robots.txt
- sitemap.xml
- Geolocalização
- Canonical URL

## Cores Personalizadas

- **Primary**: #3A6EA5 (azul saúde/confiança)
- **Secondary**: #5BAA7A (verde bem-estar)
- **Neutral**: Escala de cinzas

## Fontes

- **Títulos**: Poppins (Google Fonts)
- **Textos**: Open Sans (Google Fonts)

## Deploy

O site está configurado para deploy automático no **GitHub Pages** via GitHub Actions.

### Configuração do Deploy

1. Faça push para o repositório
2. Vá em **Settings** → **Pages** → **Source**: GitHub Actions
3. O deploy será automático a cada push na branch `main`

### Domínio Customizado

Para configurar o domínio `iasi.enf.br`:

1. No seu provedor DNS (Registro.br), adicione registros **A**:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

2. No GitHub: **Settings** → **Pages** → **Custom domain** → `iasi.enf.br`
3. Marque **Enforce HTTPS**

## Próximos Passos

1. ✅ ~~Adicionar fotos reais da Karla~~ (Concluído)
2. ✅ ~~Criar favicon personalizado~~ (Concluído)
3. Criar imagem OG para redes sociais (`/public/og-image.jpg`)
4. Configurar domínio personalizado `iasi.enf.br`
5. Configurar analytics (Google Analytics ou similar)
6. Adicionar formulário de contato funcional (opcional)

## Contato

- **Telefone**: (11) 99685-1876
- **WhatsApp**: https://wa.me/5511996851876
- **Email**: karlotaiasi@gmail.com

## Licença

© 2025 Karla Alexandra Iasi. Todos os direitos reservados.
