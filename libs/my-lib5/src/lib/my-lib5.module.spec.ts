import { async, TestBed } from '@angular/core/testing';
import { MyLib5Module } from './my-lib5.module';

describe('MyLib5Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyLib5Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyLib5Module).toBeDefined();
  });
});
