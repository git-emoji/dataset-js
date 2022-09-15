import * as assert from 'assert';

import { context } from "../context";
import { emoji } from "../emoji";
import { word } from "../word";
import { assertSorted, emojiIdToFieldName } from "./util";

suite('Context data', () => {
    suite('should be ordered', () => {
        for (const entry of context) {
            ((entry) => {
                test(`entry with keywords: ${entry.keyword.join(',')}`, () => {
                    assertSorted(entry.keyword, `keyword: ${entry.keyword.join(',')}`);
                    const ids = entry.emoji.map(x => x.id);
                    assertSorted(ids, `emoji: ${ids.join(',')}`);
                });
            })(entry);
        }
    });

    suite('should reference defined emojis', () => {
        for (const entry of context) {
            ((entry) => {
                test(`entry with keywords: ${entry.keyword.join(',')}`, () => {
                    entry.emoji.forEach(e => assert.ok((emoji as any)[emojiIdToFieldName(e.id)], `unknown emoji id: ${e.id}`));
                });
            })(entry);
        }
    });

    suite('should reference defined words', () => {
        for (const entry of context) {
            ((entry) => {
                test(`entry with keywords: ${entry.keyword.join(',')}`, () => {
                    entry.keyword.forEach(kw => assert.ok((word as any)[kw], `unknown word: ${kw}`));
                });
            })(entry);
        }
    });
});
