// Generado por _fuente/construir.py: resultados reales ejecutados en SQL Server. No editar a mano.
window.JUEGO = {
 "tablas": {
  "Pedidos": {
   "caso": "App de delivery",
   "cols": [
    [
     "PedidoID",
     "int"
    ],
    [
     "Cliente",
     "txt"
    ],
    [
     "Restaurante",
     "txt"
    ],
    [
     "Total",
     "dec"
    ],
    [
     "Propina",
     "dec"
    ]
   ],
   "filas": [
    [
     1,
     "Ana",
     "PizzaRápida",
     18.5,
     2.0
    ],
    [
     2,
     "Luis",
     "BurgerLab",
     12.0,
     null
    ],
    [
     3,
     "Ana",
     "SushiGo",
     25.0,
     3.0
    ],
    [
     4,
     "Carla",
     "PizzaRápida",
     22.0,
     null
    ],
    [
     5,
     "Diego",
     "BurgerLab",
     9.5,
     1.0
    ],
    [
     6,
     "Luis",
     "PizzaRápida",
     15.0,
     2.0
    ],
    [
     7,
     "Sofía",
     "SushiGo",
     30.0,
     null
    ],
    [
     8,
     "Diego",
     "TacoLoco",
     11.0,
     1.5
    ]
   ]
  },
  "Actividad": {
   "caso": "Reloj inteligente",
   "cols": [
    [
     "Dia",
     "txt"
    ],
    [
     "Pasos",
     "int"
    ],
    [
     "Calorias",
     "int"
    ],
    [
     "MinutosEjercicio",
     "int"
    ]
   ],
   "filas": [
    [
     "Lunes",
     8000,
     320,
     30
    ],
    [
     "Martes",
     6500,
     260,
     null
    ],
    [
     "Miércoles",
     10000,
     410,
     45
    ],
    [
     "Jueves",
     7500,
     300,
     20
    ],
    [
     "Viernes",
     12000,
     480,
     60
    ],
    [
     "Sábado",
     4000,
     170,
     null
    ],
    [
     "Domingo",
     8000,
     320,
     25
    ]
   ]
  },
  "Canciones": {
   "caso": "App de música",
   "cols": [
    [
     "Cancion",
     "txt"
    ],
    [
     "Artista",
     "txt"
    ],
    [
     "Genero",
     "txt"
    ],
    [
     "DuracionSeg",
     "int"
    ],
    [
     "Reproducciones",
     "int"
    ],
    [
     "Estreno",
     "fecha"
    ]
   ],
   "filas": [
    [
     "Ritmo Andino",
     "Los Páramos",
     "Pop",
     210,
     1200,
     "2023-05-10"
    ],
    [
     "Noche en Guayaquil",
     "DJ Malecón",
     "Electrónica",
     185,
     3400,
     "2024-01-20"
    ],
    [
     "Volcán",
     "Cotopaxi Band",
     "Rock",
     245,
     800,
     "2022-11-03"
    ],
    [
     "Mar de Manta",
     "Brisa",
     "Pop",
     198,
     2500,
     "2024-03-15"
    ],
    [
     "Código Binario",
     "Byte Crew",
     "Electrónica",
     302,
     950,
     "2021-08-30"
    ],
    [
     "Galápagos",
     "Brisa",
     "Pop",
     176,
     4100,
     "2024-06-01"
    ],
    [
     "Lluvia de Cuenca",
     "Los Páramos",
     "Rock",
     230,
     1500,
     "2023-09-12"
    ],
    [
     "Pasillo Digital",
     "Byte Crew",
     "Electrónica",
     264,
     600,
     "2022-02-14"
    ]
   ]
  },
  "Viajes": {
   "caso": "App de transporte",
   "cols": [
    [
     "ViajeID",
     "int"
    ],
    [
     "Conductor",
     "txt"
    ],
    [
     "Ciudad",
     "txt"
    ],
    [
     "Tarifa",
     "dec"
    ],
    [
     "Km",
     "int"
    ]
   ],
   "filas": [
    [
     1,
     "Pedro",
     "Quito",
     4.5,
     5
    ],
    [
     2,
     "María",
     "Quito",
     6.0,
     8
    ],
    [
     3,
     "Pedro",
     "Guayaquil",
     3.5,
     4
    ],
    [
     4,
     "Jorge",
     "Cuenca",
     5.0,
     6
    ],
    [
     5,
     "María",
     "Quito",
     7.5,
     10
    ],
    [
     6,
     "Jorge",
     "Cuenca",
     4.0,
     5
    ],
    [
     7,
     "Pedro",
     "Quito",
     5.5,
     7
    ],
    [
     8,
     "María",
     "Guayaquil",
     6.5,
     9
    ],
    [
     9,
     "Jorge",
     "Quito",
     3.0,
     3
    ],
    [
     10,
     "Pedro",
     "Guayaquil",
     4.0,
     4
    ]
   ]
  },
  "Tickets": {
   "caso": "Soporte técnico",
   "cols": [
    [
     "TicketID",
     "int"
    ],
    [
     "Tecnico",
     "txt"
    ],
    [
     "Prioridad",
     "txt"
    ],
    [
     "Horas",
     "int"
    ]
   ],
   "filas": [
    [
     1,
     "Ana",
     "Alta",
     3
    ],
    [
     2,
     "Bruno",
     "Baja",
     1
    ],
    [
     3,
     "Ana",
     "Media",
     2
    ],
    [
     4,
     "Carlos",
     "Alta",
     5
    ],
    [
     5,
     "Ana",
     "Baja",
     1
    ],
    [
     6,
     "Bruno",
     "Alta",
     4
    ],
    [
     7,
     "Carlos",
     "Media",
     2
    ],
    [
     8,
     "Ana",
     "Alta",
     4
    ],
    [
     9,
     "Bruno",
     "Media",
     3
    ],
    [
     10,
     "Carlos",
     "Alta",
     6
    ]
   ]
  },
  "Ventas": {
   "caso": "Tienda de tecnología",
   "cols": [
    [
     "VentaID",
     "int"
    ],
    [
     "Producto",
     "txt"
    ],
    [
     "Categoria",
     "txt"
    ],
    [
     "Cantidad",
     "int"
    ],
    [
     "Precio",
     "dec"
    ]
   ],
   "filas": [
    [
     1,
     "Laptop IdeaPad 3",
     "Laptops",
     2,
     650.0
    ],
    [
     2,
     "Laptop VivoBook 15",
     "Laptops",
     1,
     700.0
    ],
    [
     3,
     "MacBook Air M2",
     "Laptops",
     1,
     1200.0
    ],
    [
     4,
     "Galaxy A54",
     "Celulares",
     3,
     380.0
    ],
    [
     5,
     "iPhone 15",
     "Celulares",
     2,
     950.0
    ],
    [
     6,
     "Redmi Note 13",
     "Celulares",
     4,
     250.0
    ],
    [
     7,
     "Mouse inalámbrico",
     "Accesorios",
     10,
     15.0
    ],
    [
     8,
     "Teclado mecánico",
     "Accesorios",
     5,
     45.0
    ],
    [
     9,
     "Audífonos Bluetooth",
     "Accesorios",
     6,
     60.0
    ],
    [
     10,
     "Disco SSD 1 TB",
     "Accesorios",
     4,
     80.0
    ],
    [
     11,
     "Monitor 24 pulgadas",
     "Monitores",
     3,
     180.0
    ],
    [
     12,
     "Monitor 27 pulgadas",
     "Monitores",
     1,
     290.0
    ]
   ]
  }
 },
 "niveles": [
  {
   "titulo": "Contar",
   "clave": "COUNT",
   "icono": "contar",
   "tabla": "Pedidos",
   "intro": "COUNT responde «¿cuántos?». COUNT(*) cuenta filas; COUNT(columna) cuenta solo las que tienen valor.",
   "contexto": "Trabajas en una app de delivery. Cada fila es un pedido de hoy. Si el cliente no dejó propina, la celda está vacía (NULL).",
   "retos": [
    {
     "tipo": "funcion",
     "pregunta": "La gerente quiere saber cuántos pedidos recibió la app hoy. ¿Qué función usas?",
     "opciones": [
      "COUNT",
      "SUM",
      "AVG",
      "MAX"
     ],
     "correcta": 0,
     "porque": [
      "",
      "SUM suma valores, como el dinero; no cuenta pedidos.",
      "AVG calcula un promedio, no cuántos hay.",
      "MAX da el valor más alto, no la cantidad."
     ],
     "sql": "SELECT COUNT(*) AS Pedidos\nFROM   Pedidos;",
     "explica": "Cada fila es un pedido: COUNT(*) cuenta las filas y da 8.",
     "fases": {
      "agg": "COUNT",
      "col": "*"
     },
     "resultado": {
      "cols": [
       "Pedidos"
      ],
      "filas": [
       [
        "8"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "pregunta": "¿Cuántos pedidos dejaron propina?",
     "opciones": [
      "8",
      "5",
      "3",
      "13"
     ],
     "correcta": 1,
     "porque": [
      "8 sería COUNT(*): cuenta todas las filas, también las vacías.",
      "",
      "3 son los pedidos SIN propina (los NULL).",
      "No se suman montos: se cuentan las celdas con valor."
     ],
     "sql": "SELECT COUNT(Propina) AS ConPropina\nFROM   Pedidos;",
     "explica": "COUNT(Propina) se salta las celdas vacías (NULL): de 8 pedidos, 5 tienen propina.",
     "fases": {
      "agg": "COUNT",
      "col": "Propina"
     },
     "resultado": {
      "cols": [
       "ConPropina"
      ],
      "filas": [
       [
        "5"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "pregunta": "¿En cuántos restaurantes diferentes se hicieron pedidos?",
     "opciones": [
      "8",
      "4",
      "3",
      "5"
     ],
     "correcta": 1,
     "porque": [
      "8 son los pedidos; DISTINCT cuenta cada restaurante una sola vez.",
      "",
      "Falta uno: PizzaRápida, BurgerLab, SushiGo y TacoLoco.",
      "Hay solo 4 nombres distintos de restaurante."
     ],
     "sql": "SELECT COUNT(DISTINCT Restaurante) AS Restaurantes\nFROM   Pedidos;",
     "explica": "COUNT(DISTINCT Restaurante) cuenta cada restaurante una vez: PizzaRápida, BurgerLab, SushiGo y TacoLoco.",
     "fases": {
      "agg": "COUNT DISTINCT",
      "col": "Restaurante"
     },
     "resultado": {
      "cols": [
       "Restaurantes"
      ],
      "filas": [
       [
        "4"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "pregunta": "¿Cuántos pedidos hizo Ana?",
     "opciones": [
      "1",
      "2",
      "3",
      "8"
     ],
     "correcta": 1,
     "porque": [
      "Ana pidió dos veces: en PizzaRápida y en SushiGo.",
      "",
      "Revisa la columna Cliente: Ana aparece en 2 filas.",
      "Sin WHERE se cuentan todos; aquí solo los de Ana."
     ],
     "sql": "SELECT COUNT(*) AS PedidosAna\nFROM   Pedidos\nWHERE  Cliente = 'Ana';",
     "explica": "WHERE deja solo las filas de Ana y COUNT(*) las cuenta: 2 pedidos.",
     "fases": {
      "agg": "COUNT",
      "col": "*",
      "where": [
       "Cliente",
       "=",
       "Ana"
      ]
     },
     "resultado": {
      "cols": [
       "PedidosAna"
      ],
      "filas": [
       [
        "2"
       ]
      ]
     }
    }
   ]
  },
  {
   "titulo": "Sumar y promediar",
   "clave": "SUM · AVG",
   "icono": "sumar",
   "tabla": "Actividad",
   "intro": "SUM junta todos los valores en un total. AVG los suma y divide para cuántos hay. Los vacíos (NULL) no entran.",
   "contexto": "Tu reloj inteligente guarda la actividad de cada día. Los días sin entrenamiento, MinutosEjercicio queda vacío (NULL).",
   "retos": [
    {
     "tipo": "funcion",
     "pregunta": "¿Qué función da el total de pasos de la semana?",
     "opciones": [
      "SUM",
      "COUNT",
      "AVG",
      "MAX"
     ],
     "correcta": 0,
     "porque": [
      "",
      "COUNT diría 7 días, no los pasos.",
      "AVG da el promedio por día, no el total.",
      "MAX da solo el día con más pasos."
     ],
     "sql": "SELECT SUM(Pasos) AS PasosSemana\nFROM   Actividad;",
     "explica": "SUM junta los pasos de los 7 días: 56 000 pasos.",
     "fases": {
      "agg": "SUM",
      "col": "Pasos"
     },
     "resultado": {
      "cols": [
       "PasosSemana"
      ],
      "filas": [
       [
        "56000"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "pregunta": "¿Cuál es el promedio de pasos por día?",
     "opciones": [
      "8000",
      "56000",
      "7",
      "12000"
     ],
     "correcta": 0,
     "porque": [
      "",
      "Ese es el total (SUM); el promedio lo divide para 7 días.",
      "7 es el número de días (COUNT).",
      "Ese es el máximo: el viernes."
     ],
     "sql": "SELECT AVG(Pasos) AS PromedioPasos\nFROM   Actividad;",
     "explica": "AVG suma los pasos (56 000) y divide para 7 días: 8000.",
     "fases": {
      "agg": "AVG",
      "col": "Pasos"
     },
     "resultado": {
      "cols": [
       "PromedioPasos"
      ],
      "filas": [
       [
        "8000"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "pregunta": "¿Cuántos minutos de ejercicio hizo en toda la semana?",
     "opciones": [
      "180",
      "7",
      "36",
      "5"
     ],
     "correcta": 0,
     "porque": [
      "",
      "7 son los días de la tabla, no los minutos.",
      "36 es el promedio, no el total.",
      "5 son los días con ejercicio: eso sería COUNT(MinutosEjercicio)."
     ],
     "sql": "SELECT SUM(MinutosEjercicio) AS MinutosSemana\nFROM   Actividad;",
     "explica": "SUM junta 30 + 45 + 20 + 60 + 25 = 180. Los días vacíos no suman nada.",
     "fases": {
      "agg": "SUM",
      "col": "MinutosEjercicio"
     },
     "resultado": {
      "cols": [
       "MinutosSemana"
      ],
      "filas": [
       [
        "180"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "pregunta": "¿Cuál es el promedio de minutos de ejercicio? (martes y sábado están vacíos)",
     "opciones": [
      "36",
      "25",
      "180",
      "30"
     ],
     "correcta": 0,
     "porque": [
      "",
      "180 ÷ 7 ≈ 25: AVG no divide para los días vacíos, divide para los 5 que tienen dato.",
      "180 es el total, no el promedio.",
      "30 es solo el lunes."
     ],
     "sql": "SELECT AVG(MinutosEjercicio) AS PromedioMinutos\nFROM   Actividad;",
     "explica": "AVG divide 180 para los 5 días con dato, no para 7: un vacío no es un cero. Resultado: 36.",
     "fases": {
      "agg": "AVG",
      "col": "MinutosEjercicio"
     },
     "resultado": {
      "cols": [
       "PromedioMinutos"
      ],
      "filas": [
       [
        "36"
       ]
      ]
     }
    }
   ]
  },
  {
   "titulo": "El menor y el mayor",
   "clave": "MIN · MAX",
   "icono": "extremos",
   "tabla": "Canciones",
   "intro": "MIN da el valor más bajo y MAX el más alto. Funcionan con números, fechas y también con texto (orden alfabético).",
   "contexto": "Trabajas en una app de música. Reproducciones está en miles y la duración en segundos.",
   "retos": [
    {
     "tipo": "funcion",
     "pregunta": "¿Qué función encuentra la duración de la canción más larga?",
     "opciones": [
      "MAX",
      "MIN",
      "SUM",
      "COUNT"
     ],
     "correcta": 0,
     "porque": [
      "",
      "MIN da la más corta.",
      "SUM sumaría la duración de todas.",
      "COUNT contaría las canciones."
     ],
     "sql": "SELECT MAX(DuracionSeg) AS MasLarga\nFROM   Canciones;",
     "explica": "MAX busca el número más alto de la columna: 302 segundos (Código Binario).",
     "fases": {
      "agg": "MAX",
      "col": "DuracionSeg"
     },
     "resultado": {
      "cols": [
       "MasLarga"
      ],
      "filas": [
       [
        "302"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "pregunta": "¿Cuántas reproducciones (en miles) tiene la canción MENOS escuchada?",
     "opciones": [
      "600",
      "4100",
      "800",
      "950"
     ],
     "correcta": 0,
     "porque": [
      "",
      "4100 es la MÁS escuchada (MAX).",
      "Hay una con menos: Pasillo Digital.",
      "Hay una con menos: Pasillo Digital."
     ],
     "sql": "SELECT MIN(Reproducciones) AS MenosEscuchada\nFROM   Canciones;",
     "explica": "MIN busca el número más bajo: 600 mil reproducciones (Pasillo Digital).",
     "fases": {
      "agg": "MIN",
      "col": "Reproducciones"
     },
     "resultado": {
      "cols": [
       "MenosEscuchada"
      ],
      "filas": [
       [
        "600"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "pregunta": "¿Cuál es la fecha de estreno más antigua?",
     "opciones": [
      "2021-08-30",
      "2024-06-01",
      "2022-02-14",
      "2023-05-10"
     ],
     "correcta": 0,
     "porque": [
      "",
      "Esa es la más reciente: sería MAX(Estreno).",
      "Hay una anterior: agosto de 2021.",
      "Hay varias anteriores a 2023."
     ],
     "sql": "SELECT MIN(Estreno) AS MasAntigua\nFROM   Canciones;",
     "explica": "Con fechas, MIN da la más antigua: 30 de agosto de 2021 (Código Binario).",
     "fases": {
      "agg": "MIN",
      "col": "Estreno"
     },
     "resultado": {
      "cols": [
       "MasAntigua"
      ],
      "filas": [
       [
        "2021-08-30"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "pregunta": "Cancion es texto. ¿Qué devuelve MAX(Cancion)?",
     "opciones": [
      "Volcán",
      "Código Binario",
      "Galápagos",
      "Un error"
     ],
     "correcta": 0,
     "porque": [
      "",
      "Esa es la más larga, pero aquí MAX compara letras, no segundos.",
      "Es la más escuchada, pero MAX(Cancion) ordena por el nombre.",
      "MIN y MAX sí funcionan con texto; SUM y AVG no."
     ],
     "sql": "SELECT MAX(Cancion) AS UltimaAlfabetica\nFROM   Canciones;",
     "explica": "Con texto, MAX es la última en orden alfabético: «Volcán» empieza con V, después de todas.",
     "fases": {
      "agg": "MAX",
      "col": "Cancion"
     },
     "resultado": {
      "cols": [
       "UltimaAlfabetica"
      ],
      "filas": [
       [
        "Volcán"
       ]
      ]
     }
    }
   ]
  },
  {
   "titulo": "Agrupar",
   "clave": "GROUP BY",
   "icono": "agrupar",
   "tabla": "Viajes",
   "intro": "GROUP BY arma un grupo por cada valor distinto y calcula una fila de resultado por grupo. Lo que no se resume, se agrupa.",
   "contexto": "Trabajas en una app de transporte. Cada fila es un viaje con su conductor, ciudad y tarifa en dólares.",
   "retos": [
    {
     "tipo": "opcion",
     "pregunta": "¿Cuántas filas devuelve esta consulta?",
     "muestra_sql": true,
     "opciones": [
      "3",
      "10",
      "1",
      "5"
     ],
     "correcta": 0,
     "porque": [
      "",
      "10 son los viajes; GROUP BY devuelve una fila por ciudad.",
      "Sin GROUP BY habría 1 fila; con GROUP BY hay una por ciudad.",
      "5 son los viajes de Quito, no las filas."
     ],
     "sql": "SELECT Ciudad, COUNT(*) AS Viajes\nFROM   Viajes\nGROUP BY Ciudad;",
     "explica": "Hay 3 ciudades distintas (Quito, Guayaquil y Cuenca): 3 grupos, 3 filas.",
     "fases": {
      "agg": "COUNT",
      "col": "*",
      "group": "Ciudad"
     },
     "resultado": {
      "cols": [
       "Ciudad",
       "Viajes"
      ],
      "filas": [
       [
        "Cuenca",
        "2"
       ],
       [
        "Guayaquil",
        "3"
       ],
       [
        "Quito",
        "5"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "pregunta": "Con esa misma consulta, ¿cuántos viajes hubo en Quito?",
     "muestra_sql": true,
     "opciones": [
      "5",
      "3",
      "2",
      "10"
     ],
     "correcta": 0,
     "porque": [
      "",
      "3 son los de Guayaquil.",
      "2 son los de Cuenca.",
      "10 son todos los viajes."
     ],
     "sql": "SELECT Ciudad, COUNT(*) AS Viajes\nFROM   Viajes\nGROUP BY Ciudad;",
     "explica": "El grupo de Quito reúne 5 filas (viajes 1, 2, 5, 7 y 9).",
     "fases": {
      "agg": "COUNT",
      "col": "*",
      "group": "Ciudad"
     },
     "resultado": {
      "cols": [
       "Ciudad",
       "Viajes"
      ],
      "filas": [
       [
        "Cuenca",
        "2"
       ],
       [
        "Guayaquil",
        "3"
       ],
       [
        "Quito",
        "5"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "pregunta": "¿Qué conductor ganó más dinero en total?",
     "opciones": [
      "María",
      "Pedro",
      "Jorge"
     ],
     "correcta": 0,
     "porque": [
      "",
      "Pedro hizo más viajes (4), pero suma 17.50; María suma 20.00.",
      "Jorge suma 12.00, el menor."
     ],
     "sql": "SELECT Conductor, SUM(Tarifa) AS Ganado\nFROM   Viajes\nGROUP BY Conductor\nORDER BY Ganado DESC;",
     "explica": "Un grupo por conductor y SUM(Tarifa) en cada uno: María 20.00, Pedro 17.50 y Jorge 12.00.",
     "fases": {
      "agg": "SUM",
      "col": "Tarifa",
      "group": "Conductor"
     },
     "resultado": {
      "cols": [
       "Conductor",
       "Ganado"
      ],
      "filas": [
       [
        "María",
        "20.00"
       ],
       [
        "Pedro",
        "17.50"
       ],
       [
        "Jorge",
        "12.00"
       ]
      ]
     }
    },
    {
     "tipo": "error",
     "pregunta": "Esta consulta da error. Toca la línea que lo causa.",
     "lineas": [
      "SELECT Conductor, Ciudad, SUM(Tarifa) AS Ganado",
      "FROM   Viajes",
      "GROUP BY Conductor;"
     ],
     "mala": 0,
     "corregida": "SELECT Conductor, SUM(Tarifa) AS Ganado\nFROM   Viajes\nGROUP BY Conductor;",
     "explica": "Ciudad no está en el GROUP BY ni dentro de una función. Pedro trabajó en Quito y en Guayaquil: ¿cuál mostraría? Se quita Ciudad (o se agrega al GROUP BY).",
     "fases": {
      "agg": "SUM",
      "col": "Tarifa",
      "group": "Conductor"
     },
     "mensaje": "Msg 8120 · Column 'Viajes.Ciudad' is invalid in the select list because it is not contained in either an aggregate function or the GROUP BY clause.",
     "resultado": {
      "cols": [
       "Conductor",
       "Ganado"
      ],
      "filas": [
       [
        "Jorge",
        "12.00"
       ],
       [
        "María",
        "20.00"
       ],
       [
        "Pedro",
        "17.50"
       ]
      ]
     }
    }
   ]
  },
  {
   "titulo": "Filtrar grupos",
   "clave": "HAVING",
   "icono": "filtrar",
   "tabla": "Tickets",
   "intro": "HAVING filtra GRUPOS después de agrupar, usando totales como COUNT o SUM. WHERE filtra FILAS antes de agrupar.",
   "contexto": "Trabajas en la mesa de ayuda de una empresa. Cada fila es un ticket atendido por un técnico, con sus horas de trabajo.",
   "retos": [
    {
     "tipo": "opcion",
     "pregunta": "¿Qué técnicos atendieron más de 3 tickets?",
     "opciones": [
      "Solo Ana",
      "Ana y Bruno",
      "Los tres",
      "Ninguno"
     ],
     "correcta": 0,
     "porque": [
      "",
      "Bruno tiene 3 tickets: «más de 3» no incluye el 3.",
      "Bruno y Carlos tienen 3 cada uno; solo Ana pasa de 3.",
      "Ana tiene 4 tickets."
     ],
     "sql": "SELECT Tecnico, COUNT(*) AS Tickets\nFROM   Tickets\nGROUP BY Tecnico\nHAVING COUNT(*) > 3;",
     "explica": "Un grupo por técnico: Ana 4, Bruno 3, Carlos 3. HAVING COUNT(*) > 3 deja solo a Ana.",
     "fases": {
      "agg": "COUNT",
      "col": "*",
      "group": "Tecnico",
      "having": [
       "COUNT",
       "*",
       ">",
       3
      ]
     },
     "resultado": {
      "cols": [
       "Tecnico",
       "Tickets"
      ],
      "filas": [
       [
        "Ana",
        "4"
       ]
      ]
     }
    },
    {
     "tipo": "clasifica",
     "pregunta": "¿Cada condición va en WHERE o en HAVING?",
     "items": [
      [
       "Prioridad = 'Alta'",
       "WHERE",
       "Mira la prioridad de cada ticket (una fila)."
      ],
      [
       "COUNT(*) > 3",
       "HAVING",
       "COUNT es un total del grupo."
      ],
      [
       "Horas > 2",
       "WHERE",
       "Mira las horas de cada ticket (una fila)."
      ],
      [
       "SUM(Horas) > 9",
       "HAVING",
       "SUM es un total del grupo."
      ]
     ],
     "explica": "Si la condición usa COUNT, SUM, AVG, MIN o MAX, mira un grupo: HAVING. Si mira una columna de cada fila: WHERE."
    },
    {
     "tipo": "opcion",
     "pregunta": "¿Qué técnicos suman más de 9 horas de trabajo?",
     "opciones": [
      "Ana y Carlos",
      "Solo Carlos",
      "Los tres",
      "Ana y Bruno"
     ],
     "correcta": 0,
     "porque": [
      "",
      "Ana suma 3 + 2 + 1 + 4 = 10, también pasa de 9.",
      "Bruno suma 8: no pasa de 9.",
      "Bruno suma 8 y Carlos 13."
     ],
     "sql": "SELECT Tecnico, SUM(Horas) AS Horas\nFROM   Tickets\nGROUP BY Tecnico\nHAVING SUM(Horas) > 9;",
     "explica": "SUM(Horas) por técnico: Ana 10, Bruno 8, Carlos 13. HAVING deja a Ana y a Carlos.",
     "fases": {
      "agg": "SUM",
      "col": "Horas",
      "group": "Tecnico",
      "having": [
       "SUM",
       "Horas",
       ">",
       9
      ]
     },
     "resultado": {
      "cols": [
       "Tecnico",
       "Horas"
      ],
      "filas": [
       [
        "Ana",
        "10"
       ],
       [
        "Carlos",
        "13"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "pregunta": "Contando solo los tickets de prioridad Alta, ¿qué técnicos tienen 2 o más?",
     "opciones": [
      "Ana y Carlos",
      "Solo Carlos",
      "Los tres",
      "Solo Ana"
     ],
     "correcta": 0,
     "porque": [
      "",
      "Ana también tiene 2 tickets de prioridad Alta (1 y 8).",
      "Bruno tiene solo 1 ticket Alto.",
      "Carlos también tiene 2 (tickets 4 y 10)."
     ],
     "sql": "SELECT Tecnico, COUNT(*) AS Altas\nFROM   Tickets\nWHERE  Prioridad = 'Alta'\nGROUP BY Tecnico\nHAVING COUNT(*) >= 2;",
     "explica": "WHERE deja los 5 tickets de prioridad Alta; GROUP BY los reparte (Ana 2, Bruno 1, Carlos 2) y HAVING deja a Ana y Carlos.",
     "fases": {
      "agg": "COUNT",
      "col": "*",
      "where": [
       "Prioridad",
       "=",
       "Alta"
      ],
      "group": "Tecnico",
      "having": [
       "COUNT",
       "*",
       ">=",
       2
      ]
     },
     "resultado": {
      "cols": [
       "Tecnico",
       "Altas"
      ],
      "filas": [
       [
        "Ana",
        "2"
       ],
       [
        "Carlos",
        "2"
       ]
      ]
     }
    }
   ]
  },
  {
   "titulo": "Misión final",
   "clave": "TODO JUNTO",
   "icono": "trofeo",
   "tabla": "Ventas",
   "intro": "Ahora todo junto: el orden de las cláusulas, los errores típicos y una consulta completa.",
   "contexto": "Eres analista en una tienda de tecnología. Cada fila es una venta con su cantidad y precio.",
   "retos": [
    {
     "tipo": "orden",
     "pregunta": "Ordena las cláusulas como se ESCRIBEN en una consulta.",
     "items": [
      "SELECT",
      "FROM",
      "WHERE",
      "GROUP BY",
      "HAVING",
      "ORDER BY"
     ],
     "sql": "SELECT Categoria, SUM(Cantidad) AS Unidades\nFROM   Ventas\nWHERE  Precio > 100\nGROUP BY Categoria\nHAVING SUM(Cantidad) > 4\nORDER BY Unidades DESC;",
     "explica": "Siempre se escribe en este orden. Esta consulta da las categorías de productos de más de 100 dólares que vendieron más de 4 unidades.",
     "fases": {
      "agg": "SUM",
      "col": "Cantidad",
      "where": [
       "Precio",
       ">",
       100
      ],
      "group": "Categoria",
      "having": [
       "SUM",
       "Cantidad",
       ">",
       4
      ]
     },
     "resultado": {
      "cols": [
       "Categoria",
       "Unidades"
      ],
      "filas": [
       [
        "Celulares",
        "9"
       ]
      ]
     }
    },
    {
     "tipo": "orden",
     "pregunta": "Ahora ordénalas como SQL las LEE (procesa).",
     "items": [
      "FROM",
      "WHERE",
      "GROUP BY",
      "HAVING",
      "SELECT",
      "ORDER BY"
     ],
     "explica": "SQL primero busca la tabla (FROM), filtra filas (WHERE), arma grupos (GROUP BY), filtra grupos (HAVING), calcula columnas (SELECT) y al final ordena (ORDER BY). Por eso WHERE no ve totales y el alias solo sirve en ORDER BY."
    },
    {
     "tipo": "error",
     "pregunta": "Esta consulta da error. Toca la línea que lo causa.",
     "lineas": [
      "SELECT Categoria, SUM(Cantidad) AS Unidades",
      "FROM   Ventas",
      "WHERE  SUM(Cantidad) > 5",
      "GROUP BY Categoria;"
     ],
     "mala": 2,
     "corregida": "SELECT Categoria, SUM(Cantidad) AS Unidades\nFROM   Ventas\nGROUP BY Categoria\nHAVING SUM(Cantidad) > 5;",
     "explica": "WHERE se lee antes de agrupar y todavía no existe el total. La condición sobre SUM va en HAVING.",
     "fases": {
      "agg": "SUM",
      "col": "Cantidad",
      "group": "Categoria",
      "having": [
       "SUM",
       "Cantidad",
       ">",
       5
      ]
     },
     "mensaje": "Msg 147 · An aggregate may not appear in the WHERE clause unless it is in a subquery contained in a HAVING clause or a select list, and the column being aggregated is an outer reference.",
     "resultado": {
      "cols": [
       "Categoria",
       "Unidades"
      ],
      "filas": [
       [
        "Accesorios",
        "25"
       ],
       [
        "Celulares",
        "9"
       ]
      ]
     }
    },
    {
     "tipo": "opcion",
     "pregunta": "¿Cuántas filas devuelve esta consulta?",
     "muestra_sql": true,
     "opciones": [
      "1",
      "2",
      "3",
      "4"
     ],
     "correcta": 1,
     "porque": [
      "Celulares y Laptops tienen 3 ventas de más de 100 cada una.",
      "",
      "Monitores tiene solo 2 ventas de más de 100: no cumple el HAVING.",
      "Accesorios desaparece en el WHERE: ninguno cuesta más de 100."
     ],
     "sql": "SELECT Categoria, COUNT(*) AS Ventas\nFROM   Ventas\nWHERE  Precio > 100\nGROUP BY Categoria\nHAVING COUNT(*) >= 3;",
     "explica": "WHERE deja 8 ventas de más de 100 (sin accesorios). GROUP BY: Celulares 3, Laptops 3, Monitores 2. HAVING deja 2 filas.",
     "fases": {
      "agg": "COUNT",
      "col": "*",
      "where": [
       "Precio",
       ">",
       100
      ],
      "group": "Categoria",
      "having": [
       "COUNT",
       "*",
       ">=",
       3
      ]
     },
     "resultado": {
      "cols": [
       "Categoria",
       "Ventas"
      ],
      "filas": [
       [
        "Celulares",
        "3"
       ],
       [
        "Laptops",
        "3"
       ]
      ]
     }
    }
   ]
  }
 ],
 "url": "https://mariadsalazar.github.io/mision-agregacion-bd2/"
};
