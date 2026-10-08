# My Little Day

A cheerful, mobile-first daily routine PWA built with Next.js, TypeScript and Dexie/IndexedDB.

## Included in this version

- Recurring tasks with Sunday–Saturday day selection
- Optional task times and automatic overdue status
- Add/edit recurring tasks
- Soft deactivation instead of destructive deletion
- Reactivate deactivated tasks from Settings
- Explicit **Move to tomorrow** for incomplete tasks
- Date-specific completion history
- Schedule overrides for one-day rescheduling without changing the recurring rule
- Completed work remains part of today's achievement even if its recurring schedule is changed or the task is deactivated afterward
- Today's Completed / Planned / Remaining counts and progress percentage
- Overdue tasks separated from upcoming tasks
- Settings for name, motivational messages, notifications permission, and evening mode times
- Automatic warm evening theme
- Friday/Saturday can remain flexible
- Local-first storage; no account or backend required

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## PWA

The manifest is included. For the best iPhone experience, deploy to HTTPS and add the site to the Home Screen from Safari.

## Important task behavior

A recurring task defines future schedule membership. Completion is always stored against a specific date. Editing a recurring schedule never rewrites historical completions.

Moving an incomplete task to tomorrow adds a one-day schedule override for tomorrow and removes it from today's occurrence. It does not alter the recurring weekly rule.

Deactivation is soft: the task becomes inactive but its historical completions remain available. Reactivation restores the recurring task without rewriting history.

### Per-task reminders
Each recurring task can have its own reminder setting. Open **Edit task → Reminder** to:
- turn reminders on or off for that task
- choose a reminder time independently from the task's scheduled time
- leave reminders disabled for selected tasks while keeping app-wide notifications enabled

When browser notifications are enabled and permission is granted, the app checks due reminders while the app/PWA is open. True background push reminders while the app is completely closed require a push backend/service-worker setup and are not included in this local-only MVP.
