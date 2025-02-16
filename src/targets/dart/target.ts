import { Target } from '../targets';
import { http } from './http/client';

export const dart: Target = {
  info: {
    key: 'dart',
    title: 'Dart',
    extname: '.dart',
    default: 'http',
  },
  clientsById: {
    http,
  },
}; 