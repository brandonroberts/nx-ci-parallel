import { async, TestBed } from '@angular/core/testing';
import { MyLib7Module } from './my-lib7.module';

describe('MyLib7Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyLib7Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyLib7Module).toBeDefined();
  });
});
