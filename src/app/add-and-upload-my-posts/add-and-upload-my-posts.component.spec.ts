import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAndUploadMyPostsComponent } from './add-and-upload-my-posts.component';

describe('AddAndUploadMyPostsComponent', () => {
  let component: AddAndUploadMyPostsComponent;
  let fixture: ComponentFixture<AddAndUploadMyPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAndUploadMyPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAndUploadMyPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
