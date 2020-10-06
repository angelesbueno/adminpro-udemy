import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: [],
})
export class RxjsComponent implements OnInit {
  constructor() {

    this.regresaObservable()
    .subscribe(
      (numero) => console.log("numero ---> ", numero.valor),
      (error) => console.error("Error en el obs", error),
      () => console.log("El observador terminó")
    );
  }

  ngOnInit() {}

  regresaObservable(): Observable<any> {
    return new Observable((observer) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;

        let salida = {
          valor: contador
        }
        observer.next((salida));

        if (contador == 3) {
          clearInterval(intervalo);
          observer.complete();
        }

        // if (contador == 2) {
        //   observer.error("Auxilio");
        // }
      }, 1000);
    });

  }
}
