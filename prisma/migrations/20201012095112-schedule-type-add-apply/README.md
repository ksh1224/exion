# Migration `20201012095112-schedule-type-add-apply`

This migration has been generated by 권수현 at 10/12/2020, 6:51:12 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `Schedule` MODIFY `type` ENUM('apply', 'fail', 'waiting', 'pass', 'attending', 'cancel')
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201012013032-shooting-add-headcount..20201012095112-schedule-type-add-apply
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "mysql"
-  url = "***"
+  url = "***"
 }
 model Profile {
   id                Int                 @default(autoincrement()) @id
@@ -112,8 +112,9 @@
   paymentCompleted
 }
 enum Schedule_Type {
+  apply
   fail
   waiting
   pass
   attending
```


