
import {Component} from "@angular/core";
import {CompanyService} from "../../services/company.service";
import {ActivatedRoute} from "@angular/router";
import {Company} from "../../entities/company";
import {Location} from "../../entities/location";
import {LocationService} from "../../services/location.service";
    @Component({
        templateUrl: './company-edit.component.html',
        styleUrls: ['./company-edit.component.css'],
        providers:[  ]
    })


export class CompanyEditComponent{
        id: string;
        showDetails: string;

        constructor(
            private companyService: CompanyService, private locationService: LocationService,
            route: ActivatedRoute){

            route.params.subscribe(
                p => {
                    this.id = p['id'];
                    this.showDetails = p['showDetails'];
                    this.load(this.id);
                }
            )

            this.searchLocations();
        }

        public get getLocationsArray(): Array<Location> {
            return this.locationService.locationsArray;
        }

        searchLocations(): void {
            this.locationService.findAll();
        }


        company: Company;
        message: string;

        load(id: string): void {
            console.log("LoadFuntion");

            this.companyService
                .findById(id)
                .subscribe(
                    company => {
                        this.company = company;
                        this.message = "";

                    },
                    (err) => {
                        this.message = "Fehler beim Spreichern: " + err.text();
                    }
                )
            console.log(this.company);
        }

        save(): void{
        this
            .companyService
            .save(this.company)
            .subscribe(
                company => {
                    this.company = company;
                    this.message = "Daten wurden gespeichert";
                },
                (err) => {
                    this.message = "Fehler beim Speichern: " + err.text();
                }
            )
        }
}
