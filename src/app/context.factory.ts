import { ContextService } from './context.service';

export function contextFactory(contextService: ContextService) {
  return () => contextService.createContext();
}
