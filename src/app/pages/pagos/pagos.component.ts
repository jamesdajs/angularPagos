import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MethodsService } from 'src/app/services/methods.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {
text
text2
  constructor(
    private route:ActivatedRoute,
    private metodo:MethodsService
  ) { 
    this.text=this.route.snapshot.params.txt
    this.text2=this.route.snapshot.params.success
  }

  ngOnInit() {
    this.metodo.recuperadatos()
    .subscribe(res=>{
      console.log(res );
      
    })
    //alert('hola ' + this.text)
  }
  
}
