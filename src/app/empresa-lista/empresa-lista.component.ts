import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-empresa-lista',
  templateUrl: './empresa-lista.component.html',
  styleUrls: ['./empresa-lista.component.css']
})
export class EmpresaListaComponent {

  products:any=[]
  ngOnInit() {
    this.products = [
      {
        "createdAt": "2023-05-17T07:50:15.683Z",
        "name": "Wiegand LLC - DIOGO",
        "description": "Minus voluptas corporis animi accusantium nemo aspernatur adipisci eaque temporibus.\nAmet omnis accusantium iusto ab eveniet omnis id.",
        "repositoryGit": "repositoryGit 62",
        "urlDoc": "http://insistent-hanger.org",
        "clients": [17245, 36673, "E(\u003C#@RlHMN",
          "\\O7iX%!PTT",
          3018, "&#FcsO^-(h",
          43287, 24917, ",[;{Q'F98P",
          "W;vf[VX\u003Emu"
        ],
        "projects": [98795, "$8oEb#0tzS",
          7004, "5gyD4M$]Dd",
          "?NBGfL0IRs",
          "B=Rn%)Xy1\u003C",
          4835, "d+9Y5S%9s%",
          94690, "!Q%4?B,;7Z"
        ],
        "id": "62"
      },
    ]
  }
}

