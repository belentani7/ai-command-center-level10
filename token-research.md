# Investigación del Token lab

El término “Yang” no identifica por sí solo un repositorio único de ahorro de tokens. La pista más cercana y verificable es que Yuqing Yang figura como coautora de LLMLingua, un proyecto académico de Microsoft Research para compresión de prompts; el README menciona reducciones de coste y ejemplos de compresión de contexto, pero no es un plugin específico para OpenClaw.

## Fuentes seleccionadas

| Proyecto | Qué hace | Encaje | Fuente |
|---|---|---|---|
| Token Optimizer | Plugin/herramienta multi-runtime para compresión de contexto, checkpoints, auditoría y continuidad de sesiones. El README indica soporte para Claude Code, OpenCode, OpenClaw, Codex, Hermes y Copilot. | Alto para el workspace unificado; revisar licencia PolyForm Noncommercial antes de uso comercial. | https://github.com/alexgreensh/token-optimizer |
| Token-Saver | Compresión determinista del output de CLI; conserva errores, diffs y trazas mientras elimina progreso y boilerplate. El README indica que es local/offline y compatible con Claude Code y Antigravity CLI. | Alto para Aider/terminal si se adapta; no asumir compatibilidad directa con Aider sin probar. | https://github.com/ppgranger/token-saver |
| LLMLingua | Compresión académica de prompts y contexto largo, con variantes LLMLingua, LongLLMLingua y LLMLingua-2. | Alto como componente de investigación/infraestructura; requiere Python y modelos adicionales, no es un simple botón del dashboard. | https://github.com/microsoft/LLMLingua |
| GitHub Topics | Índices comunitarios para explorar nuevos compresores, proxies y MCPs. | Útil para mantener el catálogo actualizado. | https://github.com/topics/token-optimization |

## Decisión de producto

El dashboard no afirma que uno de estos repositorios esté instalado ni promete ahorros medidos localmente. Presenta el Token lab como mapa de opciones, con enlaces oficiales, método de trabajo y métricas conceptuales claramente separadas de mediciones reales. La integración automática debe hacerse después de revisar licencia, compatibilidad y permisos del entorno.
