import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EnquiryService } from 'src/app/services/apiService.service';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.css']
})
export class EnquiriesComponent implements OnInit {

  enquiries: any;

  constructor(private enquiryService: EnquiryService,
    private meta: Meta,
    private router: Router,) { }

  ngOnInit(): void {
    this.loadEnquiries();
  }

  loadEnquiries() {
    this.enquiryService.getAllEnquiries().subscribe(
      (data) => {
        this.enquiries = data;
        this.setMetaTags(); // Set meta tags after fetching enquiry
      },
      (error) => {
        console.log('Error fetching enquiries:', error);
      }
    );
  }

  viewEnquiry(id: number) {
    this.router.navigate(['/enquiries/detail', id]);
  }

  editEnquiry(id: number) {
    // Implement edit functionality (navigate to edit page or modal, etc.)
    console.log('Edit enquiry with ID:', id);
  }

  deleteEnquiry(id: number) {
    // Implement delete functionality
    if (confirm('Are you sure you want to delete this enquiry?')) {
      console.log('..to delete..', id);

      this.enquiryService.deleteEnquiry(id).subscribe(
        () => {
          // Reload enquiries after deletion or handle removal locally
          this.loadEnquiries();
        },
        (error) => {
          console.log('Error deleting enquiry:', error);
        }
      );
    }
  }

  setMetaTags() {
    this.meta.updateTag({ name: 'description', content: this.enquiries.message }); // Example for meta description
    this.meta.updateTag({ property: 'og:title', content: `Enquiry Details: ${this.enquiries.name}` }); // Open Graph title
    // Add more meta tags as needed (og:description, og:image, etc.)
  }
}