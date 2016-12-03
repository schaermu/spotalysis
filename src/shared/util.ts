import { Action } from '@ngrx/store';

let labelCache: { [label: string]: boolean } = {};
export function label<T>(label: T | ''): T {
  if (labelCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unqiue"`);
  }

  labelCache[<string>label] = true;

  return <T>label;
}

class ActionCreator<T> implements Action {
  constructor(
    public type: string = 'NOT_SET',
    public payload?: T
  ) {}
}

export class ActionCreatorFactory {
  static create?<T>(type: string, defaultPayloadValue?: any) {
    return (payload?: T) => new ActionCreator<T>(type, payload || defaultPayloadValue);
  }
}
