import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnquiryService } from 'src/app/services/apiService.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class EnquiryDetailsComponent implements OnInit {

  enquiry: any;

  constructor(
    private route: ActivatedRoute,
    private enquiryService: EnquiryService
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.params['id'];
    await this.loadEnquiry(id);
  }

  async loadEnquiry(id: number) {
    let url = `https://fsboafrica.com/api/enquiries/get-single/${{ id }}`;
    await this.enquiryService.getEnquiryById(id).subscribe(
      (enquiry) => {
        this.enquiry = enquiry;
        console.log('...loading data...', enquiry);

      },
      (error) => {
        console.log('Error fetching enquiry details:', error);
      }
    );
  }
}