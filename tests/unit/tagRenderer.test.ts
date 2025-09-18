import { normalizeTag } from '../../src/ui/renderers/tagRenderer';

describe('normalizeTag', () => {
    it('adds # prefix when missing and preserves slash in hierarchical tags', () => {
        expect(normalizeTag('github/logging')).toBe('#github/logging');
    });

    it('preserves existing # prefix and slash', () => {
        expect(normalizeTag('#github/logging')).toBe('#github/logging');
    });

    it('removes invalid characters but keeps slash', () => {
        expect(normalizeTag('  gh$ub!@/log*ing  ')).toBe('#ghub/loging');
    });

    it('returns null for empty or invalid results', () => {
        expect(normalizeTag('')).toBeNull();
        expect(normalizeTag('   ')).toBeNull();
        expect(normalizeTag('#')).toBeNull();
    });
});
