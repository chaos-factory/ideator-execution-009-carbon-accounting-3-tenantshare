# TenantShare

**Allocate building energy and emissions to tenants. Import from Utility Binder, generate GHG Protocol-compliant statements, export PDFs and CSV. Client-side, privacy-first, no signup required.**

[![Deploy to GitHub Pages](https://github.com/chaos-factory/ideator-execution-009-carbon-accounting-3-tenantshare/actions/workflows/pages.yml/badge.svg)](https://github.com/chaos-factory/ideator-execution-009-carbon-accounting-3-tenantshare/actions/workflows/pages.yml)

## Live Site

🔗 **[https://chaos-factory.github.io/ideator-execution-009-carbon-accounting-3-tenantshare](https://chaos-factory.github.io/ideator-execution-009-carbon-accounting-3-tenantshare)**

## About

TenantShare is a client-side web application that helps property managers, landlords, and sustainability teams allocate building energy consumption and emissions to individual tenants. It replaces manual spreadsheets and opaque CAM reconciliations with transparent, auditable tenant energy statements.

**Key Features:**
- **Area-based allocation**: Automatically calculate tenant shares based on square footage
- **GHG Protocol compliant**: Uses eGRID2023 and EPA Hub 2025 emission factors
- **Import from Utility Binder**: One-click data import with pre-calculated factors
- **Multiple export formats**: Individual PDFs, batch ZIP, CSV, and JSON
- **Client-side privacy**: All data stays in your browser, no uploads or servers
- **No signup required**: Free to use, no authentication needed

## Live Site & PR Previews

The landing page is automatically deployed to GitHub Pages on every push to the `main` branch. Pull requests also trigger builds to validate the site can be deployed successfully.

**Production URL**: https://chaos-factory.github.io/ideator-execution-009-carbon-accounting-3-tenantshare

Preview deployments for pull requests are created automatically by the GitHub Actions workflow.

## Development

### Project Structure

```
/site
  ├── index.html        # Landing page
  ├── styles.css        # Responsive styles
  ├── app.js           # Micro-interactions and analytics stub
  └── /assets
      ├── og-image.png  # Social sharing image
      ├── og-image.svg  # SVG version
      ├── sample.pdf    # Sample tenant statement
      └── /icons        # SVG icons (electricity, gas, validate, export, privacy)
```

### Local Development

To preview the site locally, use any static file server. For example:

```bash
# Using Python
cd site
python3 -m http.server 8000

# Using Node.js
npx http-server site -p 8000

# Using PHP
cd site
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### Making Changes

1. Edit files in the `/site` directory
2. Test locally using a static file server
3. Commit and push to your branch
4. Open a pull request
5. Verify the site builds successfully in the PR checks

## Deploy

### Automatic Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch via the GitHub Actions workflow at `.github/workflows/pages.yml`.

**How it works:**
1. Push to `main` triggers the workflow
2. The workflow uploads the `/site` directory as a Pages artifact
3. GitHub Pages deploys the artifact to the live URL
4. The site is available at: https://chaos-factory.github.io/ideator-execution-009-carbon-accounting-3-tenantshare

### Pull Request Previews

Pull requests trigger the build job to validate that the site can be deployed successfully. The deploy step only runs on the `main` branch.

### Manual Deployment

No manual deployment is needed. Simply merge your PR to `main` and the site will be automatically deployed.

## Technology Stack

- **HTML5**: Semantic markup with ARIA labels for accessibility
- **CSS3**: Responsive design with CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks, just clean ES6+ code
- **Static hosting**: GitHub Pages (no build step required)

## Performance & Accessibility

The site is optimized for:
- **Performance**: Minimal assets, optimized images, no external dependencies
- **Accessibility**: WCAG 2.1 compliant, keyboard navigable, screen reader friendly
- **SEO**: Semantic HTML, meta tags, Open Graph, and Twitter Card support
- **Mobile**: Responsive design with mobile-first approach

Target Lighthouse scores:
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 90
- SEO: ≥ 90

## License

Open source project. See repository for details.

## Support

- **Report issues**: [GitHub Issues](https://github.com/chaos-factory/ideator-execution-009-carbon-accounting-3-tenantshare/issues)
- **Discussions**: [GitHub Discussions](https://github.com/chaos-factory/ideator-execution-009-carbon-accounting-3-tenantshare/discussions)

---

Built for CAM transparency. Factorized via Utility Binder (GHG Protocol, eGRID2023, EPA Hub 2025).