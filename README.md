# 🍎 Portfólio Pessoal - Erick Maicon

## 📋 Sobre o Projeto

Este é um portfólio pessoal moderno e responsivo desenvolvido com **HTML5**, **CSS3** e **JavaScript vanilla**. O projeto demonstra técnicas avançadas de desenvolvimento front-end, incluindo design responsivo, animações interativas e alternância de temas.

## 🚀 Tecnologias Utilizadas

### Core Technologies
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com Grid, Flexbox e Custom Properties
- **JavaScript ES6+** - Interatividade e funcionalidades dinâmicas

### Bibliotecas Externas
- **Phosphor Icons** - Ícones modernos e consistentes
- **Devicon** - Ícones de tecnologias de programação
- **Lottie Player** - Animações vetoriais de alta qualidade
- **Google Fonts** - Tipografia (Outfit + Space Grotesk)

## 🎯 Funcionalidades Principais

### 1. **Tema Dinâmico (Dark/Light Mode)**
- Sistema de alternância entre tema claro e escuro
- Persistência da preferência no `localStorage`
- Detecção automática da preferência do sistema
- Transições suaves entre temas

### 2. **Navegação Responsiva**
- Header fixo com efeito glassmorphism
- Menu mobile com slide lateral
- Scroll suave para seções
- Indicadores visuais de navegação

### 3. **Efeito Typewriter**
- Animação de digitação no título principal
- Rotação entre diferentes especialidades
- Velocidades customizadas para digitação/apagamento
- Loop infinito com pausas estratégicas

### 4. **Cards de Projetos Interativos**
- Layout em grid responsivo
- Efeitos hover com elevação e zoom
- Sistema accordion para detalhes expandíveis
- Animações CSS suaves

### 5. **Formulário de Contato Avançado**
- Validação em tempo real com JavaScript
- Feedback visual de erros
- Modal de sucesso com animação Lottie
- Prevenção de envio com dados inválidos

### 6. **Contador de Visitas**
- Persistência local com `localStorage`
- Incremento automático a cada acesso
- Exibição em badge estilizado

## 🏗️ Estrutura do Projeto

```
Projeto Tecnologia Web/
├── index.html              # Estrutura principal
├── style.css              # Estilos e responsividade
├── script.js              # Lógica e interatividade
├── checkmark-success.json # Animação Lottie
└── README.md              # Documentação
```

## 🎨 Arquitetura CSS

### Sistema de Variáveis CSS
```css
:root {
    --bg-body: #f8f9fa;
    --primary: #2563eb;
    --primary-gradient: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
}
```

### Responsividade Mobile-First
- Breakpoint principal: `768px`
- Grid adaptativo: `repeat(auto-fit, minmax(300px, 1fr))`
- Menu mobile com overlay e animações

### Técnicas Modernas Aplicadas
- **CSS Grid** - Layout de seções e projetos
- **Flexbox** - Alinhamento e distribuição
- **Custom Properties** - Sistema de temas
- **Backdrop Filter** - Efeito glassmorphism
- **Transform & Transitions** - Animações suaves

## 💻 Funcionalidades JavaScript

### 1. **Gerenciamento de Estado**
```javascript
// Seleção de elementos globais
const themeBtn = document.getElementById('theme-toggle');
const modal = document.getElementById('success-modal');
const lottiePlayer = document.getElementById('lottie-success-player');
```

### 2. **Efeito Typewriter**
```javascript
function typeWriter() {
    // Lógica de digitação/apagamento
    // Controle de velocidade dinâmica
    // Rotação entre palavras
}
```

### 3. **Validação de Formulário**
```javascript
// Validação de nome, email e mensagem
// Feedback visual de erros
// Integração com modal de sucesso
```

### 4. **Persistência de Dados**
```javascript
// localStorage para tema e contador
localStorage.setItem('theme', newTheme);
localStorage.getItem('visitCount');
```

## 🎯 Conceitos Técnicos Demonstrados

### 1. **Semântica HTML5**
- Uso correto de tags semânticas (`<header>`, `<main>`, `<section>`, `<article>`)
- Atributos de acessibilidade (`aria-label`, `alt`)
- Estrutura hierárquica clara

### 2. **CSS Moderno**
- **CSS Grid** para layouts complexos
- **Flexbox** para alinhamento
- **Custom Properties** para temas dinâmicos
- **Pseudo-elementos** para efeitos visuais
- **Media Queries** para responsividade

### 3. **JavaScript ES6+**
- **Arrow Functions** para sintaxe moderna
- **Template Literals** para strings dinâmicas
- **Destructuring** quando aplicável
- **Event Delegation** para performance
- **LocalStorage API** para persistência

### 4. **Performance e UX**
- **Lazy Loading** conceitual
- **Smooth Scrolling** nativo
- **Preload** de fontes críticas
- **Transições** para feedback visual

## 🔧 Como Executar

1. **Clone ou baixe o projeto**
2. **Abra o `index.html` em qualquer navegador moderno**
3. **Não requer servidor local** - funciona diretamente no navegador

## 📱 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móveis (iOS/Android)

## 🎨 Design System

### Paleta de Cores
- **Primary**: `#2563eb` (Azul)
- **Accent**: Gradiente multicolor
- **Text**: `#0f172a` (Dark) / `#f1f5f9` (Light)
- **Background**: `#f8f9fa` (Light) / `#09090b` (Dark)

### Tipografia
- **Headings**: Space Grotesk (Display)
- **Body**: Outfit (Sans-serif)
- **Hierarchy**: 4.5rem → 2.5rem → 1.4rem

### Espaçamento
- **Sections**: `8rem` vertical
- **Components**: `2rem` gap
- **Container**: `1200px` max-width

## 🚀 Destaques Técnicos para Apresentação

### 1. **Arquitetura Escalável**
- Separação clara de responsabilidades
- Código modular e reutilizável
- Comentários explicativos estratégicos

### 2. **Performance Otimizada**
- CSS minimalista e eficiente
- JavaScript vanilla (sem frameworks)
- Carregamento rápido de recursos

### 3. **Acessibilidade**
- Contraste adequado entre temas
- Navegação por teclado
- Labels semânticos

### 4. **Experiência do Usuário**
- Feedback visual imediato
- Animações suaves e naturais
- Interface intuitiva

## 📚 Conceitos Acadêmicos Aplicados

### Desenvolvimento Web Moderno
- **Mobile-First Design**
- **Progressive Enhancement**
- **Semantic HTML**
- **CSS Architecture**
- **JavaScript Best Practices**

### Padrões de Design
- **Component-Based Structure**
- **Consistent Visual Language**
- **Responsive Grid Systems**
- **Interactive Feedback**

## 🎯 Pontos de Discussão com o Professor

1. **Por que JavaScript Vanilla?**
   - Demonstra conhecimento fundamental
   - Performance superior
   - Menor complexidade de setup

2. **Sistema de Temas CSS**
   - Custom Properties vs Sass
   - Persistência de estado
   - Detecção de preferência do sistema

3. **Responsividade Mobile-First**
   - Estratégia de breakpoints
   - Grid vs Flexbox (quando usar cada um)
   - Performance em dispositivos móveis

4. **Validação de Formulário**
   - Client-side vs Server-side
   - UX de feedback de erros
   - Prevenção de spam

5. **Animações e Performance**
   - CSS vs JavaScript animations
   - Hardware acceleration
   - Lottie vs CSS animations

---

**Desenvolvido por Erick Maicon** | Projeto de Tecnologia Web 2025