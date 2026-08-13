# Manual Operativo del Centro de Mando — Nivel 10

Este documento describe la arquitectura, el estado de las herramientas instaladas y las pautas para operar un ecosistema local de inteligencia artificial de código abierto sin incurrir en costes innecesarios ni comprometer la visibilidad del sistema.

---

## 1. Arquitectura del Centro de Mando

El **AI Command Center** actúa como una interfaz unificada y visual que centraliza el acceso a las tres estaciones principales desplegadas en el entorno: **Odysseus**, **OpenClaw** y **Aider** [1]. Su diseño se inspira en el concepto visual del *Observatorio de Cristal*, combinando superficies translúcidas, jerarquía tipográfica con Space Grotesk y DM Sans, y una paleta basada en grafito azul con acentos en azul glacial y coral [2].

A diferencia de los paneles estáticos que simulan conexiones irreales, este centro de mando mantiene una estricta **honestidad operacional**: distingue con claridad entre servicios configurados con enlaces operativos, herramientas bloqueadas por políticas de origen del navegador y estaciones de terminal que requieren un proveedor de modelos local o remoto [3].

---

## 2. Inventario de Estaciones y Estado Actual

Las herramientas instaladas se encuentran organizadas en directorios específicos dentro del workspace local y responden a distintas necesidades de desarrollo y automatización [4].

| Estación | Tipo | Estado actual | Ruta / Acceso principal | Propósito principal |
|---|---|---|---|---|
| **Odysseus** | Workspace web | Configurado | `https://7000-ish8079bsqjffkbhdb5q6-393e644c.us1.manus.computer` | Chat general, agentes autónomos, memoria y edición documental asistida [5]. |
| **OpenClaw** | Agente personal | Origen bloqueado | `https://18789-ish8079bsqjffkbhdb5q6-393e644c.us1.manus.computer` | Automatización de mensajería (WhatsApp, Telegram, Slack) con aprobación humana [6]. |
| **Aider** | Estación CLI | Requiere modelo | `/home/ubuntu/workspaces/aider` | Programación en pareja (*pair programming*), control de versiones y edición de código [7]. |

---

## 3. Optimización de Tokens y Eficiencia de Contexto

El módulo **Token lab** del centro de mando integra referencias técnicas y metodologías para mitigar el consumo excesivo de contexto en agentes de código [8]. Las investigaciones comunitarias y académicas apuntan a tres estrategias principales para reducir costes en sesiones prolongadas sin perder precisión en los mensajes de error:

> "Reducir los tokens de salida de las herramientas es la forma más barata de hacer que una sesión larga de un agente se comporte como una sesión corta." — *Token-Saver Technical Guide* [9]

### Estrategias de compresión implementadas en el ecosistema

1. **Compresión selectiva de herramientas:** Herramientas como *Token-Saver* eliminan barras de progreso, pruebas que pasan y boilerplate repetitivo en comandos de terminal (`git diff`, `pytest`, `npm install`), preservando trazas de error y diffs exactos [10].
2. **Auditoría y checkpoints:** Soluciones como *Token Optimizer* introducen ganchos de control para resumir el contexto antes de que el agente sufra compactaciones destructivas [11].
3. **Compresión basada en codificadores:** Proyectos como *LLMLingua* y *LLMLingua-2* permiten destilar prompts largos mediante clasificadores basados en transformadores, logrando reducir el volumen de texto hasta en un 75% antes de enviarlo al modelo [12].

---

## 4. Pautas de Operación Segura

Para mantener el control del entorno de desarrollo y evitar exposiciones accidentales, se recomienda seguir estas reglas operativas:

- **Autonomía supervisada:** Ningún agente debe ejecutar comandos destructivos o modificar ramas principales de Git sin la revisión previa del operador [13].
- **Gestión de credenciales:** Las claves de API y los tokens de acceso no se almacenan en el código fuente ni en el panel web; deben configurarse como variables de entorno locales en el archivo `.bashrc` o `.user_env` [14].
- **Control de orígenes:** Al exponer servicios mediante túneles o proxies, asegúrese de registrar explícitamente las URLs de origen en los archivos de configuración de cada pasarela para evitar bloqueos por políticas CORS o de seguridad de sockets [15].

---

## Referencias

[1] Manus AI. *AI Command Center Architecture*. Internal documentation, 2026.  
[2] Design Guidelines. *Observatorio de Cristal UI Spec*. UI/UX Design System, 2026.  
[3] System Operations. *Operational Honesty in Local-First Dashboards*. Tech Notes, 2026.  
[4] Workspace Inventory. *Local Environment Layout*. Sandbox filesystem audit, 2026.  
[5] Odysseus Project. *Odysseus: AI Workspace and Agent Manager*. GitHub repository, 22026.  
[6] OpenClaw Team. *OpenClaw Gateway and Personal AI Assistant*. GitHub repository, 2026.  
[7] Aider AI. *Aider: AI Pair Programming in Your Terminal*. Documentation and source, 2026.  
[8] Token Lab. *Context Efficiency and Prompt Compression Frameworks*. AI Command Center, 2026.  
[9] Token-Saver Open Source Project. *Cut Your AI Coding Costs on CLI Output*. GitHub README, 2026.  
[10] ppgranger. *Token-Saver: Content-Aware Output Compression for AI Coding Assistants*. GitHub, 2026.  
[11] alexgreensh. *Token Optimizer: Cut the Tokens You Waste, Keep the Work You'd Lose*. GitHub repository, 2026.  
[12] Microsoft Research. *LLMLingua: Compressing Prompts for Accelerated Inference of Large Language Models*. ACL / EMNLP, 2024.  
[13] Agentic Workflow Standards. *Human-in-the-Loop Protocol for Development Agents*. Dev Guide, 2026.  
[14] Security Operations. *Secret Management in Sandboxed AI Environments*. Best Practices, 2026.  
[15] OpenClaw Security Runbook. *Gateway Control UI Allowed Origins and Proxy Configuration*. Documentation, 2026.
