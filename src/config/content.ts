export type PolicyCategory = {
  id: string;
  nombre: string;
  resumen: string;
  incluye: string[];
  detalle: {
    cobertura: string[];
    proceso: string[];
    exclusiones: string[];
  };
};

export const heroSlides = [
  {
    id: 1,
    titulo: "Pólizas jurídicas para proteger tu renta",
    subtitulo:
      "Blindamos tus contratos de arrendamiento con respaldo legal claro y procesos ágiles.",
    confianza: "Cobertura legal clara y rápida.",
  },
  {
    id: 2,
    titulo: "Acompañamiento jurídico en cada firma",
    subtitulo:
      "Revisamos tus contratos y te guiamos para reducir riesgos antes de firmar.",
    confianza: "Atención profesional para cada operación.",
  },
  {
    id: 3,
    titulo: "Soluciones legales para inmobiliarias y empresas",
    subtitulo:
      "Diseñamos pólizas y procesos de cumplimiento a la medida de tu operación.",
    confianza: "Equipo legal cercano a tu negocio.",
  },
];

export const trustBadges = [
  {
    id: 1,
    titulo: "Asesoría y acompañamiento",
    descripcion: "Te guiamos desde la cotización hasta la firma.",
  },
  {
    id: 2,
    titulo: "Revisión de contratos",
    descripcion: "Analizamos cláusulas clave para reducir riesgos.",
  },
  {
    id: 3,
    titulo: "Atención rápida",
    descripcion: "Resolvemos solicitudes y dudas en plazos cortos.",
  },
  {
    id: 4,
    titulo: "Cobertura clara",
    descripcion: "Condiciones transparentes, sin letras pequeñas.",
  },
];

export const homePolicies = [
  {
    id: "arrendamiento",
    nombre: "Póliza Arrendamiento",
    descripcion:
      "Protege a propietarios e inmobiliarias ante incumplimientos en el pago de rentas.",
    bullets: [
      "Investigación y perfilamiento de inquilinos",
      "Redacción y revisión de contrato",
      "Cobertura ante morosidad y desalojos",
    ],
  },
  {
    id: "propietarios",
    nombre: "Póliza Propietarios",
    descripcion:
      "Acompañamiento jurídico para proteger tu patrimonio inmobiliario.",
    bullets: [
      "Definición de alcances y condiciones de uso",
      "Atención a conflictos y reclamaciones",
      "Estrategias preventivas para tu inmueble",
    ],
  },
  {
    id: "empresas",
    nombre: "Póliza Empresas",
    descripcion:
      "Cobertura jurídica integral para tu operación inmobiliaria o corporativa.",
    bullets: [
      "Revisión recurrente de contratos",
      "Acompañamiento en negociaciones",
      "Soporte en cumplimiento regulatorio",
    ],
  },
  {
    id: "revision-contratos",
    nombre: "Revisión de Contratos",
    descripcion: "Análisis jurídico puntual de contratos y documentos clave.",
    bullets: [
      "Identificación de riesgos y vacíos",
      "Recomendaciones de mejora",
      "Versión ajustada a tus necesidades",
    ],
  },
];

export const steps = [
  {
    id: 1,
    titulo: "Elige tu póliza",
    descripcion: "Selecciona el tipo de cobertura jurídica que necesitas.",
  },
  {
    id: 2,
    titulo: "Contrata en minutos",
    descripcion: "Completa tus datos y recibe una propuesta clara.",
  },
  {
    id: 3,
    titulo: "Envía tu solicitud",
    descripcion: "Comparte la documentación necesaria de forma segura.",
  },
  {
    id: 4,
    titulo: "Recibe apoyo jurídico",
    descripcion: "Te acompañamos en cada firma y durante la vigencia.",
  },
];

export const whyBullets = [
  "Equipo jurídico especializado en arrendamiento y contratos civiles.",
  "Procesos claros, trazables y orientados a tiempos de respuesta cortos.",
  "Documentación y comunicación en lenguaje sencillo, sin tecnicismos innecesarios.",
  "Coberturas que se adaptan a tus esquemas de renta y operación.",
];

export const stats = [
  {
    id: 1,
    etiqueta: "Tiempo promedio de respuesta",
    valor: 24,
    sufijo: "h",
    detalle: "en consultas iniciales",
  },
  {
    id: 2,
    etiqueta: "Contratos revisados",
    valor: 3500,
    sufijo: "+",
    detalle: "en diversos esquemas de renta",
  },
  {
    id: 3,
    etiqueta: "Clientes atendidos",
    valor: 1200,
    sufijo: "+",
    detalle: "entre propietarios, inquilinos e inmobiliarias",
  },
  {
    id: 4,
    etiqueta: "Opciones de cobertura",
    valor: 4,
    sufijo: "",
    detalle: "ajustables a cada caso",
  },
];

