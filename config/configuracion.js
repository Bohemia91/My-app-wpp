const CONFIG = {
    precioMembresia: 30000,
    diasGratis: 30,
    maxOfertasGratisPorDia: 1,
    moneda: "COP",

    controlWppComoIdentificador: true,
    permitirCambioNumero: false,

    pagos: {
        activo: true,
        urlApi: "https://api.brevelllave.com/v1",
        claveComercio: "TU_CLAVE_AQUI",
        comisionTransaccion: 0.02
    },

    admin: {
        nombre: "Tu Nombre",
        correo: "tu_correo@dominio.com",
        numeroWppContacto: "+573000000000"
    },

    estructura: {
        comercios: [
            "numero_wpp",
            "nombre_comercio",
            "estado_aprobacion",
            "fecha_registro",
            "plan_actual",
            "fecha_inicio_plan",
            "fecha_fin_plan",
            "activo"
        ],
        ofertas: [
            "id_oferta",
            "numero_comercio",
            "titulo",
            "descripcion",
            "categoria",
            "imagen",
            "fecha_publicacion",
            "fecha_vigencia",
            "estado",
            "es_gratuita",
            "es_pagada"
        ],
        clientes: [
            "numero_wpp",
            "acepta_notificaciones",
            "fecha_registro",
            "preferencias_categorias",
            "datos_eliminados"
        ],
        registros: [
            "id_registro",
            "tipo_accion",
            "numero_responsable",
            "detalles",
            "fecha"
        ]
    }
};

export default CONFIG;
