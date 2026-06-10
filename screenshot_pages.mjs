import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Ensure docs/screenshots directory exists
const screenshotsDir = path.join(__dirname, 'docs', 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function captureScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Set a standard desktop viewport
  await page.setViewportSize({ width: 1440, height: 900 });

  // URLs to try (primary and fallback)
  const urls = [
    'https://alphecci.vercel.app/',
    'https://aethera-tech-studio.vercel.app/'
  ];

  let success = false;
  for (const url of urls) {
    try {
      console.log(`Attempting to load: ${url}`);
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      success = true;
      console.log(`Successfully loaded: ${url}`);
      break;
    } catch (err) {
      console.warn(`Failed to load ${url}: ${err.message}`);
    }
  }

  if (!success) {
    console.error('Could not connect to any live deployment URL. Please make sure the server is live or run locally.');
    await browser.close();
    process.exit(1);
  }

  // Helper to wait for the page transition loader to disappear
  async function waitForPageLoad() {
    // Wait for the loader overlay to disappear if visible, or just wait a safe duration
    await page.waitForTimeout(1500); 
    // Wait for any network requests to settle
    try {
      await page.waitForLoadState('networkidle', { timeout: 3000 });
    } catch (e) {
      // ignore timeout
    }
  }

  // 1. Home
  console.log('Capturing Home Page...');
  await waitForPageLoad();
  await page.screenshot({ path: path.join(screenshotsDir, 'home.png'), fullPage: true });

  // 2. Services
  console.log('Navigating to Services...');
  await page.click('.desktop-nav button:has-text("Services")');
  await waitForPageLoad();
  await page.screenshot({ path: path.join(screenshotsDir, 'services.png'), fullPage: true });

  // 3. Portfolio
  console.log('Navigating to Portfolio...');
  await page.click('.desktop-nav button:has-text("Portfolio")');
  await waitForPageLoad();
  await page.screenshot({ path: path.join(screenshotsDir, 'portfolio.png'), fullPage: true });

  // 4. About
  console.log('Navigating to About...');
  await page.click('.desktop-nav button:has-text("About Us")');
  await waitForPageLoad();
  await page.screenshot({ path: path.join(screenshotsDir, 'about.png'), fullPage: true });

  // 5. Contact
  console.log('Navigating to Contact...');
  await page.click('.desktop-nav button:has-text("Contact Us")');
  await waitForPageLoad();
  await page.screenshot({ path: path.join(screenshotsDir, 'contact.png'), fullPage: true });

  // 6. Privacy
  console.log('Navigating to Privacy...');
  await page.click('button:has-text("Privacy Policy")');
  await waitForPageLoad();
  await page.screenshot({ path: path.join(screenshotsDir, 'privacy.png'), fullPage: true });

  // 7. Terms
  console.log('Navigating to Terms...');
  await page.click('button:has-text("Terms of Service")');
  await waitForPageLoad();
  await page.screenshot({ path: path.join(screenshotsDir, 'terms.png'), fullPage: true });

  console.log('All screenshots captured successfully!');
  await browser.close();
}

captureScreenshots().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
