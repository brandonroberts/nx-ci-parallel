import { async, TestBed } from '@angular/core/testing';
import { MyLib3Module } from './my-lib3.module';

describe('MyLib3Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyLib3Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyLib3Module).toBeDefined();
  });
});
