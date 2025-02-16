import full from '../../../fixtures/requests/full.json';
import { runCustomFixtures } from '../../../fixtures/runCustomFixtures';
import { Request } from '../../../httpsnippet';

runCustomFixtures({
  targetId: 'dart',
  clientId: 'http',
  tests: [
    {
      it: 'should support false boilerplate option',
      input: full as Request,
      options: {
        showBoilerplate: false,
      },
      expected: 'boilerplate-option.dart',
    },
    {
      it: 'should support printBody option',
      input: full as Request,
      options: {
        printBody: false,
      },
      expected: 'print-body-option.dart',
    },
    {
      it: 'should support timeout option',
      input: full as Request,
      options: {
        timeout: 30,
      },
      expected: 'timeout-option.dart',
    },
    {
      it: 'should generate full request',
      input: full as Request,
      options: {},
      expected: 'full.dart',
    },
  ],
}); 