import { test, expect } from '@playwright/test';

test.describe('shell navigation', () => {
    test('homepage loads with brand and content', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/Awesome Bharat/i);
        await expect(page.getByRole('link', { name: /Awesome\s*Bharat/i }).first()).toBeVisible();
        // Body content (cards / hero) — not sidebar (collapsed on mobile)
        await expect(page.locator('body')).toContainText(/Mindful|Neend|Discover|Apps/i);
    });

    test('apps listing and detail pages render', async ({ page }) => {
        await page.goto('/apps');
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

        const appLink = page.locator('a[href*="/apps/"]').first();
        await expect(appLink).toBeVisible();
        await appLink.click();
        await expect(page).toHaveURL(/\/apps\/.+/);
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    });

    test('domains listing is reachable', async ({ page }) => {
        await page.goto('/domains');
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    });
});

test.describe('mobile shell', () => {
    test.use({ viewport: { width: 390, height: 844 } });

    test('homepage is usable on narrow viewport', async ({ page }) => {
        await page.goto('/', { waitUntil: 'networkidle' });
        await expect(page.getByRole('link', { name: /Awesome\s*Bharat/i }).first()).toBeVisible();

        // Sidebar is off-canvas; open via trigger
        const trigger = page.locator('[data-sidebar="trigger"]').first();
        await expect(trigger).toBeVisible({ timeout: 5_000 });
        await trigger.click();

        // Wait for hydration and trigger handling
        await page.waitForTimeout(2_000);

        // Check for the sheet or nav links appearing in the mobile sidebar
        await expect(
            page.getByRole('link', { name: /^(Apps|People|Companies)$/i }).first()
        ).toBeVisible({ timeout: 15_000 });
    });
});
