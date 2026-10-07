// Generado por _fuente/construir.py: resultados reales ejecutados en SQL Server. No editar a mano.
window.JUEGO = {
 "banco": "Banco Quindé",
 "personas": {
  "lucia": {
   "nombre": "Lucía Andrade",
   "cargo": "Jefa de Analítica de Datos",
   "color": "#002C71"
  },
  "martin": {
   "nombre": "Martín Vega",
   "cargo": "Jefe de Operaciones",
   "color": "#1E8C7E"
  },
  "andres": {
   "nombre": "Andrés Paredes",
   "cargo": "Canales Digitales",
   "color": "#6B4FBB"
  },
  "gabriela": {
   "nombre": "Gabriela Ríos",
   "cargo": "Tesorería",
   "color": "#B07F00"
  },
  "paola": {
   "nombre": "Paola Cruz",
   "cargo": "Auditoría Interna",
   "color": "#4A5461"
  },
  "valeria": {
   "nombre": "Valeria Mena",
   "cargo": "Gerente Comercial",
   "color": "#910048"
  },
  "kevin": {
   "nombre": "Kevin Aguirre",
   "cargo": "Pasante de Analítica",
   "color": "#0B7FAE"
  },
  "diego": {
   "nombre": "Diego Salinas",
   "cargo": "Riesgo Operativo",
   "color": "#C62839"
  }
 },
 "tablas": {
  "Transferencias": {
   "caso": "Core bancario · transferencias del domingo",
   "cols": [
    [
     "TxID",
     "int"
    ],
    [
     "Referencia",
     "txt"
    ],
    [
     "Cliente",
     "txt"
    ],
    [
     "Monto",
     "dec"
    ],
    [
     "Estado",
     "txt"
    ]
   ],
   "filas": [
    [
     5001,
     "TRF-0412",
     "Ana Ruiz",
     120.0,
     "APROBADA"
    ],
    [
     5002,
     "TRF-0413",
     "Jorge Lema",
     45.5,
     "APROBADA"
    ],
    [
     5004,
     "TRF-0414",
     "Ana Ruiz",
     300.0,
     "RECHAZADA"
    ],
    [
     5005,
     "TRF-0415",
     "Carla Vélez",
     80.0,
     "APROBADA"
    ],
    [
     5006,
     "TRF-0415",
     "Carla Vélez",
     80.0,
     "APROBADA"
    ],
    [
     5008,
     "TRF-0416",
     "Luis Mora",
     1500.0,
     "APROBADA"
    ],
    [
     5009,
     "TRF-0417",
     "Pedro Ibarra",
     60.0,
     "RECHAZADA"
    ],
    [
     5010,
     "TRF-0418",
     "Sofía Pinto",
     25.0,
     "APROBADA"
    ],
    [
     5012,
     "TRF-0419",
     "Luis Mora",
     210.0,
     "APROBADA"
    ],
    [
     5013,
     "TRF-0420",
     "Diana Cano",
     95.0,
     "APROBADA"
    ]
   ]
  },
  "Depositos": {
   "caso": "Agencia Centro · depósitos en ventanilla del lunes",
   "cols": [
    [
     "DepositoID",
     "int"
    ],
    [
     "Cliente",
     "txt"
    ],
    [
     "Monto",
     "dec"
    ],
    [
     "Comision",
     "dec"
    ],
    [
     "Estado",
     "txt"
    ]
   ],
   "filas": [
    [
     701,
     "Ana Ruiz",
     250.0,
     0.5,
     "ACREDITADO"
    ],
    [
     702,
     "Marco Paz",
     1200.0,
     0.0,
     "ACREDITADO"
    ],
    [
     703,
     "Elena Soto",
     80.0,
     null,
     "ACREDITADO"
    ],
    [
     704,
     "Luis Mora",
     500.0,
     1.0,
     "ACREDITADO"
    ],
    [
     705,
     "Rita Gómez",
     650.0,
     0.5,
     "DEVUELTO"
    ],
    [
     706,
     "Pablo Ortiz",
     40.0,
     null,
     "ACREDITADO"
    ],
    [
     707,
     "Marco Paz",
     300.0,
     0.0,
     "ACREDITADO"
    ],
    [
     708,
     "Elena Soto",
     180.0,
     1.0,
     "ACREDITADO"
    ]
   ]
  },
  "RetirosATM": {
   "caso": "Red de cajeros automáticos · retiros del martes",
   "cols": [
    [
     "RetiroID",
     "int"
    ],
    [
     "Cajero",
     "txt"
    ],
    [
     "FechaHora",
     "fecha"
    ],
    [
     "Monto",
     "dec"
    ]
   ],
   "filas": [
    [
     9101,
     "ATM-CENTRO",
     "2026-10-06 06:42",
     40.0
    ],
    [
     9102,
     "ATM-NORTE",
     "2026-10-06 07:15",
     100.0
    ],
    [
     9103,
     "ATM-CENTRO",
     "2026-10-06 09:30",
     0.0
    ],
    [
     9104,
     "ATM-SUR",
     "1900-01-01 00:00",
     60.0
    ],
    [
     9105,
     "ATM-CENTRO",
     "2026-10-06 12:05",
     480.0
    ],
    [
     9106,
     "ATM-NORTE",
     "2026-10-06 13:40",
     20.0
    ],
    [
     9107,
     "ATM-CENTRO",
     "2026-10-06 18:22",
     200.0
    ],
    [
     9108,
     "ATM-SUR",
     "2026-10-06 21:10",
     80.0
    ],
    [
     9109,
     "ATM-NORTE",
     "2026-10-06 22:51",
     300.0
    ]
   ]
  },
  "PagosServicios": {
   "caso": "Agencias · pagos de servicios básicos del miércoles",
   "cols": [
    [
     "PagoID",
     "int"
    ],
    [
     "Agencia",
     "txt"
    ],
    [
     "Servicio",
     "txt"
    ],
    [
     "Monto",
     "dec"
    ]
   ],
   "filas": [
    [
     301,
     "Centro",
     "Luz",
     45.0
    ],
    [
     302,
     "Norte",
     "Agua",
     18.5
    ],
    [
     303,
     "Centro",
     "Internet",
     30.0
    ],
    [
     304,
     "Sur",
     "Luz",
     52.0
    ],
    [
     305,
     "Norte",
     "Luz",
     61.0
    ],
    [
     306,
     "Centro",
     "Agua",
     22.0
    ],
    [
     307,
     "Nrte",
     "Internet",
     35.0
    ],
    [
     308,
     "Sur",
     "Agua",
     15.0
    ],
    [
     309,
     "Norte",
     "Internet",
     40.0
    ],
    [
     310,
     "Centro",
     "Luz",
     38.0
    ]
   ]
  },
  "PagosTarjeta": {
   "caso": "Comercios afiliados · pagos con tarjeta de débito del jueves",
   "cols": [
    [
     "PagoID",
     "int"
    ],
    [
     "Referencia",
     "txt"
    ],
    [
     "Comercio",
     "txt"
    ],
    [
     "Monto",
     "dec"
    ],
    [
     "Estado",
     "txt"
    ]
   ],
   "filas": [
    [
     801,
     "POS-1001",
     "Farmacia Sol",
     12.4,
     "APROBADO"
    ],
    [
     802,
     "POS-1002",
     "Café Andino",
     4.5,
     "RECHAZADO"
    ],
    [
     803,
     "POS-1003",
     "Café Andino",
     4.5,
     "APROBADO"
    ],
    [
     804,
     "POS-1004",
     "Ferretería Ruiz",
     85.0,
     "APROBADO"
    ],
    [
     805,
     "POS-1005",
     "Café Andino",
     9.0,
     "RECHAZADO"
    ],
    [
     806,
     "POS-1006",
     "Farmacia Sol",
     23.1,
     "APROBADO"
    ],
    [
     807,
     "POS-1006",
     "Farmacia Sol",
     23.1,
     "APROBADO"
    ],
    [
     808,
     "POS-1007",
     "Ferretería Ruiz",
     140.0,
     "RECHAZADO"
    ],
    [
     809,
     "POS-1008",
     "Café Andino",
     6.75,
     "RECHAZADO"
    ],
    [
     810,
     "POS-1009",
     "Farmacia Sol",
     8.9,
     "APROBADO"
    ],
    [
     811,
     "POS-1010",
     "Ferretería Ruiz",
     62.0,
     "APROBADO"
    ]
   ]
  },
  "Transacciones": {
   "caso": "Cierre de mes · muestra de transacciones por canal",
   "cols": [
    [
     "TxID",
     "int"
    ],
    [
     "Canal",
     "txt"
    ],
    [
     "Monto",
     "dec"
    ],
    [
     "Estado",
     "txt"
    ]
   ],
   "filas": [
    [
     1,
     "App",
     120.0,
     "APROBADA"
    ],
    [
     2,
     "Ventanilla",
     850.0,
     "APROBADA"
    ],
    [
     3,
     "App",
     60.0,
     "APROBADA"
    ],
    [
     4,
     "Web",
     300.0,
     "RECHAZADA"
    ],
    [
     5,
     "Cajero",
     200.0,
     "APROBADA"
    ],
    [
     6,
     "App",
     95.0,
     "RECHAZADA"
    ],
    [
     7,
     "Ventanilla",
     400.0,
     "APROBADA"
    ],
    [
     8,
     "Web",
     150.0,
     "APROBADA"
    ],
    [
     9,
     "App",
     45.0,
     "APROBADA"
    ],
    [
     10,
     "Cajero",
     100.0,
     "APROBADA"
    ],
    [
     11,
     "Web",
     75.0,
     "APROBADA"
    ],
    [
     12,
     "App",
     230.0,
     "APROBADA"
    ]
   ]
  }
 },
 "niveles": [
  {
   "dia": "Lunes",
   "area": "Operaciones",
   "clave": "COUNT",
   "icono": "operaciones",
   "tabla": "Transferencias",
   "hora": "08:00",
   "intro": "¡Te damos la bienvenida al equipo! Hoy apoyas a Operaciones. Para responder «¿cuántos?» se usa COUNT: COUNT(*) cuenta filas y COUNT(DISTINCT columna) cuenta valores sin repetir.",
   "contexto": "Cada madrugada el core bancario copia las transferencias del día anterior en la tabla Transferencias. Anoche el proceso falló a la mitad y se volvió a ejecutar (reproceso).",
   "retos": [
    {
     "tipo": "opcion",
     "de": "martin",
     "hora": "08:20",
     "cod": true,
     "pregunta": "Buenos días. El proceso de anoche no dejó su registro de control y necesito saber cuántas filas cargó en la tabla Transferencias. ¿Qué consulta usas?",
     "opciones": [
      "SELECT COUNT(*)\nFROM Transferencias;",
      "SELECT MAX(TxID)\nFROM Transferencias;",
      "SELECT COUNT(DISTINCT Cliente)\nFROM Transferencias;",
      "SELECT SUM(Monto)\nFROM Transferencias;"
     ],
     "correcta": 0,
     "porque": [
      "",
      "MAX(TxID) da 5013: el último número asignado, no la cantidad. Los ID tienen saltos (no existen 5003, 5007 ni 5011) porque SQL Server no reutiliza el número de una operación que falló.",
      "Esa consulta cuenta clientes distintos (7), no filas.",
      "SUM suma el dinero de las transferencias; no cuenta filas."
     ],
     "sql": "SELECT COUNT(*) AS Filas\nFROM   Transferencias;",
     "explica": "COUNT(*) cuenta las filas de la tabla, sin importar sus valores: el proceso cargó 10 filas.",
     "fases": {
      "agg": "COUNT",
      "col": "*"
     },
     "gracias": "Perfecto: 10 filas. Lo anoto en la bitácora del proceso.",
     "resultado": {
      "cols": [
       "Filas"
      ],
      "filas": [
       [
        "10"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "de": "martin",
     "hora": "09:05",
     "pregunta": "El sistema de pagos reporta 9 transferencias recibidas el domingo, pero tu conteo dio 10. Antes de abrir un incidente: ¿cuántas transferencias reales hubo?",
     "opciones": [
      "9",
      "10",
      "8",
      "13"
     ],
     "correcta": 0,
     "porque": [
      "",
      "10 son filas, no transferencias: la TRF-0415 aparece dos veces (TxID 5005 y 5006) con el mismo cliente y el mismo monto. Es una sola transferencia cargada dos veces por el reproceso.",
      "8 son las filas APROBADAS (con el duplicado incluido); el sistema de pagos reporta todas, aprobadas y rechazadas.",
      "13 sale de restar los ID (5013 − 5001 + 1), pero los ID tienen saltos."
     ],
     "sql": "SELECT COUNT(DISTINCT Referencia) AS Transferencias\nFROM   Transferencias;",
     "explica": "Cada transferencia tiene una referencia única. COUNT(DISTINCT Referencia) cuenta cada referencia una sola vez: 9. La fila 5006 es un duplicado del reproceso y se reporta a Operaciones para anularla.",
     "fases": {
      "agg": "COUNT DISTINCT",
      "col": "Referencia"
     },
     "gracias": "¡Bien visto! Era el reproceso. Ya pedí que anulen la fila duplicada.",
     "resultado": {
      "cols": [
       "Transferencias"
      ],
      "filas": [
       [
        "9"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "de": "andres",
     "hora": "10:30",
     "pregunta": "Hola, soy de Canales Digitales. Para el informe de incidencias de la app necesito saber cuántas transferencias fueron rechazadas el domingo.",
     "opciones": [
      "2",
      "8",
      "1",
      "10"
     ],
     "correcta": 0,
     "porque": [
      "",
      "8 son las aprobadas, no las rechazadas.",
      "Hay dos: la TRF-0414 de Ana Ruiz y la TRF-0417 de Pedro Ibarra.",
      "10 son todas las filas; WHERE deja solo las rechazadas."
     ],
     "sql": "SELECT COUNT(*) AS Rechazadas\nFROM   Transferencias\nWHERE  Estado = 'RECHAZADA';",
     "explica": "WHERE deja solo las filas con Estado = 'RECHAZADA' y COUNT(*) las cuenta: 2.",
     "fases": {
      "agg": "COUNT",
      "col": "*",
      "where": [
       "Estado",
       "=",
       "RECHAZADA"
      ]
     },
     "gracias": "Gracias, con eso cierro el informe de incidencias.",
     "resultado": {
      "cols": [
       "Rechazadas"
      ],
      "filas": [
       [
        "2"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "de": "lucia",
     "hora": "11:40",
     "pregunta": "Mercadeo hará una encuesta de satisfacción a los clientes a quienes SÍ les funcionó una transferencia el domingo. ¿A cuántos clientes distintos hay que escribirles?",
     "opciones": [
      "6",
      "8",
      "7",
      "9"
     ],
     "correcta": 0,
     "porque": [
      "",
      "8 son transferencias aprobadas (con el duplicado); Carla Vélez y Luis Mora aparecen dos veces.",
      "7 incluye a Pedro Ibarra, cuya única transferencia fue rechazada.",
      "9 son las referencias distintas, no los clientes."
     ],
     "sql": "SELECT COUNT(DISTINCT Cliente) AS Clientes\nFROM   Transferencias\nWHERE  Estado = 'APROBADA';",
     "explica": "WHERE deja las 8 filas aprobadas y COUNT(DISTINCT Cliente) cuenta a cada cliente una vez: Carla Vélez y Luis Mora aparecen dos veces, pero cuentan una. Resultado: 6.",
     "fases": {
      "agg": "COUNT DISTINCT",
      "col": "Cliente",
      "where": [
       "Estado",
       "=",
       "APROBADA"
      ]
     },
     "gracias": "Listo, se lo paso a Mercadeo. ¡Buen primer día!",
     "resultado": {
      "cols": [
       "Clientes"
      ],
      "filas": [
       [
        "6"
       ]
      ]
     }
    }
   ]
  },
  {
   "dia": "Martes",
   "area": "Tesorería",
   "clave": "SUM · AVG",
   "icono": "tesoreria",
   "tabla": "Depositos",
   "hora": "08:00",
   "intro": "Hoy apoyas a Tesorería con el cuadre de caja. SUM da el total de una columna y AVG el promedio. Las celdas vacías (NULL) no entran en ninguno de los dos, y un NULL no es un cero.",
   "contexto": "Depósitos en ventanilla de la agencia Centro. Comision vacía (NULL) = el proceso nocturno todavía no la calcula; 0.00 = cliente exento. DEVUELTO = cheque que el banco del cliente no pagó.",
   "retos": [
    {
     "tipo": "opcion",
     "de": "gabriela",
     "hora": "08:30",
     "pregunta": "Buenos días. Para empezar el cuadre, dame el total de TODOS los depósitos que registró el sistema ayer en la agencia Centro.",
     "opciones": [
      "3200.00",
      "2550.00",
      "400.00",
      "8"
     ],
     "correcta": 0,
     "porque": [
      "",
      "Ese es el total sin el cheque devuelto; por ahora te pidió todo lo que registró el sistema.",
      "400.00 es el promedio (AVG), no el total.",
      "8 es la cantidad de depósitos (COUNT), no el dinero."
     ],
     "sql": "SELECT SUM(Monto) AS TotalRegistrado\nFROM   Depositos;",
     "explica": "SUM junta los montos de las 8 filas: 3200.00.",
     "fases": {
      "agg": "SUM",
      "col": "Monto"
     },
     "gracias": "Gracias. Ahora lo comparo con lo que contó la bóveda.",
     "resultado": {
      "cols": [
       "TotalRegistrado"
      ],
      "filas": [
       [
        "3200.00"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "de": "gabriela",
     "hora": "09:15",
     "pregunta": "La bóveda contó 2550.00 en efectivo y cheques: faltan 650.00 frente a tu total. Antes de reportar un faltante, ¿qué pasó?",
     "opciones": [
      "El depósito 705 es un cheque DEVUELTO: quedó registrado, pero ese dinero nunca entró",
      "Hay un faltante real en la bóveda y hay que reportarlo",
      "SUM se equivocó porque hay comisiones vacías (NULL)",
      "Los depósitos de Marco Paz están duplicados"
     ],
     "correcta": 0,
     "porque": [
      "",
      "Los datos lo explican: el depósito 705 (650.00) es un cheque devuelto, por eso ese dinero no está en la bóveda. Revisa los datos antes de reportar.",
      "SUM(Monto) no usa la columna Comision: sus NULL no cambian este total.",
      "Marco Paz hizo dos depósitos distintos (702 y 707) por montos diferentes: no es un duplicado."
     ],
     "sql": "SELECT SUM(Monto) AS TotalAcreditado\nFROM   Depositos\nWHERE  Estado = 'ACREDITADO';",
     "explica": "Un cheque devuelto queda registrado, pero no entra dinero. Con WHERE Estado = 'ACREDITADO' la suma da 2550.00: exactamente lo que contó la bóveda.",
     "fases": {
      "agg": "SUM",
      "col": "Monto",
      "where": [
       "Estado",
       "=",
       "ACREDITADO"
      ]
     },
     "gracias": "¡Cuadra al centavo! Casi reporto un faltante que no existía.",
     "resultado": {
      "cols": [
       "TotalAcreditado"
      ],
      "filas": [
       [
        "2550.00"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "de": "paola",
     "hora": "11:00",
     "pregunta": "Auditoría necesita la comisión promedio de los depósitos de ayer. Recuerda: Comision vacía = todavía no calculada; 0.00 = cliente exento.",
     "opciones": [
      "0.50",
      "0.38",
      "0.75",
      "3.00"
     ],
     "correcta": 0,
     "porque": [
      "",
      "0.38 = 3.00 ÷ 8: tratarías los NULL como si fueran 0. AVG no los cuenta: divide para las 6 comisiones que existen.",
      "0.75 = 3.00 ÷ 4: dejaste fuera los 0.00. Un cliente exento sí tiene comisión: es cero, no vacía.",
      "3.00 es la suma de las comisiones (SUM), no el promedio."
     ],
     "sql": "SELECT AVG(Comision) AS ComisionPromedio\nFROM   Depositos;",
     "explica": "AVG suma las 6 comisiones con valor (3.00) y divide para 6: 0.50. Los 2 NULL no entran; los 0.00 sí, porque cero es un valor. SQL Server lo muestra como 0.500000.",
     "fases": {
      "agg": "AVG",
      "col": "Comision"
     },
     "gracias": "Correcto. Dejo anotado que hay 2 comisiones pendientes de cálculo.",
     "resultado": {
      "cols": [
       "ComisionPromedio"
      ],
      "filas": [
       [
        "0.500000"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "de": "gabriela",
     "hora": "12:30",
     "pregunta": "Para el informe de la agencia: ¿cuál fue el depósito promedio, contando solo los que sí se acreditaron?",
     "opciones": [
      "364.29",
      "400.00",
      "510.00",
      "2550.00"
     ],
     "correcta": 0,
     "porque": [
      "",
      "400.00 = 3200.00 ÷ 8: incluye el cheque devuelto.",
      "510.00 = 2550.00 ÷ 5 clientes; AVG divide para los 7 depósitos, no para los clientes.",
      "2550.00 es el total acreditado (SUM), no el promedio."
     ],
     "sql": "SELECT AVG(Monto) AS DepositoPromedio\nFROM   Depositos\nWHERE  Estado = 'ACREDITADO';",
     "explica": "WHERE deja los 7 depósitos acreditados; AVG suma 2550.00 y divide para 7: 364.29 (SQL Server muestra 364.285714).",
     "fases": {
      "agg": "AVG",
      "col": "Monto",
      "where": [
       "Estado",
       "=",
       "ACREDITADO"
      ]
     },
     "gracias": "Perfecto, va al informe de la agencia.",
     "resultado": {
      "cols": [
       "DepositoPromedio"
      ],
      "filas": [
       [
        "364.285714"
       ]
      ]
     }
    }
   ]
  },
  {
   "dia": "Miércoles",
   "area": "Canales Digitales",
   "clave": "MIN · MAX",
   "icono": "cajero",
   "tabla": "RetirosATM",
   "hora": "08:00",
   "intro": "Hoy trabajas con la red de cajeros automáticos. MIN da el valor más bajo y MAX el más alto: con números, fechas y texto. Ojo: un solo dato mal registrado cambia su resultado.",
   "contexto": "Cada cajero (ATM) envía sus retiros con fecha y hora. Algunos registros llegan con problemas: revisa bien la tabla antes de responder.",
   "retos": [
    {
     "tipo": "opcion",
     "de": "andres",
     "hora": "08:10",
     "pregunta": "Riesgos fijó un tope de 500.00 por retiro en cajero. ¿Cuál fue el retiro más alto de ayer? Así sabemos si alguno pasó el tope.",
     "opciones": [
      "480.00",
      "300.00",
      "1280.00",
      "500.00"
     ],
     "correcta": 0,
     "porque": [
      "",
      "300.00 es el más alto del ATM-NORTE; hay uno mayor en ATM-CENTRO.",
      "1280.00 es la suma de todos los retiros (SUM).",
      "500.00 es el tope, no un dato de la tabla."
     ],
     "sql": "SELECT MAX(Monto) AS RetiroMasAlto\nFROM   RetirosATM;",
     "explica": "MAX recorre la columna Monto y se queda con el mayor: 480.00 (retiro 9105). Ninguno pasó el tope.",
     "fases": {
      "agg": "MAX",
      "col": "Monto"
     },
     "gracias": "Excelente, ningún retiro pasó el tope.",
     "resultado": {
      "cols": [
       "RetiroMasAlto"
      ],
      "filas": [
       [
        "480.00"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "de": "andres",
     "hora": "09:40",
     "pregunta": "El tablero de cajeros dice que el retiro más bajo de ayer fue de 0.00. Eso no tiene sentido. ¿Qué cifra debería mostrar?",
     "opciones": [
      "20.00",
      "0.00",
      "40.00",
      "480.00"
     ],
     "correcta": 0,
     "porque": [
      "",
      "Un retiro de 0.00 no existe: la fila 9103 es una consulta de saldo que el cajero registró como retiro. Hay que excluirla.",
      "Hay uno menor: 20.00 en el ATM-NORTE (retiro 9106).",
      "480.00 es el más alto (MAX)."
     ],
     "sql": "SELECT MIN(Monto) AS RetiroMinimo\nFROM   RetirosATM\nWHERE  Monto > 0;",
     "explica": "WHERE Monto > 0 descarta la consulta de saldo mal registrada y MIN da 20.00. El registro 9103 se reporta para que corrijan el cajero.",
     "fases": {
      "agg": "MIN",
      "col": "Monto",
      "where": [
       "Monto",
       ">",
       0
      ]
     },
     "gracias": "Tienes razón, era una consulta de saldo. Lo reporto al proveedor de cajeros.",
     "resultado": {
      "cols": [
       "RetiroMinimo"
      ],
      "filas": [
       [
        "20.00"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "de": "andres",
     "hora": "11:20",
     "pregunta": "Para programar la recarga de efectivo necesito saber a qué hora fue el primer retiro de ayer (6 de octubre).",
     "opciones": [
      "06:42",
      "1900-01-01 00:00",
      "07:15",
      "22:51"
     ],
     "correcta": 0,
     "porque": [
      "",
      "1900-01-01 es una fecha por defecto: el ATM-SUR perdió la hora y grabó ese valor en el retiro 9104. MIN lo elige porque es la fecha más antigua.",
      "Hay uno antes: 06:42 en el ATM-CENTRO.",
      "22:51 es el último retiro (MAX)."
     ],
     "sql": "SELECT MIN(FechaHora) AS PrimerRetiro\nFROM   RetirosATM\nWHERE  FechaHora >= '2026-10-06';",
     "explica": "WHERE deja solo los retiros desde el 6 de octubre y descarta la fecha basura de 1900. MIN da el más temprano: 06:42.",
     "fases": {
      "agg": "MIN",
      "col": "FechaHora",
      "where": [
       "FechaHora",
       ">=",
       "2026-10-06"
      ]
     },
     "gracias": "Perfecto, la recarga sale a las 06:00. Y aviso que el ATM-SUR tiene la hora desconfigurada.",
     "resultado": {
      "cols": [
       "PrimerRetiro"
      ],
      "filas": [
       [
        "2026-10-06 06:42:00"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "de": "kevin",
     "hora": "15:00",
     "muestra_sql": true,
     "pregunta": "Hola, soy Kevin, el pasante. Para saber qué cajero tuvo más retiros escribí esta consulta. ¿Qué me va a devolver?",
     "opciones": [
      "ATM-SUR",
      "ATM-CENTRO",
      "4",
      "Un error"
     ],
     "correcta": 0,
     "porque": [
      "",
      "ATM-CENTRO es el que más retiros tuvo (4), pero MAX no cuenta: con texto devuelve el último en orden alfabético.",
      "MAX no cuenta filas: devuelve un valor de la columna.",
      "MIN y MAX sí funcionan con texto; SUM y AVG no."
     ],
     "sql": "SELECT MAX(Cajero) AS Cajero\nFROM   RetirosATM;",
     "explica": "Con texto, MAX da el último en orden alfabético (CENTRO, NORTE, SUR): ATM-SUR. Para saber qué cajero tuvo más retiros hay que contar por grupo con GROUP BY: eso es mañana.",
     "fases": {
      "agg": "MAX",
      "col": "Cajero"
     },
     "gracias": "¡Ahh, entonces MAX no servía! Gracias por avisarme antes de enviarlo.",
     "resultado": {
      "cols": [
       "Cajero"
      ],
      "filas": [
       [
        "ATM-SUR"
       ]
      ]
     }
    }
   ]
  },
  {
   "dia": "Jueves",
   "area": "Gerencia Comercial",
   "clave": "GROUP BY",
   "icono": "agencia",
   "tabla": "PagosServicios",
   "hora": "08:00",
   "intro": "Hoy preparas reportes por agencia. GROUP BY arma un grupo por cada valor distinto de una columna y devuelve una fila por grupo. Lo que va en el SELECT sin función, va en el GROUP BY.",
   "contexto": "Pagos de luz, agua e internet cobrados en las agencias. El banco tiene tres agencias: Centro, Norte y Sur. Una de ellas todavía registra algunos pagos a mano.",
   "retos": [
    {
     "tipo": "opcion",
     "de": "valeria",
     "hora": "09:00",
     "pregunta": "Para el comité de las 15:00 necesito la recaudación por agencia. Según tu reporte, ¿qué agencia recaudó más?",
     "opciones": [
      "Centro",
      "Norte",
      "Sur"
     ],
     "correcta": 0,
     "porque": [
      "",
      "En el reporte Norte aparece con 119.50, menos que Centro (135.00). Algo raro pasa con Norte: lo verás en el siguiente reto.",
      "Sur es la que menos recaudó: 67.00."
     ],
     "sql": "SELECT Agencia, SUM(Monto) AS Recaudado\nFROM   PagosServicios\nGROUP BY Agencia\nORDER BY Recaudado DESC;",
     "explica": "GROUP BY arma un grupo por agencia y SUM(Monto) suma cada uno. ORDER BY ... DESC pone primero al mayor: Centro con 135.00. ¿Notaste cuántas filas tiene el reporte?",
     "fases": {
      "agg": "SUM",
      "col": "Monto",
      "group": "Agencia"
     },
     "gracias": "Gracias. Oye… ¿por qué el reporte tiene una fila de más?",
     "resultado": {
      "cols": [
       "Agencia",
       "Recaudado"
      ],
      "filas": [
       [
        "Centro",
        "135.00"
       ],
       [
        "Norte",
        "119.50"
       ],
       [
        "Sur",
        "67.00"
       ],
       [
        "Nrte",
        "35.00"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "de": "valeria",
     "hora": "10:10",
     "muestra_sql": true,
     "pregunta": "Tu reporte tiene 4 filas, pero el banco solo tiene 3 agencias. ¿Qué pasó?",
     "opciones": [
      "El pago 307 dice «Nrte»: es Norte mal digitado y GROUP BY lo toma como otra agencia",
      "GROUP BY siempre agrega una fila con el total general",
      "Hay una agencia nueva que nadie registró",
      "SQL Server se equivocó al agrupar"
     ],
     "correcta": 0,
     "porque": [
      "",
      "GROUP BY no agrega totales: devuelve una fila por cada valor distinto de Agencia.",
      "Revisa la tabla: «Nrte» aparece una sola vez, en el pago 307, registrado a mano.",
      "SQL hizo lo que se le pidió: «Nrte» y «Norte» son textos distintos, entonces son grupos distintos."
     ],
     "sql": "SELECT Agencia, SUM(Monto) AS Recaudado\nFROM   PagosServicios\nGROUP BY Agencia\nORDER BY Recaudado DESC;",
     "explica": "Con el nombre corregido, Norte sumaría 119.50 + 35.00 = 154.50 y quedaría PRIMERA, no Centro. Un error de digitación cambiaba la conclusión del comité: por eso los datos se limpian antes de reportar.",
     "fases": {
      "agg": "SUM",
      "col": "Monto",
      "group": "Agencia"
     },
     "gracias": "¡Qué bueno que lo viste antes del comité! Pido a Sistemas que corrijan el registro.",
     "resultado": {
      "cols": [
       "Agencia",
       "Recaudado"
      ],
      "filas": [
       [
        "Centro",
        "135.00"
       ],
       [
        "Norte",
        "119.50"
       ],
       [
        "Sur",
        "67.00"
       ],
       [
        "Nrte",
        "35.00"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "de": "valeria",
     "hora": "11:30",
     "pregunta": "La empresa eléctrica nos paga una comisión fija por cada pago de luz que cobramos. ¿Cuántos pagos de luz cobramos?",
     "opciones": [
      "4",
      "3",
      "196.00",
      "10"
     ],
     "correcta": 0,
     "porque": [
      "",
      "3 son los pagos de agua o los de internet.",
      "196.00 es el dinero cobrado por luz (SUM); la comisión es por pago, así que se cuentan.",
      "10 son todos los pagos, de todos los servicios."
     ],
     "sql": "SELECT Servicio, COUNT(*) AS Pagos\nFROM   PagosServicios\nGROUP BY Servicio;",
     "explica": "Un grupo por servicio y COUNT(*) en cada uno: Agua 3, Internet 3 y Luz 4.",
     "fases": {
      "agg": "COUNT",
      "col": "*",
      "group": "Servicio"
     },
     "gracias": "Perfecto, 4 pagos de luz. Ya facturo la comisión.",
     "resultado": {
      "cols": [
       "Servicio",
       "Pagos"
      ],
      "filas": [
       [
        "Agua",
        "3"
       ],
       [
        "Internet",
        "3"
       ],
       [
        "Luz",
        "4"
       ]
      ]
     }
    },
    {
     "tipo": "error",
     "de": "kevin",
     "hora": "14:20",
     "pregunta": "Quiero el total recaudado por cada agencia, pero mi consulta da error. ¿Me ayudas? Toca la línea que lo causa.",
     "lineas": [
      "SELECT Agencia, Servicio, SUM(Monto) AS Total",
      "FROM   PagosServicios",
      "GROUP BY Agencia;"
     ],
     "mala": 0,
     "corregida": "SELECT Agencia, SUM(Monto) AS Total\nFROM   PagosServicios\nGROUP BY Agencia;",
     "explica": "Servicio no está en el GROUP BY ni dentro de una función. El grupo Centro tiene pagos de Luz, Internet y Agua: ¿cuál mostraría? Se quita Servicio del SELECT (o se agrega al GROUP BY para tener una fila por agencia y servicio).",
     "fases": {
      "agg": "SUM",
      "col": "Monto",
      "group": "Agencia"
     },
     "gracias": "¡Gracias! Ya me salió el reporte.",
     "mensaje": "Msg 8120 · Column 'PagosServicios.Servicio' is invalid in the select list because it is not contained in either an aggregate function or the GROUP BY clause.",
     "resultado": {
      "cols": [
       "Agencia",
       "Total"
      ],
      "filas": [
       [
        "Centro",
        "135.00"
       ],
       [
        "Norte",
        "119.50"
       ],
       [
        "Nrte",
        "35.00"
       ],
       [
        "Sur",
        "67.00"
       ]
      ]
     }
    }
   ]
  },
  {
   "dia": "Viernes",
   "area": "Riesgo Operativo",
   "clave": "HAVING",
   "icono": "riesgo",
   "tabla": "PagosTarjeta",
   "hora": "08:00",
   "intro": "Hoy armas alertas con Riesgo Operativo. HAVING filtra GRUPOS después de agrupar, con totales como COUNT o SUM. WHERE filtra FILAS antes de agrupar.",
   "contexto": "Pagos con tarjeta de débito en tres comercios afiliados. Cada pago trae la referencia que genera la terminal de pago (POS) del comercio.",
   "retos": [
    {
     "tipo": "opcion",
     "de": "diego",
     "hora": "08:45",
     "pregunta": "Empecemos por los comercios con más movimiento. ¿Qué comercios registraron más de 3 pagos?",
     "opciones": [
      "Café Andino y Farmacia Sol",
      "Los tres comercios",
      "Solo Ferretería Ruiz",
      "Solo Café Andino"
     ],
     "correcta": 0,
     "porque": [
      "",
      "Ferretería Ruiz tiene 3 pagos: «más de 3» no incluye el 3.",
      "Ferretería Ruiz es la que más dinero mueve, pero se pidió cantidad de pagos, y tiene 3.",
      "Farmacia Sol también tiene 4 pagos."
     ],
     "sql": "SELECT Comercio, COUNT(*) AS Pagos\nFROM   PagosTarjeta\nGROUP BY Comercio\nHAVING COUNT(*) > 3;",
     "explica": "Un grupo por comercio: Café Andino 4, Farmacia Sol 4 y Ferretería Ruiz 3. HAVING COUNT(*) > 3 deja a los dos primeros.",
     "fases": {
      "agg": "COUNT",
      "col": "*",
      "group": "Comercio",
      "having": [
       "COUNT",
       "*",
       ">",
       3
      ]
     },
     "gracias": "Bien. Ahora vamos a lo importante: las alertas.",
     "resultado": {
      "cols": [
       "Comercio",
       "Pagos"
      ],
      "filas": [
       [
        "Café Andino",
        "4"
       ],
       [
        "Farmacia Sol",
        "4"
       ]
      ]
     }
    },
    {
     "tipo": "clasifica",
     "de": "diego",
     "hora": "09:30",
     "pregunta": "Estoy armando las reglas de alerta. ¿Cada condición va en WHERE o en HAVING?",
     "items": [
      [
       "Estado = 'RECHAZADO'",
       "WHERE",
       "Mira el estado de cada pago (una fila)."
      ],
      [
       "COUNT(*) >= 2",
       "HAVING",
       "COUNT es un total del grupo."
      ],
      [
       "Monto > 50",
       "WHERE",
       "Mira el monto de cada pago (una fila)."
      ],
      [
       "SUM(Monto) > 100",
       "HAVING",
       "SUM es un total del grupo."
      ]
     ],
     "explica": "Si la condición usa COUNT, SUM, AVG, MIN o MAX, mira un grupo: va en HAVING. Si mira una columna de cada fila, va en WHERE.",
     "gracias": "Perfecto, así quedan las reglas."
    },
    {
     "tipo": "opcion",
     "de": "diego",
     "hora": "11:15",
     "pregunta": "Farmacia Sol dice que a un cliente se le cobró dos veces el mismo pago. ¿Qué referencia aparece más de una vez?",
     "opciones": [
      "POS-1006",
      "POS-1003",
      "POS-1001",
      "Ninguna"
     ],
     "correcta": 0,
     "porque": [
      "",
      "POS-1003 tiene el mismo monto que POS-1002 (4.50), pero sus referencias son distintas: son dos pagos diferentes.",
      "POS-1001 aparece una sola vez.",
      "Revisa los pagos 806 y 807: misma referencia y mismo monto."
     ],
     "sql": "SELECT Referencia, COUNT(*) AS Veces\nFROM   PagosTarjeta\nGROUP BY Referencia\nHAVING COUNT(*) > 1;",
     "explica": "GROUP BY Referencia arma un grupo por referencia y HAVING COUNT(*) > 1 deja solo las repetidas. Es la consulta clásica para encontrar duplicados: POS-1006 se cobró dos veces (pagos 806 y 807).",
     "fases": {
      "agg": "COUNT",
      "col": "*",
      "group": "Referencia",
      "having": [
       "COUNT",
       "*",
       ">",
       1
      ]
     },
     "gracias": "Confirmado: cobro duplicado. Hoy mismo se le devuelve el valor al cliente.",
     "resultado": {
      "cols": [
       "Referencia",
       "Veces"
      ],
      "filas": [
       [
        "POS-1006",
        "2"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "de": "diego",
     "hora": "14:00",
     "pregunta": "Regla final: si un comercio tiene 2 o más pagos RECHAZADOS en el día, enviamos un técnico a revisar su terminal POS. ¿A qué comercios hay que enviar técnico?",
     "opciones": [
      "Solo Café Andino",
      "Café Andino y Ferretería Ruiz",
      "Café Andino y Farmacia Sol",
      "Ninguno"
     ],
     "correcta": 0,
     "porque": [
      "",
      "Ferretería Ruiz tiene un solo pago rechazado (808).",
      "Farmacia Sol tiene 4 pagos, pero ninguno rechazado: el WHERE los descarta antes de agrupar.",
      "Café Andino tiene 3 pagos rechazados."
     ],
     "sql": "SELECT Comercio, COUNT(*) AS Rechazados\nFROM   PagosTarjeta\nWHERE  Estado = 'RECHAZADO'\nGROUP BY Comercio\nHAVING COUNT(*) >= 2;",
     "explica": "WHERE deja los 4 pagos rechazados; GROUP BY los reparte (Café Andino 3, Ferretería Ruiz 1) y HAVING deja solo a Café Andino.",
     "fases": {
      "agg": "COUNT",
      "col": "*",
      "where": [
       "Estado",
       "=",
       "RECHAZADO"
      ],
      "group": "Comercio",
      "having": [
       "COUNT",
       "*",
       ">=",
       2
      ]
     },
     "gracias": "Listo: el técnico visita Café Andino mañana a primera hora.",
     "resultado": {
      "cols": [
       "Comercio",
       "Rechazados"
      ],
      "filas": [
       [
        "Café Andino",
        "3"
       ]
      ]
     }
    }
   ]
  },
  {
   "dia": "Fin de mes",
   "area": "Comité de Gerencia",
   "clave": "TODO JUNTO",
   "icono": "comite",
   "tabla": "Transacciones",
   "hora": "08:00",
   "intro": "Es el cierre de mes y el informe para el comité de gerencia lleva todo junto: WHERE, GROUP BY, HAVING y ORDER BY, en el orden correcto.",
   "contexto": "Muestra de transacciones del mes por canal de atención. RECHAZADA = la operación no se completó y no movió dinero.",
   "retos": [
    {
     "tipo": "orden",
     "de": "lucia",
     "hora": "08:30",
     "pregunta": "El comité quiere ver los canales que movieron más de 400.00 en transacciones APROBADAS, del mayor al menor. Arma la consulta: ordena las cláusulas como se ESCRIBEN.",
     "items": [
      "SELECT",
      "FROM",
      "WHERE",
      "GROUP BY",
      "HAVING",
      "ORDER BY"
     ],
     "sql": "SELECT Canal, SUM(Monto) AS Total\nFROM   Transacciones\nWHERE  Estado = 'APROBADA'\nGROUP BY Canal\nHAVING SUM(Monto) > 400\nORDER BY Total DESC;",
     "explica": "Siempre se escriben en este orden. Resultado: Ventanilla 1250.00 y App 455.00; Cajero (300.00) y Web (225.00) no pasan el HAVING.",
     "fases": {
      "agg": "SUM",
      "col": "Monto",
      "where": [
       "Estado",
       "=",
       "APROBADA"
      ],
      "group": "Canal",
      "having": [
       "SUM",
       "Monto",
       ">",
       400
      ]
     },
     "gracias": "Muy bien. Antes de enviarlo, revisemos cómo lo procesa SQL.",
     "resultado": {
      "cols": [
       "Canal",
       "Total"
      ],
      "filas": [
       [
        "Ventanilla",
        "1250.00"
       ],
       [
        "App",
        "455.00"
       ]
      ]
     }
    },
    {
     "tipo": "orden",
     "de": "lucia",
     "hora": "09:15",
     "pregunta": "Revisión de código antes de enviar: ¿en qué orden PROCESA SQL Server tu consulta? Ordena las cláusulas.",
     "items": [
      "FROM",
      "WHERE",
      "GROUP BY",
      "HAVING",
      "SELECT",
      "ORDER BY"
     ],
     "explica": "SQL toma la tabla (FROM), filtra filas (WHERE), arma grupos (GROUP BY), filtra grupos (HAVING), calcula las columnas (SELECT) y al final ordena (ORDER BY). Por eso WHERE no puede usar totales y el alias Total solo sirve en ORDER BY.",
     "gracias": "Exacto. Saber esto te ahorra muchos errores."
    },
    {
     "tipo": "error",
     "de": "kevin",
     "hora": "10:40",
     "pregunta": "Intenté la misma consulta con todas las condiciones en el WHERE y me sale error. Toca la línea que lo causa.",
     "lineas": [
      "SELECT Canal, SUM(Monto) AS Total",
      "FROM   Transacciones",
      "WHERE  Estado = 'APROBADA' AND SUM(Monto) > 400",
      "GROUP BY Canal;"
     ],
     "mala": 2,
     "corregida": "SELECT Canal, SUM(Monto) AS Total\nFROM   Transacciones\nWHERE  Estado = 'APROBADA'\nGROUP BY Canal\nHAVING SUM(Monto) > 400;",
     "explica": "WHERE se procesa antes de agrupar: ahí todavía no existe SUM(Monto). La condición del estado (una fila) se queda en WHERE y la del total (un grupo) pasa a HAVING.",
     "fases": {
      "agg": "SUM",
      "col": "Monto",
      "where": [
       "Estado",
       "=",
       "APROBADA"
      ],
      "group": "Canal",
      "having": [
       "SUM",
       "Monto",
       ">",
       400
      ]
     },
     "gracias": "¡Gracias! Ahora entiendo por qué va en HAVING.",
     "mensaje": "Msg 147 · An aggregate may not appear in the WHERE clause unless it is in a subquery contained in a HAVING clause or a select list, and the column being aggregated is an outer reference.",
     "resultado": {
      "cols": [
       "Canal",
       "Total"
      ],
      "filas": [
       [
        "App",
        "455.00"
       ],
       [
        "Ventanilla",
        "1250.00"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "de": "lucia",
     "hora": "11:30",
     "muestra_sql": true,
     "pregunta": "Última revisión. Si alguien olvida el WHERE Estado = 'APROBADA', ¿cuántos canales aparecerían en el informe?",
     "opciones": [
      "3",
      "2",
      "4",
      "1"
     ],
     "correcta": 0,
     "porque": [
      "",
      "2 son los canales CON el WHERE. Sin él, las rechazadas también suman: Web pasa de 225.00 a 525.00.",
      "Cajero suma 300.00 y no pasa el HAVING.",
      "Ventanilla no es el único: App y Web también pasan de 400 al sumar las rechazadas."
     ],
     "sql": "SELECT Canal, SUM(Monto) AS Total\nFROM   Transacciones\nGROUP BY Canal\nHAVING SUM(Monto) > 400;",
     "explica": "Sin el WHERE, App suma 550.00 y Web 525.00 porque entran las rechazadas. Web aparecería en el informe con dinero que nunca se movió: en un informe financiero, el filtro de estado es obligatorio.",
     "fases": {
      "agg": "SUM",
      "col": "Monto",
      "group": "Canal",
      "having": [
       "SUM",
       "Monto",
       ">",
       400
      ]
     },
     "gracias": "Exacto. Informe enviado al comité. ¡Cerraste tu primer mes!",
     "resultado": {
      "cols": [
       "Canal",
       "Total"
      ],
      "filas": [
       [
        "App",
        "550.00"
       ],
       [
        "Ventanilla",
        "1250.00"
       ],
       [
        "Web",
        "525.00"
       ]
      ]
     }
    }
   ]
  }
 ],
 "url": "https://mariadsalazar.github.io/mision-agregacion-bd2/"
};
