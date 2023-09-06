import { QueryKey } from '@tanstack/react-query';

export const createUseShowKey = (login: string): QueryKey => ['useCharacter', login];
