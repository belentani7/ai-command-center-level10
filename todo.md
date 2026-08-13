# Auditoría funcional — Centro de Mando

- [x] Comprobar que el dashboard no presenta como “conectado” ningún servicio que solo tenga una URL guardada.
- [x] Comprobar que los enlaces de Odysseus y OpenClaw se presentan como enlaces externos y no como control directo del proceso local.
- [x] Comprobar que las acciones de copiar comandos funcionan sin guardar secretos.
- [x] Comprobar que la ruta del proyecto se guarda únicamente en localStorage y que el texto lo explica.
- [x] Retirar o reformular cualquier métrica de ahorro de tokens que parezca una medición real si no procede de una ejecución local.
- [x] Añadir una matriz visible de “funciona aquí / requiere instalación local / requiere credenciales”.
- [x] Documentar la reparación de OpenClaw, incluida la limitación del origen del proxy y el uso de autenticación.
- [x] Documentar que el frontend no puede iniciar, detener ni inspeccionar procesos del sistema sin un companion local o backend autorizado.
- [x] Ejecutar comprobación TypeScript y build de producción.
- [x] Verificar visualmente navegación, enlaces, copiado de comandos y estados.
- [x] Crear checkpoint final tras la auditoría.
