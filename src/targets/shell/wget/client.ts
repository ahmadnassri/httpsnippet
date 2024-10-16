/**
 * @description
 * HTTP code snippet generator for the Shell using Wget.
 *
 * @author
 * @AhmadNassri
 *
 * for any questions or issues regarding the generated code snippet, please open an issue mentioning the author.
 */

import { CodeBuilder } from '../../../helpers/code-builder';
import { escape, quote } from '../../../helpers/shell';
import { Client } from '../../targets';

export interface WgetOptions {
  short?: boolean;
  verbose?: boolean;
}

export const wget: Client<WgetOptions> = {
  info: {
    key: 'wget',
    title: 'Wget',
    link: 'https://www.gnu.org/software/wget/',
    description: 'a free software package for retrieving files using HTTP, HTTPS',
  },
  convert: ({ method, postData, allHeaders, fullUrl }, options) => {
    const opts = {
      indent: '  ',
      short: false,
      verbose: false,
      ...options,
    };

    const { push, join } = new CodeBuilder({
      indent: opts.indent,
      // @ts-expect-error SEEMS LEGIT
      join: opts.indent !== false ? ` \\\n${opts.indent}` : ' ',
    });

    if (opts.verbose) {
      push(`wget ${opts.short ? '-v' : '--verbose'}`);
    } else {
      push(`wget ${opts.short ? '-q' : '--quiet'}`);
    }

    push(`--method ${quote(method)}`);

    Object.keys(allHeaders).forEach(key => {
      const header = `${key}: ${allHeaders[key]}`;
      push(`--header ${quote(header)}`);
    });

    if (postData.text) {
      push(`--body-data ${escape(quote(postData.text))}`);
    }

    push((opts.short ? '-O' : '--output-document') + ' -');
    push(quote(fullUrl));

    return join();
  },
};
