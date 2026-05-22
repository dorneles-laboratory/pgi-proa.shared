// Exporta todos os schemas de validação para serem usados em outros módulos
export * from './modules/user/user.schemas';
export * from './modules/auth/auth.schemas';
export * from './common/pagination.js';

// Exporta a instância do registry e o Zod configurado
export * from './lib/registry';

// Exporta os enums globais do sistema
export * from './enums/index.js';
