# star-crossed
The dating app written in and by the stars

## Database info:
### Users 
  | Row Name | Data Type | Summary |
  | --- | --- | --- |
  | id | increments | Primary Key |
  | auth0_id | string | Key from auth client |
  | name | string | Display name |
  | age | integer | |
  | gender | string | |
  | preference | string | Stringified array containing gender preferences |
  | bio | string | Profile bio |
  | birthday | string | Used to determine star sign |
  | image | string | File Path to user image |
  | star_sign_id | integer | Joins to table star_signs |
  | matches | string | Stringified array of matches. This is used to build queries to show your convos |
  | compatibility | string | Stringified array of compatibility preferences |
  
  ---
