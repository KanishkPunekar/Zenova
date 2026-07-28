# Connecting the enquiry form

The Contact page embeds a Google Form. Until you connect one, the page shows your
phone number and email instead — nothing looks broken, so you can deploy the site
before the form exists.

Total time: about three minutes.

---

## 1. Create the form

**Option A — let a script build it (recommended).** This creates all eight
questions with the 14 products already listed as dropdown options, so nothing is
mistyped.

1. Go to <https://script.google.com> and click **New project**.
2. Delete whatever is in the editor and paste the script at the bottom of this file.
3. Click **Run**. Approve the permission prompt the first time (it is your own
   script creating a form in your own Drive).
4. Open **Execution log** — it prints the **form id**, the **edit link** and the
   **live link**. Keep the form id.

**Option B — build it by hand.** Create a blank form at
<https://forms.google.com> and add these questions:

| # | Question | Type | Required |
|---|---|---|---|
| 1 | Full name | Short answer | Yes |
| 2 | Phone | Short answer | Yes |
| 3 | Email | Short answer | Yes |
| 4 | Company | Short answer | No |
| 5 | Project city | Short answer | No |
| 6 | Product of interest | Dropdown (the 14 products) | No |
| 7 | Approximate quantity | Short answer | No |
| 8 | Your requirement | Paragraph | Yes |

---

## 2. Make sure outsiders can actually see it

**If the form was created on a Google Workspace account, do this or visitors hit a
sign-in wall.** Open the form → **Settings** (gear) → **Responses** and turn
**Restrict to users in \<your organisation\>** *off*. Personal Gmail accounts are
public by default and need no change.

Test it by opening the live link in a private/incognito window. If it loads without
asking you to sign in, you are good.

---

## 3. Put the form id in the site

The live link looks like this — the long string between `/e/` and `/viewform` is the
form id:

```
https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/viewform
                                  └────────────── this part ──────────────┘
```

Open `frontend/src/data/company.js`, find `googleForm`, and paste it in:

```js
export const googleForm = {
  formId: "1FAIpQLSdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  productEntryId: "",
  embedHeight: 1180,
};
```

Save. The dev server hot-reloads and the form appears on the Contact page.

If the form scrolls inside its own frame, raise `embedHeight` until it fits.

---

## 4. Optional: pre-select the product

Each product card has an **Enquire about this** button. With one more value, that
button opens the form with the product already chosen.

1. Open your form → **⋮** menu (top right) → **Get pre-filled link**.
2. Pick any product in the *Product of interest* dropdown → **Get link** → **Copy link**.
3. The copied link contains `entry.123456789=Some+Product`. Copy the `entry.123456789` part.
4. Put it in `company.js`:

```js
productEntryId: "entry.123456789",
```

Leave it empty and the buttons still work — they just don't pre-select anything.

---

## 5. Get notified of new enquiries

In the form, open the **Responses** tab:

- **⋮ → Get email notifications for new responses** — emails you on every enquiry.
- **Link to Sheets** — collects everything in a spreadsheet you can filter and share.

Do both. The spreadsheet becomes your enquiry log; the email makes sure nobody
misses one.

---

## The script

Paste this into <https://script.google.com> and click **Run**.

```js
function createZenovaEnquiryForm() {
  const form = FormApp.create('Zenova KSK — Enquiry Form');

  form.setDescription(
    'Tell us what you are building and where it is. Our team will come back with ' +
    'product recommendations, pricing and a delivery schedule — usually within ' +
    'one working day.'
  );
  form.setConfirmationMessage(
    'Thank you. Your enquiry has reached Zenova KSK and our team will contact you ' +
    'shortly. For anything urgent, call +91 95613 06251.'
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setShowLinkToRespondAgain(false);

  form.addTextItem().setTitle('Full name').setRequired(true);
  form.addTextItem().setTitle('Phone').setRequired(true);

  form.addTextItem()
    .setTitle('Email')
    .setRequired(true)
    .setValidation(
      FormApp.createTextValidation()
        .requireTextIsEmail()
        .setHelpText('Please enter a valid email address.')
        .build()
    );

  form.addTextItem().setTitle('Company');
  form.addTextItem().setTitle('Project city').setHelpText('Where the material is needed.');

  form.addListItem()
    .setTitle('Product of interest')
    .setChoiceValues([
      'Tile Adhesive — Grey Type 1',
      'Tile Adhesive — Grey Type 2',
      'Tile Adhesive — Grey Type 3',
      'Tile Adhesive — Grey Type 4',
      'Tile Adhesive — White Type 1',
      'Tile Adhesive — White Type 2',
      'Tile Adhesive — White Type 3',
      'Tile Adhesive — White Type 4',
      'Block Jointing Mortar',
      'Ready Mix Plaster',
      'Basic Wall Putty',
      'Micro Concrete',
      'Grouts',
      'Liquid Construction Chemicals',
      'Not sure / need advice',
    ]);

  form.addTextItem()
    .setTitle('Approximate quantity')
    .setHelpText('For example: 40 MT per month.');

  form.addParagraphTextItem()
    .setTitle('Your requirement')
    .setHelpText('Project details, site location and timeline.')
    .setRequired(true);

  // The published URL is https://docs.google.com/forms/d/e/<FORM ID>/viewform
  const publishedUrl = form.getPublishedUrl();
  const formId = publishedUrl.split('/e/')[1].split('/')[0];

  Logger.log('===========================================');
  Logger.log('FORM ID (paste into company.js): ' + formId);
  Logger.log('Live link : ' + publishedUrl);
  Logger.log('Edit link : ' + form.getEditUrl());
  Logger.log('===========================================');
}
```

The product list matches `frontend/src/data/products.js`. If you add a product
there, add the same option to the form so the pre-select keeps working.
