"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeSearchQuery = normalizeSearchQuery;
exports.matchesKeywords = matchesKeywords;
function normalizeSearchQuery(query) {
    return query.toLowerCase().trim();
}
function matchesKeywords(text, keywords) {
    const normalized = normalizeSearchQuery(text);
    return keywords.some(keyword => normalized.includes(keyword.toLowerCase()));
}
