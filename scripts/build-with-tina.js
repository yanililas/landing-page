#!/usr/bin/env node

/**
 * Conditional TinaCMS Build Script
 * 
 * This script checks if TinaCMS credentials are available before attempting to build.
 * If credentials are missing, it skips the TinaCMS build but still builds articles and sitemap.
 */

const { execSync } = require('child_process');

const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const token = process.env.TINA_TOKEN;

console.log('🔍 Checking TinaCMS configuration...\n');

const hasCredentials = clientId && token && clientId.trim() !== '' && token.trim() !== '';

if (hasCredentials) {
  console.log('✅ TinaCMS credentials found - building admin interface...\n');
  try {
    execSync('npx tinacms build --skip-cloud-checks', { stdio: 'inherit' });
    console.log('\n✅ TinaCMS admin interface built successfully\n');
  } catch (error) {
    console.error('\n⚠️  TinaCMS build failed, continuing with article build...\n');
  }
} else {
  console.log('⚠️  TinaCMS credentials not found - skipping admin interface build');
  console.log('   To enable the admin interface, add these environment variables:');
  console.log('   - NEXT_PUBLIC_TINA_CLIENT_ID');
  console.log('   - TINA_TOKEN');
  console.log('   Get them from: https://app.tina.io\n');
}

console.log('📝 Building articles...');
execSync('node scripts/build-articles.js', { stdio: 'inherit' });

console.log('\n🗺️  Generating sitemap...');
execSync('node scripts/generate-sitemap.js', { stdio: 'inherit' });

console.log('\n✅ Build complete!\n');

