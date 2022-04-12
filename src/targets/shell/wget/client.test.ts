import full from '../../../fixtures/requests/full.json';
import short from '../../../fixtures/requests/short.json';
import { runCustomFixtures } from '../../../fixtures/runCustomFixtures';
import { Request } from '../../../httpsnippet';

runCustomFixtures({
  targetId: 'shell',
  clientId: 'wget',
  tests: [
    {
      it: 'should use short options',
      fixtureFile: 'short-options.sh',
      options: { short: true, indent: false },
      request: full as Request,
    },
    {
      it: 'should ask for -v output',
      fixtureFile: 'v-output.sh',
      options: { short: true, indent: false, verbose: true },
      request: short as Request,
    },
    {
      it: 'should ask for --verbose output',
      fixtureFile: 'verbose-output.sh',
      options: { short: false, indent: false, verbose: true },
      request: short as Request,
    },
    {
      it: 'should use custom indentation',
      fixtureFile: 'custom-indentation.sh',
      options: { indent: '@' },
      request: full as Request,
    },
  ],
});
