import {Component, OnInit} from "@angular/core"
import {SalesPerson} from "./sales-person"

@Component({
  selector: "app-sales-person-list",
  templateUrl: "./sales-person-list.component.html",
  styleUrls: ["./sales-person-list.component.css"]
})
export class SalesPersonListComponent {
  salesPersonList: SalesPerson[] = [new SalesPerson("navani", "nayak", "navani@123k.com", 20000), new SalesPerson("sam", "son", "samson@pk.com", 50000), new SalesPerson("saran", "s", "sarans@g.com", 80000), new SalesPerson("subam", "kill", "subam@kill.com", 40000)]
}
