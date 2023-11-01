import fs from 'fs';
import path from 'path';
import { test } from '@playwright/test';
import { parse } from 'csv-parse/sync';

const records = parse(fs.readFileSync(path.join(__dirname, 'user.csv')), {
  columns: true,
  skip_empty_lines: true
});

for (const record of records) {
  test(`Test case: ${record.test_case}`, async ({ }) => {
    console.log(record.user_id, record.user_name, record.expected_result);
  });
}