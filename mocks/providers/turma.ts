import { Injectable } from '@angular/core';

import { Turma } from '../../models/turma';

@Injectable()
export class TurmaProvider {
  listaTurma: Turma[] = [];

  constructor() {
    let listaTurma = [ {
      "codigo" : "A",
      "disciplina" : {
        "codigo" : "ENE0026",
        "nome" : "INTRODUÇÃO A ENGENHARIA DE REDES DE COMUNICACÃO"
      },
      "periodo" : {
        "ano" : 2023,
        "numero" : 1
      },
      "vagasOfertadas" : 10,
      "vagasOcupadas" : 0,
      "horario" : [ {
        "dia" : "TER",
        "horaInico": "14:00", 
        "horaFim" : "15:50"
      } ]
    }, {
      "codigo" : "A",
      "disciplina" : {
        "codigo" : "ENE0334",
        "nome" : "COMPUTACAO PARA ENGENHARIA"
      },
      "periodo" : {
        "ano" : 2023,
        "numero" : 1
      },
      "vagasOfertadas" : 10,
      "vagasOcupadas" : 0,
      "horario" : [ {
        "dia" : "TER",
        "horaInico": "10:00",
        "horaFim" : "11:50"
      }, {
        "dia" : "QUI",
        "horaInico": "10:00", 
        "horaFim" : "11:50"
      } ]
    }, {
      "codigo" : "G",
      "disciplina" : {
        "codigo" : "IFD0171",
        "nome" : "FISICA 1"
      },
      "periodo" : {
        "ano" : 2023,
        "numero" : 1
      },
      "vagasOfertadas" : 10,
      "vagasOcupadas" : 0,
      "horario" : [ {
        "dia" : "SEG",
        "horaInico": "08:00", 
        "horaFim" : "09:50"
      }, {
        "dia" : "QUA",
        "horaInico": "08:00", 
        "horaFim" : "09:50"
      } ]
    }, {
      "codigo" : "A",
      "disciplina" : {
        "codigo" : "IFD0173",
        "nome" : "FISICA 1 EXPERIMENTAL"
      },
      "periodo" : {
        "ano" : 2023,
        "numero" : 1
      },
      "vagasOfertadas" : 10,
      "vagasOcupadas" : 0,
      "horario" : [ {
        "dia" : "SEG",
        "horaInico": "10:00", 
        "horaFim" : "11:50"
      } ]
    }, {
      "codigo" : "F",
      "disciplina" : {
        "codigo" : "IFD0173",
        "nome" : "FISICA 1 EXPERIMENTAL"
      },
      "periodo" : {
        "ano" : 2023,
        "numero" : 1
      },
      "vagasOfertadas" : 10,
      "vagasOcupadas" : 0,
      "horario" : [ {
        "dia" : "SEX",
        "horaInico": "08:00", 
        "horaFim" : "09:50"
      } ]
    }, {
  "codigo" : "C",
  "disciplina" : {
    "codigo" : "MAT0025",
    "nome" : "CALCULO 1"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "TER",
    "horaInico": "08:00", 
    "horaFim" : "09:50"
  }, {
    "dia" : "QUI",
    "horaInico": "08:00", 
    "horaFim" : "09:50"
  }, {
    "dia" : "SEX",
    "horaInico": "08:00", 
    "horaFim" : "09:50"
  } ]
}, {
  "codigo" : "J",
  "disciplina" : {
    "codigo" : "MAT0025",
    "nome" : "CALCULO 1"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "SEG",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  }, {
    "dia" : "QUA",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  }, {
    "dia" : "SEX",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  } ]
}, {
  "codigo" : "D",
  "disciplina" : {
    "codigo" : "MAT0031",
    "nome" : "INTRODUCAO A ALGEBRA LINEAR"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "SEG",
    "horaInico": "16:00", 
    "horaFim" : "17:50"
  }, {
    "dia" : "QUA",
    "horaInico": "16:00", 
    "horaFim" : "17:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : "ENE0013",
    "nome" : "ALGORITMOS E ESTRUTURA DE DADOS"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "SEG",
    "horaInico": "16:00", 
    "horaFim" : "17:50"
  }, {
    "dia" : "QUA",
    "horaInico": "16:00", 
    "horaFim" : "17:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : "ENE0039",
    "nome" : "SISTEMAS DIGITAIS"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "TER",
    "horaInico": "16:00", 
    "horaFim" : "17:50"
  }, {
    "dia" : "QUA",
    "horaInico": "10:00", 
    "horaFim" : "11:50"
  } ]
}, {
  "codigo" : "B",
  "disciplina" : {
    "codigo" : "ENE0039",
    "nome" : "SISTEMAS DIGITAIS"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "SEG",
    "horaInico": "10:00", 
    "horaFim" : "11:50"
  }, {
    "dia" : "TER",
    "horaInico": "16:00", 
    "horaFim" : "17:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : "ENE0040",
    "nome" : "LABORATÓRIO DE SISTEMAS DIGITAIS"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "QUI",
    "horaInico": "16:00", 
    "horaFim" : "17:50"
  } ]
}, {
  "codigo" : "B",
  "disciplina" : {
    "codigo" : "ENE0040",
    "nome" : "LABORATÓRIO DE SISTEMAS DIGITAIS"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "SEG",
    "horaInico": "10:00", 
    "horaFim" : "11:50"
  }, {
    "dia" : "TER",
    "horaInico": "16:00", 
    "horaFim" : "17:50"
  } ]
}, {
  "codigo" : "B",
  "disciplina" : {
    "codigo" : "EST0023",
    "nome" : "PROBABILIDADE E ESTATISTICA"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "SEG",
    "horaInico": "10:00", 
    "horaFim" : "11:50"
  }, {
    "dia" : "QUA",
    "horaInico": "10:00", 
    "horaFim" : "11:50"
  }, {
    "dia" : "SEX",
    "horaInico": "10:00", 
    "horaFim" : "11:50"
  } ]
}, {
  "codigo" : "H",
  "disciplina" : {
    "codigo" : "EST0023",
    "nome" : "PROBABILIDADE E ESTATISTICA"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "SEG",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  }, {
    "dia" : "QUA",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  }, {
    "dia" : "SEX",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  } ]
}, {
  "codigo" : "E",
  "disciplina" : {
    "codigo" : "IFD0175",
    "nome" : "FISICA 2"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "SEG",
    "horaInico": "08:00", 
    "horaFim" : "09:50"
  }, {
    "dia" : "QUA",
    "horaInico": "08:00", 
    "horaFim" : "09:50"
  } ]
}, {
  "codigo" : "F",
  "disciplina" : {
    "codigo" : "MAT0031",
    "nome" : "CALCULO 2"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "TER",
    "horaInico": "08:00", 
    "horaFim" : "09:50"
  }, {
    "dia" : "QUI",
    "horaInico": "08:00", 
    "horaFim" : "09:50"
  }, {
    "dia" : "SEX",
    "horaInico": "08:00", 
    "horaFim" : "09:50"
  } ]
}, {
  "codigo" : "K",
  "disciplina" : {
    "codigo" : "MAT0026",
    "nome" : "CALCULO 2"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "SEG",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  }, {
    "dia" : "QUA",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  }, {
    "dia" : "SEX",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : "ENE0022",
    "nome" : "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "TER",
    "horaInico": "16:00", 
    "horaFim" : "17:50"
  }, {
    "dia" : "QUI",
    "horaInico": "16:00", 
    "horaFim" : "17:50"
  }  ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : "ENE0056",
    "nome" : "SISTEMAS MICROPROCESSADOS"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "SEG",
    "horaInico": "10:00", 
    "horaFim" : "11:50"
  }, {
    "dia" : "QUA",
    "horaInico": "10:00", 
    "horaFim" : "11:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : "ENE0058",
    "nome" : "LABORATÓRIO DE SISTEMAS MICROPROCESSADOS"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "SEG",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : "ENE0067",
    "nome" : "SINAIS E SISTEMAS EM TEMPO CONTÍNUO"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "TER",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  }, {
    "dia" : "QUI",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : "ENE0274",
    "nome" : "FUNDAMENTOS DE REDES"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "TER",
    "horaInico": "10:00", 
    "horaFim" : "11:50"
  }, {
    "dia" : "QUI",
    "horaInico": "10:00", 
    "horaFim" : "11:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : "IFD0177",
    "nome" : "FISICA 2 EXPERIMENTAL"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "QUI",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  },
  {
    "dia" : "QUI",
    "horaInico": "16:00", 
    "horaFim" : "17:50"
  } ]
}, {
  "codigo" : "F",
  "disciplina" : {
    "codigo" : "IFD0177",
    "nome" : "FISICA 2 EXPERIMENTAL"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "TER",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  },
  {
    "dia" : "TER",
    "horaInico": "16:00", 
    "horaFim" : "17:50"
  } ]
}, {
  "codigo" : "A",
  "disciplina" : {
    "codigo" : "MAT0027",
    "nome" : "CALCULO 3"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "SEG",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  }, {
    "dia" : "QUA",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  }, {
    "dia" : "SEX",
    "horaInico": "14:00", 
    "horaFim" : "15:50"
  } ]
}, {
  "codigo" : "B",
  "disciplina" : {
    "codigo" : "MAT0027",
    "nome" : "CALCULO 3"
  },
  "periodo" : {
    "ano" : 2023,
    "numero" : 1
  },
  "vagasOfertadas" : 10,
  "vagasOcupadas" : 0,
  "horario" : [ {
    "dia" : "TER",
    "horaInico": "08:00", 
    "horaFim" : "09:50"
  }, {
    "dia" : "QUI",
    "horaInico": "08:00", 
    "horaFim" : "09:50"
  }, {
    "dia" : "SEX",
    "horaInico": "08:00", 
    "horaFim" : "09:50"
  } ]
} ];

    for (let turma of listaTurma) {
      this.listaTurma.push(new Turma(turma));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.listaTurma;
    }
    if ("disciplina" in params) {
      return this.listaTurma.filter((turma) => {
        if(turma.disciplina.codigo == params.disciplina) {
              return turma;
        }
        return null;
      });
    }
  }

}