export const testimonios = [
  {
    id: 1,
    nombre: "María López",
    ciudad: "Ciudad de México",
    texto:
      "La póliza de arrendamiento nos dio certeza para rentar nuestro departamento. El proceso fue claro y muy rápido.",
  },
  {
    id: 2,
    nombre: "Carlos Hernández",
    ciudad: "Guadalajara",
    texto:
      "Agradezco el acompañamiento en la revisión de contratos. Detectaron riesgos que no habíamos visto.",
  },
  {
    id: 3,
    nombre: "Sofía Ramírez",
    ciudad: "Querétaro",
    texto:
      "Como inmobiliaria, contar con un equipo jurídico cercano nos permite responder mejor a nuestros clientes.",
  },
  {
    id: 4,
    nombre: "Juan Pérez",
    ciudad: "Monterrey",
    texto:
      "La atención fue profesional y amable. Sentí total claridad en lo que cubría mi póliza.",
  },
];

export const policyCategories: PolicyCategory[] = [
  {
    id: "arrendamiento",
    nombre: "Arrendamiento (inquilinos / propietarios)",
    resumen:
      "Protección jurídica integral para contratos de arrendamiento de vivienda y comerciales.",
    incluye: [
      "Análisis de perfil de inquilinos",
      "Redacción y revisión de contrato",
      "Seguimiento en caso de incumplimiento",
    ],
    detalle: {
      cobertura: [
        "Incumplimiento en el pago de rentas",
        "Asesoría en procedimientos de desocupación",
        "Revisión de garantías y fiadores",
      ],
      proceso: [
        "Captura de datos del inmueble y partes",
        "Revisión documental y perfilamiento",
        "Emisión de póliza y acompañamiento en firma",
      ],
      exclusiones: [
        "Conflictos previos a la contratación",
        "Actos dolosos de cualquiera de las partes",
        "Asuntos ajenos al contrato cubierto",
      ],
    },
  },
  {
    id: "propiedad-posesion",
    nombre: "Propiedad y posesión",
    resumen:
      "Cobertura jurídica enfocada en la defensa de tu patrimonio inmobiliario.",
    incluye: [
      "Asesoría preventiva sobre riesgos de posesión",
      "Revisión de antecedentes legales del inmueble",
      "Acompañamiento en controversias de propiedad",
    ],
    detalle: {
      cobertura: [
        "Orientación en juicios de desahucio o reivindicatorios",
        "Análisis de documentos de propiedad",
        "Estrategias legales para protección de la posesión",
      ],
      proceso: [
        "Levantamiento de información y documentación",
        "Valoración de riesgos y escenarios",
        "Diseño de un plan de acción jurídica",
      ],
      exclusiones: [
        "Conflictos en instancias internacionales",
        "Sanciones administrativas o fiscales",
        "Casos con sentencia firme previa",
      ],
    },
  },
  {
    id: "contratos-documentos",
    nombre: "Contratos y documentos",
    resumen:
      "Revisión, elaboración y actualización de contratos y documentos legales clave.",
    incluye: [
      "Análisis de cláusulas sensibles",
      "Propuestas de redacción alternativa",
      "Versión final lista para firmar",
    ],
    detalle: {
      cobertura: [
        "Contratos de arrendamiento, prestación de servicios y suministro",
        "Convenios de reconocimiento de adeudo",
        "Cartas compromiso y acuerdos de confidencialidad",
      ],
      proceso: [
        "Recepción del documento y contexto",
        "Informe de riesgos y ajustes sugeridos",
        "Entrega de versión revisada y comentarios",
      ],
      exclusiones: [
        "Elaboración de escrituras públicas",
        "Asuntos penales o fiscales complejos",
        "Proyectos fuera del marco jurídico mexicano",
      ],
    },
  },
  {
    id: "empresas-cumplimiento",
    nombre: "Empresas y cumplimiento",
    resumen:
      "Soporte jurídico continuo para empresas e inmobiliarias en su operación diaria.",
    incluye: [
      "Revisión periódica de contratos modelo",
      "Asesoría en procesos de cobro y recuperación",
      "Lineamientos internos de documentación",
    ],
    detalle: {
      cobertura: [
        "Contratos marco con clientes y proveedores",
        "Políticas de cobranza y recuperación",
        "Acompañamiento en negociaciones relevantes",
      ],
      proceso: [
        "Diagnóstico inicial de documentación",
        "Definición de prioridades y riesgos",
        "Implementación y seguimiento de políticas",
      ],
      exclusiones: [
        "Litigio complejo en múltiples jurisdicciones",
        "Asuntos corporativos especializados",
        "Servicios notariales o registrales específicos",
      ],
    },
  },
];

