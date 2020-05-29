import { async, TestBed } from '@angular/core/testing';
import { MyLib4Module } from './my-lib4.module';

describe('MyLib4Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyLib4Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyLib4Module).toBeDefined();
  });
});
