import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EnquiryService {

    private apiUrl = 'https://fsboafrica.com/api/enquiries/all';
    private apiUrlById = 'https://fsboafrica.com/api/enquiries/get-single';
    private apiUrlDelete = 'https://fsboafrica.com/api/enquiries/delete';

    constructor(private http: HttpClient) { }

    getAllEnquiries(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    getEnquiryById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrlById}/${id}`)
            .pipe(
                map(response => response) // Assuming 'data' contains the enquiry object
            );
    }

    deleteEnquiry(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrlDelete}/${id}`);
    }
}
