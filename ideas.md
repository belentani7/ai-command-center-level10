# Ideas de diseño — AI Command Center / Nivel 10

## Tres direcciones posibles

### Theme Name: Observatorio de Cristal
Very Brief Intro: Un centro de mando editorial y luminoso que convierte servicios complejos en una lectura clara, serena y táctil. Combina vidrio satinado, capas de niebla y una jerarquía de paneles casi arquitectónica.
Probability: 0.07

### Theme Name: Terminal de Cobre
Very Brief Intro: Una estación de trabajo cálida y técnica, inspirada en laboratorios de hardware y cuadernos de ingeniería. Superficies oscuras, cobre mate y tipografía monoespaciada para transmitir precisión y control.
Probability: 0.04

### Theme Name: Cartografía Orbital
Very Brief Intro: Un dashboard espacial de alto contraste que trata cada herramienta como una órbita conectada. Es más expresivo y cinematográfico, con trazos de navegación y una sensación de exploración continua.
Probability: 0.02

## Enfoque elegido: Observatorio de Cristal

### Design Movement
Neo-brutalismo refinado de producto digital, mezclado con glassmorfismo editorial y señalética de centros de operaciones. No busca parecer una consola de videojuego; busca que un operador humano entienda el sistema en menos de diez segundos.

### Core Principles
1. **Claridad operacional:** cada tarjeta debe responder qué es, si está disponible y cuál es la siguiente acción segura.
2. **Profundidad con contención:** vidrio, sombras y capas para separar niveles de información, sin convertir cada elemento en una pastilla redondeada.
3. **Asimetría útil:** el layout se apoya en una barra lateral persistente, una columna de misión y módulos de distinta escala para evitar un mosaico uniforme.
4. **Confianza antes que automatismo:** las acciones destructivas o que afecten cuentas externas siempre explican su alcance y piden confirmación.

### Color Philosophy
La base es grafito azul-gris, no negro puro, para mantener legibilidad prolongada. El color de marca es **azul glacial #B6D9FF**, reservado para estados de conexión, focos y rutas activas. El salmón suave **#F3A68E** marca decisiones pendientes y el verde menta **#A8E6CF** confirma salud sin parecer un semáforo agresivo. El contraste se construye con blancos fríos y transparencias, no con gradientes saturados.

### Layout Paradigm
Una barra lateral de 248 px fija la navegación y un lienzo principal asimétrico organiza tres zonas: misión actual, salud del sistema y estación de trabajo. El panel principal usa una cuadrícula irregular de 12 columnas con una columna de actividad estrecha y un bloque de acción grande. En móvil, la barra lateral se convierte en navegación inferior y las tarjetas conservan sus prioridades, no su geometría.

### Signature Elements
- **Prisma de estado:** una línea vertical glacial junto a cada servicio que cambia de intensidad según estado.
- **Línea de órbita:** un trazo fino que conecta las tarjetas de herramientas y simboliza el flujo entre agente, código y memoria.
- **Banda de misión:** encabezados con pequeñas etiquetas de fase, tiempo y confianza que recuerdan a un parte operativo.

### Interaction Philosophy
Las interacciones deben sentirse como instrumentos, no como juguetes. Hover revela contexto, focus muestra la ruta de teclado y cada acción importante devuelve una evidencia local: enlace abierto, comando copiado, estado comprobado o pendiente de configuración. Nada afirma que una integración exista si solo hay una URL configurada.

### Animation
Entrada escalonada de módulos de 45 ms, con opacidad y translateY de 8 px; nunca animar dimensiones. Los estados de conexión usan un pulso de 2.4 s muy tenue. Botones responden en 140 ms con scale 0.98. Los drawers y paneles laterales usan una curva cubic-bezier(0.23, 1, 0.32, 1). Respeta prefers-reduced-motion y elimina pulsos y desplazamientos cuando está activo.

### Typography System
Display: **Space Grotesk**, 600–700, para títulos y cifras de estado. Body: **DM Sans**, 400–600, para lectura y controles. Mono: **IBM Plex Mono**, 500, para URLs, puertos, comandos y metadatos. H1 de 44/48 en escritorio, 34/38 en móvil; títulos de módulo 16/20; cuerpo 14/21; etiquetas mono 11/14 con tracking de 0.12em.

### Brand Essence
Un centro de mando local para personas que quieren trabajar con agentes abiertos sin perder visibilidad, contexto ni control.
Personality: **preciso, sereno, protector**.

### Brand Voice
Los titulares son breves y operativos; los CTA nombran el resultado, no prometen magia; el microcopy distingue entre conectado, configurado y disponible.

Ejemplo de titular: “Tu sistema, en una sola lectura.”

Ejemplo de CTA: “Abrir estación de código”.

### Wordmark & Logo
El símbolo es un prisma abierto formado por tres trazos: una arista vertical para el operador, una arista diagonal para el agente y una base corta para la memoria. Debe funcionar sin texto, como favicon y como marca de estado. El wordmark usa Space Grotesk semibold con un corte diagonal mínimo en la “A” de AI, nunca una palabra escrita en una fuente por defecto sin intervención.

### Signature Brand Color
**Azul glacial #B6D9FF**, una luz fría y propia que indica que una ruta está bajo control, no simplemente encendida.

## Style Decisions
- La interfaz se construirá como un panel de operaciones, no como una landing page.
- Se priorizará la honestidad de estado: OpenClaw, Odysseus y Aider se mostrarán como herramientas configurables con enlaces y comandos, no como integraciones API ficticias.
- Se evitará guardar secretos en el frontend; las contraseñas se tratarán como datos locales del usuario y se mostrarán solo como recordatorio de configuración.
- “Nivel 10” significa profundidad de producto: navegación, estados, acciones seguras, token lab, guía y responsividad; no prometer que un frontend estático controla procesos del sistema por sí solo.
