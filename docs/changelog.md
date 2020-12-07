---
id: changelog
title: Changelog
---

Recommended Versions of Software


**Web**: `v0.2.7`

**Release Note 0.2.7**

Improvement:

1. Create Contact Help Information
2. New Conversation Footer UI
3. Message Type Video and Location
4. Update Last Seen In Room Information

New Feature:

1. Send Image From Webcam
2. Emoji Attachment
3. Office Hour Settings
4. Tag Settings

Bug Fix:

1. Scroll To Bottom When Open a Room Firstly

**To Reproduce / To Test**

Improvement:

1. **Create Contact Help Information**: Go to 'Outbound Hub' menu → Click 'Create New List' button → Select 'Upload Custom Contacts' → Will be seen on the right side
2. **New Conversation Footer UI**: Go to 'Inbox' menu → Select one room from Room Lists → Conversation Footer will be updated
3. **Message Type Video and Location**: Go to 'Inbox' menu → Select one room from Room Lists → Message type video and location will be seen on the Conversation
4. **Update Last Seen In Room Information**: Go too one of room in roompanel → In conversation information, now last seen will be always at the time when last customer chat

Feature Implementation:

1. **Send Image From Webcam**: Go to 'Inbox' menu → Select one room from Room Lists → Click 'Attachment' icon → Click on 'Capture' (camera icon) → Make sure you allow 'camera' on notification permission browser → Take a nice pose → Click on 'Take Picture' → If you want to remove the result, click 'Remove' → If you want to attach it, click 'Attach to Image' → Add caption for image (optional) → Click 'send' icon → Captured snapshot will be sent and displayed on Conversation
2. **Emoji Attachment**: Go to 'Inbox' menu → Select one room from Room Lists → Click on Emoji button (smile icon) → Select any emojis displayed there → It will be attached to message input
3. **Office Hour Settings**: Go to 'settings' (with admin or supervisor role) → Now choose tabs on office hours → You will see a list of schedule from Monday to Monday with time operation in right side → You can enable or disable the schedule of day, and also change the timezone.
4. **Tag Settings**: Go to 'settings' (with admin or supervisor role) → Now choose tabs on tag → You will see a list of tags, you can add new tag, delete, or edit it → This tag will be loaded in inbox or room

Bug Fixing:

1. **Scroll To Bottom When Open a Room Firstly**: Fixing when open a room and there is a video or image message → It will cause the scroll is not on the bottom → This bug fixing try to fix that

**Expected behavior**

Improvement:

1. **Create Contact Help Information**: When create a list contact, user can be helped by Contact Help Information that located on the right side
2. **New Conversation Footer UI**: User will have a new friendly and rich conversation footer
3. **Message Type Video and Location**: User can now retrieve any message type video and location and will be displayed on the conversation panel
4. **Update Last Seen In Room Information**: User now can see the last chat from customer time in the conversation room → last seen

Feature Implementation:

1. **Send Image From Webcam**: User can now attach and send an image that produced from a webcam snapshot from their computer's integrated camera easily
2. **Emoji Attachment**: User can now attach emojis on chat panel to their messages
3. **Office Hour Settings**: Now, user can change the office hours of their organization, and also can change the timezone
4. **Tag Settings**: Now, user can add new tag (admin and supervisor) with this feature for their organization

Bug Fixing:

1. **Scroll To Bottom When Open a Room Firstly**: Now, user can always at the bottom of conversation if they open a room at firstly

**Screenshots**

Improvement:

* Create Contact Help Information

![upload list](https://raw.githubusercontent.com/qontak-dev/support/main/static/img/1.%20upload%20contact%20list.png)

* New Conversation Footer UI

![fab](https://raw.githubusercontent.com/qontak-dev/support/main/static/img/2.%20new%20conversation%20ui.png)

* Message Type Video and Location

![video](https://raw.githubusercontent.com/qontak-dev/support/main/static/img/3.%20video%20message.png)

New Feature:

* Send Image From Webcam

* Emoji Attachment
