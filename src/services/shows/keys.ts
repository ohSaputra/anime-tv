import { QueryKey } from '@tanstack/react-query';

export const createUseShowKey = (login: string): QueryKey => ['useShow', login];
