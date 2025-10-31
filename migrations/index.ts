import * as migration_20251030_124444 from './20251030_124444';

export const migrations = [
  {
    up: migration_20251030_124444.up,
    down: migration_20251030_124444.down,
    name: '20251030_124444'
  },
];