export const faqs = [
  {
    categoria: "General",
    preguntas: [
      {
        pregunta: "¿Qué es una póliza jurídica de arrendamiento?",
        respuesta:
          "Es un servicio legal que protege al propietario durante la vigencia del contrato de arrendamiento. A través de la póliza, nuestro equipo de abogados interviene en caso de incumplimiento del contrato por parte del arrendatario.",
      },
      {
        pregunta: "¿Qué sucede si el inquilino deja de pagar la renta?",
        respuesta:
          "Dependiendo de la situación, se inicia primero un proceso de cobranza extrajudicial para buscar una solución. Si el incumplimiento continúa, se inicia el procedimiento judicial para recuperar el inmueble. En la Póliza Plus también se puede promover el juicio para la recuperación de rentas y servicios adeudados.",
      },
      {
        pregunta: "¿La póliza cubre todo el tiempo que dura el contrato?",
        respuesta:
          "Sí. La póliza brinda protección jurídica durante toda la vigencia del contrato de arrendamiento.",
      },
      {
        pregunta: "¿Cuánto cuesta una póliza jurídica?",
        respuesta:
          "El costo depende del valor de la renta mensual. Póliza Tradicional: 30% del valor de la renta mensual. Póliza Plus: 35% del valor de la renta mensual. Si la renta es menor a $10,000 pesos, el cálculo se realiza tomando como base $10,000 pesos. En caso de requerir factura, el precio se ajustará más IVA.",
      },
    ],
  },
  {
    categoria: "Trámite y Documentación",
    preguntas: [
      {
        pregunta: "¿Cuánto tiempo tarda en emitirse la póliza?",
        respuesta:
          "Una vez recibida la documentación completa del arrendatario, el proceso de investigación y emisión de la póliza puede realizarse en menos de 48 horas.",
      },
      {
        pregunta: "¿Qué documentos se necesitan para iniciar el trámite?",
        respuesta:
          "Generalmente se requiere documentación básica del arrendatario y/o obligado solidario (dependiendo la póliza), como identificación oficial, comprobantes de ingresos y comprobante de domicilio. Nuestro equipo te indicará la documentación específica necesaria para cada operación.",
      },
      {
        pregunta: "¿Tiene algún costo iniciar la investigación?",
        respuesta:
          "Para iniciar el trámite se debe realizar un pago de $1,000 pesos, el cual se toma a cuenta del costo total de la póliza.",
      },
    ],
  },
  {
    categoria: "Casos Especiales",
    preguntas: [
      {
        pregunta: "¿Qué pasa si el inquilino abandona el inmueble?",
        respuesta:
          "En caso de abandono del inmueble, se puede iniciar el procedimiento legal correspondiente para recuperar la posesión de la propiedad.",
      },
      {
        pregunta: "¿Puedo solicitar factura por el servicio?",
        respuesta:
          "Sí, es posible emitir factura por el servicio de la póliza jurídica. En caso de requerir factura, el costo del servicio se ajustará más IVA conforme a la legislación fiscal aplicable.",
      },
    ],
  },
];

export const documentos = [
  {
    id: 1,
    titulo: "Guía para contratar una póliza jurídica de arrendamiento",
    tipo: "Guías",
    fecha: "2026-01-15",
    archivo: "guia-poliza-arrendamiento.pdf",
  },
  {
    id: 2,
    titulo: "Formato de solicitud de póliza",
    tipo: "Formatos",
    fecha: "2026-02-02",
    archivo: "formato-solicitud-poliza.docx",
  },
  {
    id: 3,
    titulo: "Términos generales de servicio",
    tipo: "Términos",
    fecha: "2025-11-20",
    archivo: "terminos-generales.pdf",
  },
  {
    id: 4,
    titulo: "Solicitud de revisión de contrato",
    tipo: "Solicitudes",
    fecha: "2026-01-28",
    archivo: "solicitud-revision-contrato.docx",
  },
];

export const documentTypes = ["Guías", "Formatos", "Términos", "Solicitudes"];

export const contactoInfo = {
  telefono: "(55) 0000 0000",
  whatsapp: "+52 4421775524",
  whatsappLink: "https://wa.me/524421775524?text=Hola%2C%20Santiago.%20Me%20gustar%C3%ADa%20cotizar%20una%20p%C3%B3liza%20con%20FortiaRent",
  correo: "contacto@fortiarent.mx",
  horario: "Lunes a viernes de 9:00 a 19:00 h",
  direccion: "Avenida Armando Birlain Shaffler 2001, Central Park, Corporativo 1, Piso 4, Letra C, Centro Sur, Querétaro, Qro.",
  zonasCobertura:
    "Principalmente CDMX, Área Metropolitana y ciudades clave del país.",
};

