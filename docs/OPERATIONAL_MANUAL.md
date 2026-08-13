# Manual operativo — AI Command Center

## Estado del documento

Este manual describe lo que el dashboard puede hacer de verdad y lo que necesita una instalación local adicional. La comprobación realizada el **13 de agosto de 2026** encontró que el frontend carga, navega entre módulos y copia comandos, pero los antiguos proxies de Odysseus y OpenClaw devolvieron `502` y no había procesos locales verificables en el sandbox. Por ese motivo, el panel muestra **00/03 procesos verificados** y no presenta los servicios como conectados.

> **Regla de confianza:** una URL guardada no equivale a un servicio activo. Una herramienta instalada no equivale a un modelo configurado.

## Qué funciona dentro del dashboard

El Centro de Mando es una interfaz web estática. Cambia de módulo sin recargar, muestra estados explícitos, abre enlaces externos, copia comandos al portapapeles, conserva la ruta de proyecto en `localStorage` y enlaza fuentes de optimización de tokens. Estas funciones fueron comprobadas en el preview.

El dashboard **no puede**, por sí solo, iniciar o detener procesos de tu ordenador, leer el estado real de tu terminal, guardar API keys de forma segura, conectar WhatsApp/Telegram, ejecutar Aider ni medir ahorro de tokens. Para eso hace falta un *companion* local o un backend autorizado que tú ejecutes en la misma máquina y que exponga una API con autenticación.

| Capacidad | Estado | Qué hace falta |
|---|---|---|
| Navegación, estados y runbook | Funciona en la web | Nada adicional. |
| Copiar comandos | Funciona en la web | Permiso del portapapeles del navegador. |
| Ruta de proyecto | Funciona en la web | Se guarda solo en `localStorage`; no mueve archivos. |
| Abrir Odysseus | Enlace externo | Que el proceso esté levantado y que el proxy responda. |
| Abrir OpenClaw | Enlace externo | Gateway activo, autenticación y origen permitido. |
| Ejecutar Aider | Requiere terminal local | Aider, un proyecto Git y un proveedor de modelo. |
| Medir ahorro de tokens | No medido | Benchmark real con un proyecto y una herramienta instalada. |

## Odysseus

Odysseus debe ejecutarse en el equipo donde quieras trabajar. El dashboard conserva un enlace histórico de proxy, pero la auditoría actual devolvió `502`; por tanto, ese enlace no se considera operativo. Si el repositorio y el entorno virtual existen en tu equipo, inicia el servicio con el comando que corresponda a la instalación real y verifica primero con el navegador en `localhost`.

No introduzcas credenciales en el dashboard. Las credenciales de una aplicación local deben cambiarse desde la propia aplicación y mantenerse fuera del repositorio, del frontend y de cualquier captura compartida.

## OpenClaw

OpenClaw requiere un Gateway activo con autenticación. La documentación oficial recomienda configurar el Gateway y usar políticas de pairing/allowlist para mensajes directos [1]. Cuando se accede a Control UI a través de un proxy, el origen completo del navegador debe formar parte de `gateway.controlUi.allowedOrigins`; no se deben usar comodines.

La configuración conceptual debe contener una sección equivalente a esta, adaptada a la ruta y versión reales de tu instalación:

```json
{
  "gateway": {
    "mode": "local",
    "controlUi": {
      "allowedOrigins": [
        "https://TU-ORIGEN-REAL"
      ]
    }
  }
}
```

Después de modificarla, valida la configuración con las herramientas oficiales de OpenClaw y reinicia el Gateway en la misma máquina. No expongas el Gateway a Internet sin contraseña/token, allowlists y auditoría de seguridad. El dashboard no aplica este cambio automáticamente, porque un frontend estático no tiene acceso al sistema de archivos ni al proceso de OpenClaw.

## Aider

Aider es una herramienta de terminal para editar código junto con un modelo. La forma segura de trabajar es iniciar cada tarea dentro de un repositorio Git, pedir primero un plan, revisar el diff y ejecutar las pruebas antes de aceptar cambios.

El dashboard copia un comando de arranque, pero no ejecuta la sesión por ti. La forma general es:

```bash
cd /ruta/a/tu/proyecto
git status
/path/a/aider/venv/bin/aider
```

Configura el proveedor del modelo en la terminal o en la configuración local de Aider. Nunca pegues una clave en un archivo que vaya a GitHub. Aider soporta varios proveedores; consulta su documentación actual antes de elegir una variable de entorno [2].

## Token lab y la referencia a “Yang”

La búsqueda no identificó un repositorio único llamado “Yang” que sea, por sí solo, el workspace de ahorro de tokens que describes. La coincidencia técnica más clara es **LLMLingua**, proyecto en el que Yuqing Yang aparece como coautora; LLMLingua comprime prompts y contexto largo mediante métodos académicos [3]. Además, hay proyectos de ingeniería directamente orientados a agentes de código:

| Proyecto | Capa | Uso razonable | Precaución |
|---|---|---|---|
| [Token Optimizer](https://github.com/alexgreensh/token-optimizer) | Contexto, checkpoints y auditoría | Investigar integración con OpenClaw, OpenCode o Claude Code. | Revisar la licencia PolyForm Noncommercial antes de uso comercial. |
| [Token-Saver](https://github.com/ppgranger/token-saver) | Output de terminal | Reducir ruido de `git`, pruebas, instalaciones y comandos CLI. | La documentación publicita compatibilidad específica; no asumir que Aider esté soportado sin probar. |
| [LLMLingua](https://github.com/microsoft/LLMLingua) | Compresión de prompts | Experimentos de contexto largo y RAG. | Requiere Python, modelos y validación de calidad; no es un simple interruptor del dashboard. |

Los valores del Token lab aparecen como **N/D** porque no se ha ejecutado un benchmark en tu proyecto. Las cifras que aparezcan en los README de terceros son resultados de sus autores, no mediciones de tu ordenador.

## Procedimiento recomendado

Primero levanta y verifica una sola estación. Después configura un proveedor de modelo y prueba una tarea pequeña. Cuando la respuesta sea estable, incorpora un optimizador de contexto y compara tokens antes y después con el mismo prompt, el mismo repositorio y el mismo modelo. Conserva el resultado del benchmark y solo entonces actualiza el dashboard con una cifra real.

No combines simultáneamente cambios de Gateway, proveedor de modelo, plugin de tokens y estructura de archivos. Separar las variables hace posible saber qué ha fallado y permite volver atrás.

## Referencias

[1] [OpenClaw — GitHub repository and security/configuration guidance](https://github.com/openclaw/openclaw).  
[2] [Aider — official documentation](https://aider.chat/docs/).  
[3] [Microsoft LLMLingua — prompt compression repository](https://github.com/microsoft/LLMLingua).  
[4] [Token Optimizer — open source repository](https://github.com/alexgreensh/token-optimizer).  
[5] [Token-Saver — CLI output compression repository](https://github.com/ppgranger/token-saver).  
[6] [GitHub token optimization topic](https://github.com/topics/token-optimization).
