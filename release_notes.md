# Aspen LiDA Release Notes

## 25.03.00

### Account Updates
- Filter Checkouts by source within LiDA itself rather than making additional calls to Discovery APIs for improved performance and reliability. (DIS-209) (*MDN*)
- Filter Holds by source within LiDA itself rather than making additional calls to Discovery APIs for improved performance and reliability. (DIS-390) (*MDN*)
- Automatically refresh the account summary in the account drawer every 5 minutes rather than every 15 minutes to match the frequency in Aspen Discovery. (DIS-391) (*MDN*)

### Display Updates
- Add an optional logo for branding to display above the title within LiDA and display on all pages. (DIS-199) (*MDN*) 

### Grouped Work Updates
- Add an optional More Info button for each edition when viewing editions using similar logic for displaying the More Info button for grouped works. (DIS-207) (*MDN*) 

### Hold Updates
- Automatically refresh holds 45 seconds after a hold is placed to account for the delay when placing holds to account for delay in holds showing on the patron's account in Sierra. (DIS-208) (*MDN*)
- Show a message designed for API usage rather than the message designed for Discovery after placing a hold. (DIS-208) (*MDN*) 
- Show "This title is already on hold for you. Are you sure you want to place a duplicate?" message when attempting to place a hold on a title that a patron already has a hold on to match Discovery. (DIS-202) (*MDN*)

### Search Updates
- Added a permanent search box at the top of the Search Results screen to allow patrons to make a new search without going back to the home screen. (DIS-205) (*KK*)

### Sierra Updates
- When placing holds within Sierra indicate that there is a possible delay of up to a minute before a hold appears on the patron's account. (DIS-208) (*MDN*)
- When placing holds within Sierra, do not show an action to go to holds to de-emphasize the delay that it takes for holds to appear on the patron's account. (DIS-208) (*MDN*)

### Other Updates
- Update build scripts in LiDA to use the Android App Icon when updating configuration. (DIS-200) (*MDN*)
- Remove unused AppHeader, FacetStackNavigator, and SearchStackNavigator files. (DIS-398) (*MDN*)
- Remove calls to update build tracker which took time and bandwidth without a significant benefit to patrons or support companies. (DIS-315) (*MDN*)

## 25.02.00

### Account Updates
- When a library has multiple sublocations that are valid as pickup areas, allow the user to change the pickup area when changing the pickup location. (DIS-195) (*MDN*)
- On the Library Card screen, fixed a bug where 'Manage Alternate Library Card' button was displayed when the library did not have the feature enabled. (DIS-201) (*KK*)

### Grouped Work Updates
- Add 'More Info' button at the bottom of the Grouped Work screen to open up the grouped work in Aspen Discovery to provide the user with additional details. (DIS-207) (*KK*)

### Holds Updates
- When a library has multiple sublocations that are valid as pickup areas, allow the user to select a pickup area when placing a hold. (DIS-195) (*MDN*)
- When displaying a list of items to place a hold on, include item location and status to match the display within Aspen. (DIS-202) (*MDN*)
- When displaying holds for a patron, include the call number for the hold if available. (DIS-202) (*MDN*)
- When freezing holds, wait for all freeze operations to complete to show accurate results. (DIS-203) (*MDN*)
- If the title for a hold cannot be loaded, display "Title Not Available" to match Discovery. (DIS-203) (*MDN*)
- When freezing a hold (either single, selected, or all), do not show the calendar to select a thaw date if the ILS does not support reactivation dates. (DIS-204) (*MDN*)

### Search Updates
- Respect sort order for facets (Alphabetic or By Number of Results) when showing facet values within Aspen LiDA. (DIS-206) (*MDN*)

### Other Updates
- Display a popup message to patrons if app settings cannot be loaded when loading LiDA. (DIS-268) (*MDN*)
- When copying .env files during the build process, check for local .env files (prefixed by the slug). (DIS-270) (*MDN*)
- Pass app slug to Aspen Discovery as a header. (DIS-270) (*MDN*)

## 25.01.00

### Account Updates
- Show Volume in holds when applicable. (DIS-34) (*MDN*)
- Show Out of Hold Group Message in holds when applicable. (DIS-34) (*MDN*)

### Local ILL
- Fixes for placing local ILL requests. (DIS-34) (*MDN*)
- Allow placing local ILL requests for individual volumes of a record. (DIS-34) (*MDN*)
- Improve the error message if a hold fails and needs to be placed with Local ILL. (DIS-34) (*MDN*) 

### Other Updates
- Move Aspen LiDA to its own repository at https://github.com/Aspen-Discovery/aspen-lida. (*MDN*)
- Add debugging code to aid in diagnosing startup problems. (*MDN*)

