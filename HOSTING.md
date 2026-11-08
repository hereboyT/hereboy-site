# Putting hereboy.co.za live

The website is plain HTML, CSS and video in the `docs/` folder. There is no build step and nothing to install. Any web host will serve it as is.

Your domain's DNS is at GoDaddy, and the domain currently shows GoDaddy's parking page. Choose **one** of the two options below. Option A is free and recommended.

## Option A: GitHub Pages (free)

GitHub Pages on a free account needs a **public** repository. The site contents are public anyway once it is live.

1. Make the repository public: GitHub repo > **Settings** > **General** > **Danger Zone** > **Change visibility**.
2. Go to **Settings** > **Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/docs`, and press **Save**.
3. Under **Custom domain** on the same page, confirm `hereboy.co.za` is filled in. The `docs/CNAME` file sets this.
4. In GoDaddy, open **My Products** > **hereboy.co.za** > **DNS**. Delete the existing `A` records named `@` and any `CNAME` named `www`, including anything marked "Parked" or "WebsiteBuilder". Then add:

   | Type  | Name | Value                 |
   |-------|------|-----------------------|
   | A     | @    | 185.199.108.153       |
   | A     | @    | 185.199.109.153       |
   | A     | @    | 185.199.110.153       |
   | A     | @    | 185.199.111.153       |
   | CNAME | www  | hereboyt.github.io    |

   **Do not touch the `MX` or email-related `TXT` records.** Those control email.

   If GoDaddy has **Domain Forwarding** switched on for this domain, turn it off first, or it will override these records.
5. Wait for DNS to update. This usually takes under an hour and can take up to 48 hours.
6. Back in **Settings** > **Pages**, tick **Enforce HTTPS** once GitHub allows it. The certificate can take a little while to issue.

To update the site later, edit the files in `docs/` and push to `main`.

## Option B: GoDaddy web hosting

Use this only if you already pay for a GoDaddy hosting plan, or the repository needs to stay private.

1. In GoDaddy, open your hosting plan > **cPanel** > **File Manager** > `public_html`.
2. Upload `hereboy-site-upload.zip` and use **Extract**. `index.html` must end up directly inside `public_html`.
3. Delete the `CNAME` file from `public_html`. It is only used by GitHub Pages.
4. Turn on the free SSL certificate for the domain so that `https://hereboy.co.za` works.

## Before you apply to Apple

Apple's enrollment page says the organisation's website must be public and functional, on a domain associated with the organisation. It does not accept social media pages, minimal-content sites or registrar parking pages.

Also needed for an organisation account:

- **A legal entity.** Apple does not accept trading names. The registered name is shown as the seller on the App Store, so it must be a registered company (for example, through CIPC).
- **A D-U-N-S number** registered to that legal entity. It is free, but it can take up to 30 days, so request it early. Google Play also requires one for organisation accounts.
- **A work email on this domain.** `tman@hereboy.co.za` and `dman@hereboy.co.za` must be real mailboxes that can receive mail. Apple will use the address to contact you, and the website links to both.

Check after going live:

- [ ] `https://hereboy.co.za` loads with a padlock
- [ ] `https://www.hereboy.co.za` also works
- [ ] A test email to each address arrives

Sources: [Apple: Become a member](https://developer.apple.com/programs/enroll/), [Apple: D-U-N-S Number](https://developer.apple.com/support/D-U-N-S/), [Google Play: developer account](https://support.google.com/googleplay/android-developer/answer/13634885).
