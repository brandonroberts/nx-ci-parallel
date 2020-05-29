module.exports = {
  name: 'my-lib2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/my-lib2',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
