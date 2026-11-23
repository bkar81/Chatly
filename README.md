# Chatly

A messenger demo app in one file (`index.html`, with all the HTML, CSS and JS inside). It's built for screen-recording keyboard demos on Android: the message box is a real text field, so your own keyboard opens and types into it.

## Install on your phone
1. In this repo, go to **Settings → Pages**, set Source to `main` / root, and save.
2. Open `https://bkar81.github.io/Chatly/` in Chrome on Android.
3. Tap **⋮ → Add to Home screen → Install**. It then opens full screen, with no address bar.

## Edit mode / Demo mode
Settings → **Edit mode** switches between the two modes.
- **Edit mode** (an orange "EDIT MODE" tag is shown): long-press almost anything to edit it right there, including messages, chat rows, the chat header name or photo, date chips, the encryption notice, status cards, channels, call rows, group members and your own profile. A **Sending as** chip above the message box lets you type messages as any person.
- In Edit mode, long-press the app title → **Rename app**, **Open Studio** or **Theme colours**.
- Long-press a message to edit its text, sender (and the sender's name), time, day, ticks and more. Long-press a chat title to edit the contact or group, including its scripted replies.
- **Demo mode**: no editing at all, and the app behaves like a normal messenger. Switch to it before recording.

## Theme
Settings → **Chats** opens the theme editor. Every colour (backgrounds, text, bubbles, ticks, buttons, chips, header, pattern…) can be set with a colour picker or a hex code, separately for light and dark mode. It also has presets (Blue is the default, plus Teal, Purple, Rose and Graphite), reset, and export/import.

## Hidden controls (nobody sees them in the recording)
| Action | What it does |
|---|---|
| Long-press the **Chatly** title on the home screen (in Edit mode) | Opens **Chatly Studio**, the full editor |
| Long-press **Send** | Sends the typed text as the *other person* (in a group, you pick who) |
| Swipe a message right | Reply |
| Long-press a message | React, star, delete, copy, forward, edit (from ⋮) |
| Hold the **mic** | Records a voice note (slide left to cancel) |

## What Studio controls
- Contacts and groups: name, photo, phone, about, header status (online, typing…, last seen day and time, custom text), unread count, pinned, muted, archived, favourite, status update.
- Group members: name, phone, name colour, photo.
- Messages: sender, type (text, photo, voice, deleted, system line), text, day (Today, Yesterday, N days ago), time, ticks (pending, sent, delivered, read), reactions, reply-to, starred, edited, forwarded, reordering.
- **Scripted replies:** after you send a message, the next reply shows "typing…" and then arrives.
- Tick timing (when messages turn delivered or read), 12- or 24-hour clock, light, dark or system theme.
- Export or import a JSON backup, or reset to the sample chats.

Days are stored relative to today ("Today", "Yesterday"…), so the demo chats always look current on the day you record.
Data stays only in your phone's browser storage.
