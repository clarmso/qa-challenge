# Bugs

## Boards are not sorted on the left drawer.

Priority: Low

### Steps

1. Log in using valid credentials.
1. Click "+" next to "Boards".
1. Enter "Hello World" as the name. Click "Save".
1. Click "+" next to "Boards" again.
1. Enter "Ice Cream" as the name. Click "Save".

### Expected

I expected the boards to be sorted alphabetically.

### Actual

The boards' names are sorted by most recent on top. The board lists "Ice Cream" before "Hello World".

### Workaround

I can manually reorder the names.

## Cannot upload new avatar

Priority: High

### Steps

1. Log in using valid credentials.
1. Click the circle with my initials ("CS") on the lower left corner.
1. From the pop-up dialog, click "Account Settings".
1. Ensure you are on the "My Account" tab. Click "Choose File" from "Avatar".
1. Select a file from your computer.

### Expected

The circle with my initials ("CS") on the lower left corner is replaced by the avatar.

### Actual

The REST API endpoint `/accounts/update` returns 505. The "Loading..." button remains disabled. No error messages has been shown on the UI.

### Workaround

N/A

## Email notifications setting may not be saved

Priority: Low

### Steps

1. Log in using valid credentials.
1. Click the circle with my initials ("CS") from the lower left corner.
1. Click "Account Settings".
1. Go to "Notifications" tab.
1. Toggle the checkbox for email notifications _once_. The checkbox is unchecked.
1. Click "Home" from the left drawer.
1. Click the circle with my initials ("CS") from the lower left corner again and open "Account Settings".
1. Go to "Notifications" tab and note the checkbox for email notifications.

### Expected

The checkbox remains unchecked.

### Actual

The checkbox is checked.

### Workaround

I have not discovered a consistent workaround on how to get this setting saved. I put this bug as low priority because it shouldn't affect the functionality of the application.

Note that I've tried to write a test on this bug but the checkbox is not checkable by Cypress. The error message is the following. Using the "force" option does not solve the issue. The failing test is in `account-settings.spec.ts`.

```
Timed out retrying after 15050ms: cy.check() failed because this element:

<input type="checkbox" id="discussion-notifications" name="discussion-notifications">

is being covered by another element:

<div aria-hidden="true" class="sc-bdnylx ccVqSj">...</div>
```
