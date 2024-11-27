// packages/shared/src/utils/search.ts
import { searchKeywords } from '../constants/search';

export function normalizeSearchQuery(query: string): string {
    return query.toLowerCase().trim();
}

export function matchesKeywords(text: string, keywords: string[]): boolean {
    const normalized = normalizeSearchQuery(text);
    return keywords.some(keyword => normalized.includes(keyword.toLowerCase()));
}