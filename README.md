# longyuan-chaosacademy-activity


           
# api

login 
  POST /login
---
  Body:
---
name | type |  required  | default | remark
-|-|-|-|-
username | string | true | null|
password | string | true | null|
verify_code | string | true | null|

register 
  POST /register
---
  Body:
---
name | type |  required  | default | remark
-|-|-
username | string | true | null|
password | string | true | null|
confirm_password | string | true | null|
verify_code | string | true | null|

change_password 
  POST /change_password
---
  Body:
---
name | type |  required  | default | remark
-|-|-
username | string | true | null|
password | string | true | null|
confirm_password | string | true | null|
verify_code | string | true | null|




