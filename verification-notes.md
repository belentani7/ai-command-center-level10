# Verificación del preview — 13 agosto 2026

La ruta raíz carga correctamente con el título `AI Command Center — Nivel 10`. La composición Observatorio de Cristal mantiene la barra lateral, el hero, las tarjetas de servicios y la jerarquía tipográfica. El símbolo de marca generado aparece en la cabecera y el favicon apunta al mismo asset.

La navegación principal cambia el contenido sin recargar; se verificó `Token lab` y el módulo cargó su visual y los enlaces externos a GitHub. La acción de copiar el comando de Aider produjo la confirmación visible `Aider: comando copiado`, por lo que esa función sí es ejecutable en el navegador.

La auditoría de red devolvió `502` para los endpoints proxy históricos de Odysseus y OpenClaw en esta sesión. Además, no hay procesos locales de `odysseus`, `openclaw`, `uvicorn` o `aider` presentes en el sandbox actual. El dashboard se corrigió para mostrar `00 / 03 procesos verificados`, estados `No responde` / `No verificable` y una matriz que separa funciones del frontend de integraciones que requieren instalación local.

No se guardan API keys ni secretos en el frontend. La ruta de proyecto se guarda únicamente en localStorage. Las métricas de ahorro del Token lab se sustituyeron por `N/D` hasta que exista un benchmark real en el equipo.

El build `pnpm check && pnpm build` pasó correctamente. Solo permanece la advertencia esperable de assets `/manus-storage` resueltos en runtime y el aviso de tamaño del bundle.

## Verificación Model bridge — 17 agosto 2026

El preview carga correctamente y la navegación muestra el módulo **Model bridge**. El módulo presenta los ocho proveedores previstos: demo, Ollama, LM Studio, llama.cpp, OpenAI, Anthropic/Claude, Google AI Studio/Gemini y OpenRouter.

La primera vista local muestra `Comprobación local pendiente` y `Sin ejecución`, sin declarar que existe un modelo instalado. El endpoint del companion aparece editable y no se muestran campos de API key. La pantalla comunica que las claves viven solo en backend y que el modo sin API necesita un modelo local real.

Las pruebas ejecutables pasaron: `pnpm check`, `pnpm test`, `pnpm check:companion` y `pnpm build`. El build mantiene únicamente la advertencia de un asset Manus externo que se resuelve en runtime y una advertencia de tamaño de chunk de Vite; no hay errores de TypeScript ni de pruebas.
