# REDUX 
## Basic redux structure folder

In `redux` folder is contained of 
- `action/` for contained action creators.
- `reducer/` for contained sub-reducer `reducers.js` will import sub-reducers from here.
- `configureStore.js` is wher you modify state or middleware before store going to changes.
- `reducers.js` this is combined reducers here, this is important one when you create new reducer you **MUST** update in this file also.
- `*what-ever.js` is just another mockup or util file.

## Guide: how to add new action and reducer 

- `step 1:` create action creator in  **action/** 
- `step 2:` create sub-reducer in **reducer/** and export your new sub-reducer in **reducer/index.js**
- `step 3:` add your new reducer in **reducers.js**  
