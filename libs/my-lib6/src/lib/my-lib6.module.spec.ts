import { async, TestBed } from '@angular/core/testing';
import { MyLib6Module } from './my-lib6.module';

describe('MyLib6Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyLib6Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyLib6Module).toBeDefined();
  });
});
