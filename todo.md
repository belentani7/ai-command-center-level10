# Entrega ZIP multi-proveedor y offline

- [x] Definir proveedores soportados y separar API remota, endpoint compatible y modelo local.
- [x] Crear archivo de configuración de ejemplo sin secretos.
- [x] Añadir selector de proveedor, modelo, endpoint y modo offline en la interfaz.
- [x] Añadir una capa de cliente segura que nunca exponga claves en el frontend publicado.
- [x] Crear companion local para Ollama/llama.cpp y proveedores remotos mediante variables de entorno.
- [x] Añadir comprobación de conexión y mensajes de error accionables.
- [x] Añadir modo demo/offline sin llamadas de red y sin inventar respuestas de modelo.
- [x] Documentar OpenAI, Anthropic, Google AI Studio/Gemini, OpenRouter/compatible y Ollama.
- [x] Incluir scripts de arranque, configuración y empaquetado.
- [x] Ejecutar pruebas TypeScript, build y pruebas funcionales del companion.
- [x] Crear ZIP completo con código, manuales, scripts y ejemplo de configuración.
- [x] Crear checkpoint y entregar el ZIP.

## Alcance confirmado por el usuario

- [x] Resolver la migración a fullstack sin perder la interfaz Observatorio de Cristal.
- [x] Crear configuración segura para OpenAI, Anthropic, Google AI Studio/Gemini y OpenRouter.
- [x] Crear un modo local sin API con Ollama, LM Studio y endpoint OpenAI-compatible.
- [x] Añadir una interfaz de chat real con proveedor y modelo seleccionables.
- [x] Añadir un companion local con autorización explícita y sin ejecución arbitraria de comandos desde Internet.
- [x] Probar respuestas reales cuando exista proveedor y mostrar un estado honesto cuando no exista.
- [x] Empaquetar código, scripts, manual, configuración de ejemplo y pruebas en un ZIP completo.

## Criterio de aceptación 10/10

- [x] No entregar el ZIP hasta que `pnpm check`, `pnpm build` y `pnpm test` pasen.
- [x] No declarar disponible ningún proveedor sin una ruta real de configuración y un estado verificable.
- [x] No almacenar claves en el frontend, en localStorage ni dentro del ZIP.
- [x] No ejecutar comandos del sistema recibidos desde Internet sin una acción local explícita del usuario.
- [x] Probar el modo sin API con respuesta de error honesta cuando no haya modelo local.
- [x] Documentar con precisión qué funciona, qué requiere instalación y qué requiere credenciales.
