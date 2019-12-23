    
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
-|-|-|-|-
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
-|-|-|-|-
username | string | true | null|
password | string | true | null|
confirm_password | string | true | null|
verify_code | string | true | null|


feedback_type_list 
  POST /feedback_type_list
---
  Body:
---
name | type |  required  | default | remark
-|-|-|-|-
feedback_type | string | true | null|
feedback_title | string | true | null|
feedback_content | string | true | null|

submit_feedback 
  POST /submit_feedback
---
  Body:
---
name | type |  required  | default | remark
-|-|-|-|-
feedback_type | string | true | null|
feedback_title | string | true | null|
feedback_content | string | true | null|

return
---
name | type | 
-|-
error_code | number 
msg | string 

