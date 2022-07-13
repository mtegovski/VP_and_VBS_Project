import { Component, OnInit } from '@angular/core';
import {DiseaseService} from "../services/disease.service";

@Component({
  selector: 'app-form-input-page',
  templateUrl: './form-input-page.component.html',
  styleUrls: ['./form-input-page.component.scss']
})
export class FormInputPageComponent implements OnInit {

  patientDiseasePrediction: string = '';

  constructor(private diseaseService: DiseaseService) { }

  ngOnInit(): void {
    this.diseaseService.getDisease().subscribe(disease => {
      this.patientDiseasePrediction = disease;
    });
  }

}
