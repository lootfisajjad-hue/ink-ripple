import { test, expect, type Page } from '@playwright/test';

/**
 * The core acceptance journey: a Persian speaker onboards, takes the placement
 * test, lands on a personalised dashboard, opens the citizenship module, and
 * practises an interview question. Also checks RTL and that no console errors
 * occur.
 */

async function answerPlacement(page: Page) {
  for (let i = 0; i < 12; i++) {
    const finish = page.getByRole('button', { name: 'ساخت برنامهٔ من' });
    if (await finish.count()) return;
    const option = page.locator('.onb-step .stack .btn-ghost').first();
    if (await option.count()) {
      await option.click();
    } else {
      await page.locator('.btn-ghost').first().click();
    }
    await page.waitForTimeout(150);
  }
}

test('onboarding → placement → dashboard → citizenship', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', (e) => errors.push(String(e)));

  await page.goto('/');

  // Interface is RTL Persian by default.
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.locator('html')).toHaveAttribute('lang', 'fa');

  // Welcome → continue
  await page.getByRole('button', { name: 'ادامه' }).first().click();
  // Name
  await page.locator('input').first().fill('سارا');
  await page.getByRole('button', { name: 'ادامه' }).first().click();
  // Goal: citizenship
  await page.getByRole('button', { name: 'شهروندی برزیل' }).click();
  await page.getByRole('button', { name: 'ادامه' }).first().click();
  // Time
  await page.getByRole('button', { name: 'شروع تعیین سطح' }).click();

  // Placement
  await answerPlacement(page);
  await page.getByRole('button', { name: 'ساخت برنامهٔ من' }).click();

  // Dashboard personalised with the name
  await expect(page.getByText('سارا')).toBeVisible();

  // Citizenship module
  await page.goto('/#/citizenship');
  await expect(
    page.getByRole('heading', { name: 'شهروندی برزیل' }),
  ).toBeVisible();

  // Interview practice shows a Portuguese question
  await page.goto('/#/citizenship/interview');
  await expect(page.locator('.pt').first()).toBeVisible();

  // Settings: theme + language switching (profile now exists).
  await page.goto('/#/settings');
  await page.getByRole('button', { name: 'تاریک' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.getByRole('button', { name: 'English' }).click();
  await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');

  expect(errors, `console errors: ${errors.join('\n')}`).toHaveLength(0);
});
