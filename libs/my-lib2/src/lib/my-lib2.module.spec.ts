import { async, TestBed } from '@angular/core/testing';
import { MyLib2Module } from './my-lib2.module';

describe('MyLib2Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyLib2Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyLib2Module).toBeDefined();
  });
});
