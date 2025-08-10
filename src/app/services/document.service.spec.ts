import { TestBed } from '@angular/core/testing';
import { DocumentService } from './document.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DocumentService', () => {
  let service: DocumentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [DocumentService] });
    service = TestBed.inject(DocumentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch documents', () => {
    const mock = [{ id:1, title:'t', content:'c' }];
    service.findAll().subscribe(res => expect(res).toEqual(mock));
    const req = httpMock.expectOne('/documents');
    expect(req.request.method).toBe('GET');
    req.flush(mock);
    httpMock.verify();
  });
});
