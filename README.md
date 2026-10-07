# Misión Agregación

Simulación laboral interactiva de la **Semana 6** de *Sistemas de Gestión de Bases de Datos* (UIDE): una semana
como **analista de datos junior en Banco Quindé**, un banco ficticio, usando funciones de agregación y agrupación en SQL.

**Jugar:** https://mariadsalazar.github.io/mision-agregacion-bd2/
**Código QR para proyectar:** https://mariadsalazar.github.io/mision-agregacion-bd2/qr.html

![Código QR](qr.png)

## La semana

Cada día el estudiante apoya a un área del banco y la dificultad sube:

| Día | Área | Tema | Datos |
|---|---|---|---|
| Lunes | Operaciones | COUNT | Transferencias del core bancario |
| Martes | Tesorería | SUM y AVG | Depósitos en ventanilla |
| Miércoles | Canales Digitales | MIN y MAX | Retiros en cajeros automáticos |
| Jueves | Gerencia Comercial | GROUP BY | Pagos de servicios por agencia |
| Viernes | Riesgo Operativo | HAVING | Pagos con tarjeta en comercios |
| Fin de mes | Comité de Gerencia | Todo junto | Transacciones por canal |

Los compañeros de trabajo envían sus pedidos por mensaje. Los datos traen las inconsistencias típicas de producción:
filas duplicadas por un reproceso, comisiones vacías (NULL) frente a ceros, cheques devueltos, operaciones rechazadas,
una consulta de saldo registrada como retiro, una fecha por defecto (1900-01-01) y una agencia mal digitada.

En cada pedido se ve la tabla completa. Después de responder se muestra la respuesta del compañero o el porqué del
error, la consulta SQL, una animación de cómo la resuelve SQL fase por fase (FROM, WHERE, GROUP BY, HAVING, SELECT) y
el resultado real. Todas las consultas se ejecutaron en SQL Server para obtener esos resultados.

Al terminar la semana, el estudiante descarga su **certificado** con su nombre, sus aciertos y el cargo alcanzado.
Solo se pide nombre y apellido; el progreso se guarda en el propio dispositivo.

El banco, las personas, los clientes y los comercios son ficticios.

Docente: Mgtr. María del Carmen Salazar Torres · Universidad Internacional del Ecuador
