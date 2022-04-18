class Personaje {
  nombre;
  familia;
  edad;
  vivo = true;
  serie = "Juego de Tronos";

  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje) {
    this.nombre = nombrePersonaje;
    this.familia = familiaPersonaje;
    this.edad = edadPersonaje;
  }

  comunicar() {
    return `${this.nombre} dice: `;
  }

  muere() {
    this.vivo = false;
  }
}

class Rey extends Personaje {
  anyosReinado;

  constructor(nombreRey, familiaRey, edadRey, anyosReinadoRey) {
    super(nombreRey, familiaRey, edadRey);
    this.anyosReinado = anyosReinadoRey;
  }

  comunicar() {
    return `${super.comunicar()}Vais a morir todos`;
  }
}

class Luchador extends Personaje {
  arma;
  destreza;

  constructor(
    nombreLuchador,
    familiaLuchador,
    edadLuchador,
    armaLuchador,
    valorDestreza
  ) {
    super(nombreLuchador, familiaLuchador, edadLuchador);
    this.arma = armaLuchador;
    this.destreza = this.filtraDestreza(valorDestreza);
  }

  filtraDestreza(valorDestreza) {
    if (valorDestreza < 0) {
      return 0;
    } else if (valorDestreza > 10) {
      return 10;
    } else {
      return valorDestreza;
    }
  }

  comunicar() {
    return `${super.comunicar()}Primero pego y luego pregunto`;
  }
}

class Escudero extends Personaje {
  sirveA;
  pelotismo;

  constructor(
    nombreEscudero,
    familiaEscudero,
    edadEscudero,
    valorPelotismo,
    personajeSirve
  ) {
    super(nombreEscudero, familiaEscudero, edadEscudero);
    this.pelotismo = this.filtrarPelotismo(valorPelotismo);
    if (personajeSirve instanceof Luchador) {
      this.sirveA = personajeSirve;
    }
  }

  filtrarPelotismo(gradoPelotismo) {
    if (gradoPelotismo < 0) {
      return 0;
    } else if (gradoPelotismo > 10) {
      return 10;
    } else {
      return gradoPelotismo;
    }
  }

  comunicar() {
    return `${super.comunicar()}Soy un loser`;
  }
}

class Asesor extends Personaje {
  asesorado;
  constructor(nombreAsesor, familiaAsesor, edadAsesor, personajeAsesorado) {
    super(nombreAsesor, familiaAsesor, edadAsesor);
    if (personajeAsesorado instanceof Personaje) {
      this.asesorado = personajeAsesorado;
    }
  }

  comunicar() {
    return `${super.comunicar()}No sé por qué, pero creo que voy a morir pronto`;
  }
}

const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);
