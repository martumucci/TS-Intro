/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNormal {
  //   private alterEgo: string; // Solo visible dentro de esta clase
  //   public edad: number; // Visible tambien afuera de la clase
  //   static nombreReal: number; // Se puede acceder a su valor desde afuera, pero sin instanciarla

  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, "NewYork, USA");
  }
}

const ironMan = new Heroe("IronMan", 45, "Tony");

console.log(ironMan);
