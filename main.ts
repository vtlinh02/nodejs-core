import { EventEmitter } from "events";

class CinemaTicketManager extends EventEmitter {
  constructor(private ticket: number) {
    super();
  }

  buy(email: string, money: number) {
    this.ticket--;
    this.emit("buy", email, money, new Date());
  }
}

const manager = new CinemaTicketManager(10);

// why the listener can not listen to the event emit?

const listener = new EventEmitter();
listener.on("buy", () => {
  console.log("Receiving message");
});

manager.buy("tuan linh", 1);
manager.buy("sarah", 2);
