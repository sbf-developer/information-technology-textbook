# One-time GitHub Pages setup

After the first push to this repo, enable Pages once in GitHub:

1. Open **Settings → Pages** on [information-technology-textbook](https://github.com/sbf-developer/information-technology-textbook/settings/pages).
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose **Branch:** `main`, folder **`/ (root)`**, then **Save**.

GitHub builds the site from `main` on every push. No GitHub Actions workflow is required.

Live URL: https://sbf-developer.github.io/information-technology-textbook/

If you previously enabled **GitHub Actions** as the source and saw a failed deploy, switch the source to **Deploy from a branch** as above, or delete the old workflow run from the Actions tab.
