type busesModels = "π" | "π" | "π";

type peopleModels =
  | "πΆπ»"
  | "πΆπ»ββοΈ"
  | "πΆπ»ββοΈ"
  | "πΆπΌ"
  | "πΆπΌββοΈ"
  | "πΆπΌββοΈ"
  | "πΆπ½"
  | "πΆπ½ββοΈ"
  | "πΆπ½ββοΈ";

interface People {
  type: peopleModels;
  position: number;
}

interface Bus {
  type: busesModels;
  position: number;
}

function setCharAt(str: string, index: number, chr: string) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

class PersonInstance {
  public type: peopleModels = "πΆπ»";
  public position: number = 0;

  constructor(type: peopleModels, position: number) {
    this.type = type;
    this.position = position;
  }

  walk(surface: string) {
    if (this.position >= 1) {
      this.position--;
      setCharAt(surface, this.position, this.type);
    }
  }
}

class BusInstance {
  constructor(
    public type: busesModels = "π",
    public position: number = 60,
    public initial_pos: number = 60
  ) {}

  walk(surface: string) {
    if (this.position >= 1) {
      this.position--;
      if (this.position == 12) {
        this.position--;
        surface = setCharAt(surface, this.position + 1, " ");
      }
    } else {
      this.position = this.initial_pos;
    }
    return (surface = setCharAt(surface, this.position, this.type));
  }
}

export type { People, Bus };
export { PersonInstance, BusInstance };
